import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title:
        "CipherVault: Enterprise Secure Encryption & Digital Vault System",
      duration: "2025 – 2026",
      description:
        "Cybersecurity-focused desktop application providing secure encryption, confidential note management, encrypted QR code generation, user authentication, and activity tracking within a professional desktop environment.",
      highlights: [
        "Complete secure data management ecosystem combining cryptography, database management, and authentication",
        "Industry-standard encryption techniques for protecting sensitive information",
        "Encrypted QR code generation for secure data sharing",
        "User authentication and activity tracking for auditability",
        "Practical demonstration of secure software development practices and scalable Python application architecture",
      ],
      tech: [
        "Python",
        "Cryptography",
        "SQLite",
        "Tkinter",
        "Authentication",
        "QR Codes",
      ],
      impact:
        "Simulated real-world security platform showcasing enterprise-grade encryption and secure data management",
    },
    {
      title: "Django REST API Beginner Project",
      duration: "2025",
      description:
        "Django REST Framework API for a blog application, built to practice core backend concepts including models, serializers, viewsets, authentication, and permissions.",
      highlights: [
        "Full CRUD operations with custom permission classes restricting users to their own posts",
        "Search functionality across post titles and content",
        "Date-based filtering using django-filter",
        "Django's built-in authentication system with SQLite database",
        "DRF browsable API enabling easy testing without external tools",
      ],
      tech: [
        "Python",
        "Django",
        "Django REST Framework",
        "SQLite",
        "django-filter",
      ],
      impact:
        "Solid foundation in backend API development, authentication, and permission-based access control",
    },
    {
      title: "Smart Lab System (Campus Lab Management System)",
      duration: "2025 – 2026",
      description:
        "Full-stack, enterprise-grade solution automating physical workstation allocation, monitoring, and lab operations across academic institutions, built with a Django/ASGI web dashboard and a Tkinter-based kiosk daemon.",
      highlights: [
        "Real-time digital floor maps and automated workstation locking replacing manual lab registries",
        "Interval Overlap Validation Algorithm preventing double-booking of workstations",
        "Background client gathering hardware telemetry (CPU, RAM, active processes) and detecting idle inactivity",
        "Bulk CSV schedule imports for academic classes and live status sync via WebSockets",
        "Automated PDF/CSV report generation with security-focused kiosk controls and attendance tracking",
      ],
      tech: [
        "Python",
        "Django",
        "ASGI",
        "Tkinter",
        "WebSockets",
        "SQLite/PostgreSQL",
      ],
      impact:
        "Streamlined lab administration, maximized hardware utilization, and complete operational oversight across campus facilities",
    },
    {
      title: "CyberGuard: AI-Powered SOC Automation Tool",
      duration: "2025 – 2026",
      description:
        "AI-powered Security Operations Center (SOC) tool that autonomously triages security alerts, investigates incidents, and surfaces prioritised actions for lean security teams.",
      highlights: [
        "Autonomous triage of incoming security alerts to reduce analyst workload",
        "Automated incident investigation with context-aware findings",
        "Prioritized action recommendations tailored for small security teams",
        "Designed to scale security operations without proportionally scaling headcount",
      ],
      tech: ["Python", "AI/LLM Integration", "Security Automation", "APIs"],
      impact:
        "Enabled lean security teams to respond faster to alerts through AI-driven triage and prioritization",
    },
    {
      title: "Multi-Modal AI/ML Desktop Application",
      duration: "2024 – 2025",
      description:
        "Comprehensive desktop application integrating 6+ AI/ML models with asynchronous processing and real-time inference.",
      highlights: [
        "30 FPS real-time computer vision processing",
        "98% accuracy biometric authentication with DeepFace",
        "Specialized ML modules: admission prediction (92%), obesity classification, sentiment analysis",
        "60% latency reduction through GPU acceleration and model optimization",
      ],
      tech: [
        "Python",
        "OpenCV",
        "DeepFace",
        "TensorFlow",
        "customTkinter",
        "CUDA",
      ],
      impact:
        "Full-featured desktop AI application with multiple specialized ML models in unified GUI",
    },
    {
      title: "Automatic Number Plate Recognition (ANPR) System",
      duration: "2024 – 2025",
      description:
        "End-to-end real-time vehicle number plate recognition system using computer vision and CNNs. Published research paper.",
      highlights: [
        "94% plate detection accuracy, 91% character recognition accuracy",
        "25 FPS video stream processing",
        "Advanced image preprocessing with adaptive thresholding",
        "Integrated OCR with Tesseract for Indian number plates",
        "Published in IJRAR Journal (Vol 12, Issue 1, 2025)",
      ],
      tech: [
        "Python",
        "OpenCV",
        "Tesseract OCR",
        "TensorFlow",
        "SQL",
        "Image Processing",
      ],
      impact: "Published peer-reviewed research on novel ANPR methodology",
    },
    {
      title: "AI-Powered Healthcare Diagnostic Assistant",
      duration: "2024 – 2025",
      description:
        "Intelligent healthcare platform leveraging LLMs, computer vision, and NLP for medical assessments. Published research paper.",
      highlights: [
        "Multi-input interface: text, speech recognition (Whisper), medical image analysis",
        "Multi-language support for 10+ languages",
        "Integrated GROQ API for rapid LLM inference",
        "Explainable AI techniques for medical recommendations",
        "Published in IJSAT Journal (2025)",
      ],
      tech: [
        "Python",
        "GROQ API",
        "TensorFlow",
        "OpenAI Whisper",
        "NLP",
        "Computer Vision",
      ],
      impact:
        "Published research on AI-driven telemedicine and remote patient monitoring",
    },
    {
      title: "Full-Stack Web Development Projects",
      duration: "2024",
      description:
        "Multiple production-grade web applications built with React and Node.js demonstrating end-to-end development.",
      highlights: [
        "SPAs with React.js, Redux state management, React Hooks",
        "Scalable RESTful APIs with Node.js/Express and microservices",
        "JWT authentication, rate limiting, API versioning",
        "Third-party integrations: Stripe, OAuth 2.0, AWS S3, WebSockets",
        "95+ Lighthouse performance scores with lazy loading and CDN",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "Redux",
        "JavaScript",
        "REST APIs",
      ],
      impact:
        "Production-ready web applications with strong performance metrics",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          Key Projects & Research
        </h2>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="pb-10 border-b border-gray-200 dark:border-gray-800 last:border-b-0 last:pb-0"
            >
              <div className="mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                  <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {project.duration}
                  </span>
                </div>
                <p className="text-base text-muted-foreground mb-4">
                  {project.description}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-muted-foreground">
                      <span className="mr-3">→</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="inline-block px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded border border-gray-200 dark:border-gray-700">
                <p className="text-sm font-medium text-foreground">
                  <span className="font-semibold">Impact: </span>
                  {project.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
