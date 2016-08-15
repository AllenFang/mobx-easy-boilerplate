import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppRoute from './routers/app';
import TimerRoute from './routers/timer';

export default (
  <Route path='/' component={ AppRoute }>
    <IndexRoute component={ TimerRoute } />
  </Route>
);

// <Route path="notes" component={ Notes } />
