import React from 'react';
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

function App() {
  return (
<div className="min-h-screen bg-gray-900">
  {/* Hero Section */}
  <header className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
    <div className="container mx-auto px-6 py-24 flex justify-center items-center h-full">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-6">Ansh Varma</h1>
        <p className="text-xl mb-8">
          Computer Science Student at IIIT Delhi
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
        </div>
      </div>
    </div>
  </header>
{/* Skills Section */}
<section className="py-20 bg-gray-800">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12 text-center text-white">
      Technical Skills
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Programming Languages Card */}
      <div className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
        <Code2 className="w-12 h-12 text-purple-400 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-4 text-white text-center">
          Programming Languages
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg" alt="C++" className="w-6 h-6 text-blue-500" />
            <span>C++</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg" alt="Python" className="w-6 h-6 text-yellow-500" />
            <span>Python</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg" alt="JavaScript" className="w-6 h-6 text-yellow-400" />
            <span>JavaScript/TypeScript</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg" alt="Java" className="w-6 h-6 text-red-500" />
            <span>Java</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/go.svg" alt="Go" className="w-6 h-6 text-blue-400" />
            <span>Go</span>
          </li>
        </ul>
      </div>

      {/* Technologies Card */}
      <div className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
        <Database className="w-12 h-12 text-blue-400 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-4 text-white text-center">
          Technologies
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg" alt="React" className="w-6 h-6 text-blue-400" />
            <span>React</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg" alt="Node.js" className="w-6 h-6 text-green-500" />
            <span>Node.js</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg" alt="MongoDB" className="w-6 h-6 text-green-400" />
            <span>MongoDB</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg" alt="Git" className="w-6 h-6 text-orange-500" />
            <span>Git</span>
          </li>
        </ul>
      </div>

      {/* Tools & Frameworks Card */}
      <div className="p-6 bg-gray-900 rounded-lg border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
        <Terminal className="w-12 h-12 text-green-400 mb-4 mx-auto" />
        <h3 className="text-xl font-semibold mb-4 text-white text-center">
          Tools & Frameworks
        </h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linux.svg" alt="Linux" className="w-6 h-6 text-yellow-500" />
            <span>Linux</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg" alt="Docker" className="w-6 h-6 text-blue-400" />
            <span>Docker</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg" alt="Express.js" className="w-6 h-6 text-gray-400" />
            <span>Express.js</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nextdotjs.svg" alt="Next.js" className="w-6 h-6 text-black dark:text-white" />
            <span>Next.js</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
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
                src="../riscvassembly.png"
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
      <section className="py-20 bg-gray-900">
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
          Working on InfraQR, an industry-level project under a college professor, creating a React.js web app with a MySQL database to generate and manage QR codes for lab equipment. Gaining hands-on experience in web development and database integration.
        </p>
        <div className="flex space-x-2">
          <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
            React.js
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
    </div>
  </div>
</section>

<section className="py-20 bg-gray-800">
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
      <section className="py-20 bg-gray-800">
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