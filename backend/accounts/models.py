from django.db import models
from django.contrib.auth.models import User

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
