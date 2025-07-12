from rest_framework import generics
from .models import Category,ItemType,Size
from .serializers import CategorySerializer,ItemTypeSerializer,SizeSerializer

class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class ItemTypeListCreateView(generics.ListCreateAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer


class ItemTypeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ItemType.objects.all()
    serializer_class = ItemTypeSerializer

class SizeListCreateView(generics.ListCreateAPIView):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer

class SizeRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Size.objects.all()
    serializer_class = SizeSerializer
