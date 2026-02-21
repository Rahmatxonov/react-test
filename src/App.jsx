import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark') === 'true',
  );

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}
          />
          <Route
            path="/about"
            element={
              <AboutPage darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage darkMode={darkMode} setDarkMode={setDarkMode} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
