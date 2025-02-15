import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Terminal,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Ansh Varma</h1>
            <p className="text-xl mb-8">
              Computer Science Student at IIIT Delhi
            </p>
            <div className="flex space-x-4">
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
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <Code2 className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                Programming Languages
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>C++</li>
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>Java</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <Database className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                Technologies
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
                <li>Git</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg border border-gray-700">
              <Terminal className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-white">
                Tools & Frameworks
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>Linux</li>
                <li>Docker</li>
                <li>Express.js</li>
                <li>Next.js</li>
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
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-900 text-purple-100 rounded-full text-sm">
                    Node.js
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
          <p>© 202 Ansh Varma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
