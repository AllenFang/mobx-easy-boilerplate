/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import Project from '../components/project';
import Info from '../components/info';

class HomeRoute extends Component {

  render() {
    return (
      <div>
        <Project />
        <Info />
      </div>
    );
  }
}

export default HomeRoute;
