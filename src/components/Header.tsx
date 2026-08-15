import React from 'react';
import styled from 'styled-components';
import { CONTACT } from '../constants';

interface HeaderProps {
  scrolled: boolean;
  handleScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const NavWrapper = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 50;
  transition: all 0.3s;
  background-color: ${({ theme }) => theme.colors.primary}1A; // Light blue background
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  padding: 1rem 0;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    padding: 0 0.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.75rem;
  font-size: 1.125rem; // 18px
  font-weight: 500;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    gap: 0.75rem 1rem;
    font-size: 0.95rem;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.cardText}; // Darker color
  text-decoration: none;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header: React.FC<HeaderProps> = ({ scrolled, handleScrollTo }) => {
  return (
    <NavWrapper $scrolled={scrolled}>
      <NavContainer>
        <Logo href="#" onClick={(e) => handleScrollTo(e, 'top')}>
          <b>JHEEL.GALA</b>
        </Logo>
        
        <NavLinks>
          {[
            { label: 'Featured Projects', id: 'featured-projects' },
            { label: 'Experience', id: 'experience' },
            { label: 'Explore All Projects', id: 'all-projects' },
            { label: 'Education', id: 'education' },
          ].map(item => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
            >
              {item.label}
            </NavLink>
          ))}
        </NavLinks>
      </NavContainer>
    </NavWrapper>
  );
};

export default Header;
