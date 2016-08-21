/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */
import React, { Component } from 'react';

require('../styles/title.css');

export default class Title extends Component {
  render() {
    return (
      <section>
        <h1>
          <a href='#'>
            <abbr title='Mobx-Easy-Boilerplate'>Mobx</abbr> Easy Boilerplate
          </a>
        </h1>
        <h3>mobx-easy-boilerplate is a react & mobx boilderplate</h3>
      </section>
    );
  }
}
