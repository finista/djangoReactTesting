from django.urls import path
from . import views

urlpatterns = [
    path("create-set/", views.CreateFlashcardSet.as_view()),
    path("get-sets/", views.GetFlashcardSets.as_view())
]