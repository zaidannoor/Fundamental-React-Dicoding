import React from 'react';
import { Link } from 'react-router-dom';
 
function Navigation() {
  return (
    <nav className="navigation">
      <ul className='nav-link'>
        <li><h1><Link to="/">Note App</Link></h1></li>
        <li><Link to="/add">Add Note</Link></li>
        <li><Link to="/archive">Archived Note</Link></li>
      </ul>
    </nav>
  );
}
 
export default Navigation;