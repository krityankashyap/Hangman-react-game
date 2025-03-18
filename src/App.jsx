import './App.css'
import Button from './components/Button/Button'
import TextInput from './components/TextInput/TextInput'

function App() {

  return (
  <div>
    <Button text="Click" styleType="success" onClickHandler={()=>{console.log("hello..")}}/>

    <TextInput 
    label = {"Enter some text"}
    placeholder={"Enter ur text here.."}
    
    onChangeHandler={(e)=>console.log(e.target.value)}
    />

  </div>
  )
}

export default App
