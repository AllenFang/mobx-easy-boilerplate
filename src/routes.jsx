import React from 'react';
import { Route, IndexRoute } from 'react-router';
import AppRoute from 'containers/app';
import HomeRoute from 'containers/home';
import TimerRoute from 'containers/timer';

export default (
  <Route path='/' component={ AppRoute }>
    <IndexRoute component={ HomeRoute } />
    <Route path='timer' component={ TimerRoute } />
  </Route>
);
