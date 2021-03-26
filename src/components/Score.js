import React from 'react';
  
const Score = ({score, playAgain, value}) => (
  <div>
    <div>{value} Your score is {score} </div>
    <button  onClick={playAgain} > Play Again </button>
  </div>
)
  
export default Score;