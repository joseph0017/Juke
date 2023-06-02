"""creating user models"""
from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
class Jukeuser(models.Model):
    """creates juke user profile"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.FileField(upload_to='juke_user_avatar/')
    title = models.TextField(max_length=200, null=False)

    def __str__(self):
        return self.title

@receiver(post_save, sender=User)
def create_jukeuser(sender, instance, created, **kwargs):
    """creates the jukeuser"""
    if created:
        Jukeuser.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_jukeuser(sender, instance, created, **kwargs):
    """saves the jukeuser"""
    instance.jukeuser.save()