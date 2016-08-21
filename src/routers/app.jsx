/* eslint react/prefer-stateless-function: 0 */
import React, { PropTypes } from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import Header from '../components/shared/header';
import Footer from '../components/shared/footer';
import timerStore from '../stores/timer';

require('../styles/app.css');

export default class AppRoute extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>
        <main className='wrap' role='main'>
          <Header />
          <Provider { ...{ timerStore } }>
            { this.props.children }
          </Provider>
        </main>
        <Footer />
        <DevTools />
      </div>
    );
  }
}
