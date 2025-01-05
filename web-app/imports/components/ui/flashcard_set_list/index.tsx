import { useState, useEffect } from "react"

import api from "@imports/core/api"

import { LoadingState } from "@imports/components/shared/types/generic"
import { FlashcardSet as FlashcardSetType} from "@imports/components/shared/types/flashcards"
import FlashcardSet from "@imports/components/ui/flashcard_set"

import "./style.scss"

const FlashcardSetList = () => {
    const [loadState, setLoadState] = useState<LoadingState>("idle")
    const [flashcardSets, setFlashcardSets] = useState<FlashcardSetType[]>([])

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
            <span>Currently loaded: {flashcardSets.length} sets.</span>
            <div className="flashcard-set-list">
                {flashcardSets.map((flashcard_set, index) => (
                    <FlashcardSet key={index} name={flashcard_set.name} description={flashcard_set.description} />
                ))}
            </div>
        </div>
    )
}

export default FlashcardSetList