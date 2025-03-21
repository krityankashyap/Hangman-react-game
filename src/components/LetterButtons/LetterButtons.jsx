const ALPHABETS = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({ text , guessedLetters , onLetterClick}){
  const originalLetters = new Set(text.toUpperCase().split(''));
  const guessedLetterSet = new Set(guessedLetters);
  

  const buttonStyle = function buttonStyling(letter){
    if(guessedLetterSet.has(letter)){
      return `${originalLetters.has(letter) ? 'bg-green-300' : 'bg-red-300' }`
    } else {
      return 'bg-blue-300';
    }
  }


  const buttons = ALPHABETS.map(letters => {
    return (
      <button 
      key={`button-${letters}`}
      onClick={onLetterClick}
      disabled={guessedLetterSet.has(letters)}
      className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letters)}`}>  
        {letters}
      </button>
    )
  })
    return (
      <>
      {buttons}
      </>
    )

}

export default LetterButtons;