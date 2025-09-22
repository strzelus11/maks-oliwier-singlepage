import { motion } from "framer-motion";

const Title = ({ title, variants, className }) => {
  return (
    <motion.h1
      variants={variants}
      initial="hidden"
      whileInView="show"
      className={`text-white text-center ${className}`}
    >
      {title}
    </motion.h1>
  );
};

export default Title;