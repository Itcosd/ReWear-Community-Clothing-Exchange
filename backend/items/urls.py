from django.urls import path
from .views import CategoryListCreateView, CategoryRetrieveUpdateDestroyView,ItemTypeListCreateView,ItemTypeRetrieveUpdateDestroyView,SizeListCreateView, SizeRetrieveUpdateDestroyView

urlpatterns = [
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyView.as_view(), name='category-detail'),
    path('item-types/', ItemTypeListCreateView.as_view(), name='itemtype-list-create'),
    path('item-types/<int:pk>/', ItemTypeRetrieveUpdateDestroyView.as_view(), name='itemtype-detail'),
    path('sizes/', SizeListCreateView.as_view(), name='size-list-create'),
    path('sizes/<int:pk>/', SizeRetrieveUpdateDestroyView.as_view(), name='size-detail'),
]
