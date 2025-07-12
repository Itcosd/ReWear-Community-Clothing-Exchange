from rest_framework import serializers
from .models import (Category, ItemType, Size, Condition, Tag, Item, ItemImage)
from accounts.serializers import ProfileSerializer

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'min_point']

class ItemTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemType
        fields = ['id', 'name']

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['id', 'name']

class ConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Condition
        fields = ['id', 'name']

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = ['id', 'image']

class ItemSerializer(serializers.ModelSerializer):
    uploader = ProfileSerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    images = ItemImageSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = [
            'id', 'title', 'description', 'category', 'uploader',
            'type', 'size', 'condition', 'tags', 'images',
            'points', 'is_verified', 'is_published', 'is_swapped',
            'created_at', 'updated_at'
        ]

