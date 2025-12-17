import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "AI/ML/DL & Generative AI Engineer Intern",
      company: "IOFT",
      location: "Satara, Maharashtra, India",
      duration: "August 2025",
      highlights: [
        "Architected and deployed production-ready Agentic AI systems utilizing reinforcement learning and autonomous agent frameworks, reducing manual intervention by 40%",
        "Engineered deep learning models for generative AI using transformer architectures and attention mechanisms, achieving 25% performance improvement",
        "Implemented scalable end-to-end ML pipelines with automated data preprocessing, feature engineering, model training, and CI/CD workflows",
        "Conducted research on state-of-the-art neural network architectures including Vision Transformers (ViT), BERT, GPT variants, and diffusion models",
        "Completed internship with distinction, recognized for exceptional technical contributions",
      ],
    },
    {
      role: "User Experience Designer & Frontend Developer Intern",
      company: "Cognifyz Technologies",
      location: "Satara, Maharashtra, India",
      duration: "November 2024 – December 2024",
      highlights: [
        "Executed comprehensive UX research leveraging user analytics, heatmaps, and A/B testing to identify pain points",
        "Delivered actionable UX recommendations that increased user engagement by 30% and reduced bounce rates",
        "Researched emerging UI/UX design trends including Material Design 3.0 and WCAG 2.1 accessibility standards",
        "Created high-fidelity user personas, customer journey maps, and clickable prototypes",
        "Applied human-centered design principles and responsive design patterns for ARIA compliance",
      ],
    },
    {
      role: "Software Development Engineer Intern - Python",
      company: "CodSoft",
      location: "Satara, Maharashtra, India",
      duration: "August 2024",
      highlights: [
        "Developed production-grade Python applications using OOP paradigms and PEP 8 style guidelines",
        "Implemented SOLID principles and Gang of Four design patterns for maintainable systems",
        "Optimized application performance by 50% through algorithmic improvements and efficient data structures",
        "Participated in collaborative code reviews and contributed to technical documentation using Sphinx",
      ],
    },
    {
      role: "Full-Stack Web Development Intern",
      company: "CodSoft",
      location: "Satara, Maharashtra, India",
      duration: "July 2024 – August 2024",
      highlights: [
        "Architected and developed responsive SPAs using React.js, Redux, and modern ES6+ JavaScript",
        "Built scalable RESTful APIs with Node.js/Express and implemented JWT authentication",
        "Integrated third-party services: Stripe, OAuth 2.0, AWS S3, WebSockets",
        "Achieved 95+ Lighthouse scores through lazy loading, code splitting, and CDN integration",
        "Implemented Git workflows and GitHub Actions for automated testing and deployment",
      ],
    },
    {
      role: "Backend Software Engineer Intern - Java",
      company: "CodSoft",
      location: "Satara, Maharashtra, India",
      duration: "July 2024 – August 2024",
      highlights: [
        "Developed enterprise-grade Java applications with Spring Boot, Hibernate ORM, and JPA",
        "Implemented advanced data structures and optimized algorithms with O(n log n) time complexity",
        "Designed normalized relational database schemas (3NF) and optimized SQL queries",
        "Established comprehensive testing frameworks using JUnit 5, Mockito with 95% code coverage",
        "Created detailed API specifications (Swagger/OpenAPI) and architecture diagrams (UML)",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          Professional Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="pb-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 text-foreground">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-base font-medium text-foreground mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exp.location}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground">
                        <span className="mr-3">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
