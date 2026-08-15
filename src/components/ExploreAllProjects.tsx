import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, Github } from 'lucide-react';
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
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  margin: 0 0 0.6rem;
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.subtleText};
  margin: 0;
  max-width: 48rem;
  line-height: 1.7;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-bottom: 2rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.cardBorder};

  background: ${({ theme, $active }) =>
    $active ? theme.colors.primary : theme.colors.cardBg};

  color: ${({ theme, $active }) =>
    $active ? 'white' : theme.colors.cardText};

  padding: 0.6rem 1rem;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background-color 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 14px rgba(15, 23, 42, 0.08);
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 1rem;
  padding: 1.5rem;

  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.05),
    0 4px 6px -2px rgba(0, 0, 0, 0.03);

  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.08);
  }
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
`;

const CategoryTag = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.65rem;
  font-size: 1.15rem;
  line-height: 1.35;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 0.92rem;
  line-height: 1.65;
  margin: 0 0 1rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
`;

const TechTag = styled.span`
  padding: 0.3rem 0.6rem;
  background-color: #fef3c7;
  color: #92400e;
  border-radius: 9999px;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1.1rem;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const categories = [
  'All',
  'AI & ML',
  'Backend & Systems',
  'Cloud & Infrastructure',
  'Security'
];

const ExploreAllProjects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter(project =>
          project.categories?.includes(activeCategory)
        );

  return (
    <SectionWrapper id="all-projects">
      <Container>

        <SectionHeader>
          <Title>Explore More Projects</Title>

          <Subtitle>
            Explore projects by engineering area, from AI systems and backend
            infrastructure to cloud platforms and security.
          </Subtitle>
        </SectionHeader>

        <Filters>
          {categories.map(category => (
            <FilterButton
              key={category}
              $active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </Filters>

        <Grid>
          {filteredProjects.map(project => (
            <Card key={project.title}>

              <CategoryList>
                {project.categories?.map((category, index) => (
                  <React.Fragment key={category}>
                    <CategoryTag>{category}</CategoryTag>

                    {index < project.categories.length - 1 && (
                      <CategoryTag>·</CategoryTag>
                    )}
                  </React.Fragment>
                ))}
              </CategoryList>

              <CardTitle>{project.title}</CardTitle>

              <Description>
                {typeof project.description === 'string'
                  ? project.description
                  : project.description.join(' ')}
              </Description>

              <TechList>
                {project.tech.map(tech => (
                  <TechTag key={tech}>
                    {tech}
                  </TechTag>
                ))}
              </TechList>

              {(project.github || project.demo) && (
                <ActionRow>

                  {project.github && (
                    <ActionLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={14} />
                      GitHub
                    </ActionLink>
                  )}

                  {project.demo && (
                    <ActionLink
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </ActionLink>
                  )}

                </ActionRow>
              )}

            </Card>
          ))}
        </Grid>

      </Container>
    </SectionWrapper>
  );
};

export default ExploreAllProjects;