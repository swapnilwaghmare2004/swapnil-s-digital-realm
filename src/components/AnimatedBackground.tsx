import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <motion.div
        className="floating-orb w-96 h-96 bg-primary top-20 left-10"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="floating-orb w-80 h-80 bg-secondary top-1/2 right-20"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="floating-orb w-64 h-64 bg-primary bottom-20 left-1/3"
        animate={{
          y: [0, -30, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
