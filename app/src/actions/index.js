export const submitAction = () => {
	return {
		type: 'SUBMIT_ANS'
	}
}

export const back = () => {
	return {
		type: 'BACK'
	}
}

export const userSelection = ({val}) => {
	return {
		type: 'ONSELECTION',
		val: val
	}
}