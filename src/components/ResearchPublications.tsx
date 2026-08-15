import React from 'react';
import styled from 'styled-components';
import { BookOpen, ExternalLink } from 'lucide-react';

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
  gap: 0.8rem;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 640px) {
    font-size: 1.7rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
`;

const Card = styled.article`
  padding: 1.6rem 1.8rem;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.98),
    rgba(248,249,250,1)
  );
  box-shadow: 0 8px 24px rgba(15,23,42,0.05);
`;

const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.6rem;
`;

const Venue = styled.div`
  margin-bottom: 0.6rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const CardTitle = styled.h3`
  margin: 0 0 0.8rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.35;
`;

const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 0.95rem;
  line-height: 1.65;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin: 1.15rem 0;
`;

const Stat = styled.div``;

const StatValue = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.15rem;
  font-weight: 800;
  line-height: 1.2;
`;

const StatLabel = styled.div`
  margin-top: 0.15rem;
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 0.78rem;
`;

const List = styled.ul`
  margin: 0 0 1.2rem;
  padding-left: 1.15rem;
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 0.92rem;
  line-height: 1.6;

  li + li {
    margin-top: 0.3rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.25rem;
`;

const TechTag = styled.span`
  padding: 0.28rem 0.6rem;
  border-radius: 9999px;
  background: #fef3c7;
  color: #92400e;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const ActionRow = styled.div`
  display: flex;
  margin-top: 1.25rem;
`;

const ActionLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 0.7rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
`;

const ResearchPublications: React.FC = () => {
  return (
    <SectionWrapper id="research-publications">
      <Container>
        <SectionHeader>
          <BookOpen size={28} color="#4f46e5" />
          <Title>Research & Publications</Title>
        </SectionHeader>

        <Grid>
          {/* CHASE 2026 */}
          <Card>
            <Venue>IEEE/ACM CHASE 2026 · Accepted</Venue>

            <CardTitle>
              Forecasting Student Mental Health Using Behavioral
              Similarity-Based Transfer Learning
            </CardTitle>

            <CardText>
              Personalized mental-health forecasting from 210K+ smartphone
              sensor observations across 121 participants, focused on
              cold-start prediction for users with limited historical data.
            </CardText>

            <Stats>
              <Stat>
                <StatValue>210K+</StatValue>
                <StatLabel>sensor observations</StatLabel>
              </Stat>

              <Stat>
                <StatValue>77%</StatValue>
                <StatLabel>predictive accuracy</StatLabel>
              </Stat>
            </Stats>

            <TechList>
              {[
                'Time Series',
                'XGBoost',
                'FastDTW',
                'Transfer Learning'
              ].map(tag => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </TechList>
          </Card>

          {/* TAYLOR & FRANCIS 2025 */}
          <Card>
            <CardTop>
              <Venue>Taylor & Francis · 2025 · Published</Venue>

              <ActionLink
                href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003596707-55/resnet-models-real-world-action-comparative-study-tomato-disease-recognition-manori-sangani-jheel-gala-chaitanya-patil-smita-sankhe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} />
                View
              </ActionLink>
            </CardTop>

            <CardTitle>
              ResNet Models in Real World Action: A Comparative Study on
              Tomato Disease Recognition
            </CardTitle>

            <CardText>
              Comparative study of ResNet architectures for tomato disease
              recognition, including evaluation on real-world field images.
            </CardText>

            <Stats>
              <Stat>
                <StatValue>18,345</StatValue>
                <StatLabel>images</StatLabel>
              </Stat>

              <Stat>
                <StatValue>96%</StatValue>
                <StatLabel>peak accuracy</StatLabel>
              </Stat>
            </Stats>

            <TechList>
              {[
                'PyTorch',
                'TensorFlow',
                'ResNet',
                'Computer Vision',
                'Transfer Learning'
              ].map(tag => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </TechList>
          </Card>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default ResearchPublications;