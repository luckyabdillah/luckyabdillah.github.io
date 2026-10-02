import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Tech from './components/Tech';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ESP32MultiMedia from './pages/blogs/ESP32MultiMedia';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [route, setRoute] = useState(() => window.location.hash);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash);
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link || link.getAttribute('href').startsWith('#/')) return;

      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, '', `#${targetId}`);
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleAnchorClick);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  useEffect(() => {
    const isBlogRoute = route === '#/blogs/esp32-multimedia';

    if (isBlogRoute) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }

    const targetId = route.startsWith('#/') ? '' : route.slice(1);
    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  if (route === '#/blogs/esp32-multimedia') {
    return (
      <div className={darkMode ? 'dark overflow-x-hidden' : 'overflow-x-hidden'}>
        <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
        <ESP32MultiMedia />
        <Footer />
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark overflow-x-hidden' : 'overflow-x-hidden'}>
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <Hero />
      <Portfolio />
      <Tech />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

