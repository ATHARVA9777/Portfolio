import { Award, BookOpen, Users, Zap } from "lucide-react";

export default function Accomplishments() {
  const accomplishments = [
    {
      icon: BookOpen,
      title: "Published Researcher",
      description:
        "Authored 2 peer-reviewed research papers in reputed journals (IJRAR, IJSAT) on AI applications in computer vision and healthcare, demonstrating strong research methodology and technical writing skills.",
      focus: "Research & Publication",
    },
    {
      icon: Users,
      title: "Technical Leadership",
      description:
        "Successfully led multiple concurrent software development projects across AI/ML, full-stack development, and system design domains with cross-functional team collaboration.",
      focus: "Leadership",
    },
    {
      icon: Award,
      title: "IOFT Distinction Award",
      description:
        "Completed intensive AI/ML/DL internship with distinction, recognized for exceptional technical contributions, innovative solutions, and outstanding performance in research projects.",
      focus: "Excellence",
    },
    {
      icon: Zap,
      title: "Rapid Technology Adoption",
      description:
        "Successfully mastered 10+ programming languages, frameworks, and technologies within 2-year period, showcasing strong self-learning capabilities and adaptability to new tech stacks.",
      focus: "Learning Agility",
    },
  ];

  const certifications = [
    {
      name: "Advanced Java Programming & Spring Framework",
      provider: "Satish IT Services",
      details: "Enterprise Java development, Spring Boot, Hibernate ORM",
    },
    {
      name: "Machine Learning Specialization",
      provider: "DataCamp",
      details:
        "Supervised/Unsupervised Learning, Model Evaluation, Feature Engineering",
    },
    {
      name: "Python Programming & Data Science",
      provider: "DataCamp",
      details: "Advanced Python, Pandas, NumPy, Data Analysis",
    },
    {
      name: "SQL for Data Analysis",
      provider: "DataCamp",
      details:
        "Database design, Query optimization, Complex joins, Window functions",
    },
    {
      name: "Introduction to Artificial Intelligence & Neural Networks",
      provider: "DataCamp",
      details: "Deep Learning fundamentals, CNN, RNN",
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      provider: "DataCamp",
      details: "EC2, S3, Lambda, Cloud Architecture",
    },
    {
      name: "Prompt Engineering for Large Language Models",
      provider: "DataCamp",
      details: "LLM optimization, ChatGPT API, Prompt design",
    },
    {
      name: "Data Visualization with Python",
      provider: "Forage",
      details: "Matplotlib, Seaborn, Interactive dashboards",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          Accomplishments & Recognition
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Key Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accomplishments.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-foreground flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-lg mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {item.description}
                      </p>
                      <span className="inline-block text-xs font-medium text-foreground bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded">
                        {item.focus}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-8">
            Certifications & Professional Development
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <h4 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                  {cert.name}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-2">
                  {cert.provider}
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {cert.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
