import React from 'react';
import styled from 'styled-components';
import { Award, GraduationCap } from 'lucide-react';

const masterCourses = [
  "Operating Systems", "Automated Learning & Data Analysis", "Computer & Network Security", 
  "Software Security", "Neural Networks", "Database Management", 
  "Analysis of Algorithms", "Internet Protocols", "Generative AI for Computer Systems", "Deep Learning"
];

const bachelorCourses = [
  "Data Structures & Algorithms", "Database Management Systems", "Operating Systems", 
  "Machine Learning", "Artificial Intelligence", "Data Mining & Statistical Analysis", 
  "Computer Networks", "Software Engineering"
];

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;

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

const Title = styled.h2`
  font-size: 2.25rem; // text-4xl
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 640px) {
    font-size: 1.8rem;
  }
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const EducationCard = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};

  @media (max-width: 640px) {
    padding: 1.25rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const DegreeInfo = styled.div``;

const RightMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  @media (min-width: 640px) {
    align-items: flex-end;
    text-align: right;
  }
`;

const DegreeTopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: baseline;
    gap: 0.75rem;
  }
`;

const UniversityRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: baseline;
    gap: 0.75rem;
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1.5rem; // text-2xl
  font-weight: 700;
  color: #111827; // text-gray-900
  margin: 0;

  @media (max-width: 640px) {
    font-size: 1.2rem;
  }
`;

const HonorsTitle = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.subtleText};
  font-weight: 500;
  margin: 0;
`;

const University = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.125rem; // text-lg
  margin-top: 0.25rem;

  @media (min-width: 640px) {
    margin-top: 0;
  }
`;

const GraduationDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.subtleText};
  font-weight: 600;

  @media (min-width: 640px) {
    justify-content: flex-end;
    font-size: 1.1rem;
  }
`;

const Gpa = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardText};
  display: inline-block;

  @media (min-width: 640px) {
    font-size: 1.1rem;
  }
`;

const CourseworkSection = styled.div`
  margin-top: -0.2rem;
`;

const CourseworkTitle = styled.h4`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardText};
  margin: 0 0 0.75rem 0;
  font-size: 1rem;
`;

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CourseTag = styled.span`
  padding: 0.4rem 0.9rem;
  background-color: #fef3c7; // amber-100
  color: #92400e; // amber-800
  border-radius: 9999px;
  font-size: 0.95rem;
  font-weight: 600;
`;

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <Container>
        <SectionHeader>
          <Award size={32} color="#4f46e5" />
          <Title>Education</Title>
        </SectionHeader>
        <EducationList>
          {/* Master's Degree */}
          <EducationCard>
            <CardHeader>
              <DegreeInfo>
                <DegreeTopRow>
                  <DegreeTitle>Master of Computer Science</DegreeTitle>
                </DegreeTopRow>
                <UniversityRow>
                  <University>North Carolina State University</University>
                </UniversityRow>
              </DegreeInfo>
              <RightMeta>
                <GraduationDate>
                  <GraduationCap size={16} /> August 2024 - May 2026
                </GraduationDate>
                <Gpa>GPA: 3.8 / 4.0</Gpa>
              </RightMeta>
            </CardHeader>
            <CourseworkSection>
              <CourseworkTitle>Relevant Coursework:</CourseworkTitle>
              <CourseList>
                {masterCourses.map(course => (
                  <CourseTag key={course}>{course}</CourseTag>
                ))}
              </CourseList>
            </CourseworkSection>
          </EducationCard>

          {/* Bachelor's Degree */}
          <EducationCard>
            <CardHeader>
              <DegreeInfo>
                <DegreeTopRow>
                  <DegreeTitle>Bachelor of Technology (B.Tech), Computer Engineering</DegreeTitle>
                </DegreeTopRow>
                <HonorsTitle>Honors in Data Science</HonorsTitle>
                <UniversityRow>
                  <University>Somaiya Vidyavihar University</University>
                </UniversityRow>
              </DegreeInfo>
              <RightMeta>
                <GraduationDate>
                  <GraduationCap size={16} /> September 2020 - May 2024
                </GraduationDate>
                <Gpa>GPA: 9 / 10</Gpa>
              </RightMeta>
            </CardHeader>
            <CourseworkSection>
              <CourseworkTitle>Relevant Coursework:</CourseworkTitle>
              <CourseList>
                {bachelorCourses.map(course => (
                  <CourseTag key={course}>{course}</CourseTag>
                ))}
              </CourseList>
            </CourseworkSection>
          </EducationCard>
        </EducationList>
      </Container>
    </SectionWrapper>
  );
};

export default Education;
