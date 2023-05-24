from django.db import models
from django.utils import timezone

# Create your models here.

class Songs(models.Model):
    """
    creates the schema for Songs Table
    """
    song = models.FileField(upload_to='music/')
    song_cover = models.FileField(upload_to='images/')
    artist = models.TextField(max_length=200, null=False)
    title = models.TextField(max_length=200, null=False)
    genre = models.TextField(max_length=100, null=False)
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'music'
        verbose_name_plural = 'musics'

