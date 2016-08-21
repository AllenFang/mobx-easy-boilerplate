/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */
import React, { Component } from 'react';

require('../../styles/header.css');

export default class Header extends Component {
  render() {
    return (
      <section>
        <h1>
          <a href='#'>
            <abbr title='Mobx-react-boilerplage'>Mobx</abbr> Boilerplate
          </a>
        </h1>
        <h2></h2>
      </section>
    );
  }
}
