/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/newline-after-import: 0 */
/* eslint global-require: 0 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { createHashHistory } from 'history';
import { useRouterHistory } from 'react-router';
import App from './App';


const history = useRouterHistory(createHashHistory)({ queryKey: false });
render(
  <AppContainer>
    <App history={ history } />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <AppContainer>
        <NextApp history={ history } />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
