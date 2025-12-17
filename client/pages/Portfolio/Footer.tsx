import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "atharvasonawane96@gmail.com",
      href: "mailto:atharvasonawane96@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9403771612",
      href: "tel:+919403771612",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/atharva-sonawane",
      href: "https://linkedin.com/in/atharva-sonawane",
      external: true,
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/atharva-sonawane",
      href: "https://github.com/atharva-sonawane",
      external: true,
    },
  ];

  return (
    <footer
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black dark:bg-slate-950 text-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-base text-gray-300 max-w-2xl leading-relaxed">
            Always interested in exploring new opportunities in AI/ML engineering,
            full-stack development, or discussing innovative technical solutions.
            Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="p-6 bg-gray-900 hover:bg-gray-800 dark:bg-slate-900 dark:hover:bg-slate-800 rounded-lg border border-gray-800 dark:border-gray-700 transition-colors group"
              >
                <div className="flex items-start justify-between mb-3">
                  <Icon className="w-6 h-6 text-white" />
                  {link.external && (
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                  )}
                </div>
                <h3 className="font-semibold text-white mb-1">{link.label}</h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {link.value}
                </p>
              </a>
            );
          })}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © {currentYear} Atharva Sonawane. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Back to Top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
