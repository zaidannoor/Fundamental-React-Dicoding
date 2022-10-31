import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaMoon } from "react-icons/fa";
import LocaleContext from '../context/LocaleContext';

function Navigation({authed, logout}) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul className='nav-link'>
        <li><h1><Link to="/">{locale === 'id' ? 'Aplikasi Note' : 'Note App'}</Link></h1></li>
        <li><FaMoon /></li>
        <li><button onClick={toggleLocale}>{locale === 'id' ? 'Indonesia' : 'English'}</button></li>
        {
          authed ?
          <>
            <li><Link to="/add">Add Note</Link></li>
            <li><Link to="/archive">Archived Note</Link></li>
            <li><button onClick={logout}><FiLogOut /> Logout</button></li>
          </>
          : ''
        }
        
        
      </ul>
    </nav>
  );
}
 
export default Navigation;