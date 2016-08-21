import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppRoute from './routers/app';
import HomeRoute from './routers/home';
import TimerRoute from './routers/timer';

export default (
  <Route path='/' component={ AppRoute }>
    <IndexRoute component={ HomeRoute } />
    <Route path='timer' component={ TimerRoute } />
  </Route>
);

// <Route path="notes" component={ Notes } />
