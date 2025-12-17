import { GraduationCap } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      school: "Yashoda Technical Campus",
      location: "Wadhe, Satara, Maharashtra",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2022 – 2026",
      details: "CGPA: 7.0/10.0",
      coursework:
        "Machine Learning, Artificial Intelligence, Deep Learning, Computer Vision, Natural Language Processing, Data Structures & Algorithms, Operating Systems, Database Management Systems, Object-Oriented Programming, Software Engineering, Distributed Systems, Cloud Computing",
    },
    {
      school: "Yashwantrao Chavan Institute of Science",
      location: "Satara, Maharashtra",
      degree: "Higher Secondary Certificate (HSC) - Science Stream",
      duration: "July 2021 – March 2022",
      details: "75%",
    },
    {
      school: "Nirmala Convent High School",
      location: "Satara, Maharashtra",
      degree: "Secondary School Certificate (SSC)",
      duration: "July 2019 – March 2020",
      details: "86%",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-foreground">
          Education
        </h2>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="pb-8 border-b border-gray-200 dark:border-gray-800 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1.5 text-foreground">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                      {edu.school}
                    </h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-base font-medium text-foreground mb-1">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.location}
                  </p>
                  <p className="text-sm text-muted-foreground font-medium mb-2">
                    {edu.details}
                  </p>
                  {edu.coursework && (
                    <div className="mt-3">
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Relevant Coursework
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.coursework}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
