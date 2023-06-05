from django.contrib import admin

# Register your models here.
from .models import SpotifyToken
 
@admin.register(SpotifyToken)
class Spotifydata(admin.ModelAdmin):
  list_display = [field.name for field in
SpotifyToken._meta.get_fields()]