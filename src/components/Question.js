import React, {useState} from "react";
import "./Question.css";

const Question = ({ question, options , Images , selected }) => {
   const [answer, setAnswer] = useState(options);
    return (
            
           <div className="main">
        {/* //     {Images.map((Image, i) => ( */}
        {/* //         <img src={Image} />
        //       ))} */}
       
        <div className="card"/>
           <div className="question">{question}</div>
          <div className="card_image"><img  src={Images} /></div> 
          <div className="optionsBtn">
        {options.map((text, i) => (
           
         <button
              key={i}
              className="btn"
              onClick={() => {
               setAnswer();
               selected(text);
              }}
              > {text}
         </button>
      
       
        ))}
           </div>
        
        </div>
       
        
    )
}
export default Question;