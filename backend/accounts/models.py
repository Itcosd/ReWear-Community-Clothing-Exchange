from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator

# class Student(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField(unique=True)
#     age = models.IntegerField()

#     def __str__(self):
#         return self.name


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points_balance = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.user.username}'s Profile"


class UserReview(models.Model):
    reviewer = models.ForeignKey('Profile', on_delete=models.CASCADE, related_name='given_reviews')
    reviewed_user = models.ForeignKey('Profile', on_delete=models.CASCADE, related_name='received_reviews')
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = ('reviewer', 'reviewed_user')  # Optional: one review per user-pair

    def __str__(self):
        return f"{self.reviewer.user.username} → {self.reviewed_user.user.username} ({self.rating}★)"