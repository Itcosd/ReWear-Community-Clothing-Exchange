from django.urls import path
from .views import CategoryListCreateView, CategoryRetrieveUpdateDestroyView,ItemTypeListCreateView,ItemTypeRetrieveUpdateDestroyView,SizeListCreateView, SizeRetrieveUpdateDestroyView, ConditionListCreateView,ConditionRetrieveUpdateDestroyView,TagListCreateView,TagRetrieveUpdateDestroyView,ItemListCreateView,ItemRetrieveUpdateDestroyView,ItemImageListCreateView,ItemImageRetrieveDestroyView

urlpatterns = [
    path('categories/', CategoryListCreateView.as_view(), name='category-list-create'),
    path('categories/<int:pk>/', CategoryRetrieveUpdateDestroyView.as_view(), name='category-detail'),
    path('item-types/', ItemTypeListCreateView.as_view(), name='itemtype-list-create'),
    path('item-types/<int:pk>/', ItemTypeRetrieveUpdateDestroyView.as_view(), name='itemtype-detail'),
    path('sizes/', SizeListCreateView.as_view(), name='size-list-create'),
    path('sizes/<int:pk>/', SizeRetrieveUpdateDestroyView.as_view(), name='size-detail'),
    path('conditions/', ConditionListCreateView.as_view(), name='condition-list-create'),
    path('conditions/<int:pk>/', ConditionRetrieveUpdateDestroyView.as_view(), name='condition-detail'),
    path('tags/', TagListCreateView.as_view(), name='tag-list-create'),
    path('tags/<int:pk>/', TagRetrieveUpdateDestroyView.as_view(), name='tag-detail'),
    path('items/', ItemListCreateView.as_view(), name='item-list-create'),
    path('items/<int:pk>/', ItemRetrieveUpdateDestroyView.as_view(), name='item-detail'),
    path('item-images/', ItemImageListCreateView.as_view(), name='itemimage-list-create'),
    path('item-images/<int:pk>/', ItemImageRetrieveDestroyView.as_view(), name='itemimage-detail'),
    
]
