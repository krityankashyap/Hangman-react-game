import { Link, useLocation,  } from "react-router-dom"

// const [ searchParams ] = useSearchParams();
// console.log(searchParams.get("text"));

function PlayGame(){

const { state } = useLocation();
 return (
  <>
   <h>Play Game {state.wordSelected}</h>
   <Link to="/start" className="text-green-500 px-4 py-2">Start-Game</Link>
  
  </>
 )

}

export default PlayGame