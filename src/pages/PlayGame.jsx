import { Link, useLocation,  } from "react-router-dom"
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
 

function PlayGame(){

  
  const [guessedLetters , setGuessedLetter] = useState([]);

  const { state } = useLocation();

  function handleLetterClick(letter){
    setGuessedLetter([...guessedLetters , letter])
  }


 return (
  <>
   <h>Play Game</h>
   <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters} />
  <div>
  <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} /> 
  </div>
    
   
   <Link to="/start" className="text-green-500 px-4 py-2">Start-Game</Link>
  
  </>
 )

}

export default PlayGame