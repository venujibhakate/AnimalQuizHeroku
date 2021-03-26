import { render } from '@testing-library/react';
import React, {Component} from 'react';
import qBank from './query/index';
import Question from './components/Question'
import "./App.css";

class Quiz extends Component {
  state = {
    question: [],
    score:0,
    responses:0
  };

  // 
  setStateQuestion = () => {
    this.setState({
      question:qBank
    })
  }
  selectedAnswer = (options, correctAns) => {
    if (options === correctAns) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5
        ? this.state.responses + 1
        : 5
    });
  };

 componentDidMount(){
   this.setStateQuestion();
 }

render(){
  return (
    <div className="main">
        <h4 class="titleText">
        Quiz
        </h4>

      <div className="content">
      {this.state.question.length > 0 && this.state.question.map(
        ({question, options , Images , correctAnswer}) => 
        <Question 
        className="queryCard"
        Images={Images}
        question={question}
        options={options}
        selected={options => this. selectedAnswer(options, correctAnswer)}/>
       
      )}
      {
        this.state.responses === 5
          ? (<h4>{this.state.score}</h4>)
          : null
      }
      </div>
    
    </div>
    
  );
  
}

}

export default Quiz;
