import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Tech from './components/Tech';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
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

