from django.contrib import admin
from .models import (
    SwapRequest,
    PointRedemption,
    TransactionHistory,
    AdminActionLog
)

@admin.register(SwapRequest)
class SwapRequestAdmin(admin.ModelAdmin):
    list_display = ['id', 'requester', 'item', 'status', 'created_at']
    list_filter = ['status']
    search_fields = ['requester__user__username', 'item__title']


@admin.register(PointRedemption)
class PointRedemptionAdmin(admin.ModelAdmin):
    list_display = ['id', 'redeemer', 'item', 'points_used', 'status', 'created_at']
    list_filter = ['status']
    search_fields = ['redeemer__user__username', 'item__title']


@admin.register(TransactionHistory)
class TransactionHistoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'item', 'transaction_type', 'points_changed', 'timestamp']
    list_filter = ['transaction_type']
    search_fields = ['user__user__username', 'item__title']


@admin.register(AdminActionLog)
class AdminActionLogAdmin(admin.ModelAdmin):
    list_display = ['id', 'admin_user', 'item', 'action', 'timestamp']
    list_filter = ['action']
    search_fields = ['admin_user__username', 'item__title']
