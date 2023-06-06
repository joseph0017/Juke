# api/urls.py
"""module for urls"""
from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('spotify_token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('redirect', views.spotify_callback, name='spotify_callback')
]