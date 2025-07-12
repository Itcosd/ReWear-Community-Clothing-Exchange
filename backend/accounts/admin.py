from django.contrib import admin
from .models import Profile, UserReview

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'points_balance']
    search_fields = ['user__username', 'user__email']

@admin.register(UserReview)
class UserReviewAdmin(admin.ModelAdmin):
    list_display = ['id', 'reviewer', 'reviewed_user', 'rating', 'created_at']
    search_fields = ['reviewer__user__username', 'reviewed_user__username']
