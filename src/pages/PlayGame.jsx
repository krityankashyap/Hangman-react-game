import { Link, useLocation,  } from "react-router-dom"
import Maskedtext from "../components/MaskedText/MaskedText";

// const [ searchParams ] = useSearchParams();
// console.log(searchParams.get("text"));

function PlayGame(){

const { state } = useLocation();
 return (
  <>
   <h>Play Game</h>
   <Maskedtext text={state.wordSelected} guessedLetters={[]} />
   <Link to="/start" className="text-green-500 px-4 py-2">Start-Game</Link>
  
  </>
 )

}

export default PlayGame