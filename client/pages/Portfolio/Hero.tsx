import { Github, Linkedin, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 bg-white dark:bg-slate-950">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2">
            Atharva Sonawane
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground">
            AI/ML Engineer | Full-Stack Developer | Published Researcher
          </p>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Computer Science Engineering student specializing in AI and Machine
          Learning. Published researcher with expertise in production-grade Python,
          deep learning, NLP, and scalable system architecture. Building
          intelligent systems that solve real problems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a
            href="#about"
            className="inline-block bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-900 transition-colors duration-200"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-block border border-gray-300 dark:border-gray-700 text-foreground px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
          <a
            href="https://www.linkedin.com/in/atharva-sonawane-664715352"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/ATHARVA9777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:atharvasonawane96@gmail.com"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Gmail- atharvasonawane96@gmail.com
          </a>
          <a
            href="tel:+919403771612"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Phone- +91 9403771612
          </a>
        </div>

        <div className="mt-12 text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Satara, Maharashtra, India</span>
        </div>
      </div>
    </section>
  );
}
