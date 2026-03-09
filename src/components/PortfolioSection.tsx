import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Calendar, Fingerprint, Settings } from "lucide-react";

const projects = [
  {
    icon: Server,
    title: "Large Scale Exam Infrastructure Management",
    description: "Managed complete IT infrastructure for offline examinations involving 10,000+ candidates, including system setup, network configuration, and server management.",
    tags: ["IT Operations", "Infrastructure", "Team Leadership"],
  },
  {
    icon: Calendar,
    title: "Corporate Event Operations",
    description: "Coordinated multiple corporate events including Solar Expo, Bajaj Auto exhibitions, SBI Life events, and Tata Technologies conferences.",
    tags: ["Event Management", "Coordination", "Client Relations"],
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication Operations",
    description: "Operated biometric verification systems for national examinations like NEET, MHCET, and MPSC, ensuring security compliance and smooth candidate flow.",
    tags: ["Biometrics", "Security", "Verification"],
  },
  {
    icon: Settings,
    title: "IT System Setup and Configuration",
    description: "Configured 200+ systems with OS installation, software setup, IP configuration, and network connectivity for seamless operations.",
    tags: ["System Admin", "Configuration", "Troubleshooting"],
  },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-heading">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my key projects and operational achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <project.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                  >
                    {tag}
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

export default PortfolioSection;
