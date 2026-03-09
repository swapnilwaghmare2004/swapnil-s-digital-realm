import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "IT Manager",
    company: "Aptech Limited, Pune",
    period: "September 2025 – October 2025",
    description: "Managed the technical infrastructure and operational coordination for a large-scale offline examination involving more than 10,000 candidates.",
    responsibilities: [
      "Installing operating systems and required software on 200+ computer systems",
      "Configuring IP addresses and network connectivity for seamless exam operations",
      "Managing and monitoring server systems to ensure reliability and uptime",
      "Leading a technical team of 20+ members, assigning tasks and ensuring efficient workflow",
      "Resolving hardware and software issues quickly to avoid disruptions during exams",
      "Coordinating the smooth execution of 4 exam shifts with strict time management",
      "Maintaining documentation and reporting for exam operations and infrastructure setup",
    ],
  },
  {
    title: "Solar & Storage Expo Maharashtra 2026",
    company: "Sheraton Grand Pune Bund Garden Hotel",
    period: "January 22, 2026",
    description: "Assisted in organizing and coordinating event activities.",
    responsibilities: [
      "Managed participant coordination and event logistics",
      "Ensured smooth execution of presentations, exhibitions, and networking sessions",
    ],
  },
  {
    title: "Bajaj Auto Ltd – Exhibitor",
    company: "Pune International Exhibition and Convention Centre (PIECC), Moshi",
    period: "January 27–30, 2026",
    description: "Represented and promoted Bajaj Chetak EV models and commercial vehicles.",
    responsibilities: [
      "Interacted with 1000+ visitors daily, including investors, engineers, and potential customers",
      "Explained vehicle features, EV technology, and benefits to attendees",
      "Assisted in booth management, visitor engagement, and promotional activities",
    ],
  },
  {
    title: "SBI Life Insurance Corporate Event",
    company: "Gadi Madgulkar Natyagruha, Nigdi, Pune",
    period: "February 2026",
    description: "Coordinated event arrangements and operations.",
    responsibilities: [
      "Ensured smooth management of guests, presentations, and logistics",
      "Assisted in event execution and participant coordination",
    ],
  },
  {
    title: "Tata Technologies Corporate Event",
    company: "Tata Technologies Office, Hinjewadi Phase 1, Pune",
    period: "January 2026",
    description: "Assisted with corporate event setup and coordination.",
    responsibilities: [
      "Ensured smooth event flow and participant management",
      "Helped coordinate technical and logistical arrangements",
    ],
  },
  {
    title: "Biometric Operator – Exam Centers",
    company: "NEET, MHCET, MPSC",
    period: "2025",
    description: "Worked as a biometric operator for national and state-level examinations.",
    responsibilities: [
      "Conducted biometric verification and candidate authentication",
      "Ensured accurate identification and security compliance",
      "Handled biometric devices and verification systems",
      "Maintained organized records and ensured smooth candidate flow",
    ],
  },
  {
    title: "Volunteer – Cognizant Interview Drive",
    company: "Cognizant",
    period: "December 2025",
    description: "Supported the organization of a large recruitment drive for 200+ candidates.",
    responsibilities: [
      "Assisting HR and panel members during the interview process",
      "Managing candidate registration and interview scheduling",
      "Coordinating with technical panels and HR teams",
      "Ensuring smooth and efficient interview operations",
    ],
  },
  {
    title: "Holi Event Management",
    company: "Alpa Bachat Bhavan, Camp Pune",
    period: "March 2026",
    description: "Managed the complete end-to-end planning and execution of a Holi celebration event.",
    responsibilities: [
      "Event planning and logistics coordination",
      "Managing participants and event flow",
      "Ensuring safety and smooth event execution",
      "Handling operational tasks during the event",
    ],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative pl-16 pb-12 last:pb-0"
    >
      <div className="timeline-dot top-0" />
      <div className="glass-card p-6 hover:scale-[1.02] transition-transform">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold font-heading text-foreground">{experience.title}</h3>
            <div className="flex items-center gap-2 text-primary mt-1">
              <Briefcase size={14} />
              <span className="text-sm">{experience.company}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={14} />
            <span className="text-sm">{experience.period}</span>
          </div>
        </div>
        <p className="text-muted-foreground mb-4">{experience.description}</p>
        <ul className="space-y-2">
          {experience.responsibilities.map((resp, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey and accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="timeline-line" />
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
