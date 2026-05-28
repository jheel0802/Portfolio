
import type { Experience, Project, SkillGroup, Certification } from '../types';

export const CONTACT = {
  name: "JHEEL GALA",
  email: "jheel0802@gmail.com",
  github: "https://github.com/jheel0802",
  linkedin: "https://linkedin.com/in/jheel-gala-7496ab1b9",
  location: "North Carolina, USA"
};

export const SKILLS: SkillGroup[] = [
  { category: "Languages", skills: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "Bash", "PHP"] },
  { category: "AI & Machine Learning", skills: ["LLMs", "RAG", "NLP", "Computer Vision", "Reinforcement Learning", "Transformers", "Time Series Analysis", "Transfer Learning"] },
  { category: "Backend & APIs", skills: ["Node.js", "Express.js", "FastAPI", "Spring Boot", "WebSockets", "Microservices" ] },
  { category: "Frontend & Full Stack", skills: ["React", "Redux", "HTML", "CSS", "REST APIs", "Mapbox"] },
  { category: "Data Engineering & Analytics", skills: ["ETL", "Data Modeling", "Tableau", "Domo", "Feature Engineering"] },
  { category: "Cloud & DevOps", skills: ["AWS (EC2, S3, RDS, Lambda, CloudWatch)", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Serverless Architecture"] },
  { category: "Databases", skills: ["MongoDB", "PostgreSQL", "MySQL", "DynamoDB", "Snowflake", "Neo4j", "Redis"] },
  { category: "Security & Systems", skills: ["TCP/IP", "TLS/SSL", "VPNs", "VLANs", "Wireshark", "Cryptographic Protocols", "Static Program Analysis", "OWASP ZAP"] },
  { category: "Miscellaneous", skills: ["Git", "Linux", "Postman", "Selenium", "UiPath", "Kore.ai", "VS Code", "OCR Automation"] }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Graduate Assistant",
    company: "North Carolina State University",
    location: "Raleigh, NC",
    period: "May 2025 – May 2026",
    technologies: ["Python", "XGBoost", "FastDTW", "Machine Learning", "OCR"],
    points: [
      "Built a machine learning forecasting system on 210K+ smartphone sensor data points, achieving 0.776 accuracy for anxiety and depression prediction.",
      "Benchmarked 7 ML/DL architectures and optimized XGBoost for ultra-low latency inference (0.076 ms/sample).",
      "Improved prediction reliability for sparse user histories using FastDTW alignment and transfer learning techniques.",
      "Developed a cross-platform Python OCR automation pipeline for document extraction across macOS and Windows."
    ]
  },
  {
    role: "Software Intern",
    company: "Colgate Global Business Services",
    location: "Mumbai, India",
    period: "Jan 2024 – Jun 2024",
    technologies: ["JavaScript", "SQL", "Snowflake", "Domo", "UiPath", "Knowledge Graphs"],
    points: [
      "Built a RAG-powered enterprise chatbot integrated with Google Chat, reducing response time from hours to near-instant and saving 10+ hours/week.",
      "Engineered Snowflake ETL workflows and transformed nested API data into structured analytics pipelines.",
      "Designed and deployed 25+ Domo dashboards for KPI tracking, workflow monitoring, and operational insights.",
      "Automated processing for 400+ documents using UiPath Intelligent Document Processing."
    ]
  },
  {
    role: "Undergraduate Assistant",
    company: "Somaiya Vidyavihar University",
    location: "Mumbai, India",
    period: "Jan 2023 – Dec 2023",
    technologies: ["Python", "NLTK", "Scikit-learn", "CoreNLP", "NLP"],
    points: [
      "Conducted NLP research on coreference resolution and text understanding using Stanford CoreNLP.",
      "Built synthetic datasets and benchmarking pipelines to evaluate model performance across complex linguistic structures.",
      "Developed text classification models using NLTK and Scikit-learn, achieving 96% training accuracy.",
      "Performed error analysis to improve model robustness and generalization across unseen text patterns."
    ]
  },
  {
    role: "Software Intern",
    company: "Essenzaa Solutions Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Jun 2022 – Aug 2022",
    technologies: ["Python", "Random Forest", "REST APIs", "OCR"],
    points: [
      "Developed a Random Forest logistics pricing model achieving 80% test accuracy for shipment cost prediction.",
      "Integrated predictive models through REST APIs for internal and external logistics platforms.",
      "Built an OCR-based invoice extraction system achieving 92% extraction accuracy.",
      "Improved model scalability through preprocessing, feature engineering, and optimized training workflows."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Generative AI Code Generation",
    description: "Multi-agent LLM framework for automated C++ cache policy generation and optimization workflows.",
    tech: ["C++", "Python", "LLMs", "RAG", "AutoAgents", "Prompt Engineering"],
  },
  {
    title: "Real-Time AI Scam Detection",
    description: "Streaming AI platform for live scam detection using contextual risk classification pipelines.",
    tech: ["Python", "FastAPI", "Transformers", "REST APIs", "WebSockets"],
  },
  {
    title: "Enterprise RAG Chatbot System",
    description: "Enterprise chatbot integrated with internal knowledge systems for instant query resolution workflows.",
    tech: ["RAG", "Snowflake", "JavaScript", "Knowledge Graphs", "Google Chat", "CI/CD"],
  },
  {
    title: "Secure Banking Management System",
    description: "Secure banking platform with RBAC, session protection, and transaction-safe financial workflows.",
    tech: ["PHP", "MySQL", "Authentication", "Session Security", "SQL Validation"],
    category: "Full-Stack"
  },
  {
    title: "Microservices E-Commerce Platform",
    description: "Distributed e-commerce platform with containerized services and automated CI/CD deployment pipelines.",
    tech: ["Docker", "Jenkins", "CI/CD", "Microservices", "Kubernetes", "REST APIs"],
  },
  {
    title: "Travel Documentation Platform",
    description: "MERN-based travel platform with JWT authentication and geospatial document management features.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "React", "Mapbox"],
  }
];

export const CERTIFICATIONS: Certification[] = [
  { 
    name: "Google Data Analytics", 
    link: "https://coursera.org/share/8d0f7290749847bc5f79c6e13289453e" 
  },
  { 
    name: "Data Analysis with R", 
    link: "https://coursera.org/share/99afb438710a751fb3ff67e829e4c41d" 
  },
  { 
    name: "AWS Cloud Technical Essentials", 
    link: "https://coursera.org/share/c5e69ff03e4171e6e4b894278e93c267" 
  },
  { 
    name: "Google Cloud Engineering Certificate", 
    link: "https://www.credly.com/badges/ae0194ca-eb2b-424f-923a-71853b1a5f47/public_url" 
  },
  { 
    name: "Introduction to UI Design" 
  }
];
