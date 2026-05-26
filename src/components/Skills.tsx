import React from 'react';
import styled from 'styled-components';
import { Code2, Globe, Cpu, Monitor, Database } from 'lucide-react';
import { SKILLS } from '../constants';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const Container = styled.div`
  max-width: 72rem; // max-w-6xl
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
  color: ${({ theme }) => theme.colors.subtleText};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.875rem;
  text-align: center;
  font-weight: 700;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SkillCard = styled.div`
  background-color: #f9fafb; // bg-gray-50/80
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

const CardTitle = styled.h3`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #fef3c7; // amber-100
  color: #92400e; // amber-800
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
`;

const iconMap = [
  <Code2 size={20} color="#4f46e5" />,
  <Globe size={20} color="#4f46e5" />,
  <Cpu size={20} color="#4f46e5" />,
  <Monitor size={20} color="#4f46e5" />,
  <Database size={20} color="#4f46e5" />,
];

const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills">
      <Container>
        <SectionHeader>
          <Divider />
          <Title>Tech Stack</Title>
          <Divider />
        </SectionHeader>
        
        <SkillsGrid>
          {SKILLS.map((group, idx) => (
            <SkillCard key={idx}>
              <CardHeader>
                {iconMap[idx]}
                <CardTitle>{group.category}</CardTitle>
              </CardHeader>
              <SkillList>
                {group.skills.map(skill => (
                  <SkillTag key={skill}>
                    {skill}
                  </SkillTag>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default Skills;
