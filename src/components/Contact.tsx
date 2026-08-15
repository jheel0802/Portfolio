import React from 'react';
import styled from 'styled-components';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { CONTACT } from '../constants';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.cardBg};

  @media (min-width: 1024px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 84rem;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const Card = styled.div`
  padding: 1.75rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,249,250,1));
  display: grid;
  gap: 1rem;
`;

const Intro = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.cardText};
  line-height: 1.7;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  border-radius: 9999px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: #f8fafc;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: transform 0.18s ease, box-shadow 0.18s ease, color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 10px 20px rgba(79,70,229,0.08);
  }
`;

const DetailRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  color: ${({ theme }) => theme.colors.subtleText};
`;

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact">
      <Container>
        <SectionHeader>
          <Mail size={30} color="#4f46e5" />
          <Title>Contact</Title>
        </SectionHeader>

        <Card>
          <Intro>
            I’m open to research collaborations, full-stack and AI engineering roles, and conversations about systems that blend product thinking with practical ML.
          </Intro>

          <DetailRow>
            <span><Mail size={16} style={{ verticalAlign: 'text-bottom', marginRight: '0.35rem' }} />{CONTACT.email}</span>
            <span><MapPin size={16} style={{ verticalAlign: 'text-bottom', marginRight: '0.35rem' }} />{CONTACT.location}</span>
          </DetailRow>

          <Links>
            <Link href={`mailto:${CONTACT.email}`}>
              <Mail size={18} /> Email
            </Link>
            <Link href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> LinkedIn
            </Link>
            <Link href={CONTACT.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} /> GitHub
            </Link>
          </Links>
        </Card>
      </Container>
    </SectionWrapper>
  );
};

export default Contact;