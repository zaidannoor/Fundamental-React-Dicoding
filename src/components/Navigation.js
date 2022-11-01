import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import LocaleContext from '../context/LocaleContext';
import ThemeContext from '../context/ThemeContext';
import language from '../img/language.png'

function Navigation({authed, logout}) {
  const { locale, toggleLocale } = React.useContext(LocaleContext);
  const {theme, toggleTheme} = React.useContext(ThemeContext);
  return (
    <nav className="navigation">
      <ul className='nav-link'>
        <span className='unauthed-menu'>
          <li><h1><Link to="/">{locale === 'id' ? 'Aplikasi Note' : 'Note App'}</Link></h1></li>
          <li className='theme' onClick={toggleTheme}>{theme === 'light' ? <FaMoon size={'2em'} /> : <FiSun size={'2em'} />}</li>
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