import React from 'react';
import "./Question.css";

const Question = ({ question, options , Images }) => {
    return (
            
           <div className="main">
        {/* //     {Images.map((Image, i) => ( */}
        {/* //         <img src={Image} />
        //       ))} */}
       
        <div className="card"/>
           <div className="question">{question}</div>
          <div className="card_image"><img src={Images} /></div> 
          <div className="optionsBtn">
        {options.map((text, i) => (
           
         <button
              key={i}
              className="btn"
              > {text}
         </button>
      
       
        ))}
           </div>
        
        </div>
       
        
    )
}
export default Question;