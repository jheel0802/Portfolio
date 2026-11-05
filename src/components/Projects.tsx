import React from 'react';
import styled from 'styled-components';
import { Github } from 'lucide-react';

import distributedArchitecture from '../assets/distributed-architecture.png';
import aiOpsScreenshot from '../assets/output.webp';

const SectionWrapper = styled.section`
  padding: 3rem 1.5rem;
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
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

const FeaturedStack = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const FeatureShell = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 1.5rem;
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(248,249,250,1));
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  overflow: hidden;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.95fr);

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const LeftPane = styled.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const RightPane = styled.div`
  padding: 1rem 1rem 0.95rem;
  background: radial-gradient(circle at top, rgba(79, 70, 229, 0.08), transparent 55%),
    linear-gradient(180deg, rgba(248, 250, 252, 0.85), rgba(255, 255, 255, 0.98));
  border-left: 1px solid ${({ theme }) => theme.colors.cardBorder};

  @media (max-width: 1024px) {
    border-left: 0;
    border-top: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`;

const ProjectKicker = styled.p`
  margin: 0 0 0.8rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0.94rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: clamp(1.4rem, 2.4vw, 2.3rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
  color: ${({ theme }) => theme.colors.text};
  overflow-wrap: anywhere;
`;

const ProjectSummary = styled.p`
  margin: 0 0 1rem;
  max-width: 48rem;
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 1.06rem;
  line-height: 1.55;
`;

const Highlights = styled.ul`
  margin: 0 0 1rem;
  padding-left: 1.25rem;
  display: grid;
  gap: 0.4rem;
  color: ${({ theme }) => theme.colors.cardText};
  font-size: 1.06rem;
  line-height: 1.55;
`;

const HighlightItem = styled.li`
  margin: 0;
`;

const HighlightLabel = styled.span`
  display: inline;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 800;
  font-size: 1.06rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TechTag = styled.span`
  padding: 0.42rem 0.8rem;
  border-radius: 9999px;
  background: #fef3c7;
  color: #92400e;
  font-size: 0.88rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: auto;
  padding-top: 0.75rem;
`;

const ActionLink = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.1rem;
  border-radius: 0.85rem;
  text-decoration: none;
  font-weight: 800;
  border: 1px solid ${({ theme, $primary }) => ($primary ? theme.colors.primary : theme.colors.cardBorder)};
  background: ${({ theme, $primary }) => ($primary ? theme.colors.primary : 'rgba(255,255,255,0.92)')};
  color: ${({ $primary, theme }) => ($primary ? 'white' : theme.colors.text)};
  box-shadow: 0 10px 20px rgba(15, 23, 42, 0.06);
  transition: transform 0.18s ease, box-shadow 0.18s ease, background-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 26px rgba(15, 23, 42, 0.11);
  }
`;

const ArchitectureHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.7rem;
`;

const ArchitectureTitle = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.text};
`;

const ArchitectureActionLink = styled(ActionLink)`
  padding: 0.55rem 0.8rem;
  font-size: 0.99rem;
  box-shadow: none;
`;

const ArchitectureCaption = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.subtleText};
  font-size: 1.01rem;
  line-height: 1.5;
`;

const ArchitectureImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  background: rgba(255,255,255,0.92);
  object-fit: contain;
`;

const BottomProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

const BottomProjectCard = styled.div`
  padding: 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 1.5rem;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.98),
    rgba(248, 249, 250, 1)
  );
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.06);
`;

const SmallProjectTitle = styled.h3`
  margin: 0 0 0.6rem;
  font-size: clamp(1.35rem, 1.8vw, 1.8rem);
  line-height: 1.2;
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.text};
`;

const Projects: React.FC = () => {
  return (
    <SectionWrapper id="featured-projects">
      <Container>
        <SectionHeader>
          <Title>Featured Projects</Title>
        </SectionHeader>

        <FeaturedStack>
        <BottomProjectGrid>
          {/* VERITY LADDER */}
          <BottomProjectCard>
            <SmallProjectTitle>Verity Ladder: AI Code Verification Router</SmallProjectTitle>

            <ProjectSummary>
              VS Code extension that verifies every AI code change against the checks that apply and
              escalates to a paid model only when cheaper ones fail.
            </ProjectSummary>

            <Highlights>
              <HighlightItem>
                <HighlightLabel>Benchmark result:</HighlightLabel>{' '}
                A test-guided free model matched a frontier model (35/35 tests) at zero paid tokens, 5× faster
              </HighlightItem>
              <HighlightItem>
                <HighlightLabel>Routing ladder:</HighlightLabel>{' '}
                Starts at the cheapest capable model and escalates only after failed checks and developer approval
              </HighlightItem>
              <HighlightItem>
                <HighlightLabel>Mutation testing:</HighlightLabel>{' '}
                Injects bugs to reject weak AI-written tests, with automatic rollback of failed changes
              </HighlightItem>
            </Highlights>

            <TechList>
              {['TypeScript', 'VS Code API', 'Groq', 'Ollama', 'OpenAI'].map(tag => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </TechList>

            <ActionRow>
              <ActionLink href="https://github.com/jheel0802/Verity-Ladder" target="_blank" rel="noopener noreferrer" $primary>
                <Github size={16} /> GitHub
              </ActionLink>
            </ActionRow>
          </BottomProjectCard>

          {/* EVIDENCE AGENT */}
          <BottomProjectCard>
            <SmallProjectTitle>Grounded Document Evidence Agent</SmallProjectTitle>

            <ProjectSummary>
              Document-analysis system that extracts facts with full provenance, detects cross-source
              contradictions, and maintains a human-approved status brief.
            </ProjectSummary>

            <Highlights>
              <HighlightItem>
                <HighlightLabel>Grounded by design:</HighlightLabel>{' '}
                The LLM only extracts; app code owns IDs, provenance, conflict detection, and commits
              </HighlightItem>
              <HighlightItem>
                <HighlightLabel>Durable workflow:</HighlightLabel>{' '}
                Checkpointed LangGraph runs with restart, resume, and isolated concurrent runs
              </HighlightItem>
              <HighlightItem>
                <HighlightLabel>Tested:</HighlightLabel>{' '}
                48 tests covering prompt injection and stale-write protection
              </HighlightItem>
            </Highlights>

            <TechList>
              {['Python', 'FastAPI', 'LangGraph', 'pgvector', 'MCP'].map(tag => (
                <TechTag key={tag}>{tag}</TechTag>
              ))}
            </TechList>

            <ActionRow>
              <ActionLink href="https://github.com/jheel0802/doctask-jheel-gala" target="_blank" rel="noopener noreferrer" $primary>
                <Github size={16} /> GitHub
              </ActionLink>
            </ActionRow>
          </BottomProjectCard>
        </BottomProjectGrid>

        <FeatureShell>
          <FeatureGrid>
            <LeftPane>
              <ProjectTitle>Distributed LLM Evaluation Platform</ProjectTitle>
              <ProjectSummary>
                Evaluation infrastructure for reproducible testing of prompts, AI agents, and RAG pipelines.
              </ProjectSummary>

              <Highlights>
                <HighlightItem>
                  <HighlightLabel>Distributed execution:</HighlightLabel> Redis-backed job queue and asynchronous worker architecture.
                </HighlightItem>
                <HighlightItem>
                  <HighlightLabel>Regression testing:</HighlightLabel> Detects performance changes across models and prompt versions using standard and custom datasets.
                </HighlightItem>
                <HighlightItem>
                  <HighlightLabel>Experiment tracking:</HighlightLabel> Stores prompts, responses, latency, token usage, and evaluation metrics in PostgreSQL.
                </HighlightItem>
              </Highlights>

              <TechList>
                {['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Kubernetes'].map(tag => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </TechList>

            </LeftPane>

            <RightPane id="architecture">
              <ArchitectureHeading>
                <ArchitectureTitle>Architecture</ArchitectureTitle>
                <ArchitectureActionLink href="https://github.com/jheel0802/Distributed-LLM-Evaluation-Platform" target="_blank" rel="noopener noreferrer" $primary>
                  <Github size={16} /> GitHub
                </ArchitectureActionLink>
              </ArchitectureHeading>
              <ArchitectureImage
                src={distributedArchitecture}
                alt="Distributed LLM Evaluation Platform architecture"
              />
            </RightPane>
          </FeatureGrid>
        </FeatureShell>

        <FeatureShell>
          <FeatureGrid>
            <LeftPane>
              <ProjectTitle>AI Ops Copilot</ProjectTitle>
              <ProjectSummary>
                AI incident-response system that investigates noisy operational data and produces evidence-backed root-cause hypotheses and remediation steps.
              </ProjectSummary>

              <Highlights>
                <HighlightItem>
                  <HighlightLabel>Hybrid retrieval:</HighlightLabel> Searches logs and 1,200+ operational documents using vector, lexical, and metadata retrieval
                </HighlightItem>
                <HighlightItem>
                  <HighlightLabel>Agentic investigation:</HighlightLabel> Specialized LangGraph agents classify incidents, gather evidence, diagnose causes, and propose remediation
                </HighlightItem>
                <HighlightItem>
                  <HighlightLabel>Built-in evaluation:</HighlightLabel> Tests evidence coverage, noisy-log handling, fallback behavior, runtime, and hypothesis quality
                </HighlightItem>
              </Highlights>

              <TechList>
                {['FastAPI', 'React', 'LangGraph', 'PostgreSQL', 'Redis', 'Docker'].map(tag => (
                  <TechTag key={tag}>{tag}</TechTag>
                ))}
              </TechList>

            </LeftPane>

            <RightPane id="architecture">
              <ArchitectureHeading>
                <ArchitectureTitle>Working</ArchitectureTitle>
                <ArchitectureActionLink href="https://github.com/jheel0802/AI-Ops-Copilot" target="_blank" rel="noopener noreferrer" $primary>
                  <Github size={16} /> GitHub
                </ArchitectureActionLink>
              </ArchitectureHeading>

              <ArchitectureImage
                src={aiOpsScreenshot}
                alt="AI Ops Copilot working interface"
              />
            </RightPane>
          </FeatureGrid>
        </FeatureShell>

        <BottomProjectGrid>

    {/* GENERATIVE AI */}
    <BottomProjectCard>
      <SmallProjectTitle>
        Generative AI for Design Code Generation
      </SmallProjectTitle>

      <ProjectSummary>
        Multi-agent system that generates C++ cache-replacement algorithms
        and evaluates them against real CPU simulation workloads.
      </ProjectSummary>

      <Highlights>
        <HighlightItem>
          <HighlightLabel>Performance improvement:</HighlightLabel>{' '}
          65% → 95% parse/compile success
        </HighlightItem>

        <HighlightItem>
          <HighlightLabel>Workload evaluation:</HighlightLabel>{' '}
          10 CPU workloads evaluated
        </HighlightItem>

        <HighlightItem>
          <HighlightLabel>RAG ablations:</HighlightLabel>{' '}
          Excessive retrieval context degraded generated-policy
          performance by up to 8.9% IPC
        </HighlightItem>
      </Highlights>

      <TechList>
        {['Python', 'C++', 'RAG', 'LLM', 'Agents'].map(tag => (
          <TechTag key={tag}>{tag}</TechTag>
        ))}
      </TechList>

      <ActionRow>
        <ActionLink
          href="https://github.com/jheel0802/Generative-AI-for-Design-Code-Generation"
          target="_blank"
          rel="noopener noreferrer"
          $primary
        >
          <Github size={16} /> GitHub
        </ActionLink>
      </ActionRow>
    </BottomProjectCard>


    {/* CONVERSATION RISK */}
    <BottomProjectCard>
      <SmallProjectTitle>
        Real-Time Conversation Risk Detection
      </SmallProjectTitle>

      <ProjectSummary>
        Real-time conversation analysis with live transcripts, risk scoring, and contextual explanations.
      </ProjectSummary>

      <Highlights>
        <HighlightItem>
          <HighlightLabel>Real-time processing:</HighlightLabel>{' '}
          Process 4-second audio with 2–3s end-to-end latency
        </HighlightItem>

        <HighlightItem>
          <HighlightLabel>Rolling context:</HighlightLabel>{' '}
          Maintains conversation history for context in risk analysis        
          </HighlightItem>

        <HighlightItem>
          <HighlightLabel>Resilient detection:</HighlightLabel>{' '}
          Combines LLM analysis with deterministic rules during API
          failures or quota limits
        </HighlightItem>
      </Highlights>

      <TechList>
        {[
          'React',
          'FastAPI',
          'WebSockets',
          'Gemini',
          'ElevenLabs'
        ].map(tag => (
          <TechTag key={tag}>{tag}</TechTag>
        ))}
      </TechList>

      <ActionRow>
        <ActionLink
          href="https://github.com/jheel0802/scam-detection-app"
          target="_blank"
          rel="noopener noreferrer"
          $primary
        >
          <Github size={16} /> GitHub
        </ActionLink>

        <ActionLink
          href="https://scam-detection-app-lake.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          $primary
        >
         Try Demo
        </ActionLink>
      </ActionRow>
    </BottomProjectCard>

        </BottomProjectGrid>
        </FeaturedStack>
      </Container>
    </SectionWrapper>
  );
};

export default Projects;
