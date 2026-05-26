import React from 'react';
import styled from 'styled-components';
import { ChevronRight, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const Container = styled.div`
  max-width: 64rem; // max-w-4xl
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;
`;

const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  display: block;
`;

const Title = styled.h2`
  font-size: 2.25rem; // text-4xl
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 2rem;
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  
  &:hover > div:first-child {
    transform: scale(1.25);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 0.75rem;
  height: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  left: -6.5px;
  top: 0.25rem;
  transition: transform 0.3s;
`;

const ItemHeader = styled.div`
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.5rem;
`;

const Role = styled.h3`
  font-size: 1.5rem; // text-2xl
  font-weight: 700;
  color: #111827; // text-gray-900
`;

const Period = styled.span`
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 0.875rem;
  font-weight: 500;
`;

const CompanyInfo = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span.separator {
    color: #d1d5db; // text-gray-400
  }

  span.location {
    color: ${({ theme }) => theme.colors.subtleText};
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`;

const PointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Point = styled.li`
  color: ${({ theme }) => theme.colors.cardText};
  display: flex;
  gap: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.6;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  padding: 2px 8px;
  background-color: #fef3c7; // amber-100
  color: #92400e; // amber-800
  border-radius: 0.25rem;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Subtitle>My Journey</Subtitle>
          <Title>Work Experience</Title>
        </SectionHeader>

        <Timeline>
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem key={idx}>
              <TimelineDot />
              <ItemHeader>
                <Role>{exp.role}</Role>
                <Period>{exp.period}</Period>
              </ItemHeader>
              <CompanyInfo>
                {exp.company}
                <span className="separator">•</span>
                <span className="location"><MapPin size={12} /> {exp.location}</span>
              </CompanyInfo>
              <PointsList>
                {exp.points.map((p, i) => (
                  <Point key={i}>
                    <ChevronRight size={16} color="#4f46e5" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                    {p}
                  </Point>
                ))}
              </PointsList>
              <TechList>
                {exp.technologies.map(t => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </TechList>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </SectionWrapper>
  );
};

export default Experience;
