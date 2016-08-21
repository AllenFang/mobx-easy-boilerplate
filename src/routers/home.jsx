/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';

class HomeRoute extends Component {

  render() {
    return (
      <div>
        <section>
          <h3>About</h3>
          <ul>
            <li>
              <b>mobx-react-boilerplate</b> is really easy React and Mobx
              boilerplate constructed with following:
            </li>
            <li><strong>react</strong></li>
            <li><strong>mobx</strong></li>
            <li><strong>react-router</strong></li>
            <li><strong>eslint</strong></li>
            <li><strong>webpack</strong></li>
            <li><strong>ES6</strong></li>
          </ul>
        </section>
        <section className='buttons'>
          <h3>Download</h3>
          <div className='download'>
            <a className='button' href='https://github.com/iandevlin/html5bones/archive/v1.7.1.zip'>
              Download <span className='version'>v1.7.1</span>
            </a>
          </div>
          <div className='github'>
            <a className='button' href='https://github.com/iandevlin/html5bones'>
              GitHub Source
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeRoute;
