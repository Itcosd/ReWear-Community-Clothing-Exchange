from django.contrib import admin
from .models import (
    Category,
    ItemType,
    Size,
    Condition,
    Tag,
    Item,
    ItemImage,
)

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'min_point']
    search_fields = ['name']


@admin.register(ItemType)
class ItemTypeAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']


@admin.register(Size)
class SizeAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']


@admin.register(Condition)
class ConditionAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']


@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']


class ItemImageInline(admin.TabularInline):
    model = ItemImage
    extra = 1


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'uploader', 'category', 'points', 'is_verified', 'is_published', 'is_swapped']
    list_filter = ['is_verified', 'is_published', 'category']
    search_fields = ['title', 'description']
    inlines = [ItemImageInline]

