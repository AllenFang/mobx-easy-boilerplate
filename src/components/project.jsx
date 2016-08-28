/* eslint arrow-body-style: 0 */
/* eslint global-require: 0 */

import React from 'react';

require('styles/project.css');

const PROJECTS = [ {
  url: 'https://facebook.github.io/react/',
  className: 'column-center',
  img: 'react-logo.png',
  name: 'react.js'
}, {
  url: 'https://mobxjs.github.io/mobx/',
  className: 'column-left',
  img: 'mobx-logo.png',
  name: 'Mobx'
}, {
  url: 'https://webpack.github.io/',
  className: 'column-right',
  img: 'webpack-logo.png',
  name: 'webpack'
}, {
  url: 'https://github.com/reactjs/react-router',
  className: 'column-center',
  img: 'react-router-logo.png',
  name: 'react-router'
}, {
  url: 'https://babeljs.io/',
  className: 'column-left',
  img: 'babel-logo.png',
  name: 'babel'
}, {
  url: 'https://karma-runner.github.io/1.0/index.html',
  className: 'column-right',
  img: 'karma-logo.png',
  name: 'karma'
}, {
  url: 'http://eslint.org/',
  className: 'column-center',
  img: 'eslint-logo.png',
  name: 'eslint'
}, {
  url: 'https://mochajs.org/',
  className: 'column-left',
  img: 'mocha-logo.png',
  name: 'mocha'
}, {
  url: 'https://github.com/gaearon/react-hot-loader',
  className: 'column-right',
  img: 'react-hot-loader-logo.png',
  name: 'react-hot-loader'
} ];

const mapProj = proj =>
  <div key={ proj.name } className='project'>
    <a href={ proj.url }>
      <img
        alt={ proj.name }
        src={ require(`../images/${proj.img}`) } />
    </a>
    <p className='project-title'>{ proj.name }</p>
  </div>;

const Project = () =>
  <section>
    <div id='wrapper'>
      <div className='column-center'>
        {
          PROJECTS.filter(proj => proj.className === 'column-center').map(mapProj)
        }
      </div>
      <div className='column-left'>
        {
          PROJECTS.filter(proj => proj.className === 'column-left').map(mapProj)
        }
      </div>
      <div className='column-right'>
        {
          PROJECTS.filter(proj => proj.className === 'column-right').map(mapProj)
        }
      </div>
    </div>
  </section>;

export default Project;
