/* eslint react/prefer-stateless-function: 0 */
/* eslint jsx-a11y/href-no-hash: 0 */
import React, { Component } from 'react';

require('../../styles/header.css');

export default class Header extends Component {
  render() {
    return (
      <section>
        <h1>
          <a href='https://html5bones.com'>
            <abbr title='HyperText Markup Language 5'>HTML5</abbr> Bones
          </a>
        </h1>
        <h2>Back to basics</h2>
      </section>
    );
  }
}
