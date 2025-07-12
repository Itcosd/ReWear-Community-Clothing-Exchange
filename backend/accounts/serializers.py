from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile,UserReview
# from .models import Student

# class StudentSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Student
#         fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['id', 'user', 'points_balance']

class UserReviewSerializer(serializers.ModelSerializer):
    reviewer = serializers.StringRelatedField(read_only=True)
    reviewed_user = serializers.StringRelatedField(read_only=True)

    class Meta:
        model = UserReview
        fields = ['id', 'reviewer', 'reviewed_user', 'rating', 'comment', 'created_at']