import { Link, useLocation,  } from "react-router-dom"
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/HangMan/HangMan";
 

function PlayGame(){

  
  const [guessedLetters , setGuessedLetter] = useState([]);

  const { state } = useLocation();

  const [step , setStep] = useState(0);

  function handleLetterClick(letter){
    if(state.wordSelected.toUpperCase().includes(letter)){
      console.log("correct");
    } else {
      console.log("wrong");
      setStep(step+1);
    }
    setGuessedLetter([...guessedLetters , letter])
  }


 return (
  <>
   <h>Play Game</h>
   <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters} />
  <div>
  <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} /> 
  </div>
  
  <div>
    <HangMan steps={step} />
  </div>
   
   <Link to="/start" className="text-green-500 px-4 py-2">Start-Game</Link>
  
  </>
 )

}

export default PlayGame