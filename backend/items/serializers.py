from rest_framework import serializers
from .models import (Category, ItemType, Size, Condition, Tag, Item, ItemImage)
from accounts.models import Profile
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

# For POST / PUT
class ItemWriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = [
            'title', 'description', 'points', 'category', 'uploader',
            'type', 'size', 'condition', 'tags',
            'is_verified', 'is_published', 'is_swapped'
        ]

class UploaderSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    full_name = serializers.SerializerMethodField()
    email = serializers.EmailField(source='user.email')

    class Meta:
        model = Profile
        fields = ['id', 'username', 'full_name', 'email']

    def get_full_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}".strip()

class ItemSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    type = ItemTypeSerializer(read_only=True)
    size = SizeSerializer(read_only=True)
    condition = ConditionSerializer(read_only=True)
    tags = TagSerializer(read_only=True, many=True)
    uploader = UploaderSerializer(read_only=True)
    images = ItemImageSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        fields = [
            'id', 'title', 'description', 'points',
            'is_verified', 'is_published', 'is_swapped',
            'created_at', 'updated_at',
            'category', 'type', 'size', 'condition',
            'tags', 'uploader', 'images'
        ]