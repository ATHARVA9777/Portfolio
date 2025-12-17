export default function Skills() {
  const skillsCategories = [
    {
      category: "Programming Languages",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "C++",
        "SQL",
        "HTML5",
        "CSS3",
        "Bash/Shell",
      ],
    },
    {
      category: "AI/ML/DL Frameworks",
      skills: [
        "TensorFlow",
        "Keras",
        "PyTorch",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "Hugging Face Transformers",
        "LangChain",
        "OpenAI API",
        "GROQ",
      ],
    },
    {
      category: "Computer Vision & NLP",
      skills: [
        "OpenCV",
        "DeepFace",
        "YOLO",
        "BERT",
        "GPT",
        "LLMs",
        "Sentiment Analysis",
        "Named Entity Recognition (NER)",
        "Transfer Learning",
      ],
    },
    {
      category: "Data Science & Analytics",
      skills: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "SciPy",
        "Feature Engineering",
        "A/B Testing",
        "Statistical Modeling",
      ],
    },
    {
      category: "Web & Backend Development",
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Flask",
        "FastAPI",
        "APIs",
        "REST",
      ],
    },
    {
      category: "Databases & Big Data",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "SQL Query Optimization",
        "NoSQL",
        "Database Design",
      ],
    },
    {
      category: "DevOps & Cloud",
      skills: [
        "Git",
        "GitHub",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "AWS (EC2, S3, Lambda)",
        "Google Cloud Platform",
        "Jenkins",
        "MLOps",
      ],
    },
    {
      category: "Core Engineering Competencies",
      skills: [
        "Data Structures",
        "Algorithms",
        "Object-Oriented Design (OOD)",
        "System Design",
        "Design Patterns (SOLID)",
        "Test-Driven Development (TDD)",
        "Agile/Scrum",
        "Code Review",
        "Performance Optimization",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 uppercase tracking-wide">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="inline-block px-3 py-1.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 text-sm text-foreground rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
