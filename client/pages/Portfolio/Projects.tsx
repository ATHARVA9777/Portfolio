import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
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
