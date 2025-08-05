import React, { useState } from "react";
import { Github, Linkedin, Facebook, Mail, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/mldlwqyq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      setFormData({ name: "", email: "", message: "" });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000); // Hide thank-you message
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="px-4 py-4 md:px-16 lg:px-32 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-400">📬 Contact Me</h2>
      <p className="text-gray-400 mb-8">Feel free to reach out. I usually respond within a few hours.</p>

      <div className="flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full max-w-md glassmorphic p-6 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="👤 Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="📧 Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="✍️ Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={formData.message}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="glow bg-blue-600 hover:bg-purple-600 px-6 py-2 rounded-lg text-white font-semibold transition"
          >
            🚀 Send Message
          </button>

          {submitted && (
            <div className="flex items-center space-x-2 text-green-400 mt-4 animate-fade-in">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you! Your message has been sent.</span>
            </div>
          )}
        </form>

        <div className="pt-10">
          <h3 className="text-lg font-semibold text-blue-400 mb-3">🌐 Connect with me</h3>
          <div className="flex space-x-4 justify-center">
            <a href="https://github.com/Arnob-Sarker19" target="_blank" rel="noreferrer" className="social-btn">
              <Github />
            </a>
            <a href="https://www.linkedin.com/in/arnob-sarker21" target="_blank" rel="noreferrer" className="social-btn">
              <Linkedin />
            </a>
            <a href="https://www.facebook.com/arnobs21" target="_blank" rel="noreferrer" className="social-btn">
              <Facebook />
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox" className="social-btn">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
