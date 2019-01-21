import { combineReducers } from 'redux';
import submit from './submit'

export default combineReducers({
  questions: submit,
  // More reducers if there are
  // can go here
});