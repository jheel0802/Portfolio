
import type { Experience, Project, SkillGroup } from '../types';

export const CONTACT = {
  name: "JHEEL GALA",
  email: "jheel0802@gmail.com",
  github: "https://github.com/jheel0802",
  linkedin: "https://linkedin.com/in/jheel-gala-7496ab1b9",
  location: "North Carolina, USA",
  resume: "https://drive.google.com/file/d/1WLUrlNd-Ogs5P0BgVyUYnrugJ6aO0gym/view?usp=sharing"
};

export const SKILLS: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "Shell", "Dart", "PHP"]
  },
  {
    category: "AI & LLMs",
    skills: ["LangGraph", "RAG", "Multi-Agent Systems", "LLM Evaluation", "MCP", "pgvector", "Knowledge Graphs", "OpenAI API", "Gemini", "Ollama"]
  },
  {
    category: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "Deep Learning", "Computer Vision", "Transfer Learning", "Reinforcement Learning", "Gymnasium", "NLP", "Time Series", "OpenCV"]
  },
  {
    category: "Data",
    skills: ["Pandas", "NumPy", "Snowflake", "ETL Pipelines", "Matplotlib", "Seaborn", "Tableau", "Domo"]
  },
  {
    category: "Frontend",
    skills: ["React", "Redux", "HTML", "CSS", "Mapbox", "Flutter"]
  },
  {
    category: "Backend & Databases",
    skills: ["FastAPI", "Node.js", "Express.js", "Spring Boot", "Flask", "REST APIs", "WebSockets", "Redis", "PostgreSQL", "MySQL", "MongoDB", "Neo4j", "DynamoDB"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "Linux"]
  },
  {
    category: "Security",
    skills: ["OWASP ZAP", "Burp Suite", "SonarQube", "SAST/DAST", "Static Taint Analysis", "Censys"]
  },
  {
    category: "Certifications",
    skills: [
      { name: "Google Data Analytics", link: "https://coursera.org/share/8d0f7290749847bc5f79c6e13289453e" },
      { name: "Data Analysis with R", link: "https://coursera.org/share/99afb438710a751fb3ff67e829e4c41d" },
      { name: "AWS Cloud Technical Essentials", link: "https://coursera.org/share/c5e69ff03e4171e6e4b894278e93c267" },
      { name: "Google Cloud Engineering Certificate", link: "https://www.credly.com/badges/ae0194ca-eb2b-424f-923a-71853b1a5f47/public_url" },
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Research Assistant",
    company: "North Carolina State University",
    location: "Raleigh, NC",
    period: "May 2025 – May 2026",
    technologies: [
      "Python",
      "XGBoost",
      "Reinforcement Learning",
      "Gymnasium",
      "OCR",
      "PyAutoGUI",
      "OpenClaw"
    ],
    points: [
      {
        label: "Behavioral Forecasting",
        text: "Ran the first large-scale ML study forecasting weekly student mental health (PHQ-4) from 210K+ sensor points, accepted at IEEE/ACM CHASE 2026."
      },
      {
        label: "Model Evaluation",
        text: "Reached 77.7% accuracy with generic XGBoost across 7 benchmarked model families, showing population models beat per-user personalization."
      },
      {
        label: "Reinforcement Learning",
        text: "Held 98% thermal-safety compliance with PPO and RecurrentPPO policies trained in a physics-informed livestock climate simulator across cold, hot, seasonal, and sick-animal regimes."
      },
      {
        label: "AI Automation",
        text: "Cut manual invoice work from 10 hours to 30 minutes with an OCR pipeline automating 7 formats, including extraction, validation, and failure recovery."
      }
    ]
  },

  {
    role: "Software Intern",
    company: "Colgate Global Business Services",
    location: "Mumbai, India",
    period: "Jan 2024 – Jun 2024",
    technologies: [
      "Snowflake",
      "SQL",
      "Domo",
      "JavaScript",
      "UiPath",
      "Kore.ai",
      "Knowledge Graphs"
    ],
    points: [
      {
        label: "Enterprise AI",
        text: "Cut support response from hours to under a minute, saving 10+ hrs/week, with a Kore.ai chatbot covering 500+ FAQs/intents across 6 teams."
      },
      {
        label: "Data Engineering",
        text: "Powered 21 Domo dashboards (200+ KPIs) monitoring 11 RPA bots with Snowflake SQL and ETL pipelines uniting 3 enterprise tools into 8 tables."
      },
      {
        label: "ETL",
        text: "Enabled reporting on previously unsupported automation data by normalizing variable-schema API responses into analytics-ready tables."
      },
      {
        label: "Automation",
        text: "Reduced manual testing and validation effort by automating document processing for 400+ files with UiPath IDP."
      }
    ]
  },

  {
    role: "Research Assistant",
    company: "Somaiya Vidyavihar University",
    location: "Mumbai, India",
    period: "Jan 2023 – Dec 2023",
    technologies: [
      "Python",
      "NLTK",
      "Scikit-learn",
      "CoreNLP",
      "NLP"
    ],
    points: [
      {
        label: "NLP Research",
        text: "Found systematic misclassification and missed-reference patterns in CoreNLP coreference through error analysis of 100+ synthetic and web-scraped sentences."
      },
      {
        label: "Classification",
        text: "Reached 96% training and 80% test accuracy with NLTK/scikit-learn text classifiers built on engineered features."
      }
    ]
  },

  {
    role: "Software Intern",
    company: "Essenzaa Solutions Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Jun 2022 – Aug 2022",
    technologies: [
      "Python",
      "Scikit-learn",
      "Random Forest",
      "REST APIs",
      "OCR"
    ],
    points: [
      {
        label: "Machine Learning",
        text: "Cut training time to 11 minutes for a Random Forest shipment-rate model, serving predictions through a REST API."
      },
      {
        label: "Model Evaluation",
        text: "Reached 96% training and 80% test accuracy, validating generalization for real-world cost forecasting."
      },
      {
        label: "OCR",
        text: "Reduced manual data-entry errors with OCR invoice text extraction at 92% accuracy."
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Verity Ladder: AI Code Verification Router",
    description:
      "VS Code extension that verifies every AI code change against tests and editor checks, routing each request to the cheapest capable model and escalating only when checks fail.",
    tech: ["TypeScript", "VS Code API", "Groq", "Ollama", "OpenAI"],
    categories: ["AI & LLMs", "Backend & Systems"],
    github: "https://github.com/jheel0802/Verity-Ladder"
  },

  {
    title: "Grounded Document Evidence Agent",
    description:
      "Document-analysis system that extracts facts with full provenance, detects cross-source contradictions, and maintains a human-approved status brief over a durable LangGraph workflow.",
    tech: ["Python", "FastAPI", "LangGraph", "pgvector", "MCP"],
    categories: ["AI & LLMs", "Backend & Systems"],
    github: "https://github.com/jheel0802/doctask-jheel-gala"
  },

  {
    title: "Distributed LLM Evaluation Platform",
    description:
      "Distributed evaluation infrastructure for reproducible testing of prompts, AI agents, and RAG pipelines, with asynchronous workers, experiment tracking, and automated regression detection.",
    tech: ["Python", "FastAPI", "Redis", "PostgreSQL", "Kubernetes"],
    categories: ["AI & LLMs", "Backend & Systems", "Cloud & Infrastructure"],
    github:
      "https://github.com/jheel0802/Distributed-LLM-Evaluation-Platform"
  },

  {
    title: "AI Ops Copilot",
    description:
      "AI-powered incident response platform using hybrid retrieval and specialized LangGraph agents to investigate noisy operational incidents and generate evidence-backed root-cause hypotheses.",
    tech: [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Redis",
      "RAG",
      "LangGraph",
      "Docker"
    ],
    categories: ["AI & LLMs", "Backend & Systems"],
    github:
      "https://github.com/jheel0802/ai-ops-copilot"
  },

  {
    title: "Generative AI for Design Code Generation",
    description:
      "Multi-agent LLM system that retrieves prior designs, generates C++ cache-replacement algorithms, and autonomously compiles and evaluates candidates using ChampSim.",
    tech: [
      "C++",
      "Python",
      "RAG",
      "LLMs",
      "AutoAgents",
      "ChampSim"
    ],
    categories: ["AI & LLMs", "Backend & Systems"],
    github:
      "https://github.com/jheel0802/Generative-AI-for-Design-Code-Generation"
  },

  {
    title: "Real-Time AI Conversation Risk Detection",
    description:
      "Real-time conversation monitoring system that transforms live audio into transcripts, continuously updated risk scores, and contextual explanations with rolling conversation state and graceful fallbacks.",
    tech: [
      "React",
      "FastAPI",
      "WebSockets",
      "Gemini",
      "ElevenLabs"
    ],
    categories: ["AI & LLMs", "Backend & Systems"],
    github:
      "https://github.com/jheel0802/scam-detection-app",
    demo:
      "https://scam-detection-app-lake.vercel.app/"
  },

  {
    title: "Real-Time Cloud Monitoring & Alerting Platform",
    description:
      "Cloud observability platform that collects metrics and logs, streams live operational data to a React dashboard, stores historical metrics, and surfaces threshold-based alerts.",
    tech: [
      "AWS CloudWatch",
      "Lambda",
      "DynamoDB",
      "Python",
      "React",
      "WebSockets"
    ],
    categories: [
      "Backend & Systems",
      "Cloud & Infrastructure"
    ]
  },

  {
    title: "Operating System Memory Management",
    description:
      "Implemented demand paging in Xinu with page-fault handling, on-demand page tables, per-process virtual heaps, and Second-Chance page replacement.",
    tech: [
      "C",
      "Xinu",
      "Virtual Memory",
      "Demand Paging"
    ],
    categories: [
      "Backend & Systems"
    ]
  },

  {
    title: "File System Defragmentation",
    description:
      "Built a C-based defragmentation engine that reconstructed raw Unix-style disk images and recursively relocated direct, single-, double-, and triple-indirect inode blocks.",
    tech: [
      "C",
      "File Systems",
      "Binary I/O",
      "Inodes"
    ],
    categories: [
      "Backend & Systems"
    ]
  },

  {
    title: "Process Management Algorithms",
    description:
      "Implemented two kernel-level CPU schedulers in Xinu, including Linux-inspired epoch scheduling and exponential probabilistic scheduling.",
    tech: [
      "C",
      "Xinu",
      "CPU Scheduling",
      "Kernel Programming"
    ],
    categories: [
      "Backend & Systems"
    ]
  },

  {
    title: "Used Car Price Prediction",
    description:
      "End-to-end regression pipeline for vehicle price prediction with data cleaning, feature engineering, missing-value handling, outlier processing, and an interactive exploration interface.",
    tech: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "Machine Learning"
    ],
    categories: ["Machine Learning"]
  },

  {
    title: "Women's Safety Data Insights",
    description:
      "Exploratory analysis and Tableau dashboard examining crime patterns across Indian states, years, and categories using geographic and trend visualizations.",
    tech: [
      "Tableau",
      "Data Visualization",
      "Exploratory Data Analysis"
    ],
    categories: ["Machine Learning"]
  },

  {
    title: "Tomato Disease Recognition",
    description:
      "Compared ResNet-50, ResNet-101, and ResNet-152 for tomato leaf disease recognition across 18,345 images, including real-world generalization testing.",
    tech: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "ResNet",
      "Transfer Learning"
    ],
    categories: ["Machine Learning"]
  },

  {
    title: "Satellite Image Segmentation for Deforestation",
    description:
      "Built a U-Net with a MobileNetV2 encoder to segment deforested regions in Sentinel-2 imagery using transfer learning and curated REDD+ satellite data.",
    tech: [
      "Python",
      "TensorFlow",
      "U-Net",
      "MobileNetV2",
      "Computer Vision"
    ],
    categories: ["Machine Learning"],
    github:
      "https://github.com/opheliasin/forest-image-segmentation"
  },

  {
    title: "Fantasy Cricket Team Optimizer",
    description:
      "ML-based recommendation and constrained optimization system that ranks cricket players and selects complete fantasy teams under budget and role constraints.",
    tech: [
      "Python",
      "Pandas",
      "Flask",
      "Machine Learning",
      "Dynamic Programming"
    ],
    categories: ["Machine Learning", "Backend & Systems"]
  },

  {
    title: "TravelLog: Full-Stack Geospatial Platform",
    description:
      "Full-stack MERN platform for creating and sharing geotagged trips with authenticated CRUD workflows and interactive Mapbox visualizations.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Mapbox"
    ],
    categories: [
      "Backend & Systems"
    ],
    github:
      "https://github.com/jheel0802/Travel-log"
  },

  {
    title: "AI-Powered Grammar Learning Platform",
    description:
      "Full-stack NLP learning platform that analyzes children's writing and provides contextual grammar and coreference feedback using Stanford CoreNLP.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "CoreNLP",
      "NLP"
    ],
    categories: ["Machine Learning", "Backend & Systems"]
  },

  {
    title: "E-Commerce Microservices Platform",
    description:
      "E-commerce backend composed of independently deployable customer, product, and order services with CI/CD, centralized logging, and monitoring.",
    tech: [
      "Microservices",
      "REST APIs",
      "Jenkins",
      "CI/CD",
      "Logging",
      "Monitoring"
    ],
    categories: [
      "Backend & Systems",
      "Cloud & Infrastructure"
    ]
  },

  {
    title: "Secure Online Banking System",
    description:
      "Full-stack banking application with authenticated account access, transaction workflows, RBAC, secure sessions, and server-side validation.",
    tech: [
      "PHP",
      "MySQL",
      "Authentication",
      "RBAC",
      "Session Management"
    ],
    categories: [
      "Backend & Systems",
      "Security"
    ]
  },

  {
    title: "Serverless Image Processing Pipeline",
    description:
      "Event-driven AWS pipeline that processes S3 image uploads through Lambda, stores metadata in DynamoDB, and monitors execution through CloudWatch.",
    tech: [
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "Python",
      "CloudWatch"
    ],
    categories: [
      "Backend & Systems",
      "Cloud & Infrastructure"
    ]
  },

  {
    title: "Reusable CI/CD Pipeline for ML Model Deployment",
    description:
      "Reusable deployment pipeline that packages ML models as Flask inference services, containerizes them with Docker, and deploys them to AWS EC2 through Jenkins.",
    tech: [
      "Jenkins",
      "Docker",
      "AWS EC2",
      "Python",
      "Flask"
    ],
    categories: ["Machine Learning", "Cloud & Infrastructure"]
  },

  {
    title: "OpenEMR Application Security Assessment",
    description:
      "End-to-end application security assessment using SAST, DAST, threat modeling, secret scanning, and OWASP ASVS Level 2 mapping.",
    tech: [
      "OWASP ZAP",
      "SonarQube",
      "SAST",
      "DAST",
      "OWASP ASVS"
    ],
    categories: [
      "Security"
    ]
  },

  {
    title: "Network Exposure & Vulnerability Analysis",
    description:
      "Python and Censys automation for enumerating internet-facing infrastructure, mapping assets to CIDR and ASN ranges, and analyzing exposed services.",
    tech: [
      "Python",
      "Censys",
      "IPv4",
      "CIDR",
      "ASN",
      "Vulnerability Assessment"
    ],
    categories: [
      "Security",
      "Cloud & Infrastructure"
    ]
  },

  {
    title: "Android Privacy Leak Detection",
    description:
      "Static taint analysis across Android applications to trace privacy-sensitive GPS and device-identifier data from sources to network and file sinks.",
    tech: [
      "Amandroid",
      "Static Taint Analysis",
      "Android Security",
      "Python"
    ],
    categories: [
      "Security"
    ]
  },

  {
    title: "Linux Application Sandbox Security",
    description:
      "Evaluated Flatpak sandbox isolation and compared X11 and Wayland security models, including a controlled X11 input-capture proof of concept.",
    tech: [
      "Linux",
      "Flatpak",
      "X11",
      "Wayland",
      "Application Isolation"
    ],
    categories: [
      "Security",
      "Backend & Systems"
    ]
  }
];