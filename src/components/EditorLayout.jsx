// src/components/EditorLayout.jsx
import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function EditorLayout({ tab, setTab }) {
  const tabs = [
    { key: "about", label: "about.js" },
    { key: "projects", label: "projects.html" },
    { key: "contact", label: "contact.jsx" },
  ];

  const TabContent = () => {
    switch (tab) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="flex space-x-2 border-b border-gray-700 mb-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-1 text-sm font-semibold border-t border-l border-r border-gray-700 rounded-t-md ${
              tab === t.key
                ? "bg-[#1e1e1e] text-blue-400 glow"
                : "text-gray-400 hover:text-purple-400"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4 }}
        className="bg-[#1e1e1e] p-4 rounded-xl glow shadow-xl min-h-[300px]"
      >
        <AnimatePresence mode="wait">
          <TabContent />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
