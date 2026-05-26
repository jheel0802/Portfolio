import React from 'react';
import styled from 'styled-components';
import { Mail, Linkedin, Github } from 'lucide-react';
import { CONTACT } from '../constants';

const FooterWrapper = styled.footer`
  padding: 4rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  text-align: center;
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Tagline = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.75rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  color: #9ca3af; // gray-400
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Tagline>Ready for the next challenge.</Tagline>
      <SocialLinks>
          <SocialLink href={`mailto:${CONTACT.email}`}>
            <Mail size={24} />
          </SocialLink>
          <SocialLink href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </SocialLink>
          <SocialLink href={CONTACT.github} target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </SocialLink>
      </SocialLinks>
      <Copyright>© {new Date().getFullYear()} {CONTACT.name}. All Rights Reserved.</Copyright>
    </FooterWrapper>
  );
};

export default Footer;
