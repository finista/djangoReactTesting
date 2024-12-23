from django.shortcuts import render
from django.contrib.auth.models import User
from django.views import View
from django.http.response import HttpResponse
from django.conf import settings

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny

import rest_framework.status as status
import os

from .serializers import UserSerializer


class DefaultReactView(View):
    def get(self, request, *args, **kwargs):
        try:
            with open(settings.REACT_CLIENT_PATH, "r") as file:
                return HttpResponse(file.read(), content_type="text/html")
        except FileNotFoundError as e:
            print("Unable to find a react app build in client folder, error: ", e)
            return HttpResponse(
                "<h1>React build files not found</h1><p>Run 'npm run build' and ensure the files are in the 'client/' directory.</p>",
                status=404,
            )


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
