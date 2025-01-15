import { FlashcardSetProps } from "./types"
import "./style.scss"

import { useTranslation } from "react-i18next"

const FlashcardSet = (props: FlashcardSetProps) => {
    const { t } = useTranslation()

    const clicked = () => {
        alert(t("flashcard.description_prefix") + props.description)
    }

    return (
        <div className="flashcard-set" onClick={clicked}>
            <div className="flashcards-frames">
                <div className="frm-1"></div>
                <div className="frm-2"></div>
                <div className="frm-3"></div>
            </div>
            <span className="flashcard-set-name">{props.name}</span>
        </div>
    )
}

export default FlashcardSet