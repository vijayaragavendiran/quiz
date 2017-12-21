import React from 'react';
import PropTypes from 'prop-types';
import Question from '../question';
import AnswerOptions from '../options';

const Quiz = (props) => {
	function renderAnswerOptions(key) {
    return (
    		<AnswerOptions answerOption={key}
    			key={key}
    			answer={props.answer} 
        		onAnswerSelection={props.onAnswerSelection} />
    	);
    }
	return (
		<div>
		<button value="back" onClick={props.onBack}>back</button>
		<Question content={props.content}/>
        <ul>
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        <button value="submit" onClick={props.onSubmit}>submit</button>
        </div>
		)
}

Quiz.propTypes = {
content: PropTypes.string,
answerOptions: PropTypes.array.isRequired,
answer: PropTypes.string,
onAnswerSelection: PropTypes.func,
onSubmit: PropTypes.func,
onBack: PropTypes.func
}

export default Quiz;