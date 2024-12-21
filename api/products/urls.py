from django.urls import path
from . import views

urlpatterns = [
    path("get-products/", views.GetProducts.as_view())
]