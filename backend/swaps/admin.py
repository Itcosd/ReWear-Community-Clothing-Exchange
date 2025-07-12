from django.contrib import admin
from .models import (
    SwapRequest,
    PointRedemption,
    TransactionHistory,
    AdminActionLog
)

admin.site.register(SwapRequest)
admin.site.register(PointRedemption)
admin.site.register(TransactionHistory)
admin.site.register(AdminActionLog)
