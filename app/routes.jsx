import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import BarGraphContainer from './containers/BarGraphContainer';

export default
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={BarGraphContainer} />
    </Route>
  </Router>;
