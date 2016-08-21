import React from 'react';

require('../styles/info.css');

const Info = () =>
  <section className='buttons'>
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
  </section>;

export default Info;
