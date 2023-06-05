from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class SpotifyToken(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, default=None, null=True)
    access_token = models.CharField(max_length=500)
    token_type = models.CharField(max_length=500)
    refresh_token = models.CharField(max_length=500)
    expires_in = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Spotify Token for {self.user.username}"