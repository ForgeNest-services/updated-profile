import React from "react";
import { motion } from "motion/react";

interface TestProps {
  backgroundImage: string;
}

export default function Test({ backgroundImage }: TestProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-white p-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Motion Design</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Welcome to the next section! This background is now the zoomed image
            from the Motion Design card.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
