import { combineReducers } from 'redux';
import threads from './threads';
import sorting from './sorting';
import thread from './thread';

export default combineReducers({ sorting, threads, thread });
