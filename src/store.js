import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { saveState, loadState } from './localStorage';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';

let middlewares = [
  logger(),
  promise()
];

const store = createStore(rootReducer, {}, composeWithDevTools(
  applyMiddleware(...middlewares)
));

// store.subscribe(() => {
//   saveState(store.getState());
// });

export default store;
