import React from 'react';
import styled from 'styled-components';
import { CONTACT } from '../constants';

interface HeaderProps {
  scrolled: boolean;
  handleScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const NavWrapper = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s;
  background-color: ${({ scrolled, theme }) => scrolled ? `${theme.colors.cardBg}cc` : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ scrolled, theme }) => scrolled ? `1px solid ${theme.colors.cardBorder}` : 'none'};
  padding: ${({ scrolled }) => scrolled ? '1rem 0' : '1.5rem 0'};
`;

const NavContainer = styled.div`
  max-width: 960px; // max-w-6xl is usually 1152px, but let's try a slightly smaller one for a cleaner look
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.subtleText};
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s;
  font-size: 0.875rem;

  &:hover {
    background-color: #4338ca; // A slightly darker indigo
  }
`;

const Header: React.FC<HeaderProps> = ({ scrolled, handleScrollTo }) => {
  return (
    <NavWrapper scrolled={scrolled}>
      <NavContainer>
        <Logo href="#" onClick={(e) => handleScrollTo(e, 'top')}>
          JHEEL<span>.GALA</span>
        </Logo>
        
        <NavLinks>
          {['Experience', 'Projects', 'Skills', 'Education'].map(item => (
            <NavLink 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => handleScrollTo(e, item.toLowerCase())}
            >
              {item}
            </NavLink>
          ))}
          <ContactButton href={`mailto:${CONTACT.email}`}>
            Contact
          </ContactButton>
        </NavLinks>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;
