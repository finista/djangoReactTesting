from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    path("register/", views.CreateUserView.as_view()),
    path("token/", TokenObtainPairView.as_view()),
    path("refresh/", TokenRefreshView.as_view())
]