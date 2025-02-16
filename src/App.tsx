import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { FileText } from 'lucide-react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Terminal,
  Award,
  Briefcase,
} from 'lucide-react';

// Navbar Component 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close menu on mobile after selection
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold">Ansh Varma</div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {[ 'skills', 'projects', 'experience', 'achievements', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-300 hover:text-purple-300 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 flex flex-col space-y-4 px-6 py-4">
          {['skills', 'projects', 'experience', 'achievements', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-300 hover:text-purple-300 transition-colors text-left"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};
function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar */}
      <Navbar />

      <header id="hero" className="bg-gradient-to-r from-purple-900 to-blue-900 text-white pt-24">
  <div className="container mx-auto px-6 py-24 flex justify-center items-center h-full">
    <div className="text-center max-w-3xl">
      <h1 className="text-5xl font-bold mb-6">Ansh Varma</h1>
      <p className="text-xl mb-4">
        Sophomore at IIIT Delhi<br></br>
        B.Tech in Computer Science and Applied Mathematics
      </p>
      <p className="text-lg text-gray-200 mb-8 leading-relaxed">
        Passionate about building innovative solutions that make a difference. 
        I specialize in full-stack development, systems programming, and data analysis. 
        Currently exploring the intersections of technology and social impact through 
        projects in emergency response systems and infrastructure management.
      </p>
      <div className="flex space-x-4 justify-center">
        <a
          href="https://github.com/meechan16"
          className="hover:text-purple-300 transition-colors"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/anshvarma16/"
          className="hover:text-purple-300 transition-colors"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:ansh23101@iiitd.ac.in"
          className="hover:text-purple-300 transition-colors"
        >
          <Mail size={24} />
        </a>
        {/* Resume Download Button */}
        <a
          href="https://drive.google.com/file/d/1g_zLbAkrxX4Q5KSbXnKlur-zx36Z1dwB/view?usp=sharing" // Replace with the actual path to your resume
          download="Ansh_Varma_Resume.pdf"
          className="hover:text-purple-300 transition-colors"
        >
          <FileText size={24} />
        </a>
      </div>
    </div>
  </div>
</header>


      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  CRISIS 2.0
                </h3>
                <p className="text-gray-300 mb-4">
                  A comprehensive resource and incident support information
                  system for efficient emergency response management.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    HTML
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    CSS
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    Flask
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    SQlite
                  </span>
                </div>
                <a
                  href="https://github.com/Gravitons-IIITD/Comprehensive-Resource-and-Incident-Support-Information-System-2.0"
                  className="inline-flex items-center mt-4 text-purple-400 hover:text-purple-300"
                >
                  View Project <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
                alt="Project 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Custom OS Module
                </h3>
                <p className="text-gray-300 mb-4">
                  Developed a custom Linux kernel module for process management
                  and system monitoring, implementing features like process
                  tracking and resource usage monitoring.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    C
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    Linux
                  </span>
                </div>
                <a
                  href="https://github.com/meechan16/Custom-OS-Module"
                  className="inline-flex items-center mt-4 text-purple-400 hover:text-purple-300"
                >
                  View Project <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700">
              <img
                src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://unsplash.com/photos/turned-on-gray-laptop-computer-cOkpTiJMGzA4I_B6l1_aznhJPs_e0pX1dx3AC85wWCJ/view?usp=sharing"
                alt="Project 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  RISC-V Assembler and Simulator
                </h3>
                <p className="text-gray-300 mb-4">
                  Guide: Dr. Sujay Deb <br></br>
                  ● Designed a custom Assembler to convert given instruction set
                  architecture to Binary. <br></br>
                  ● Designed a simulator to load the Binary in memory and track
                  the progress of all instructions and registers.
                </p>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    C
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    Assembly
                  </span>
                </div>
                <a
                  href="https://github.com/meechan16/Custom-OS-Module"
                  className="inline-flex items-center mt-4 text-purple-400 hover:text-purple-300"
                >
                  View Project <ExternalLink className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Skills Section */}
            <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Programming Languages */}
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">C</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">C++</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Python</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">JavaScript</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">TypeScript</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Java</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Go</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Shell</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Assembly</span>

            {/* Web Development */}
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">React.js</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Django</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Flask</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">HTML</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">CSS</span>

            {/* Databases */}
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">SQLAlchemy</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">SQLite</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">MySQL</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">MS SQL</span>

            {/* Tools & Technologies */}
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">GitHub</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Docker</span>
            {/* Libraries & Frameworks */}
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Numpy</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Pandas</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">TensorFlow</span>

            {/* Other Technologies */}
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Figma</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Miro</span>
            <span className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-colors duration-300">Canva</span>
          </div>
        </div>
      </section>


      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Lab Intern, InfraQR Lab, IIITD */}
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Briefcase className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Lab Intern
                </h3>
              </div>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">InfraQR Lab, IIITD</span> - On Campus
              </p>
              <p className="text-gray-300 mb-4">
                <b><u>Guide</u>: Dr. Gaurav Ahuja</b><br></br>
                Working on InfraQR, an industry-level project under a college professor, creating a Django web app with a MySQL database to generate and manage QR codes for lab equipment. Gaining hands-on experience in web development and database integration.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  Web Development
                </span>
              </div>
            </div>

            {/* Internship at InterGlobe Aviation Limited (IndiGo) */}
            <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Briefcase className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Data Analysis Intern
                </h3>
              </div>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">InterGlobe Aviation Limited (IndiGo)</span> - Remote
              </p>
              <p className="text-gray-300 mb-4">
                Conducted data analysis for the in-flight entertainment (IFE) system on Delhi-Goa flights using Python (pandas), focusing on demographic variables like age and gender. Gained insights into corporate operations, flight booking processes, and the role of data analytics in enhancing app performance and user experience.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  Pandas
                </span>
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  Data Analysis
                </span>
              </div>
            </div>
                        {/* Lab Intern, InfraQR Lab, IIITD */}
                        <div className="p-6 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Briefcase className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Summer Intern
                </h3>
              </div>
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">InfraQR Lab, IIITD</span> - On Campus
              </p>
              <p className="text-gray-300 mb-4">
                Working on InfraQR, an industry-level project under a college professor, creating a Django web app with a MySQL database to generate and manage QR codes for lab equipment. Gaining hands-on experience in web development and database integration.
              </p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                  Web Development
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Runner up in EPOCH 6 hackathon at IIITD */}
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Hackathon Runner-Up
                </h3>
              </div>
              <p className="text-gray-300">
                Runner up in EPOCH 6 hackathon at IIITD for developing innovative solutions.
              </p>
            </div>

            {/* KVPY Scholar */}
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  KVPY Scholar
                </h3>
              </div>
              <p className="text-gray-300">
                Achieved All India Rank 642 in Kishore Vaigyanik Protsahan Yojana (KVPY), a prestigious scholarship for science students.
              </p>
            </div>

            {/* Children Champion Award by DCPCR */}
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Children Champion Award
                </h3>
              </div>
              <p className="text-gray-300">
                Awarded the Children Champion Award by the Delhi Commission for Protection of Child Rights (DCPCR) for outstanding contributions.
              </p>
            </div>

            {/* Best Startup Award 2021 by Entrepreneur Cafe */}
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <div className="flex items-center space-x-4 mb-4">
                <Award className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">
                  Best Startup Award
                </h3>
              </div>
              <p className="text-gray-300">
                Received the Best Startup Award 2021 by Entrepreneur Cafe for innovative entrepreneurial efforts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities and would love to
            connect with you. Feel free to reach out if you'd like to discuss
            potential collaborations or just chat about technology!
          </p>
          <a
            href="mailto:ansh23101@iiitd.ac.in"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Mail className="mr-2" size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2023 Ansh Varma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;