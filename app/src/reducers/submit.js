export default (state=[], action) => {
	switch(action.type) {
		case 'SUBMIT_ANS':
			return [
				...state,
				Object.assign({}, action.x)	
			];
		break;
		default:
		return state;
	}
}