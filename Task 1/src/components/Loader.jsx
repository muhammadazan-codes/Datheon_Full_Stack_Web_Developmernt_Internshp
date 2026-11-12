import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  return (
    <motion.div
      className="
        fixed inset-0 z-[9999]
        flex flex-col items-center justify-center
        bg-black
      "
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        delay: 0.8,
        duration: 0.6,
      }}
      onAnimationComplete={onComplete}
    >
      <motion.img
        src="/logo.png"
        alt="M. Azan"
        className="h-20 w-20 object-contain"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      />

      <div className="mt-6 h-[2px] w-32 overflow-hidden bg-zinc-800">
        <motion.div
          className="h-full bg-[#66c61c]"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <p className="mt-4 text-xs tracking-[4px] text-gray-500">LOADING</p>
    </motion.div>
  );
};

export default Loader;
