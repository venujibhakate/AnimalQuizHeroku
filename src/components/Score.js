import React from 'react';
import "./Question.css";
  
const Score = ({score, playAgain, value}) => (
  <div>
    <div>{value} Your score is {score} </div>
    <button className="Reset" onClick={playAgain} > Play Again </button>
  </div>
)
export default Score;
