import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const sections = ['home', 'about', 'projects', 'blog', 'contact'];

const HomePage: React.FC = () => {
  const activeSection = useScrollSpy(sections);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Header activeSection={activeSection} setActiveSection={() => {}} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;