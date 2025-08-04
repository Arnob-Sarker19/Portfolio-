// src/components/Sidebar.jsx
import React from "react";
import { FileText, Terminal, Code2 } from "lucide-react";

export default function Sidebar({ setCurrentTab }) {
  return (
    <div className="w-16 bg-[#161b22] border-r border-gray-700 flex flex-col items-center py-4 space-y-6 glow">
      <SidebarIcon icon={<FileText />} tooltip="About" onClick={() => setCurrentTab("about")} />
      <SidebarIcon icon={<Code2 />} tooltip="Projects" onClick={() => setCurrentTab("projects")} />
      <SidebarIcon icon={<Terminal />} tooltip="Contact" onClick={() => setCurrentTab("contact")} />
    </div>
  );
}

function SidebarIcon({ icon, tooltip, onClick }) {
  return (
    <div className="group relative" onClick={onClick}>
      <div className="text-blue-400 hover:text-purple-400 cursor-pointer transition-all">
        {icon}
      </div>
      <span className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {tooltip}
      </span>
    </div>
  );
}
