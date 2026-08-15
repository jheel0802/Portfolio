import React from 'react';
import styled from 'styled-components';
import { ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const SectionWrapper = styled.section`
  padding: 5rem 1rem;
  background-color: ${({ theme }) => theme.colors.cardBg};

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
  font-size: 2rem; // Adjusted from 2.25rem
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TimelineItem = styled.div`
  position: relative;
`;

const TimelineContent = styled.div`
  margin-left: 0; /* align with section title */
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};
  padding-left: 1.25rem; /* space between line and content */
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
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: baseline;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Role = styled.h3`
  font-size: 1.25rem; // slightly smaller for balance
  font-weight: 700;
  color: #111827; // text-gray-900
  margin: 0;
`;

const CompanyName = styled.span`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 0.25rem;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Period = styled.span`
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 1.08rem;
  font-weight: 400;
  white-space: nowrap;

  @media (max-width: 768px) {
    white-space: normal;
  }
`;

const PointsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Point = styled.li`
  color: ${({ theme }) => theme.colors.cardText};
  display: flex;
  gap: 0.75rem;
  font-size: 1.06rem;
  line-height: 1.65;

  .pointText {
    flex: 1;
    text-align: left;
  }
`;

const PointLabel = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0.75rem 0 1rem;
`;

const TechTag = styled.span`
  padding: 0.35rem 0.7rem;
  border-radius: 9999px;
  background: #fef3c7;
  color: #92400e;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      <Container>
        <SectionHeader>
          <Title>Work Experience</Title>
        </SectionHeader>

        <Timeline>
          {EXPERIENCES.map((exp, idx) => (
            <TimelineItem key={idx}>
              <TimelineDot />
              <TimelineContent>
                <ItemHeader>
                  <HeaderLeft>
                    <Role>{exp.role},</Role>
                    <CompanyName>{exp.company}</CompanyName>
                  </HeaderLeft>
                  <Period>{exp.period}</Period>
                </ItemHeader>
                <TechList>
                  {exp.technologies.map(tech => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </TechList>
                <PointsList>
                  {exp.points.map((p, i) => (
                    <Point key={i}>
                      <ChevronRight
                        size={16}
                        color="#4f46e5"
                        style={{ flexShrink: 0, marginTop: '0.3rem' }}
                      />

                      <span className="pointText">
                        {p.label && <PointLabel>{p.label}: </PointLabel>}
                        {p.text}
                      </span>
                    </Point>
                  ))}
                </PointsList>

              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </SectionWrapper>
  );
};

export default Experience;
