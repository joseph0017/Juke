"""
serializers module for juke api
"""
from .models import Songs
from rest_framework import serializers


class SongSerializer(serializers.ModelSerializer):
    """
    serializes the Song class
    """
    class Meta:
        model = Songs
        fields = '__all__'
