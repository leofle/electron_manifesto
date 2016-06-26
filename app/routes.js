import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ManifestoPage from './containers/ManifestoPage';
import OtherPage from './containers/OtherPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
    <Route path="/manifesto" component={ManifestoPage} />
    <Route path="/other" component={OtherPage} />
  </Route>
);
