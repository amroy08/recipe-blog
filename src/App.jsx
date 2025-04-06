import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.classList.add(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}>
      <Router>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="min-h-screen p-4">
          <AppRoutes />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
