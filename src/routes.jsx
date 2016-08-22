import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppRoute from './container/app';
import HomeRoute from './container/home';
import TimerRoute from './container/timer';

export default (
  <Route path='/' component={ AppRoute }>
    <IndexRoute component={ HomeRoute } />
    <Route path='timer' component={ TimerRoute } />
  </Route>
);
