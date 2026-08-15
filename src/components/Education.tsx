import React from 'react';
import styled from 'styled-components';
import { Award } from 'lucide-react';

const masterCourses = [
  "Operating Systems",
  "Computer & Network Security",
  "Software Security",
  "Generative AI for Computer Systems",
  "Deep Learning",
  "Analysis of Algorithms"
];

const bachelorCourses = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "Machine Learning",
  "Computer Networks",
  "Software Engineering"
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
  gap: 0.85rem;
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

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EducationCard = styled.div`
  padding: 1.6rem 1.8rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: 0 8px 20px rgba(15, 23, 42, 0.05);

  @media (max-width: 640px) {
    padding: 1.25rem;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0.75rem;
  }
`;

const DegreeInfo = styled.div`
  min-width: 0;
`;

const DegreeTitle = styled.h3`
  margin: 0;
  font-size: 1.35rem;
  line-height: 1.3;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 640px) {
    font-size: 1.15rem;
  }
`;

const Honors = styled.span`
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 0.95rem;
  font-weight: 500;
`;

const University = styled.p`
  margin: 0.3rem 0 0;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 1.05rem;
`;

const RightMeta = styled.div`
  flex-shrink: 0;
  text-align: right;

  @media (max-width: 700px) {
    text-align: left;
  }
`;

const GraduationDate = styled.div`
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 0.95rem;
  font-weight: 600;
  white-space: nowrap;

  @media (max-width: 700px) {
    white-space: normal;
  }
`;

const Gpa = styled.div`
  margin-top: 0.25rem;
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 0.95rem;
  font-weight: 700;
`;

const CourseworkSection = styled.div`
  margin-top: 1.2rem;
`;

const CourseworkTitle = styled.h4`
  margin: 0 0 0.65rem;
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 0.9rem;
  font-weight: 700;
`;

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

const CourseTag = styled.span`
  padding: 0.3rem 0.65rem;
  background-color: #fef3c7;
  color: #92400e;
  border-radius: 9999px;
  font-size: 0.78rem;
  font-weight: 600;
`;

const Education: React.FC = () => {
  return (
    <SectionWrapper id="education">
      <Container>

        <SectionHeader>
          <Award size={28} color="#4f46e5" />
          <Title>Education</Title>
        </SectionHeader>

        <EducationList>

          {/* Master's */}
          <EducationCard>
            <CardHeader>
              <DegreeInfo>
                <DegreeTitle>
                  Master of Computer Science
                </DegreeTitle>

                <University>
                  North Carolina State University
                </University>
              </DegreeInfo>

              <RightMeta>
                <GraduationDate>
                  August 2024 – May 2026
                </GraduationDate>

                <Gpa>
                  GPA: 3.84 / 4.0
                </Gpa>
              </RightMeta>
            </CardHeader>

            <CourseworkSection>
              <CourseworkTitle>
                Selected Coursework
              </CourseworkTitle>

              <CourseList>
                {masterCourses.map(course => (
                  <CourseTag key={course}>
                    {course}
                  </CourseTag>
                ))}
              </CourseList>
            </CourseworkSection>
          </EducationCard>


          {/* Bachelor's */}
          <EducationCard>
            <CardHeader>
              <DegreeInfo>
                <DegreeTitle>
                  Bachelor of Technology (B.Tech), Computer Engineering
                  {' '}
                  <Honors>· Honors in Data Science</Honors>
                </DegreeTitle>

                <University>
                  Somaiya Vidyavihar University
                </University>
              </DegreeInfo>

              <RightMeta>
                <GraduationDate>
                  September 2020 – May 2024
                </GraduationDate>

                <Gpa>
                  GPA: 9.14 / 10
                </Gpa>
              </RightMeta>
            </CardHeader>

            <CourseworkSection>
              <CourseworkTitle>
                Selected Coursework
              </CourseworkTitle>

              <CourseList>
                {bachelorCourses.map(course => (
                  <CourseTag key={course}>
                    {course}
                  </CourseTag>
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