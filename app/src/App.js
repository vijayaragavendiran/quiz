import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/quiz';

class App extends Component {
  constructor(props) {
    super(props);

     this.state = {
     counter: 0,
     questionId: 1,
     question: 'Question 1',
     answerOptions: ['nintendo', 'microsoft', 'sony'],
     answer: 'microsoft',
     answersCount: {
       nintendo: 0,
       microsoft: 1,
       sony: 0
     },
     result: ''
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Quiz</h2>
        </div>
        <Quiz content={this.state.question}
        answerOptions= {this.state.answerOptions}
        answer={this.state.answer} 
        answersCount={this.state.answersCount}/>
      </div>
    );
  }
}

export default App;
