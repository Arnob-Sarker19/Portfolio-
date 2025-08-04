import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="text-center p-4 border-b border-gray-700">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-5xl font-bold text-blue-400"
      >
        Arnob Sarker
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-purple-400 mt-2 text-lg md:text-xl"
      >
        <TypewriterText text="Frontend Developer | Web UI Enthusiast" />
      </motion.p>
    </header>
  );
}

function TypewriterText({ text }) {
  const [displayed, setDisplayed] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-green-400">{displayed}_</span>;
}
