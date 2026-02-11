import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
            <span className="text-primary">05.</span> Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-primary/40 mb-8 mx-auto" />

          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-base leading-relaxed">
            I'm currently looking for internship and entry-level opportunities in software
            development. Feel free to reach out!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:imesh200880@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity glow"
            >
              <Mail size={16} /> Email Me
            </a>
            <a
              href="tel:+917204936771"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-display text-sm font-semibold hover:bg-secondary/80 transition-colors border border-border"
            >
              <Phone size={16} /> Call
            </a>
            <a
              href="https://linkedin.com/in/himeshkumar"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-display text-sm font-semibold hover:bg-secondary/80 transition-colors border border-border"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="https://www.himeshkumar.dev"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-secondary text-secondary-foreground font-display text-sm font-semibold hover:bg-secondary/80 transition-colors border border-border"
            >
              <Globe size={16} /> Portfolio
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center text-xs text-muted-foreground font-display">
        <p>{"// Built with ❤️ by Himesh Kumar © 2025"}</p>
      </div>
    </section>
  );
};

export default ContactSection;
