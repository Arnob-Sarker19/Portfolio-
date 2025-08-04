// src/App.js
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import EditorLayout from "./components/EditorLayout";

export default function App() {
  const [currentTab, setCurrentTab] = useState("about");

  return (
    <div className="flex  h-screen bg-[#0d1117] text-white font-mono">
      <Sidebar setCurrentTab={setCurrentTab} />
      <EditorLayout tab={currentTab} setTab={setCurrentTab} />
    </div>
  );
}
