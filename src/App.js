import { render } from '@testing-library/react';
import React, {Component} from 'react';
import query from './query';
import Question from './components/Question'
import "./App.css";

class Quiz extends Component {
  state = {
    question: []
  };

  getQuestions = () => {
    query().then(question => {
      this.setState({
        question: question
      });
    });
  }
 componentDidMount(){
   this.getQuestions();
 }

render(){
  return (
    <div className="main">
        <h4 class="titleText">
        Quiz
        </h4>

      <div className="content">
      {this.state.question.length > 0 && this.state.question.map(
        ({question, options , Images}) => 
        <Question 
        className="queryCard"
        Images={Images}
        question={question}
        options={options}
/>
      )}
      </div>
    </div>
  );
}

}
export default Quiz;
