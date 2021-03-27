import { render } from '@testing-library/react';
import React, {Component} from 'react';
import qBank from './query/index';
import Question from './components/Question';
import Score from './components/Score';
import "./App.css";

class Quiz extends Component {
  constructor(props){
    super(props);
  this.state = {
    value: '',
    question: [],
    score:0,
    responses:0,

  };
  }
  
  shuffle = (array) =>{
    var currentIndex = array.length;
    // var citrus = qBank.slice(1, 2);
// console.log(citrus , 'test')
    var randomArray = []
    while(randomArray.length !== currentIndex) {  
      var randomIndex = Math.floor(Math.random() * currentIndex);
      if(!randomArray.includes(array[randomIndex])){
        randomArray.push(array[randomIndex]);
      }
    }
    return randomArray;
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }


  setStateQuestion = () => {
    this.setState({
      question: this.shuffle(qBank)
    })
  }

  selectedAnswer = (options, correctOption) => {
    if (options === correctOption) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 10
        ? this.state.responses + 1
        : 10
    });
  };

 componentDidMount(){
   this.setStateQuestion();
 }
 playAgain = () => {
  this.setStateQuestion();
  this.setState({
    score: 0, 
    responses: 0,
    question: this.shuffle(qBank)
  });
};
render(){
  return (
    <div className="main">
     
        <h4 class="titleText">
        {/* <marquee  direction="right"> */}
        Animals Quiz
        {/* </marquee> */}
        </h4>
     
      <div className="content">
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        &nbsp;
        {/* <input type="submit" value="Submit" id="myBtn" placeholder="What's ya name?"/> */}
        <h1 class="userName">Hii { this.state.value}!!</h1>
        </form>
   
      {this.state.question.length > 0 && this.state.responses < 10 && this.state.question.map(
        ({question, options , Images , correctAnswer }) => 
        <Question 
        className="queryCard"
        Images={Images}
        question={question}
        options={options}
        selected={options => this. selectedAnswer(options, correctAnswer)}/>
        
        
        
       
      )}
      {
        this.state.responses === 10
          ? (<h4>
            <Score
            score={this.state.score}
            playAgain={this.playAgain}
          /></h4>)
          : null
      }
      </div>
    </div>
    
  );
  
}

}

export default Quiz;






