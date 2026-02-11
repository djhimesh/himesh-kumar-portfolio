import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";

const coursework = [
  "Programming in Python",
  "Data Structures",
  "Database Management Systems",
  "Computer Networks",
  "Web Technologies",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">04.</span> Education & Experience
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  Bachelor of Computer Applications
                </h3>
                <p className="text-xs text-muted-foreground">
                  Saran Degree College, Bangalore • 2024–2027
                </p>
              </div>
            </div>
            <p className="text-xs text-primary font-display mb-2">Relevant Coursework:</p>
            <div className="flex flex-wrap gap-2">
              {coursework.map((c) => (
                <span
                  key={c}
                  className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-display text-sm font-semibold text-foreground">
                  Web Development Intern
                </h3>
                <p className="text-xs text-muted-foreground">Training Program • 4 Weeks</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Completed a focused training program on HTML, CSS, and basic JavaScript
              development. Built responsive web pages and learned deployment basics.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
