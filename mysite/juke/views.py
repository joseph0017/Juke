"""
creates views for the songs api
"""
from django.shortcuts import render
from .models import Songs
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SongSerializer
from rest_framework.pagination import PageNumberPagination

# Create your views here.
@api_view(['GET'])
def api_overview(request):
    """creates the api views url"""
    api_urls = {
        'song_view': '/song_view',
        'song_list_view': '/song_list_view'
    }
    return Response(api_urls)

@api_view(['GET'])
def song_view(request, *args, **kwargs):
    """creates and gets all the songs in the view"""
    query_songs = Songs.objects.all()
    return get_music_paginated_queryset_response(query_songs, request)

@api_view(['GET'])
def song_list_view(request, *args, **kwargs):
    """retrieves the songs in the views"""
    songs = Songs.objects.all().order_by('-id')
    serializer = SongSerializer(songs, many=True)
    return Response(serializer.data)

def get_music_paginated_queryset_response(qs, request):
    """paginates the objects to serve 20 at a times"""
    paginator = PageNumberPagination()
    paginator.page_size = 20
    paginated_qs = paginator.paginate_queryset(qs, request)
    serializer = SongSerializer(
        paginated_qs, many=True, context={"request": request})
    # Response( serializer.data, status=200)
    return paginator.get_paginated_response(serializer.data)