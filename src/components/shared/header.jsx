import React from 'react';
import { Link } from 'react-router';

require('styles/header.css');

const Header = () =>
  <ul className='nav-ul'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/timer'>Timer Demo</Link></li>
  </ul>;

export default Header;
