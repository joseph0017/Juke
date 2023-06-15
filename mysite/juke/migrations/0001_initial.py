# Generated by Django 4.1.3 on 2023-05-22 20:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('song', models.FileField(upload_to='music/')),
                ('song_cover', models.FileField(upload_to='images/')),
                ('artist', models.TextField(max_length=200)),
                ('title', models.TextField(max_length=200)),
                ('genre', models.TextField(max_length=100)),
                ('created_at', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated_at', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'verbose_name': 'music',
                'verbose_name_plural': 'musics',
            },
        ),
    ]