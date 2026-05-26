import React from 'react';
import styled from 'styled-components';
import { Award, GraduationCap } from 'lucide-react';

const masterCourses = [
  "Operating Systems Principles", "Automated Learning and Data Analysis", "Computer & Network Security", 
  "Software Security", "Neural Networks", "Database Management Systems", 
  "Design and Analysis of Algorithms", "Internet Protocols", "Generative AI for Computer Systems", "Deep Learning Beyond Accuracy"
];

const bachelorCourses = [
  "Data Structures & Algorithms", "Database Management Systems", "Operating Systems", 
  "Machine Learning", "Artificial Intelligence", "Data Mining & Statistical Analysis", 
  "Computer Networks", "Software Engineering"
];

const SectionWrapper = styled.section`
  padding: 5rem 1.5rem;
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

const Title = styled.h2`
  font-size: 2.25rem; // text-4xl
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
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
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const DegreeInfo = styled.div``;

const DegreeTitle = styled.h3`
  font-size: 1.5rem; // text-2xl
  font-weight: 700;
  color: #111827; // text-gray-900
  margin: 0;
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
`;

const MetaInfo = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.subtleText};
  margin-top: 0.5rem;

  @media (min-width: 640px) {
    margin-top: 0;
    text-align: right;
  }
`;

const GraduationDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  justify-content: flex-start;

  @media (min-width: 640px) {
    justify-content: flex-end;
  }
`;

const Gpa = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardText};
  display: block;
`;

const CourseworkSection = styled.div`
  margin-top: 1.5rem;
`;

const CourseworkTitle = styled.h4`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.cardText};
  margin-bottom: 0.75rem;
`;

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const CourseTag = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: #fef3c7; // amber-100
  color: #92400e; // amber-800
  border-radius: 9999px;
  font-size: 0.75rem;
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
                <DegreeTitle>Master of Computer Science</DegreeTitle>
                <University>North Carolina State University</University>
              </DegreeInfo>
              <MetaInfo>
                <GraduationDate>
                  <GraduationCap size={16} /> May 2026
                </GraduationDate>
                <Gpa>GPA: 3.8 / 4.0</Gpa>
              </MetaInfo>
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
                <DegreeTitle>Bachelor of Technology (B.Tech), Computer Engineering</DegreeTitle>
                <HonorsTitle>Honors in Data Science</HonorsTitle>
                <University>Somaiya Vidyavihar University</University>
              </DegreeInfo>
              <MetaInfo>
                <GraduationDate>
                  <GraduationCap size={16} /> May 2024
                </GraduationDate>
                <Gpa>GPA: 9 / 10</Gpa>
              </MetaInfo>
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
