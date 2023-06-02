# api/views.py
"""create views for jukeapi"""
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import JsonResponse
from jukeapi.serializers import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
import json
from .prompts import promptfunc
from .utils import querySongs, preparesongs, get_completion

# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    """serializes the class"""
    serializer_class = MyTokenObtainPairSerializer


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

@api_view(['GET'])
def recommendations(request):
    """Get user's recommendations"""
    res = querySongs()
    songs = preparesongs(res)

    prompt = promptfunc(songfeed=songs)
    result = get_completion(prompt=prompt)

    result = json.loads(result)
  
    return JsonResponse(result, safe=False, status=status.HTTP_200_OK)


