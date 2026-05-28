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
    background: '#f8f9fa', // A slightly off-white
    text: '#212529',       // A darker gray for better contrast
    primary: '#4f46e5',    // The existing primary color
    secondary: '#f59e0b',  // The existing secondary color
    cardBg: '#ffffff',
    cardBorder: '#dee2e6', // A slightly darker border
    cardText: '#495057',    // A darker gray for card text
    subtleText: '#6c757d', // A darker subtle text color
  },
  fonts: {
    main: "'Inter', sans-serif",
  }
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    html {
      font-size: 14px;
    }
  }

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
