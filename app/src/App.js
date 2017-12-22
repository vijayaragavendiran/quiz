import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import update from 'react-addons-update';
import Quiz from './components/quiz';
import { quizQuestion } from './api/question'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
        this.setUserSelectedValue = this.setUserSelectedValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    componentWillMount() {
        console.log('@@ componentWillMount');
        this.setState(quizQuestion[0]);
    }

    getNextQuestion() {
        this.setState(quizQuestion[this.state.counter + 1]);
    }
    getPreviousQuestion() {
        console.log('@@ current quizQuestion[0] ', quizQuestion);
        const currentCounter = (this.state.counter - 1);
        console.log('@@ currentCounter', currentCounter);
        this.setState(quizQuestion[currentCounter]);
        console.log('@@ state', this.state);
    }
    setUserSelectedValue(answer) {
        this.setState({
            answer
        });
    }

    handleAnswerSelection(event) {
        this.setUserSelectedValue(event.currentTarget.value);
        console.log('@@ quizQuestion', quizQuestion);
    }

    handleSubmit(event) {
        if (this.state.questionId < quizQuestion.length) {
            this.getNextQuestion();
        }
    }
    handleBack(event) {
        this.getPreviousQuestion();
    }

    render() {
        return ( 
          <div className="App">
            <div className="App-header" >
              <img src={ logo } className="App-logo" alt = "logo" / >
              <h2> Quiz </h2> 
            </div> 
            <Quiz 
              content={ this.state.question } 
              answerOptions={ this.state.answerOptions } 
              answer={ this.state.answer } 
              answersCount={ this.state.answersCount } 
              onAnswerSelection ={ this.handleAnswerSelection } 
              onSubmit={ this.handleSubmit } 
              onBack={ this.handleBack } /> 
            </div>
        );
    }
}

export default App;