
import { Experience, Project, SkillGroup, Certification } from './types';

export const CONTACT = {
  name: "JHEEL GALA",
  email: "jheel0802@gmail.com",
  github: "https://github.com/jheel0802",
  linkedin: "https://linkedin.com/in/jheel-gala-7496ab1b9",
  location: "North Carolina, USA"
};

export const SKILLS: SkillGroup[] = [
  { category: "Languages", skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL", "Shell Scripting", "Dart", "PHP"] },
  { category: "Web & Full-Stack", skills: ["React", "Redux", "Node.js", "Express.js", "HTML", "CSS", "REST APIs", "Spring Boot", "MERN Stack", "Mapbox"] },
  { category: "AI & Machine Learning", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP", "LLM", "RAG", "Knowledge Graphs"] },
  { category: "Cloud & DevOps", skills: ["AWS (EC2, S3, RDS, Lambda)", "Google Cloud", "Docker", "Jenkins", "CI/CD", "Git", "Linux", "Serverless"] },
  { category: "Databases", skills: ["MongoDB", "Snowflake", "PostgreSQL", "Neo4j", "DynamoDB"] }
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Graduate Assistant",
    company: "North Carolina State University",
    location: "North Carolina, USA",
    period: "May 2025 – Present",
    technologies: ["Python", "XGBoost", "FastDTW", "Machine Learning", "OCR Automation", "AppKit", "PyAutoGUI"],
    points: [
      "Engineered a mental health forecasting system for longitudinal datasets, attaining 0.776 accuracy in PHQ-4 anxiety and depression prediction by distilling 35 raw smartphone signals into high-level behavioral scores.",
      "Optimized model architecture by designing a single-stage pipeline that outperformed traditional two-stage methods by 8.9%, utilizing FastDTW alignment to stabilize predictions for users with sparse historical data.",
      "Benchmarked seven ML/DL architectures to identify XGBoost as the performance leader, while optimizing a linear regression variant for ultra-low latency inference (0.076ms per sample).",
      "Architected a cross-platform Python automation suite utilizing a Manager/Worker pattern to isolate OS-specific drivers (AppKit/PyAutoGUI), enabling self-healing OCR data extraction across macOS and Windows."
    ]
  },
  {
    role: "Software Intern",
    company: "Colgate Global Business Services",
    location: "Mumbai, India",
    period: "Jan 2024 – June 2024",
    technologies: ["SQL (Snowflake)", "Domo", "JavaScript", "RPA (UiPath)", "Knowledge Graphs", "CI/CD"],
    points: [
      "Developed a RAG-powered JavaScript chatbot integrated with Google Chat and enterprise knowledge graphs, reducing response latency from 2 hours to near-instant and reclaiming 10+ hours per week for the team.",
      "Engineered automated document processing pipelines for 400+ complex files using UiPath Intelligent Document Processing (IDP), significantly reducing manual validation overhead and testing effort.",
      "Restructured raw API data within Snowflake to enhance data reliability and deployed 25+ Domo dashboards to monitor real-time KPIs, bot health, and workflow throughput for executive stakeholders.",
      "Partnered with cross-functional teams to translate business requirements into actionable metrics, utilizing descriptive analysis in SQL to uncover cost-saving opportunities and system bottlenecks."
    ]
  },
  {
    role: "Undergraduate Assistant",
    company: "Somaiya Vidyavihar University",
    location: "Mumbai, India",
    period: "Jan 2023 – Dec 2023",
    technologies: ["Python", "NLTK", "scikit-learn", "CoreNLP", "Feature Extraction", "Text Classification"],
    points: [
      "Investigated performance gaps in coreference resolution using Stanford CoreNLP, identifying and cataloging misclassified linguistic patterns to improve the precision of automated text understanding.",
      "Synthesized artificial datasets to simulate complex sentence structures, facilitating both qualitative and quantitative benchmarking for institutional NLP research initiatives.",
      "Developed robust text classification models using NLTK and Scikit-learn, reaching a 96% training accuracy through rigorous feature extraction and scaling techniques.",
      "Conducted deep-dive error analysis on misclassified patterns to provide actionable insights for improving the robustness and generalizability of natural language processing pipelines."
    ]
  },
  {
    role: "Software Intern",
    company: "Essenzaa Solutions Pvt. Ltd.",
    location: "Mumbai",
    period: "June 2022 – Aug 2022",
    technologies: ["Python", "scikit-learn", "Random Forest", "RESTful API", "OCR", "Data Preprocessing"],
    points: [
      "Designed a Random Forest-based logistics forecasting model to predict shipment rates, optimizing the training pipeline to process high-velocity data in under 11 minutes.",
      "Integrated predictive models into production environments via RESTful APIs, facilitating seamless interoperability between internal databases and external logistics platforms.",
      "Developed an OCR-driven invoice processing module achieving 92% extraction accuracy, effectively mitigating manual entry errors and streamlining financial workflows.",
      "Refined model generalizability through advanced preprocessing and feature selection, maintaining a strong 80% test accuracy on real-world cost forecasting datasets."
    ]
  }
];

export const PROJECTS: Project[] = [
  // SYSTEMS
  {
    title: "Memory Management in OS",
    description: [
      "Implemented virtual memory mapping and dynamic memory allocation in Xinu OS.",
      "Optimized resource utilization using user-level virtual memory heap management.",
      "Managed process-specific memory and kernel-space isolation for system stability."
    ],
    tech: ["Xinu OS", "C", "Virtual Memory", "Heap Management"],
    category: "Systems"
  },
  {
    title: "File System Defragmentation",
    description: [
      "Processed disk images using binary I/O to reorganize data for faster file access.",
      "Restructured free block lists and inode mappings to reduce fragmentation.",
      "Relocated blocks while maintaining file system integrity across multiple pointer levels."
    ],
    tech: ["C", "File Systems", "Memory Management", "Disk I/O"],
    category: "Systems"
  },
  {
    title: "Process Management Algorithms",
    description: [
      "Developed exponential distribution function for priority-based process selection.",
      "Incorporated round-robin mechanism within priority groups for efficient CPU usage.",
      "Applied Linux-like scheduling with dynamic time quantum adjustments."
    ],
    tech: ["C", "Linux Scheduling", "OS Concepts"],
    category: "Systems"
  },

  // AI/ML
  {
    title: "Generative AI for Code Generation",
    description: [
      "Built agentic optimization pipeline to generate C++ cache replacement policies.",
      "Designed multi-agent workflows reducing per-job cost significantly ($0.04–$0.10).",
      "Ran ablation studies on RAG memory depth and simulator-based rewards."
    ],
    tech: ["C++", "Python", "RAG", "LLMs", "CacheForge", "SPEC CPU 2006"],
    category: "AI/ML"
  },
  {
    title: "Vehicle Price Forecasting",
    description: [
      "Collected and cleaned dataset performing feature engineering on age, mileage, and brand.",
      "Developed ML regression model to predict car prices with high robustness.",
      "Designed interactive dashboard to visualize price trends and market insights."
    ],
    tech: ["Python", "Pandas", "Scikit-Learn", "Machine Learning"],
    category: "AI/ML"
  },
  {
    title: "Custom CNN for Crop Disease",
    description: [
      "Built deep learning pipeline for tomato leaf disease detection with 96% accuracy.",
      "Used transfer learning on 18,345 images with extensive data augmentation.",
      "Analyzed Precision, Recall, and F1-score for real-world generalizability."
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "ResNet", "OpenCV"],
    category: "AI/ML"
  },
  {
    title: "Satellite Image Segmentation",
    description: [
      "Built U-Net model with MobileNetV2 encoder to identify deforested regions.",
      "Curated 1,500+ Sentinel-2 images and created binary masks for training.",
      "Achieved IoU 0.443 through selective layer unfreezing and k-fold cross-validation."
    ],
    tech: ["Python", "PyTorch", "U-Net", "MobileNetV2", "Sentinel-2"],
    category: "AI/ML"
  },
  {
    title: "Fantasy Cricket Team Optimizer",
    description: [
      "Developed ML-based web app to optimize team selection within budget limits.",
      "Modeled player synergies as graph structures using NetworkX.",
      "Automated real-time player stats updates via web scraping."
    ],
    tech: ["Python", "NetworkX", "Pandas", "Flask", "Scraping"],
    category: "AI/ML"
  },
  {
    title: "Women’s Safety Data Insights",
    description: [
      "Analyzed 2008–2012 crime data to enable trend and pattern identification.",
      "Built interactive Tableau dashboard to visualize crime geography and types.",
      "Supported policy decisions by highlighting high-risk regions."
    ],
    tech: ["Python", "Pandas", "Tableau", "Data Visualization"],
    category: "AI/ML"
  },

  // FULL-STACK
  {
    title: "Scalable Travel Documentation",
    description: [
      "Engineered collaborative travel logging platform with secure JWT authentication.",
      "Built dynamic React frontend with Redux and integrated Mapbox for geospatial viz.",
      "Configured MongoDB Atlas for scalable storage and optimized retrieval."
    ],
    tech: ["MongoDB", "Express", "React", "Node", "Redux", "Mapbox"],
    category: "Full-Stack"
  },
  {
    title: "NLP Grammar Tool (MERN)",
    description: [
      "Developed interactive web app for children's grammar practice with real-time feedback.",
      "Integrated Stanford CoreNLP for coreference resolution and syntactic parsing.",
      "Implemented backend APIs for storing results and progress tracking."
    ],
    tech: ["MERN Stack", "Stanford CoreNLP", "REST APIs"],
    category: "Full-Stack"
  },
  {
    title: "Microservices E-commerce",
    description: [
      "Built platform with microservices for customer, product, and order management.",
      "Implemented CI/CD pipelines using Jenkins for automated testing.",
      "Added monitoring and logging to track performance and scalability."
    ],
    tech: ["Microservices", "CI/CD", "Jenkins", "REST APIs"],
    category: "Full-Stack"
  },
  {
    title: "Secure Web-Based Banking",
    description: [
      "Implemented secure authentication, session handling, and RBAC.",
      "Developed transaction processing with strong input validation and error handling.",
      "Designed modular PHP backend for high security and maintainability."
    ],
    tech: ["PHP", "MySQL", "Authentication", "Security"],
    category: "Full-Stack"
  },
  {
    title: "Order Management System",
    description: [
      "Developed desktop-based system with modules for customers and products.",
      "Implemented full CRUD operations and inventory update triggers.",
      "Designed intuitive UI to improve daily operational workflows."
    ],
    tech: ["Python", "Tkinter", "CRUD", "UI Design"],
    category: "Full-Stack"
  },
  {
    title: "Lava: Wordle-style Game",
    description: [
      "Developed Flutter game with dynamic word generation and difficulty levels.",
      "Implemented real-time color-based feedback and smooth animations.",
      "Structured game logic for high replayability and state efficiency."
    ],
    tech: ["Flutter", "Dart", "Game Logic", "Mobile UI"],
    category: "Full-Stack"
  },

  // CLOUD/DEVOPS
  {
    title: "Cloud Real-Time Dashboard",
    description: [
      "Developed dashboard on AWS visualizing system KPIs using WebSockets.",
      "Stored and queried historical data in DynamoDB for trend analysis.",
      "Designed alerting system for threshold breaches using CloudWatch."
    ],
    tech: ["AWS", "Lambda", "DynamoDB", "CloudWatch", "React"],
    category: "Cloud/DevOps"
  },
  {
    title: "Serverless Image Pipeline",
    description: [
      "Designed pipeline to ingest, resize, and tag images via AWS Lambda.",
      "Eliminated infrastructure overhead through scalable serverless execution.",
      "Stored image metadata in DynamoDB for near real-time retrieval."
    ],
    tech: ["AWS Lambda", "S3", "DynamoDB", "Python"],
    category: "Cloud/DevOps"
  },
  {
    title: "CI/CD for ML Deployment",
    description: [
      "Built automated Jenkins pipeline for testing and deploying models to EC2.",
      "Containerized ML models with Docker for consistent runtime environments.",
      "Integrated unit tests to validate model predictions before deployment."
    ],
    tech: ["Jenkins", "Docker", "AWS EC2", "Flask"],
    category: "Cloud/DevOps"
  },
  {
    title: "Multi-Region File Backup",
    description: [
      "Developed automated backup system with S3 Cross-Region Replication.",
      "Scheduled Python scripts via Cron for periodic sync and durability.",
      "Implemented failure detection and notification via CloudWatch."
    ],
    tech: ["AWS S3", "Python", "Boto3", "CloudWatch"],
    category: "Cloud/DevOps"
  },

  // SECURITY
  {
    title: "Network Security Analysis",
    description: [
      "Conducted IPv4 audits using Censys.io API for CIDR/ASN mapping.",
      "Automated host screening across multiple network ranges via Python.",
      "Identified critical vulnerabilities including exposed services and outdated software."
    ],
    tech: ["Python", "Censys API", "Networking", "Vulnerability Assessment"],
    category: "Security"
  },
  {
    title: "Application Sandbox Testing",
    description: [
      "Analyzed Flatpak sandboxing focusing on permission models and isolation.",
      "Developed POC X11 keylogger to demonstrate GUI security loopholes.",
      "Compared X11 and Wayland security models for attack surface impact."
    ],
    tech: ["Linux", "Flatpak", "Wayland", "Security Analysis"],
    category: "Security"
  },
  {
    title: "Mobile Privacy Leak Detection",
    description: [
      "Conducted static taint analysis on 25+ Android apps using Amandroid.",
      "Tracked data flow between sensitive sources and network/file sinks.",
      "Built visualization pipeline to highlight privacy leakage trends."
    ],
    tech: ["Android Security", "Taint Analysis", "Python", "Amandroid"],
    category: "Security"
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
