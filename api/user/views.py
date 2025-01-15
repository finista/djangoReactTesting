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
import json

from .serializers import UserSerializer


class DefaultReactView(View):
    def get(self, request, *args, **kwargs):
        try:
            with open(settings.REACT_CLIENT_PATH, "r") as file:
                return HttpResponse(file.read(), content_type="text/html")
        except FileNotFoundError as e:
            print("Unable to find a react app build in client folder, error: ", e)
            return HttpResponse(
                "<h1>React build files not found</h1><p>Run 'npm run prod' and ensure the files are in the 'client/' directory.</p>",
                status=404,
            )


class GetTranslation(APIView):
    """
    An API located at /user/locales/?lang=<Language>
    Used to retrieve translations for the application.
    """
    permission_classes = [AllowAny]
    translation_folder = settings.LOCALE_FOLDER_PATH

    def get(self, request, *args, **kwargs):
        lang = request.GET.get("lang") or "en"
        translation_path = self.translation_folder / lang / "translation.json"

        if not os.path.exists(translation_path):
            return Response(
                "This language is not supported or the language given is invalid.",
                status=status.HTTP_404_NOT_FOUND,
            )

        with open(translation_path, "r", encoding="utf-8") as file:
            try:
                data = json.load(file)
            except json.JSONDecodeError:
                return Response(
                    "Invalid translation file format.",
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )

        headers = {
            "Cache-Control": "no-store, no-cache, must-revalidate, max-age=0",
            "Pragma": "no-cache",
            "Expires": "0",
        }

        return Response(
            data,
            headers=headers,
            status=status.HTTP_200_OK,
        )


class CreateUserView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
