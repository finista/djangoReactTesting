from django.urls import path, re_path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    # Api
    path("register/", views.CreateUserView.as_view()),
    path("token/", TokenObtainPairView.as_view()),
    path("refresh/", TokenRefreshView.as_view()),
    path("locales/", views.GetTranslation.as_view())
]