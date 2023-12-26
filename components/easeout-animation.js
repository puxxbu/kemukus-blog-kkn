import { motion } from "framer-motion";

const MotionSection = ({ children }) => {
  const easeOutVariant = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      className="bg-white dark:bg-gray-900"
      initial="offscreen"
      animate="onscreen"
      variants={easeOutVariant}
      transition={{ duration: 0.5 }}>
      <motion.div>{children}</motion.div>
    </motion.section>
  );
};

export default MotionSection;
