import React from 'react';
import "./Question.css";
  
const Score = ({score, playAgain, value,wrong}) => {
  return(
  <div>
    <h3 class="won">{value} You won {score}/10 points</h3>
    <h3 class="mistakes">You have made {wrong}/10 mistakes</h3>
    <button className="Reset" onClick={playAgain} > Play Again </button>
  </div>
)}
export default Score;
