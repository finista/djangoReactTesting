from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    name = models.CharField(max_length=65, default="Product")
    description = models.TextField(max_length=500, null=True, default="No description set.")
    price = models.IntegerField(default=0)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="products")
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name