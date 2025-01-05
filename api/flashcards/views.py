from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

import rest_framework.status as status

from .models import FlashcardSet
from .serializers import CreateFlashcardSetSerializer


class CreateFlashcardSet(APIView):
    """
    An API located at /flashcards/create-set/
    
    Takes in JSON:
     - "name" : string
     
    Used to create a new flashcard set for user.
    """
    
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        serializer = CreateFlashcardSetSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        flashcard_set = FlashcardSet.objects.create(**serializer.validated_data)
        flashcard_set.creator = request.user

        flashcard_set.save()

        return Response("Successfully made a flashcard set.", status=status.HTTP_200_OK)

class GetFlashcardSets(APIView):
    """
    An API located at /flashcards/get-sets/
    Used to get all flashcard sets made by the request user.
    """
    
    permission_classes = [IsAuthenticated]
    
    def get(self, request, *args, **kwargs):
        flashcard_sets = FlashcardSet.objects.filter(creator=request.user.id)
        return Response(flashcard_sets.all(), status=status.HTTP_200_OK)