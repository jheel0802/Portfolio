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
  min-height: calc(100vh - 6rem);
  padding: 7rem 1.25rem 6rem;
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (min-width: 1024px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  @media (max-width: 768px) {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
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
  width: 100%;
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
  width: clamp(150px, 18vw, 220px);
  aspect-ratio: 1;
  height: auto;
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
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.25rem;
  line-height: 1.05;

  @media (max-width: 768px) {
    font-size: 2.15rem;
    line-height: 1.08;
    letter-spacing: -0.03em;
  }

  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

const HeadlineLine = styled.span`
  display: block;
  width: fit-content;
  max-width: 100%;
  white-space: normal;
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
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: row;
    flex-wrap: nowrap;
    width: auto;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

const Button = styled.a<{ primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.875rem 2rem;
  font-weight: 700;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;

  background-color: ${({ primary, theme }) =>
    primary ? theme.colors.primary : `${theme.colors.primary}1a`};

  color: ${({ primary, theme }) =>
    primary ? 'white' : theme.colors.primary};

  border: 1px solid ${({ theme }) =>
    `${theme.colors.primary}4d`};

  &:hover {
    background-color: ${({ primary, theme }) =>
    primary ? '#4338ca' : `${theme.colors.primary}33`};
  }

  @media (max-width: 480px) {
    width: 3rem;
    height: 3rem;
    padding: 0;
    border-radius: 50%;
    gap: 0;
  }
`;

const ButtonLabel = styled.span`
  @media (max-width: 480px) {
    display: none;
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
              <HeadlineLine>
                I build software around intelligent systems.
              </HeadlineLine>
            </Headline>
            <Subheadline>
              From AI agents and ML pipelines to APIs, backend systems, and production infrastructure.
            </Subheadline>
          </TextContent>
        </HeroContent>
        <ButtonGroup>
          <Button
            href={`mailto:${CONTACT.email}`}
            aria-label="Email Jheel Gala"
            title="Email"
          >
            <Mail size={20} />
            <ButtonLabel>Get In Touch</ButtonLabel>
          </Button>

          <Button
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin size={20} />
            <ButtonLabel>LinkedIn</ButtonLabel>
          </Button>

          <Button
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github size={20} />
            <ButtonLabel>GitHub</ButtonLabel>
          </Button>
        </ButtonGroup>
      </HeroContainer>
    </HeroWrapper>
  );
};

export default Hero;
