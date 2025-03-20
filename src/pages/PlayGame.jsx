import { Link, useSearchParams } from "react-router-dom"

// const [ searchParams ] = useSearchParams();
// console.log(searchParams.get("text"));

function PlayGame(){

 
 return (
  <>
   <h>Play Game</h>
   <Link to="/start" className="text-green-500 px-4 py-2">Start-Game</Link>
  
  </>
 )

}

export default PlayGame