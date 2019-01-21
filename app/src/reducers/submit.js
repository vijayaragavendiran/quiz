import { quizQuestion } from '../api/question';
const initalState = {
	...quizQuestion,
	currentQuestion: 0
};
export default (state=initalState, action) => {
	switch(action.type) {
		case 'SUBMIT_ANS':
		return {
			...state,
			currentQuestion: state.currentQuestion + 1
		};
		case 'ONSELECTION':
		return {
			...state,
			[state.currentQuestion]: {
				...state[state.currentQuestion],
				answer: action.val
			},
		};
		case 'BACK': 
		const currentPage = state.currentQuestion > 0 ? state.currentQuestion -1 : 0;
		return {
			...state,
			currentQuestion: currentPage
		}
		default:
		return state;
	}
}