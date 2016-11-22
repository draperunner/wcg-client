import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import BarGraphContainer from './containers/BarGraphContainer';
import ChallengeContainer from './containers/ChallengeContainer';

export default
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ChallengeContainer} />
      <Route path="/total" component={BarGraphContainer} />
    </Route>
  </Router>;
