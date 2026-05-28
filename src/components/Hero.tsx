import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin, Github } from 'lucide-react';
import { CONTACT } from '../constants';
import profilePhoto from '../assets/profile-photo.png';

interface HeroProps {
  handleScrollTo: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
}

const HeroWrapper = styled.section`
  position: relative;
  padding: 9rem 1.5rem 6rem; // Reduced top and bottom padding
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;

  @media (min-width: 1024px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  top: -100px;
  left: -100px;
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.08), transparent 70%);
  filter: blur(100px);
  z-index: 0;
`;

const HeroContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    order: 2;
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  @media (max-width: 768px) {
    order: 1;
  }
`;

const ProfileImage = styled.img`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  object-fit: cover;
  border: 6px solid ${({ theme }) => theme.colors.cardBg};
  box-shadow: 0 10px 40px rgba(0,0,0,0.12);

  @media (max-width: 768px) {
    width: 180px;
    height: 180px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const Headline = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 2.75rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.2;
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
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.subtleText};
  margin: 0 0 2.5rem; // Removed auto margin for left alignment
  line-height: 1.7;
  max-width: 100%; // Allow it to fill the container
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
    margin: 0 auto 2.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center; // Center buttons
  margin-top: 2rem; // Add space above buttons

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
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
  border: 1px solid ${({ theme }) => `${theme.colors.primary}4d`};

  @media (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }

  &:hover {
    background-color: ${({ primary, theme }) => primary ? '#4338ca' : `${theme.colors.primary}33`};
    color: ${({ primary }) => primary ? 'white' : ''};
  }
`;

const Hero: React.FC<HeroProps> = ({ handleScrollTo }) => {
  return (
    <HeroWrapper>
      <BackgroundGlow />
      <HeroContainer>
        <HeroContent>
          <ImageContainer>
            <ProfileImage src={profilePhoto} alt="Jheel Gala" />
          </ImageContainer>
          <TextContent>
            <Headline>
              I build <span className="gradient-1">systems</span> that scale & <span className="gradient-2">intelligence</span> that adapts.
            </Headline>
          </TextContent>
        </HeroContent>
        <ButtonGroup>
          <Button href={`mailto:${CONTACT.email}`}>
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
