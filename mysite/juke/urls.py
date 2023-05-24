"""module for juke urls"""
from django.urls import path
from . import views

urlpatterns = [
    path('', views.api_overview, name='api-overview'),
    path('songs/', views.song_view, name='songs'),
    path('songs-list/', views.song_list_view, name='songs-list')
]
