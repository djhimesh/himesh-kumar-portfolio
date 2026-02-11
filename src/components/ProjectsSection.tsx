import { motion } from "framer-motion";
import { Terminal, Globe, Shield } from "lucide-react";

const projects = [
  {
    icon: Terminal,
    title: "Student Management System",
    tech: "Python + MySQL",
    description:
      "Console-based application to manage student records including adding, updating, and deleting data using MySQL integration.",
  },
  {
    icon: Globe,
    title: "Personal Portfolio Website",
    tech: "HTML + CSS",
    description:
      "Designed and built a responsive personal portfolio website to showcase skills and projects.",
  },
  {
    icon: Shield,
    title: "Networking Research Project",
    tech: "Research & Documentation",
    description:
      "Created documentation and presentation on network topologies and DDoS prevention techniques.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">03.</span> Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="space-y-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group hover:glow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-0.5">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground mb-1">
                    {p.title}
                  </h3>
                  <span className="text-xs font-display text-primary mb-2 inline-block">
                    {p.tech}
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
