import os
import json
import openai
import requests
from dotenv import load_dotenv
from .models import SpotifyToken
from django.contrib.auth.models import User
from django.utils import timezone
from datetime import timedelta


load_dotenv()

REDIRECT_URI = os.getenv('REDIRECT_URI')
CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')


def check_spotify_token_exists(user):
    try:
        SpotifyToken.objects.get(user=user)
        return True
    except SpotifyToken.DoesNotExist:
        return False
    

def get_user_tokens(username):
    user = User.objects.get(username=username)

    spotify_token_exists = check_spotify_token_exists(user)
    if spotify_token_exists:
        return SpotifyToken.objects.get(user=user)
    else:
        return None
    

def update_create_user_tokens(user, access_token , token_type, expires_in, refresh_token):
    tokens = get_user_tokens(user)
    expires_in = timezone.now() + timedelta(seconds=expires_in)

    if tokens:
        tokens.access_token = access_token
        tokens.refresh_token = refresh_token
        tokens.expires_in = expires_in
        tokens.token_type = token_type
        tokens.save(update_fields=['access_token', 'refresh_token', 'expires_in', 'token_type'])
    else:
        spotify_token = SpotifyToken.objects.create(
            user=user,
            access_token=access_token,
            token_type=token_type,
            refresh_token=refresh_token,
            expires_in=expires_in
        )

        spotify_token.save()
        

    
