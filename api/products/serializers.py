from rest_framework.serializers import *
from django.contrib.auth import get_user_model
from .models import Product

User = get_user_model()

class ProductSerializer(ModelSerializer):
    author_name = CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Product
        fields = ["name", "author_name", "description", "price", "created_at", "author"]