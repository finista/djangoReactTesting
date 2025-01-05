import { useState, useEffect } from "react"

import api from "@imports/core/api"

import { LoadingState } from "@imports/components/shared/types/generic"
import { FlashcardSet } from "@imports/components/shared/types/flashcards"

const FlashcardSetList = () => {
    const [loadState, setLoadState] = useState<LoadingState>("idle")
    const [flashcardSets, setFlashcardSets] = useState<FlashcardSet[]>([])

    useEffect(() => {
        if (loadState !== "idle") return

        api.get("/flashcards/get-sets/")
            .then(respone => {
                try {
                    setFlashcardSets(respone.data)
                    setLoadState("succeeded")
                } catch (error) {
                    console.error("Failed to load flashcard sets, error: " + error || "No error given.")
                    setLoadState("failed")
                }
            })
            .catch(error => {
                setLoadState("failed")
                console.error("Failed to fetch flashcard sets, error: " + error || "No error given.")
            })
    }, [])

    if (loadState !== 'succeeded') {
        return (
            <span>
                State: {loadState}
            </span>
        )
    }

    return (
        <div>
            <h3>Your flashcard sets</h3>
            <div>
                Currently loaded: {flashcardSets.length} sets.
            </div>
        </div>
    )
}

export default FlashcardSetList