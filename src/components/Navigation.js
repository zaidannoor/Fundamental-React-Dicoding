import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaMoon } from "react-icons/fa";
// import { LocaleConsumer } from '../contexts/LocaleContext';

function Navigation({authed}) {
  return (
    <nav className="navigation">
      <ul className='nav-link'>
        <li><h1><Link to="/">Note App</Link></h1></li>
        <li><FaMoon /></li>
        <li>En</li>
        {
          authed ?
          <>
            <li><Link to="/add">Add Note</Link></li>
            <li><Link to="/archive">Archived Note</Link></li>
            <li><FiLogOut /></li>
          </>
          : ''
        }
        
        
      </ul>
    </nav>
  );
}
 
export default Navigation;