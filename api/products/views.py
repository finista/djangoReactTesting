from rest_framework.views import APIView, Response
from rest_framework import status

from .models import Product
from .serializers import ProductSerializer

from time import sleep

class GetProducts(APIView):
    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        
        sleep(2)
        
        return Response(serializer.data, status=status.HTTP_200_OK)