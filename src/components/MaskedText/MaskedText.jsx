import { getMaskedString } from "./MaskingUtility";

function Maskedtext({ text , guessedLetters}){
   const maskedString = getMaskedString(text , guessedLetters);
   
   return (
    <>
      {maskedString.map((letters , index) => {
        return (
          <span key={index} className="mx-1">{letters}</span>
        )
      } )} 
    </>
   )

}

export default Maskedtext;