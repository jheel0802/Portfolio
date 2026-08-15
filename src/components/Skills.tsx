import React from 'react';
import styled from 'styled-components';
import { Code2, Cpu, Monitor, Database, ShieldCheck, ExternalLink } from 'lucide-react';
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
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const SkillRow = styled.div`
  display: grid;
  grid-template-columns: 13rem 1fr;
  align-items: start;
  gap: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 0.65rem;
  }
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 2rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;


const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const skillColors: Record<string, { bg: string; text: string }> = {
  Languages: {
    bg: '#eef2ff',
    text: '#4338ca'
  },
  'AI & ML': {
    bg: '#f3e8ff',
    text: '#7e22ce'
  },
  'Backend & Systems': {
    bg: '#ecfdf5',
    text: '#047857'
  },
  'Cloud & Infrastructure': {
    bg: '#fff7ed',
    text: '#c2410c'
  }
};

const SkillTag = styled.span<{ $category: string }>`
  padding: 0.35rem 0.75rem;

  background: ${({ $category }) =>
    skillColors[$category]?.bg || '#f3f4f6'};

  color: ${({ $category }) =>
    skillColors[$category]?.text || '#374151'};

  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.65rem;
  }
`;

const iconMap: Record<string, React.ReactNode> = {
  Languages: <Code2 size={20} color="#4f46e5" />,
  "AI & ML": <Cpu size={20} color="#4f46e5" />,
  "Backend & Systems": <Database size={20} color="#4f46e5" />,
  "Cloud & Infrastructure": <Monitor size={20} color="#4f46e5" />,
  Certifications: <ShieldCheck size={20} color="#4f46e5" />
};

const SkillTagLink = styled.a`
  display: inline-block;
  padding: 0.35rem 0.75rem;
  background: #fef3c7;
  color: #92400e;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.65rem;
  }
`;

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <Container>
        <SectionHeader>
          <Title>Skills</Title>
        </SectionHeader>

        <SkillsGrid>
  {SKILLS.map(group => (
    <SkillRow key={group.category}>
      <Category>
        {iconMap[group.category]}
        <CardTitle>{group.category}</CardTitle>
      </Category>

      <SkillList>
        {group.skills.map(skill => {
          const isObject = typeof skill === 'object';
          const skillName = isObject ? skill.name : skill;
          const skillLink = isObject ? skill.link : undefined;
          
          return skillLink ? (
            <SkillTagLink
              key={skillName}
              href={skillLink}
              target="_blank"
              rel="noopener noreferrer"
              title={skillName}
            >
              {skillName}
            </SkillTagLink>
          ) : (
            <SkillTag
              key={skillName}
              $category={group.category}
            >
              {skillName}
            </SkillTag>
          );
        })}
      </SkillList>
    </SkillRow>
  ))}
</SkillsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default Skills;
