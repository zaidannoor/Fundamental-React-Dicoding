import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import LocaleContext from '../context/LocaleContext';
import language from '../img/language.png'

function Navigation({authed, logout}) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);

  return (
    <nav className="navigation">
      <ul className='nav-link'>
        <span className='unauthed-menu'>
          <li><h1><Link to="/">{locale === 'id' ? 'Aplikasi Note' : 'Note App'}</Link></h1></li>
          <li><img onClick={toggleLocale} src={language} alt='language'/></li>
        </span>
        {
          authed ?
          <span className='authed-menu'>
            <li><Link to="/add">{locale === 'id' ? 'Tambah Note' : 'Add Note'}</Link></li>
            <li><Link to="/archive">{locale === 'id' ? 'Note Terarsip' : 'Archived Note'}</Link></li>
            <li><button onClick={logout}><FiLogOut /> Logout</button></li>
          </span>
          : ''
        }
        
        
      </ul>
    </nav>
  );
}
 
export default Navigation;