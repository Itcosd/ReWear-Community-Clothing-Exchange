from rest_framework import serializers
from .models import (SwapRequest, PointRedemption,AdminActionLog, TransactionHistory)
from accounts.serializers import ProfileSerializer
from items.serializers import ItemSerializer

class SwapRequestSerializer(serializers.ModelSerializer):
    requester = ProfileSerializer(read_only=True)
    item = ItemSerializer(read_only=True)

    class Meta:
        model = SwapRequest
        fields = ['id', 'requester', 'item', 'status', 'created_at', 'updated_at']

class PointRedemptionSerializer(serializers.ModelSerializer):
    redeemer = ProfileSerializer(read_only=True)
    item = ItemSerializer(read_only=True)

    class Meta:
        model = PointRedemption
        fields = ['id', 'redeemer', 'item', 'points_used', 'status', 'created_at', 'updated_at']

class AdminActionLogSerializer(serializers.ModelSerializer):
    admin_user = serializers.StringRelatedField()
    item = ItemSerializer(read_only=True)

    class Meta:
        model = AdminActionLog
        fields = ['id', 'admin_user', 'item', 'action', 'timestamp']

class TransactionHistorySerializer(serializers.ModelSerializer):
    user = ProfileSerializer(read_only=True)
    item = ItemSerializer(read_only=True)

    class Meta:
        model = TransactionHistory
        fields = ['id', 'user', 'item', 'transaction_type', 'points_changed', 'timestamp']
