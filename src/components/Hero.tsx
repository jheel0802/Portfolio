import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin, Github } from 'lucide-react';
import { CONTACT } from '../constants';

interface HeroProps {
  handleScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const HeroWrapper = styled.section`
  position: relative;
  padding: 12rem 1.5rem 6rem;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  text-align: center;
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 600px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.1), transparent 70%);
  filter: blur(120px);
  border-radius: 50%;
  z-index: 0;
`;

const HeroContainer = styled.div`
  max-width: 80rem; // max-w-5xl
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Headline = styled.h1`
  font-size: 5rem; // text-8xl
  font-weight: 900;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 3.75rem; // text-6xl
  }

  span {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .gradient-1 {
    background-image: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  }

  .gradient-2 {
    background-image: linear-gradient(to right, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.primary});
  }
`;

const Subheadline = styled.p`
  font-size: 1.5rem; // text-2xl
  color: ${({ theme }) => theme.colors.subtleText};
  max-width: 56rem; // max-w-3xl
  margin: 0 auto 3rem;
  line-height: 1.6;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: 1.125rem; // text-lg
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    font-weight: 600;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const Button = styled.a<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.875rem 2rem;
  font-weight: 700;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;

  background-color: ${({ primary, theme }) => primary ? theme.colors.primary : `${theme.colors.primary}1a`};
  color: ${({ primary, theme }) => primary ? 'white' : theme.colors.primary};
  border: ${({ primary, theme }) => primary ? 'none' : `1px solid ${theme.colors.primary}4d`};
  box-shadow: ${({ primary, theme }) => primary ? `0 4px 14px ${theme.colors.primary}33` : 'none'};

  &:hover {
    background-color: ${({ primary, theme }) => primary ? '#4338ca' : theme.colors.primary};
    color: white;
  }
`;


const Hero: React.FC<HeroProps> = ({ handleScrollTo }) => {
  return (
    <HeroWrapper>
      <BackgroundGlow />
      <HeroContainer>
        <Headline>
          I build <span className="gradient-1">systems</span> that scale <br className="hidden md:block" />
          & <span className="gradient-2">AI</span> that thinks.
        </Headline>
        <Subheadline>
          Software Engineer & Researcher at <span>NC State University</span>. 
          Focused on bridging the gap between high-performance distributed systems and intelligent behavioral forecasting.
        </Subheadline>
        <ButtonGroup>
          <Button primary href={`mailto:${CONTACT.email}`}>
            <Mail size={20} /> Get In Touch
          </Button>
          <Button href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} /> LinkedIn
          </Button>
          <Button href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <Github size={20} /> GitHub
          </Button>
        </ButtonGroup>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
