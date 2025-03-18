import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
   

  let [inputType , setInputType] = useState("password");
  let [value , setValue] = useState("")
  function handleFormSubmit(event){
    event.preventDefault();             {/* used to prevent default property of form tag i.e, refresh the page */}
    console.log("Form submitted" , value)
  }

  function handleTextInputChange(event){
     console.log("text input change");
     console.log(event.target.value);
     setValue(event.target.value);
  }

  function handleShowHideClick(){
    console.log("Show/Hide button clicked")
    if(inputType == "text"){
      setInputType('password')
    } else if(inputType == "password"){
      setInputType('text')
    }
  }

  return (
    <TextInputForm 
    inputType={inputType}
     handleFormSubmit={handleFormSubmit}
     handleTextInputChange={handleTextInputChange}
     handleShowHideClick={handleShowHideClick} 
    />
  )

}

export default TextInputFormContainer