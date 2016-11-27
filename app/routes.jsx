import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import TotalPointsContainer from './containers/TotalPointsContainer';
import ChallengeContainer from './containers/ChallengeContainer';
import MinimalisticContainer from './containers/MinimalisticContainer';

export default
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ChallengeContainer} />
      <Route path="mini" component={MinimalisticContainer} />
      <Route path="total" component={TotalPointsContainer} />
    </Route>
  </Router>;
