import React from 'react';
import PropTypes from 'prop-types';
import './options.scss';

const Options = ({answerOption, answer, onAnswerSelection}) => {
	console.log('@@ {answerOption, answer} ', {answerOption, answer});
	return (
		<ul>
		{
			answerOption.map(o => {
			return <li>
				<input type="radio"
					name="radioGroup"
					value={o.option}
					checked={o.option === answer} 
					onChange={onAnswerSelection}
				/>
			<label htmlFor={o.option}>{o.option}</label>
		</li>
			})
		}
		</ul>)
}

Options.propTypes = {
	answerOption: PropTypes.string,
	answer: PropTypes.string,
	onAnswerSelection: PropTypes.func

};

export default Options;