// src/pages/Projects.jsx
import React from "react";

const sampleProjects = [
  {
  title: "Result Viewer UI",
  desc: "Search academic results by roll number, powered by Firebase Realtime DB.",
  tech: ["React", "Tailwind", "Firebase"],
  demo: "https://result-viewer-ui.vercel.app/",   // Replace with your actual live site URL
  code: "https://github.com/Arnob-Sarker19/Result-Viewer-UI#-result-viewer-ui", // Replace with your actual GitHub repo
},

  {
    title: "fee-payment-tracker",
    desc: "a Student Fee Status Viewer and an Admin Panel to update payment status.",
    tech: ["React", "Firebase", "TailwindCSS"],
    demo: "https://fee-payment-tracker.vercel.app/",
    code: "https://github.com/Arnob-Sarker19/fee-payment-tracker",
  },
  {
    title: "Pet Shop UI",
    desc: "Responsive landing page with modern layout.",
    tech: ["HTML", "tailwindCSS"],
    demo: "https://arnob-sarker19.github.io/pet-shop/",
    code: "https://github.com/Arnob-Sarker19/pet-shop",
  },
];

export default function Projects() {
  return (
    <div>
      <p className="text-yellow-400">// 🚀 Sample Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {sampleProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#161b22] p-4 rounded-lg border border-gray-700 glow hover:scale-[1.02] transition"
          >
            <h3 className="text-blue-400 text-lg font-semibold">{proj.title}</h3>
            <p className="text-sm mt-1 text-gray-300">{proj.desc}</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs">
              {proj.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-gray-300 px-2 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-3 space-x-2">
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 underline text-sm"
              >
                Live
              </a>
              <a
                href={proj.code}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 underline text-sm"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
