import React from 'react';
import styled from 'styled-components';
import { PROJECTS } from '../constants';

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};

  @media (min-width: 1024px) {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
`;

const Container = styled.div`
  max-width: 90rem;
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
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
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
`;

const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.colors.cardBg};
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-image 0.28s ease, border-color 0.28s ease;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);

  &:hover {
    transform: scale(1.03);
    border-image: linear-gradient(135deg, #facc15, #8b5cf6) 1;
    border-color: transparent;
    box-shadow: 0 16px 30px rgba(139, 92, 246, 0.16), 0 0 0 1px rgba(250, 204, 21, 0.45);
    h4 {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const CardContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const MainContent = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h4`
  font-size: 1.4rem;
  font-weight: 700;
  color: #111827; // gray-900
  margin-bottom: 1rem;
  transition: color 0.3s;

  @media (max-width: 480px) {
    font-size: 1.15rem;
    margin-bottom: 0;
  }
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex-grow: 1;

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  padding: 4px 10px;
  background-color: #fef3c7; // amber-100
  color: #92400e; // amber-800
  border-radius: 0.25rem;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Projects: React.FC = () => {
  const filteredProjects = PROJECTS; // show all featured projects
  return (
    <SectionWrapper id="projects">
      <Container>
        <SectionHeader>
            <div>
            <Title>Featured Projects</Title>
          </div>
        </SectionHeader>

        <ProjectsGrid>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx}>
              <CardContent>
                <MainContent>
                  <CardHeader>
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </CardHeader>
                  <ProjectDescription>
                    {typeof project.description === 'string' ? project.description : project.description.join(' ')}
                  </ProjectDescription>
                  <TechList>
                    {project.tech.map(t => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </TechList>
                </MainContent>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </SectionWrapper>
  );
};

export default Projects;
