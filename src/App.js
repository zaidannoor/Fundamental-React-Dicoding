import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import ArchivePage from './pages/ArchivePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const authedUser = false;

  return (
    <div className="app-container">
      <header className='note-app__header'>
        <Navigation />
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
              <Route path="*" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          }
        
      </main>
      <footer>R10. Zaidan Noor Irfan</footer>
    </div>
  );
}

export default App;
