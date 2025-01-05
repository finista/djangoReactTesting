from rest_framework.serializers import ModelSerializer
from .models import FlashcardSet

class CreateFlashcardSetSerializer(ModelSerializer):
    class Meta:
        model = FlashcardSet
        fields = ['name']
    
    def create(self, validated_data):
        return FlashcardSet.objects.create(**validated_data)