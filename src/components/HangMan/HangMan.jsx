import Level1 from "../../assets/Images/images1.svg"
import Level2 from "../../assets/Images/images2.svg"
import Level3 from "../../assets/Images/images3.svg"
import Level4 from "../../assets/Images/images4.svg"
import Level5 from "../../assets/Images/images5.svg"
import Level6 from "../../assets/Images/images6.svg"
import Level7 from "../../assets/Images/images7.svg"
import Level8 from "../../assets/Images/images8.svg"


function HangMan({ steps }){
 const images = [Level1 , Level2 , Level3 , Level4 , Level5 , Level6 , Level7 , Level8];

 return (
  <div className="w-[300px] h-[400px]">
   <img 
     src = { steps >= images.length ? images[images.length -1] : images[steps]}
   />

  </div>
 )


}

export default HangMan 