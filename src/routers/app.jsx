/* eslint react/prefer-stateless-function: 0 */
import React, { PropTypes } from 'react';
import { Provider } from 'mobx-react';
import DevTools from 'mobx-react-devtools';

import timerStore from '../stores/timer';


// const AppRoute = ({ children }) => {
//   <div>
//     <Provider { ...{ timerStore } }>
//       { children }
//     </Provider>
//     <DevTools />
//   </div>;
// };
//
// AppRoute.propTypes = {
//   children: PropTypes.any
// };

// export default AppRoute;

export default class AppRoute extends React.Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <div>
        <Provider { ...{ timerStore } }>
          { this.props.children }
        </Provider>
        <DevTools />
      </div>
    );
  }
}
