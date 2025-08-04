import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImg from "../assets/profile.jpg"; // Replace with your image
import { Download } from "lucide-react"; // Optional icon (you can remove if not needed)

export default function About() {
  return (

    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-top gap-32">

      {/* Text Section */}
      <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
          👋 About Me
        </h2>

        <p className="text-base md:text-lg text-gray-300">
          I'm{" "}
          <span className="text-purple-400 font-bold underline underline-offset-4 decoration-dotted">
            <Typewriter
              words={["Arnob Sarker"]}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={80}
              loop={true}
            />
          </span>
          <br />
          A passionate{" "}
          <span className="text-blue-400">Frontend Developer</span> from{" "}
          <span className="text-blue-300">Bogra, Bangladesh</span>. I love
          crafting beautiful, functional, and accessible user interfaces.
        </p>

        <p className="text-gray-400 text-sm md:text-base">
          I specialize in frontend technologies and love learning new tools. My
          current focus includes:
          <br />
          <span className="mt-1 text-green-400 font-medium text-base md:text-lg block">
            <Typewriter
              words={[
                "HTML",
                "React.js",
                "TailwindCSS",
                "UI Design in Figma",
                "Git & GitHub",
                "Firebase",
                "Responsive UI",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={90}
            />
          </span>
        </p>

  

        {/* Code Block */}
        <div className="bg-[#161b22] border border-gray-700 p-4 rounded-md shadow-md text-left overflow-x-auto text-sm text-gray-300">
          <pre>
            <code>{`const developer = {
  name: "Arnob Sarker",
  role: "Frontend Developer",
  location: "Bogra, Bangladesh",
  skills: ["HTML", "CSS", "UI Design in Figma", "React", "TailwindCSS", "Git & GitHub", "Firebase"],
  Learning: ["Next.js", "JavaScript", "Node.js"],
  passion: "Creating clean, creative & accessible UIs"

};
`}</code>
          </pre>
        </div>
        
            {/* Resume Button */}
        <div className="mt-6">
          <a
            href="/resume.pdf" // ✅ Replace with your actual resume path
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-blue-500 bg-blue-500 text-white font-semibold hover:bg-transparent hover:text-blue-400 transition duration-300 glow"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </div>
      

      
      {/* Profile Image */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
        <img
          src={profileImg}
          alt="Arnob Sarker"
          className="w-full h-full  object-cover"
        />
      </div>
    </div>
  );
}
