import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Quiz from './components/quiz';
import * as actions from './actions'

class App extends Component {
    constructor(props) {
        super(props);
        this.handleAnswerSelection = this.handleAnswerSelection.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleAnswerSelection(event) {
        this.props.userSelection({val: event.currentTarget.value})
    }

    handleSubmit(event) {
        this.props.submit(this.props.state);

    }
    handleBack(event) {
        this.props.back(this.props.state.questions);
    }

    render() {
        return ( 
          <div className="App">
            <div className="App-header" >
              <img src={ logo } className="App-logo" alt = "logo" / >
              <h2> Quiz </h2> 
            </div> 
            
            <Quiz 
              questions={ this.props.state.questions } 
              onAnswerSelection ={ this.handleAnswerSelection } 
              onSubmit={ this.handleSubmit } 
              onBack={ this.handleBack } /> 
            </div>
        );
    }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    state: {...state}
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.submit
    submit: state => dispatch(actions.submitAction(state)),
    back: q => dispatch(actions.back(q)),
    userSelection: val => dispatch(actions.userSelection(val))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(App);
