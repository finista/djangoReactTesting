import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

import api from "@imports/core/api"

import { LoadingState } from "@imports/components/shared/types/generic"
import { FlashcardSet as FlashcardSetType} from "@imports/components/shared/types/flashcards"
import FlashcardSet from "@imports/components/ui/flashcard_set"

import "./style.scss"

const FlashcardSetList = () => {
    const { t } = useTranslation()

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
                {t('flashcard.loading_state_prefix')}: {loadState}
            </span>
        )
    }

    return (
        <div>
            <h3>{t('flashcard.sets_header')}</h3>
            <span>{t('flashcard.currently_loaded', { count: flashcardSets.length })}</span>
            <div className="flashcard-set-list">
                {flashcardSets.map((flashcard_set, index) => (
                    <FlashcardSet key={index} name={flashcard_set.name} description={flashcard_set.description} />
                ))}
            </div>
        </div>
    )
}

export default FlashcardSetList