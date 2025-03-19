import { Link } from "react-router-dom"
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer"
function StartGame(){
  
  return (
    <>
    <h>Start Game</h>
    <TextInputFormContainer />
    <Link to='/play' className="text-blue-300">Play-Game-Link</Link>
    </>
  )


}

export default StartGame