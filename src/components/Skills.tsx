import React from 'react';
import styled from 'styled-components';
import { Code2, Globe, Cpu, Monitor, Database } from 'lucide-react';
import { SKILLS } from '../constants';

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
  margin-bottom: 3rem;
`;

const Divider = styled.div`
  height: 1px;
  background-color: ${({ theme }) => theme.colors.cardBorder};
  flex-grow: 1;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 1.25rem;
  text-align: center;
  font-weight: 800;
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,255,0.98));
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  border-left: 6px solid ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: stretch;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 24px rgba(79,70,229,0.06);
    border-image: linear-gradient(135deg, #facc15, #8b5cf6) 1;
    border-color: transparent;
  }
`;

const LeftCol = styled.div`
  flex: 0 0 220px;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 767px) {
    flex: 1 1 auto;
  }
`;

const RightCol = styled.div`
  flex: 1 1 auto;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
`;

const CardTitle = styled.h3`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.05rem;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  padding: 0.4rem 0.9rem;
  background: linear-gradient(90deg, #fff7cc, #fff3e0);
  color: #78350f;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03);
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-3px) scale(1.02);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    padding: 0.35rem 0.7rem;
  }
`;

const iconMap = [
  <Code2 size={20} color="#4f46e5" />,
  <Globe size={20} color="#4f46e5" />,
  <Cpu size={20} color="#4f46e5" />,
  <Monitor size={20} color="#4f46e5" />,
  <Database size={20} color="#4f46e5" />,
];

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <Container>
        <SectionHeader>
          <Divider />
          <Title>Skills</Title>
          <Divider />
        </SectionHeader>

        <SkillsGrid>
          {SKILLS.map((group, idx) => (
            <SkillCard key={idx}>
              <LeftCol>
                {iconMap[idx % iconMap.length]}
                <CardTitle>{group.category}</CardTitle>
              </LeftCol>
              <RightCol>
                <SkillList>
                  {group.skills.map(skill => (
                    <SkillTag key={skill}>
                      {skill}
                    </SkillTag>
                  ))}
                </SkillList>
              </RightCol>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default Skills;
