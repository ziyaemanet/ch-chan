import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { saveState, loadState } from './localStorage';

const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
