import "./style.scss"

const FlashcardSet = () => {
    const clicked = () => {
        alert("Hai :3")
    }

    return (
        <div className="flashcard-set" onClick={clicked}>
            <div className="flashcards-frames">
                <div className="frm-1"></div>
                <div className="frm-2"></div>
                <div className="frm-3"></div>
            </div>
            <span className="flashcard-set-name">Placeholder</span>
        </div>
    )
}

export default FlashcardSet