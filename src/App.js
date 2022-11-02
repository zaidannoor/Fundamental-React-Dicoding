import React, { useState , useMemo, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { putAccessToken, getUserLogged } from './utils/network-data';
import loading from './img/loading-gif.gif';
import LocaleContext from './context/LocaleContext';
import ThemeContext from './context/ThemeContext';

function App() {
  const [authedUser, setAuthedUser] = useState(localStorage.getItem('auth') || null);
  const [initializing, setInitializing] = useState(false);
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id')
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  async function onLoginSuccess({ accessToken }){
    setInitializing(true)
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(() => {
      return data;
    })
    localStorage.setItem('auth', data);
    setInitializing(false)
  }

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      const newLocale = prevLocale === 'id' ? 'en' : 'id';
      localStorage.setItem('locale', newLocale);
      return newLocale;
    });
    
  }

  const localeContextValue = useMemo(() => {
    
    return {
      locale,
      toggleLocale
    };
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
    
  }

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
      document.documentElement.setAttribute('data-theme', 'light');
    }

  }, [theme]);

  const onLogout = () => {
    setAuthedUser(() => {
      return null;
    })
    localStorage.removeItem('auth');
  }



  if (initializing) {
    return (
      <img src={loading} alt='loading'/>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
    <LocaleContext.Provider value={localeContextValue}>
      <div className="app-container">
        <header className='note-app__header'>
          <Navigation logout={onLogout} authed={authedUser} /> 
        </header>
        <main>
          {authedUser ?
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/notes/:id" element={<DetailPage />} />
              <Route path="/add" element={<AddPage />} />
              <Route path="/archive" element={<ArchivePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
            : <Routes>
                <Route path="*" element={<LoginPage loginSuccess={onLoginSuccess} />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
            }  
        </main>
        <footer>R10. Zaidan Noor Irfan</footer>
      </div>
    </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
