import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Cpu, Users } from "lucide-react";

const technicalSkills = [
  { name: "Operating System Installation", level: 90 },
  { name: "System Configuration & Troubleshooting", level: 85 },
  { name: "Network Setup & IP Configuration", level: 80 },
  { name: "Server Monitoring & Management", level: 75 },
  { name: "IT Infrastructure Setup", level: 85 },
];

const electronicsSkills = [
  { name: "MATLAB", level: 80 },
  { name: "Xilinx", level: 70 },
  { name: "NI Multisim", level: 75 },
  { name: "Tinkercad", level: 85 },
  { name: "Circuit Design", level: 80 },
  { name: "Arduino Uno", level: 85 },
];

const professionalSkills = [
  { name: "Event Management", level: 90 },
  { name: "Team Leadership", level: 85 },
  { name: "Operations Coordination", level: 90 },
  { name: "Client Interaction", level: 80 },
  { name: "Time Management", level: 85 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-foreground text-sm font-medium">{name}</span>
        <span className="text-primary text-sm">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground">Technical Skills</h3>
            </div>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} delay={0.1 * index} />
            ))}
          </motion.div>

          {/* Electronics Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-6 hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground">Electronics Skills</h3>
            </div>
            {electronicsSkills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} delay={0.1 * index} />
            ))}
          </motion.div>

          {/* Professional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6 hover:scale-[1.02] transition-transform md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground">Professional Skills</h3>
            </div>
            {professionalSkills.map((skill, index) => (
              <SkillBar key={skill.name} {...skill} delay={0.1 * index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
