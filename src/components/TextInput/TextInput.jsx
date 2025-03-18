function TextInput({ label , type="text" , onChangeHandler , placeholder="Enter ur i/p here..." , value}){

  return (
    <label>
    <span className="text-black-300">{label}</span>


    <input type={type} 
     className="px-4 py-2 text-gray-500 border border-md"
     onChange={onChangeHandler}
     placeholder={placeholder}
     
     >


    </input>
    </label>
  )


}
export default TextInput