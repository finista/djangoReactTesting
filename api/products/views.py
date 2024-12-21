from rest_framework.views import APIView, Response
from rest_framework import status
from .models import Product

class GetProducts(APIView):
    def get(self, request, *args, **kwargs):
        products = Product.objects.all()
        return Response(products, status=status.HTTP_200_OK)