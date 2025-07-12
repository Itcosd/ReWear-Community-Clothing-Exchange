# accounts/signals.py

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Profile


@receiver(post_save, sender=User)
def create_or_update_profile(sender, instance, created, **kwargs):
    if created:
        # If user is created → create a profile
        Profile.objects.create(user=instance)
    # On every save (even updates) → save profile
    instance.profile.save()
