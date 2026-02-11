import { motion } from "framer-motion";
import { Code, Globe, Database, Wrench, Network } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "C", "Basic Java"],
  },
  {
    icon: Globe,
    title: "Web Dev",
    skills: ["HTML5", "CSS3", "Basic JavaScript"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["MS Office", "Git", "VS Code"],
  },
  {
    icon: Network,
    title: "Networking",
    skills: ["LAN/MAN/WAN", "Cybersecurity Basics", "Internet Architecture"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">02.</span> Skills
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <cat.icon
                size={20}
                className="text-primary mb-3 group-hover:drop-shadow-[0_0_8px_hsl(152_76%_52%/0.5)] transition-all"
              />
              <h3 className="font-display text-sm font-semibold text-foreground mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
