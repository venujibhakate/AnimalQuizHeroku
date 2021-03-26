import React from 'react';
import "./Question.css";

const Question = ({ question, options , Images }) => {
    return (
            
           <div>
        {/* //     {Images.map((Image, i) => ( */}
        {/* //         <img src={Image} />
        //       ))} */}
       
        <img src={Images} /> 
           <div className="question">{question}</div>
        {options.map((text, i) => (
          <button
              key={i}
              className="answerBtn"
              > {text}
         </button>
        ))}
        
        </div>
       
        
    )
}
export default Question;