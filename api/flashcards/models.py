from django.db import models
from django.contrib.auth.models import User

class FlashcardSet(models.Model):
    name = models.CharField(max_length=60, default="New Flashcard Set")
    description = models.TextField(max_length=400, default="No description set.", null=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name="flashcard_sets")