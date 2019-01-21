import React from 'react';
import PropTypes from 'prop-types';
import Question from '../question';
import AnswerOptions from '../options';
import Result from '../result';

const Quiz = (props) => {
	function renderAnswerOptions({answerOptions, answer}) {
		console.log('@@ vv ,', answerOptions, answer);
    return (
    		<AnswerOptions answerOption={answerOptions}
    			answer={answer} 
        		onAnswerSelection={props.onAnswerSelection} />
    	);
	}
	const item = props.questions[props.questions.currentQuestion];
	
	return (
		<div>
		{/* if (props.questions.currentQuestion === props.questions.length) { */}
		<div>
		<button value="back" onClick={props.onBack}>back</button>
				<Question content={item.question}/>
				<ul>
					{	renderAnswerOptions(item)} 
				</ul>
        <button value="submit" onClick={props.onSubmit}>submit</button>
        </div>
			{/* } else {
				<div>
				<Result 
			  questions={props.questions } /></div>
			} */}
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