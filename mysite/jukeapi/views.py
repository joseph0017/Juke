# api/views.py
"""create views for jukeapi"""
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from jukeapi.serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from requests import Request, post
from urllib.parse import urlencode
from .utils import REDIRECT_URI, CLIENT_ID, CLIENT_SECRET, \
update_create_user_tokens
from django.core.cache import cache
# Create your views here.



class MyTokenObtainPairView(TokenObtainPairView):
    """serializes the class"""
    serializer_class = MyTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        
        if response.status_code == 200:
            scopes = 'user-read-playback-state user-modify-playback-state user-read-currently-playing streaming'
            endpoint = 'https://accounts.spotify.com/authorize'
            params= {
                'scope': scopes,
                'response_type': 'code',
                'redirect_uri': REDIRECT_URI,
                'client_id': CLIENT_ID
            }
            url = Request('GET', endpoint, params=params).prepare().url
            # Redirect the user to a specified URL
            # return redirect('https://accounts.spotify.com/api/token')
            response_data = {
                'access_token': response.data['access'],
                'refresh_token': response.data['refresh'],
                'url': url
            }

            cache.set('username', request.data['username'])

            return Response(response_data, status=status.HTTP_200_OK)

        return response


def spotify_callback(request, format=None):

    code = request.GET.get('code')
    error = request.GET.get('error')
    
    data = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': REDIRECT_URI,
        'client_id': CLIENT_ID,
        'client_secret': CLIENT_SECRET
    }
    response = post('https://accounts.spotify.com/api/token', data=data).json()

    access_token = response.get('access_token')
    token_type = response.get('token_type')
    refresh_token = response.get('refresh_token')
    expires_in = response.get('expires_in')

    
    user = cache.get('username')
    user = User.objects.get(username=user)

    update_create_user_tokens(user=user, access_token=access_token,token_type=token_type,\
                              expires_in=expires_in,refresh_token=refresh_token)

    frontend_data = {
        'spotify_access_token': access_token,
        'spotify_refresh_token': refresh_token
    }
    
    redirect_url = 'http://localhost:3000/enter?' + urlencode(frontend_data)
    cache.set('username', '')
    # # redirect it to the proper view
    # # since I didn't define the 
    return redirect(redirect_url)

class RegisterView(generics.CreateAPIView):
    """creates the registration view"""
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def test_endpoint(request):
    """function to test endpoints"""
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/jukeapi/token/',
        '/jukeapi/register/',
        '/jukeapi/token/refresh/'
    ]
    return Response(routes)