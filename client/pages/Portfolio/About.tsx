export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          About
        </h2>

        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a results-driven Computer Science Engineering student with deep
            expertise in Artificial Intelligence and Machine Learning. My work
            spans production-grade Python development, deep learning model
            optimization, natural language processing, and scalable system
            architecture.
          </p>

          <p>
            I've published peer-reviewed research in computer vision and
            healthcare AI systems, demonstrating my commitment to advancing the
            field through rigorous scientific work. My hands-on experience
            includes building end-to-end ML pipelines, deploying neural networks
            at scale, and implementing MLOps best practices in production
            environments.
          </p>

          <p>
            Beyond traditional software engineering, I have a strong foundation
            in distributed systems, algorithm optimization, cloud infrastructure
            (AWS), and microservices architecture. I'm particularly passionate
            about transformer models, real-time inference systems, and edge
            computing applications.
          </p>

          <p>
            As an active contributor to open-source projects and competitive
            programming platforms, I'm seeking SWE/ML Engineer 2026 internship
            opportunities at top-tier technology companies where I can
            contribute meaningfully to solving complex technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              2
            </div>
            <p className="text-sm text-muted-foreground">
              Peer-Reviewed Research Papers
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              6+
            </div>
            <p className="text-sm text-muted-foreground">
              Hackathons & Competitions
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              10+
            </div>
            <p className="text-sm text-muted-foreground">
              Programming Languages & Frameworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
