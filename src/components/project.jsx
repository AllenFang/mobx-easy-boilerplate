/* eslint arrow-body-style: 0 */
/* eslint global-require: 0 */

import React from 'react';

require('styles/project.css');

const PROJECTS = [ {
  url: 'http://gradusdevelopment.com',
  className: 'column-center',
  img: 'react-logo.png',
  name: 'react'
}, {
  url: 'http://andreykeske.com',
  className: 'column-left',
  img: 'mobx-logo.png',
  name: 'Mobx'
}, {
  url: 'http://andreykeske.com',
  className: 'column-right',
  img: 'webpack-logo.png',
  name: 'webpack'
}, {
  url: 'http://andreykeske.com',
  className: 'column-center',
  img: 'react-router-logo.png',
  name: 'react-router'
}, {
  url: 'http://andreykeske.com',
  className: 'column-left',
  img: 'babel-logo.png',
  name: 'babel'
}, {
  url: 'http://andreykeske.com',
  className: 'column-right',
  img: 'karma-logo.png',
  name: 'karma'
}, {
  url: 'http://andreykeske.com',
  className: 'column-center',
  img: 'eslint-logo.png',
  name: 'eslint'
}, {
  url: 'http://andreykeske.com',
  className: 'column-left',
  img: 'mocha-logo.png',
  name: 'mocha'
}, {
  url: 'http://andreykeske.com',
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
    <ul><li>{ proj.name }</li></ul>
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
