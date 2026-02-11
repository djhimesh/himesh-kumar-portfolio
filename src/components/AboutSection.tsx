import { motion } from "framer-motion";

const strengths = [
  "Quick Learner",
  "Analytical Thinking",
  "Good Communication",
  "Team Collaboration",
  "Disciplined & Consistent",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-8" />

          <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-8 max-w-3xl">
            Motivated and detail-oriented BCA student with strong foundational knowledge in
            programming, web development, and computer networking. Passionate about building
            efficient and user-friendly applications. Eager to gain practical experience through
            internships and entry-level IT roles while continuously improving technical and
            problem-solving skills.
          </p>

          <div className="flex flex-wrap gap-3">
            {strengths.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium border border-glow"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
