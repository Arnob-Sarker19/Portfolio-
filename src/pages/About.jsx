// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div>
      <p className="text-green-400">// Hello World 👋</p>
      <pre className="text-sm md:text-base text-gray-300 mt-2">
{`const name = "Arnob Sarker";
const role = "Front-End Developer";

const skills = [
  "HTML", 
  "CSS", 
  "Tailwind", 
  "React", 
  "Firebase", 
  "Git"
];

function learn() {
  return ["JavaScript", "Node.js", "More Projects"];
}

console.log("Welcome to my dev portfolio!");

`}
<p className="mt-6">
  <a
    href="/Arnob-Sarker-Resume.pdf"
    download
    className="inline-block px-4 py-2 bg-blue-500 hover:bg-purple-600 text-white rounded glow"
  >
    📄 Download Resume
  </a>
</p>

      </pre>
    </div>
  );
}
