import React from 'react';
import PropTypes from 'prop-types';
import './options.scss';

const Options = (props) => {
	return (
		<li>
		<input type="radio"
			name="radioGroup"
			checked={props.answerOption === props.answer }
			value={props.answerOption}
			onChange={props.onAnswerSelection}
		/>
		<label htmlFor={props.answerOption}>{props.answerOption}</label>
		</li>
		)
}

Options.propTypes = {
	answerOption: PropTypes.string,
	answer: PropTypes.string,
	onAnswerSelection: PropTypes.func

};

export default Options;