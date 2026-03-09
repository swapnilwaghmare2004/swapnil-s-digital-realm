import { motion } from "framer-motion";
import { Download, Mail, Briefcase, Linkedin, Github, Twitter } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold font-heading mb-4"
            >
              <span className="gradient-text">Swapnil</span>
              <br />
              <span className="text-foreground">Waghmare</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-2 font-heading"
            >
              Electronics & Telecommunication Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary/80 mb-6"
            >
              Tech Operations | Infrastructure Management | Event Coordination
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              I specialize in technical infrastructure management, large-scale exam operations, 
              and corporate event coordination. I focus on delivering reliable, efficient, and 
              well-organized technical operations.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <a href="/Swapnil_Waghmare_Resume.pdf" download className="btn-primary flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
              <a href="#contact" className="btn-outline flex items-center gap-2">
                <Mail size={18} />
                Contact Me
              </a>
              <a href="#experience" className="btn-outline flex items-center gap-2">
                <Briefcase size={18} />
                View Experience
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4"
            >
              <a
                href="https://www.linkedin.com/in/swapnil-waghmare-9ab2102ab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Linkedin size={20} className="text-primary" />
              </a>
              <a
                href="https://github.com/swapnilwaghmare2004"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Github size={20} className="text-primary" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-card flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Twitter size={20} className="text-primary" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-30 animate-pulse-glow" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border p-1">
                <img
                  src={profilePhoto}
                  alt="Swapnil Waghmare"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
