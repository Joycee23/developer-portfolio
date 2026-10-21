export const personalInfo = {
  name: "Nguyễn Đôn Quốc Tuấn",
  shortName: "Quốc Tuấn",
  initials: "QT",
  title: "AI Engineer | Full Stack Developer | Computer Vision Enthusiast",
  email: "tuannguyen211982@gmail.com",
  location: "Đà Nẵng, Vietnam",
  github: "https://github.com/Joycee23",
  linkedin: "https://www.linkedin.com/in/tuan-nguyen-don-quoc-45a249358/",
  facebook: "https://www.facebook.com/JerryNg04",
  resumeUrl: "/Nguyen_Don_Quoc_Tuan_CV.pdf",
};

export const typingRoles = [
  "AI Engineer",
  "Full Stack Developer",
  "Backend Developer",
  "Computer Vision Engineer",
];

export const aboutMe = {
  description:
    "Software Engineering student building computer vision and full-stack AI applications. My projects cover annotation quality control, retrieval-augmented generation, and evidence-based video review. I am currently collecting robot training data as an intern at VinRobotics and participating in the AI Thực Chiến program organized by Vingroup and VinUniversity.",
  details: [
    { label: "Name", value: "Nguyễn Đôn Quốc Tuấn" },
    { label: "Age", value: "22" },
    { label: "Education", value: "Bachelor of IT" },
    { label: "Major", value: "Software Engineering" },
    { label: "University", value: "Dong A University" },
    { label: "Status", value: "Final-year Student" },
    { label: "Interests", value: "AI, Web Dev, Computer Vision" },
    { label: "Career Goal", value: "AI Engineer & Full Stack Developer" },
  ],
  stats: [
    { label: "Years Learning", value: 4, suffix: "+" },
    { label: "Projects Completed", value: 15, suffix: "+" },
    { label: "Technologies", value: 20, suffix: "+" },
    { label: "GitHub Repos", value: 30, suffix: "+" },
  ],
};

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: [
      { name: "Java", level: 85 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 82 },
      { name: "Dart", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 88 },
      { name: "Next.js", level: 85 },
      { name: "React Native", level: 78 },
      { name: "Flutter", level: 72 },
      { name: "HTML/CSS", level: 92 },
      { name: "TailwindCSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Spring Boot", level: 80 },
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "NestJS", level: 75 },
      { name: "FastAPI", level: 82 },
      { name: "Django", level: 70 },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: "brain",
    skills: [
      { name: "Machine Learning", level: 82 },
      { name: "Deep Learning", level: 78 },
      { name: "Computer Vision", level: 85 },
      { name: "YOLOv8", level: 80 },
      { name: "OpenCV", level: 82 },
      { name: "TensorFlow", level: 75 },
      { name: "PyTorch", level: 72 },
    ],
  },
  {
    title: "Database",
    icon: "database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 88 },
      { name: "Supabase", level: 75 },
      { name: "Firebase", level: 78 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      { name: "Docker", level: 78 },
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "CI/CD", level: 70 },
      { name: "Linux", level: 75 },
      { name: "REST API", level: 90 },
    ],
  },
  {
    title: "Tools",
    icon: "wrench",
    skills: [
      { name: "VS Code", level: 95 },
      { name: "IntelliJ IDEA", level: 82 },
      { name: "Android Studio", level: 75 },
      { name: "Postman", level: 88 },
      { name: "Figma", level: 70 },
    ],
  },
];

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  image?: string;
  videoUrl?: string;
  github?: string;
  demo?: string;
  color: string;
  role?: string;
  status?: string;
  note?: string;
  workflow?: string[];
}

export const recentProjects: Project[] = [
  {
    title: "AI Support Operations",
    role: "Personal project",
    image: "/support-operations-preview.jpg",
    workflow: ["Knowledge base", "Retrieval", "Cited draft", "Human review"],
    description: "A multi-tenant support platform that drafts answers from an approved knowledge base, with citations and human escalation.",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "Gemini", "Docker"],
    features: [
      "Implemented document ingestion, embeddings, and RAG retrieval with PostgreSQL/pgvector.",
      "Generated response drafts with source citations for human review.",
      "Added ticket classification, prioritization, and human escalation.",
      "Implemented workspace-scoped access control and team management.",
    ],
    github: "https://github.com/Joycee23/AI-Support-Operations",
    color: "#818cf8",
  },
  {
    title: "IncidentLens",
    role: "Full-stack application",
    status: "Not yet runtime-validated",
    workflow: ["Video", "AI observations", "Evidence", "Reviewer approval"],
    description: "AI-assisted driving incident review using event logs, timelines, and video evidence.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "Supabase", "Gemini", "OpenCV", "Docker"],
    features: [
      "Integrated Gemini video analysis to generate timestamped observations linked to supporting evidence.",
      "Implemented engineer/reviewer roles and approval workflows for AI-generated findings.",
      "Integrated private video storage with temporary signed URLs.",
    ],
    note: "Implementation prototype. The application has not yet been run or validated. AI observations require human approval; model accuracy has not been established.",
    github: "https://github.com/Joycee23/RAV-18",
    color: "#818cf8",
  },
  {
    title: "Build Phase Model - Assisted QC",
    role: "AI Thực Chiến · Vingroup & VinUniversity",
    status: "Submitted project",
    workflow: ["Annotations", "Model checks", "Human review"],
    description: "Model-assisted annotation QC integrated into CVAT, flagging missed objects and incorrect class labels for review.",
    technologies: ["CVAT", "Computer Vision", "Object Detection", "Annotation QC"],
    features: [
      "Integrated model-assisted checks directly into the CVAT annotation workflow.",
      "Flagged missed objects and incorrect class labels for human review and correction.",
    ],
    color: "#818cf8",
  },
];

export const projects: Project[] = [
  {
    title: "Student Attendance System",
    description:
      "Developed an AI-powered student attendance management system using facial recognition technology. The platform enables lecturers to manage classes, record attendance automatically, generate reports, and monitor student attendance in real time through a modern web interface.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Swagger",
      "Docker",
      "Python",
      "Flask",
      "Face Recognition",
    ],
    features: [
      "Face Recognition",
      "Attendance Management",
      "REST API",
      "Authentication",
      "Dashboard",
      "Reports",
      "Docker Deployment",
    ],
    color: "#3B82F6",
    image: "/prj2.png",
    github: "https://github.com/Joycee23/student-attendance-systeam",
  },
  {
    title: "Vietnamese Traffic Sign Recognition",
    description:
      "Built a computer vision system capable of detecting and classifying Vietnamese traffic signs using YOLOv8. The system performs real-time inference on images and videos to support intelligent driver assistance and improve road safety.",
    technologies: ["Python", "YOLOv8", "OpenCV", "Deep Learning"],
    features: [
      "Real-time Detection",
      "Object Recognition",
      "Image Processing",
      "Video Detection",
      "AI Inference",
    ],
    color: "#06B6D4",
    image: "/traffic-sign-preview.jpg",
    github: "https://github.com/Joycee23/Traffic_Sign_Detection",
  },
  {
    title: "GPS Map Camera",
    description:
      "Developed a GPS Map Camera application that captures images together with location, weather, compass direction, address, altitude, and timestamp information. The project includes a mobile application and cloud backend for media management.",
    technologies: ["React Native", "Node.js", "MongoDB", "Supabase"],
    features: [
      "Camera",
      "GPS",
      "Weather API",
      "Cloud Storage",
      "Google Login",
      "Photo Gallery",
    ],
    color: "#8B5CF6",
    image: "/prj3.png",
  },
  {
    title: "Movie Recommendation System",
    description:
      "Designed an intelligent movie recommendation platform using content-based filtering techniques with TF-IDF and cosine similarity, providing personalized movie suggestions.",
    technologies: ["Flutter", "Flask", "Python", "Machine Learning"],
    features: [
      "Recommendation Engine",
      "Authentication",
      "TMDB API",
      "Movie Search",
      "Favorites",
    ],
    color: "#F59E0B",
    videoUrl: "/prj4.mp4",
    github: "https://github.com/Joycee23/Movie-RecommenDation",
  },
];

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const experienceTimeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Started Full Stack Development",
    description:
      "Began journey into full stack web development with modern technologies like React, Node.js, and cloud services.",
  },
  {
    year: "2025",
    title: "Built Student Attendance System",
    description:
      "Developed an AI-powered attendance management system using facial recognition technology with full stack architecture.",
  },
  {
    year: "2025",
    title: "Researched AI Computer Vision",
    description:
      "Started researching and developing a computer vision system for Vietnamese traffic sign recognition using YOLOv8.",
  },
  {
    year: "2026",
    title: "Award-Winning AI Project",
    description:
      "Successfully completed the traffic sign recognition system and won 3rd Prize in the University-level Student Scientific Research Competition. Continued deepening expertise in AI engineering.",
  },
];

export const education = {
  degree: "Information Technology Engineer",
  university: "Dong A University",
  major: "Software Engineering",
  status: "Final-year Student",
  period: "2022 - 2026",
};

export const certificates = [
  {
    name: "Python Programming",
    issuer: "Online Certification",
    icon: "award",
  },
  { name: "Machine Learning", issuer: "Online Certification", icon: "brain" },
  {
    name: "Deep Learning Fundamentals",
    issuer: "Online Certification",
    icon: "cpu",
  },
  {
    name: "Docker Essentials",
    issuer: "Online Certification",
    icon: "container",
  },
  { name: "SQL Database", issuer: "Online Certification", icon: "database" },
  { name: "Git & GitHub", issuer: "Online Certification", icon: "gitBranch" },
];

export const achievements = [
  { label: "Projects", value: 15, suffix: "+" },
  { label: "Technologies", value: 20, suffix: "+" },
  { label: "GitHub Contributions", value: 1000, suffix: "+" },
  { label: "AI Research Projects", value: 5, suffix: "+" },
  { label: "Full Stack Apps", value: 8, suffix: "+" },
];

export const services = [
  {
    title: "AI Development",
    description:
      "Building intelligent solutions using machine learning, deep learning, and computer vision technologies.",
    icon: "brain",
  },
  {
    title: "Web Development",
    description:
      "Creating modern, responsive web applications with React, Next.js, and cutting-edge frontend technologies.",
    icon: "globe",
  },
  {
    title: "Backend Development",
    description:
      "Designing scalable server-side architectures with Node.js, Spring Boot, and RESTful APIs.",
    icon: "server",
  },
  {
    title: "Computer Vision",
    description:
      "Developing real-time image and video processing systems using OpenCV, YOLO, and deep learning models.",
    icon: "eye",
  },
  {
    title: "Mobile Development",
    description:
      "Building cross-platform mobile applications with React Native and Flutter for iOS and Android.",
    icon: "smartphone",
  },
  {
    title: "API Development",
    description:
      "Crafting robust, documented RESTful APIs with authentication, validation, and comprehensive testing.",
    icon: "code",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const awards = [
  {
    title: "3rd Prize - Scientific Research",
    issuer: "Dong A University",
    description: "Awarded for the AI Computer Vision Traffic Sign Recognition System.",
    image: "/giaykhen.jpg"
  },
  {
    title: "Scientific Research Recognition",
    issuer: "Dong A University",
    description: "Recognition for the traffic sign recognition research project in the 2025-2026 academic year.",
    image: "/chungnhan.jpg"
  }
];


export const internships = [
  {
    company: "VinRobotics",
    role: "Intern",
    period: "07 Oct 2026 - 10 Dec 2026 (expected)",
    description: "Collect robot training data to support the development of robotics AI models.",
  },
  {
    company: "Hoang Long International Import-Export Company",
    role: "Full-stack Developer Intern",
    period: "29 Dec 2025 - 11 Apr 2026",
    location: "Cu Chi, Vietnam",
    description: "Developed web applications with React.js and Node.js, implemented RESTful APIs, and worked on database operations and authentication.",
  },
  {
    company: "Varmeta Technology Joint Stock Company",
    role: "Frontend Developer Intern",
    period: "01 May 2025 - 01 Aug 2025",
    location: "Da Nang, Vietnam",
    description: "Built frontend features with React and React Native, integrated backend APIs, and fixed UI issues under the guidance of senior developers.",
  },
];
