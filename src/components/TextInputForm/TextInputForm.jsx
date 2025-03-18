import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm(){
   
  return (
    <form>
    <div>
      <TextInput 
        label = {"Enter ur words or phrases..."}
        placeholder={"Enter ur words or phrases here...!"}
        />
    </div>

    <div>
     <Button 
       text={"Show/Hide"}
       styleType={"warning"}
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