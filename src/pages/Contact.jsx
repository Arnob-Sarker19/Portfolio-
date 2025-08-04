// src/pages/Contact.jsx
import React, { useState } from "react";
import { Mail, Github, Linkedin, Facebook } from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mldlwqyq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: new FormData(e.target),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold text-blue-400 mb-4">📬 Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded bg-[#0d1117] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded bg-[#0d1117] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-2 rounded bg-[#0d1117] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={formData.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-purple-600 px-4 py-2 rounded text-white font-semibold transition"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <div className="flex items-center space-x-2 text-green-400 mt-2 animate-fade-in">
          <CheckCircle className="w-5 h-5" />
          <span>Thank you! Your message has been sent.</span>
        </div>
      )}

      <div className="pt-6">
        <h3 className="text-lg font-semibold text-blue-400">🌐 Find me on</h3>
        <div className="flex space-x-4 mt-3">
          <a
            href="https://github.com/arnobsarker"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Github />
          </a>
          <a
            href="https://linkedin.com/in/arnobsarker"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://facebook.com/arnob.dev.bd"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <Facebook />
          </a>
          <a
            href="mailto:arnob.dev.bd@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            <Mail />
          </a>
        </div>
      </div>
    </div>
  );
}
