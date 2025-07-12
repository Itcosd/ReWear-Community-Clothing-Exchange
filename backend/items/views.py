from rest_framework import generics
from .models import Category,ItemType,Size,Condition,Tag,Item, ItemImage
from .serializers import CategorySerializer,ItemTypeSerializer,SizeSerializer,ConditionSerializer,TagSerializer,ItemSerializer, ItemImageSerializer

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

class ConditionListCreateView(generics.ListCreateAPIView):
    queryset = Condition.objects.all()
    serializer_class = ConditionSerializer

class ConditionRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Condition.objects.all()
    serializer_class = ConditionSerializer

class TagListCreateView(generics.ListCreateAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class TagRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class ItemListCreateView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class ItemImageListCreateView(generics.ListCreateAPIView):
    queryset = ItemImage.objects.all()
    serializer_class = ItemImageSerializer

class ItemImageRetrieveDestroyView(generics.RetrieveDestroyAPIView):
    queryset = ItemImage.objects.all()
    serializer_class = ItemImageSerializer