import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Users, Monitor, UserCheck, Eye } from "lucide-react";

const achievements = [
  { icon: Users, value: 10000, suffix: "+", label: "Candidates Managed" },
  { icon: Monitor, value: 200, suffix: "+", label: "Systems Configured" },
  { icon: UserCheck, value: 20, suffix: "+", label: "Team Members Led" },
  { icon: Eye, value: 1000, suffix: "+", label: "Daily Visitor Interactions" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-heading gradient-text">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-6" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-heading">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones and accomplishments from my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card p-8 text-center hover:scale-105 transition-transform"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-primary" />
              </div>
              <Counter value={achievement.value} suffix={achievement.suffix} />
              <p className="text-muted-foreground mt-2">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
