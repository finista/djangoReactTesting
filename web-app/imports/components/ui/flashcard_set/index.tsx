import { FlashcardSetProps } from "./types"
import "./style.scss"

const FlashcardSet = (props: FlashcardSetProps) => {
    const clicked = () => {
        alert("Flashcard set description: " + props.description)
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