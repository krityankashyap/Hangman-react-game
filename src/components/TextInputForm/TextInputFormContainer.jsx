import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){

  function handleFormSubmit(event){
    event.preventDefault();             {/* used to prevent default property of form tag i.e, refresh the page */}
    console.log("Form submitted")
  }

  function handleTextInputChange(event){
     console.log("text input change");
     console.log(event.target.value)
  }

  return (
    <TextInputForm 
     handleFormSubmit={handleFormSubmit}
     handleTextInputChange={handleTextInputChange} 
    />
  )

}

export default TextInputFormContainer