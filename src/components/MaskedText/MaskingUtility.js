/**
 * 
 * @param {The word which is given as input and expected to be guessed} originalWord 
 * @param {Letters which are guessed by the user already} guessedLetters 
 */
export function getMaskedString(originalWord , guessedLetters){
  // console.log('guessed letters' , guessedLetters)
  guessedLetters = guessedLetters.map(letter => letter.toUpperCase()); // convert all guessed letters in upper case 
 
  const guessedLetterSet = new Set(guessedLetters);

  const result = originalWord.toUpperCase().split('').map(char => {
    if(guessedLetterSet.has(char)){
      return char;
    } else {
      return '_';
    }
  });
  return result;

}