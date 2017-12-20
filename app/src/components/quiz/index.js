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
		<Question content={props.content}/>
        <ul>
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        </div>
		)
}

Quiz.propTypes = {
content: PropTypes.string,
answerOptions: PropTypes.array.isRequired,
answer: PropTypes.string,
onAnswerSelection: PropTypes.func
}

export default Quiz;