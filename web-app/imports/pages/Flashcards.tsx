import Navbar from "@imports/components/shared/navbar"
import FlashcardSet from "@imports/components/ui/flashcard_set"

const Flashcards = () => {
  return (
    <>
      <Navbar />
      <h3>Your flashcard sets</h3>
      <div>
        <FlashcardSet />
      </div>
    </>
  )
}

export default Flashcards