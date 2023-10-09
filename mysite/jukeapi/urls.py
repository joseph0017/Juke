# api/urls.py
"""module for urls"""
from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.test_endpoint, name='test_endpoint'),
    path('', views.getRoutes),
    path('recommendations', views.recommendations, name='recommender'),
    path('happy', views.happy, name='happy_mood' ),
    path('sad', views.sad, name='sad_mood'),
    path('moody', views.mood, name="moody_mood"),
    path('joyful', views.joyful, name='joyful_mood'),
    path('sleepy', views.sleepy, name='sleepy_mood')
]

