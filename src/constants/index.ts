
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
      { text: "First large-scale ML study forecasting student mental health from 210K+ sensor points, accepted at IEEE/ACM CHASE 2026" },
      { text: "77.7% accuracy with XGBoost, best of 7 model families" },
      { text: "98% thermal-safety compliance with PPO policies in a livestock climate simulator" },
      { text: "Cut invoice processing from 10 hours to 30 minutes with OCR automation" }
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
      { text: "Cut support response from hours to under a minute with a 500+ intent chatbot, saving 10+ hrs/week" },
      { text: "Built Snowflake ETL powering 21 Domo dashboards (200+ KPIs) across 11 RPA bots" },
      { text: "Automated processing of 400+ documents with UiPath IDP" }
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
      { text: "Found systematic coreference failure patterns in CoreNLP across 100+ sentences" },
      { text: "Built text classifiers reaching 80% test accuracy" }
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
      { text: "Shipment-rate model at 80% test accuracy, served through a REST API" },
      { text: "OCR invoice extraction at 92% accuracy" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Verity Ladder: AI Code Verification Router",
    description:
      "Tests every AI code change and escalates to a paid model only when free ones fail.",
    tech: ["TypeScript", "VS Code API", "Groq", "Ollama", "OpenAI"],
    categories: ["AI & LLMs", "Backend & Systems"],
    github: "https://github.com/jheel0802/Verity-Ladder"
  },

  {
    title: "Grounded Document Evidence Agent",
    description:
      "Extracts document facts with provenance and flags cross-source contradictions.",
    tech: ["Python", "FastAPI", "LangGraph", "pgvector", "MCP"],
    categories: ["AI & LLMs", "Backend & Systems"],
    github: "https://github.com/jheel0802/doctask-jheel-gala"
  },

  {
    title: "Distributed LLM Evaluation Platform",
    description:
      "Reproducible, distributed evaluation for prompts, agents, and RAG pipelines.",
    tech: ["Python", "FastAPI", "Redis", "PostgreSQL", "Kubernetes"],
    categories: ["AI & LLMs", "Backend & Systems", "Cloud & Infrastructure"],
    github:
      "https://github.com/jheel0802/Distributed-LLM-Evaluation-Platform"
  },

  {
    title: "AI Ops Copilot",
    description:
      "LangGraph agents that turn noisy incident data into root-cause hypotheses.",
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
      "Agents that generate C++ cache policies and test them in ChampSim.",
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
      "Live scam-call detection with transcripts, risk scores, and explanations.",
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
      "Streams live metrics to a React dashboard with threshold alerts.",
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
      "Demand paging in Xinu with Second-Chance page replacement.",
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
      "C engine that defragments raw Unix disk images across indirect inodes.",
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
      "Two kernel CPU schedulers in Xinu that prevent starvation.",
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
      "Regression pipeline and app that predicts used-car prices.",
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
      "Tableau dashboard of crime trends across Indian states, 2008 to 2012.",
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
      "ResNet comparison on 18,345 leaf images, tested on real field photos.",
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
      "U-Net that maps deforestation in Sentinel-2 satellite imagery.",
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
      "Ranks players with ML and picks teams with knapsack optimization.",
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
      "MERN app for sharing geotagged trips on interactive maps.",
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
      "Gives children real-time grammar feedback using CoreNLP.",
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
      "Independently deployable services with Jenkins CI/CD and monitoring.",
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
      "Banking app with RBAC, secure sessions, and audit trails.",
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
      "Event-driven AWS pipeline that processes S3 image uploads.",
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
      "Jenkins pipeline that ships ML models to EC2 as Docker services.",
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
      "Found 12+ vulnerabilities in OpenEMR, mapped to OWASP ASVS.",
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
      "Python and Censys automation mapping exposed internet services.",
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
      "Static taint analysis tracing privacy leaks in 25+ Android apps.",
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
      "Tested Flatpak isolation with an X11 input-capture proof of concept.",
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