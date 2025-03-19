import { Link } from "react-router-dom"

function PlayGame(){

 return (
  <>
   <h>Play Game</h>
   <Link to="/start" className="text-green-500">Start-Game</Link>
  
  </>
 )

}

export default PlayGame