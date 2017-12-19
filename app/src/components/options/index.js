import React from 'react';
import PropTypes from 'prop-types';
import './options.scss';

const Options = (props) => {
	console.log(props.answersCount[props.answerOption]);
	return (
		<li>
		<input type="radio"
		name="radioGroup"
		checked={props.answersCount[props.answerOption] === 1 }
		value="option"
		/>
		<label>{props.answerOption}</label>
		</li>
		)
}

Options.propTypes = {
	answerOption: PropTypes.string,
	answer: PropTypes.string,
	answersCount: PropTypes.object
};

export default Options;