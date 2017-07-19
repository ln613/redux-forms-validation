import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Form1 from './Form1';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Form1}/>
  </Route>
);
