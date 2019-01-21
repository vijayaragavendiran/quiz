import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
	return (
		<div><h2>Result</h2>
        <p>You got {} out of {} correct</p>
        </div>
		)
}

Result.propTypes = {
	content: PropTypes.string
};

export default Result;