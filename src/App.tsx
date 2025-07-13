import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Work from './components/sections/Work';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Home />
        <About />
        <Services />
        <Work />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;