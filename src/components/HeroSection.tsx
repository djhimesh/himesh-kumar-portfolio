import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Globe } from "lucide-react";
import { InteractiveRobotSpline } from "@/components/ui/interactive-3d-robot";

const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_14%_18%/0.4)_1px,transparent_1px),linear-gradient(90deg,hsl(220_14%_18%/0.4)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(152_76%_52%/0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-display text-primary text-sm md:text-base mb-4 tracking-wider">
              {"// Hello, I'm"}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-4">
              <span className="text-foreground">Himesh</span>{" "}
              <span className="text-gradient glow-text">Kumar</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 font-body leading-relaxed">
              BCA Student & Aspiring Developer — passionate about building efficient,
              user-friendly applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-primary" /> Bangalore, India
            </span>
            <span className="hidden sm:inline text-border">|</span>
            <a href="mailto:imesh200880@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={14} className="text-primary" /> imesh200880@gmail.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="https://linkedin.com/in/himeshkumar" target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin size={14} className="text-primary" /> LinkedIn
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="https://www.himeshkumar.dev" target="_blank" rel="noopener" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Globe size={14} className="text-primary" /> Portfolio
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity glow"
            >
              Explore My Work ↓
            </a>
          </motion.div>
        </div>

        {/* 3D Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex-1 w-full h-[350px] md:h-[450px] lg:h-[500px]"
        >
          <InteractiveRobotSpline scene={ROBOT_SCENE_URL} className="w-full h-full rounded-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
