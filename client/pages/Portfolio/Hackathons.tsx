import { Trophy } from "lucide-react";

export default function Hackathons() {
  const hackathons = [
    {
      name: "Orchathon 2K25",
      role: "Participant",
      description:
        "Solved complex algorithmic challenges and data structure problems in time-constrained competitive environment.",
    },
    {
      name: "Kurukshetra 2025 HackFest",
      role: "Participant",
      description:
        "Collaborated in cross-functional team to build full-stack application prototype using Agile sprint methodology and Git version control.",
    },
    {
      name: "HackCelestial 2025",
      role: "Participant",
      description:
        "Developed MVP solutions for real-world industry challenges, pitched to technical judges, received feedback on system architecture.",
    },
    {
      name: "Ideathon 2025",
      role: "Participant",
      description:
        "Presented innovative AI/ML solution concepts, created technical feasibility studies, and developed proof-of-concept implementations.",
    },
    {
      name: "Build-a-thon 2025",
      role: "Participant",
      description:
        "Executed rapid prototyping, implemented core features, performed code reviews, and delivered functional application within 24-hour deadline.",
    },
    {
      name: "MHTechin Idea Pitch Deck 2025",
      role: "Participant",
      description:
        "Presented technical solutions to industry experts and investors, demonstrated product demos, and received mentorship on scalability.",
    },
    {
      name: "Yashotech Fest Technical Competition",
      role: "Finalist (2023 & 2025)",
      description:
        "Recognized for technical excellence, innovative problem-solving, and outstanding performance in college-level coding competitions.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          Hackathons & Competitive Programming
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <div
              key={index}
              className="p-6 bg-slate-50 dark:bg-slate-900 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start gap-3 mb-3">
                <Trophy className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">
                    {hackathon.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {hackathon.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hackathon.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
