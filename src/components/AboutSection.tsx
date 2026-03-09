import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <Calendar className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-2xl font-bold font-heading text-foreground">21</h4>
              <p className="text-muted-foreground text-sm">Years Old</p>
            </div>
            <div className="glass-card p-6 text-center hover:scale-105 transition-transform">
              <GraduationCap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-lg font-bold font-heading text-foreground">BE E&TC</h4>
              <p className="text-muted-foreground text-sm">Engineering</p>
            </div>
            <div className="glass-card p-6 text-center col-span-2 hover:scale-105 transition-transform">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="text-lg font-bold font-heading text-foreground">Pune, India</h4>
              <p className="text-muted-foreground text-sm">Location</p>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am a BE Electronics & Telecommunication Engineering graduate with practical 
              experience in IT system management, event operations, and biometric authentication systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I have contributed to large-scale operational environments including national-level 
              examinations, corporate exhibitions, and technology infrastructure management.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My strengths include problem-solving, technical troubleshooting, leadership, and 
              operational efficiency.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I enjoy working in dynamic environments where technical knowledge and organizational 
              skills are equally important.
            </p>

            <div className="glass-card p-6 mt-6">
              <h4 className="text-lg font-bold font-heading text-foreground mb-2">Professional Title</h4>
              <p className="text-primary">
                Electronics Engineer | IT Operations | Event Management Professional
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
