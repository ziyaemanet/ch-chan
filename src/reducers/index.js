import { combineReducers } from 'redux';
import threads from './threads';
import sorting from './sorting';

export default combineReducers({ sorting, threads });
