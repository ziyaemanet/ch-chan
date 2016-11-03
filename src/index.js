import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './components/Layout';
import Home from './components/Home';
// import ThreadPage from './components/ThreadPage';

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        {/* <Route path="thread" component={ThreadPage} />  */}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
