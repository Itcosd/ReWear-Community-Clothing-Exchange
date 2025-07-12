from rest_framework import generics
from .models import SwapRequest, PointRedemption, AdminActionLog, TransactionHistory
from .serializers import (
    SwapRequestSerializer,
    PointRedemptionSerializer,
    AdminActionLogSerializer,
    TransactionHistorySerializer,
)

# Swap Request
class SwapRequestListCreateView(generics.ListCreateAPIView):
    queryset = SwapRequest.objects.all()
    serializer_class = SwapRequestSerializer

class SwapRequestDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SwapRequest.objects.all()
    serializer_class = SwapRequestSerializer

# Point Redemption
class PointRedemptionListCreateView(generics.ListCreateAPIView):
    queryset = PointRedemption.objects.all()
    serializer_class = PointRedemptionSerializer

class PointRedemptionDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = PointRedemption.objects.all()
    serializer_class = PointRedemptionSerializer

# Admin Action Log
class AdminActionLogListView(generics.ListAPIView):
    queryset = AdminActionLog.objects.all()
    serializer_class = AdminActionLogSerializer

# Transaction History
class TransactionHistoryListView(generics.ListAPIView):
    queryset = TransactionHistory.objects.all()
    serializer_class = TransactionHistorySerializer
