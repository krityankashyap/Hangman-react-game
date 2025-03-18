import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType , handleFormSubmit , handleTextInputChange , handleShowHideClick}){

  return (
    <form onSubmit={handleFormSubmit}>
    <div>
      <TextInput 
        type={inputType}
        label = {"Enter ur words or phrases..."}
        placeholder={"Enter ur words or phrases here...!"}
        onChangeHandler={handleTextInputChange}
        />
    </div>

    <div>
     <Button 
       text={inputType=="text" ? "Hide" : "Show"}
       styleType={"warning"}
       onClickHandler={handleShowHideClick}
     />
    </div>

    <div>
      <Button 
        text={"submit"}
        styleType={"primary"}
        type={"submit"}
       
      />
    </div>
    </form>
  )


}

export default TextInputForm;