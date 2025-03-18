import getButtonStyling from "./getButtonStyling";

function Button({ text , onClickHandler , styleType="primary"}){

  console.log(text)
  return (
    <button 
    onClick={onClickHandler}
    className={`text-white bg-green-300  ${getButtonStyling(styleType)} px-4 py-2`}>
      {text}
    </button>
  )
}



export default Button;