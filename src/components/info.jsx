import React from 'react';

require('styles/info.css');

const Info = () =>
  <section className='buttons'>
    <div className='download'>
      <a
        className='button'
        href='https://github.com/AllenFang/mobx-easy-boilerplate/archive/master.zip'>
        Download <span className='version'>v0.0.0</span>
      </a>
    </div>
    <div className='github'>
      <a className='button' href='https://github.com/AllenFang/mobx-easy-boilerplate'>
        GitHub Source
      </a>
    </div>
  </section>;

export default Info;
