import React, { useState, useEffect } from 'react';
import { Analytics } from "@vercel/analytics/react";
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  colors: {
    background: '#f9fafb', // bg-gray-50
    text: '#1f2937',       // text-gray-800
    primary: '#4f46e5',    // indigo-600
    secondary: '#f59e0b',  // amber-500
    cardBg: '#ffffff',      // bg-white
    cardBorder: '#e5e7ebcc', // border-gray-200/80
    cardText: '#374151',    // text-gray-700
    subtleText: '#6b7280', // text-gray-500
  },
  fonts: {
    main: "'Inter', sans-serif",
  }
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.main};
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Analytics />
      <Header scrolled={scrolled} handleScrollTo={handleScrollTo} />
      <main>
        <Hero handleScrollTo={handleScrollTo} />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Certifications />
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
