import './App.css'
import Button from './components/Button/Button'

function App() {

  return (
  <div>
    <Button text="Click" styleType="success" onClickHandler={()=>{console.log("hello..")}}/>
  </div>
  )
}

export default App
