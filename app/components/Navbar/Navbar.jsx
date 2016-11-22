import React from 'react';
import { Link } from 'react-router';
import './Navbar.css';

const Navbar = () => (
  <div id="navbar">
    <ul>
      <li><Link to="/">Juleutfordringa</Link></li>
      <li><Link to="/total">Total</Link></li>
    </ul>
  </div>);


export default Navbar;
