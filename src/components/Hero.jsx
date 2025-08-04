// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const roles = ['Frontend Developer', 'React Developer', 'Creative Coder', 'Tech Enthusiast'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev < roles[index].length) {
          return prev + 1;
        } else {
          setTimeout(() => {
            setCharIndex(0);
            setIndex((prevIndex) => (prevIndex + 1) % roles.length);
          }, 2000);
          return prev;
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, index]);

  useEffect(() => {
    setCurrentRole(roles[index].substring(0, charIndex));
  }, [charIndex, index]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white px-4 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Arnob Sarker
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-cyan-300 mb-6 font-mono h-[40px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        {currentRole} <span className="animate-pulse">|</span>
      </motion.p>

      <motion.a
        href="/Arnob_Resume.pdf"
        download
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-lg border border-cyan-400 shadow-md hover:shadow-cyan-500/50 transition-all"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Download Resume
      </motion.a>
    </section>
  );
}
