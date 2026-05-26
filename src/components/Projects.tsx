import React, { useState } from 'react';
import styled from 'styled-components';
import { Cpu, Globe, Terminal, Monitor, ShieldCheck, ExternalLink } from 'lucide-react';
import { PROJECTS, CONTACT } from '../constants';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 80rem; // max-w-7xl
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
  }
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

const CategoryTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  background-color: #e5e7ebcc; // bg-gray-200/80
  padding: 0.25rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 700;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => active ? 'white' : theme.colors.subtleText};
  box-shadow: ${({ active }) => active ? '0 4px 14px rgba(0,0,0,0.1)' : 'none'};

  &:hover {
    color: ${({ active, theme }) => active ? 'white' : theme.colors.text};
    background-color: ${({ active, theme }) => active ? theme.colors.primary : 'rgba(255,255,255,0.8)'};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  min-height: 400px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: all 0.3s;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary}80;
    h4 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const IconWrapper = styled.span`
  padding: 0.5rem;
  background-color: #e0e7ff; // indigo-100
  border-radius: 0.5rem;
  display: inline-flex;
`;

const ExternalLinkIcon = styled.a`
  padding: 0.5rem;
  border-radius: 50%;
  color: #9ca3af; // gray-400
  transition: all 0.3s;

  &:hover {
    background-color: #f3f4f6; // gray-100
    color: #1f2937; // gray-800
  }
`;

const ProjectTitle = styled.h4`
  font-size: 1.125rem; // text-lg
  font-weight: 700;
  color: #111827; // gray-900
  margin-bottom: 1rem;
  transition: color 0.3s;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex-grow: 1;
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

const iconMap = {
  'AI/ML': <Cpu size={16} color="#4f46e5" />,
  'Full-Stack': <Globe size={16} color="#4f46e5" />,
  'Systems': <Terminal size={16} color="#4f46e5" />,
  'Cloud/DevOps': <Monitor size={16} color="#4f46e5" />,
  'Security': <ShieldCheck size={16} color="#4f46e5" />,
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('AI/ML');
  const projectCategories = ['AI/ML', 'Full-Stack', 'Systems', 'Cloud/DevOps', 'Security'];
  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  console.log('Projects data:', PROJECTS);

  return (
    <SectionWrapper id="projects">
      <Container>
        <SectionHeader>
          <div>
            <Subtitle>Portfolio</Subtitle>
            <Title>Featured Projects</Title>
          </div>
          <CategoryTabs>
            {projectCategories.map(cat => (
              <CategoryButton 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                active={activeCategory === cat}
              >
                {cat}
              </CategoryButton>
            ))}
          </CategoryTabs>
        </SectionHeader>

        <ProjectsGrid>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx}>
              <CardContent>
                <CardHeader>
                  <IconWrapper>
                    {iconMap[project.category as keyof typeof iconMap]}
                  </IconWrapper>
                  <ExternalLinkIcon href={CONTACT.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                  </ExternalLinkIcon>
                </CardHeader>
                <ProjectTitle>
                  {project.title}
                </ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <TechList>
                  {project.tech.map(t => (
                    <TechTag key={t}>{t}</TechTag>
                  ))}
                </TechList>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default Projects;
