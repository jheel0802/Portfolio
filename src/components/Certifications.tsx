import React from 'react';
import styled from 'styled-components';
import { ShieldCheck, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const SectionWrapper = styled.section`
  padding: 5rem 1rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 1024px) {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
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
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.25rem; // text-4xl
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const CertList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CertRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 640px) {
    justify-content: stretch;
    & > * {
      width: 100%;
      justify-content: space-between;
    }
  }
`;

const CertItemBase = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  padding: 1.25rem;
  border-radius: 0.75rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  transition: all 0.3s;
`;

const CertLink = styled(CertItemBase).attrs({ as: 'a' })`
  justify-content: space-between;
  text-decoration: none;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}80;
    background-color: ${({ theme }) => theme.colors.background};
    
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CertInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CertDot = styled.div<{ linked?: boolean }>`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: ${({ linked, theme }) => linked ? theme.colors.primary : theme.colors.subtleText};
`;

const CertName = styled.span`
  color: ${({ theme }) => theme.colors.cardText};
  font-weight: 700;
  white-space: nowrap;
`;

const Certifications: React.FC = () => {
  const preferredTop = [
    'Google Cloud Engineering Certificate',
    'AWS Cloud Technical Essentials',
  ];

  // Top row should contain only the preferred two certs; all others go to bottom
  const topRowCertifications = CERTIFICATIONS.filter(c => preferredTop.includes(c.name));
  const bottomRowCertifications = CERTIFICATIONS.filter(c => !preferredTop.includes(c.name));

  const renderCertification = (cert: { name: string; link?: string }) => (
    cert.link ? (
      <CertLink 
        key={cert.name} 
        href={cert.link} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <CertInfo>
          <CertDot linked />
          <CertName>{cert.name}</CertName>
        </CertInfo>
        <ExternalLink size={20} style={{ color: '#9ca3af', transition: 'color 0.3s' }} />
      </CertLink>
    ) : (
      <CertItemBase key={cert.name}>
        <CertInfo>
          <CertDot />
          <CertName>{cert.name}</CertName>
        </CertInfo>
      </CertItemBase>
    )
  );

  return (
    <SectionWrapper id="certifications">
        <Container>
            <SectionHeader>
              <ShieldCheck size={32} color="#4f46e5" />
              <Title>Certifications</Title>
            </SectionHeader>
            <CertList>
              <CertRow>
                {topRowCertifications.map(renderCertification)}
              </CertRow>
              <CertRow>
                {bottomRowCertifications.map(renderCertification)}
              </CertRow>
            </CertList>
        </Container>
    </SectionWrapper>
  );
};

export default Certifications;
