from django.urls import path
from .views import (
    SwapRequestListCreateView, SwapRequestDetailView,
    PointRedemptionListCreateView, PointRedemptionDetailView,
    AdminActionLogListView, TransactionHistoryListView
)

urlpatterns = [
    # Swap Requests
    path('swap-requests/', SwapRequestListCreateView.as_view(), name='swaprequest-list-create'),
    path('swap-requests/<int:pk>/', SwapRequestDetailView.as_view(), name='swaprequest-detail'),

    # Point Redemptions
    path('point-redemptions/', PointRedemptionListCreateView.as_view(), name='pointredemption-list-create'),
    path('point-redemptions/<int:pk>/', PointRedemptionDetailView.as_view(), name='pointredemption-detail'),

    # Admin Logs
    path('admin-actions/', AdminActionLogListView.as_view(), name='admin-action-log-list'),

    # Transactions
    path('transactions/', TransactionHistoryListView.as_view(), name='transaction-history-list'),
]
