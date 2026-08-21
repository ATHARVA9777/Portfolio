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
            I'm an AI/ML Engineer specializing in Agentic AI, Generative AI, and
            Large Language Models (LLMs) — building production-grade systems,
            not just notebooks and demos. My focus is machine learning, deep
            learning, NLP, and computer vision applied to real problems,
            especially healthcare AI and accessibility tech, where the gap
            between an impressive demo and a system people actually use matters
            most. I reached this point before finishing my Computer Science
            Engineering degree.
          </p>

          <p>
            I built an agentic AI pipeline combining LLM integration with
            reinforcement learning that cut manual workflow time by 40%, and a
            computer vision face recognition system running at 98% accuracy
            with 60% lower inference latency through model quantization. That
            work is backed by two peer-reviewed papers on AI-driven diagnostics
            and computer vision.
          </p>

          <p>
            What I've built includes multilingual AI healthcare assistants
            (Hindi, English, Marathi) using NLP, speech recognition (Whisper),
            and computer vision for real-time diagnostics; a real-time ANPR
            system at 94% detection accuracy using optimized OCR and
            preprocessing pipelines; end-to-end ML pipelines with automated
            training, validation, and CI/CD deployment via Docker; and
            transformer-based generative models (BERT, GPT, ViT, diffusion)
            optimized for 25% faster inference through quantization.
          </p>

          <p>
            My path has been hands-on across AI/ML engineering (IOFT), frontend
            development (Digital Tokri), backend engineering (CodSoft — Python
            and Java), and UX design (Cognifyz) — giving me a rare full-stack
            view of how AI systems actually get built, shipped, and used. I
            also lead as Cisco Committee President, running technical events
            for 200+ participants.
          </p>

          <p>
            I care about responsible AI that works outside the lab — systems
            that are fast, accurate, and usable by real people, not just
            accurate on a benchmark. I'm open to full-time AI/ML Engineer,
            Machine Learning Engineer, and Software Engineer roles.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {[
            "Python",
            "TensorFlow",
            "PyTorch",
            "Hugging Face",
            "LangChain",
            "AWS (EC2, S3, Lambda, SageMaker)",
            "Kubernetes",
            "React.js",
            "FastAPI",
            "MongoDB",
            "PostgreSQL",
          ].map((tool) => (
            <span
              key={tool}
              className="inline-block px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-xs text-foreground rounded"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
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
              40%
            </div>
            <p className="text-sm text-muted-foreground">
              Workflow Time Cut via Agentic AI
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              98%
            </div>
            <p className="text-sm text-muted-foreground">
              Face Recognition Accuracy
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
        </div>
      </div>
    </section>
  );
}
