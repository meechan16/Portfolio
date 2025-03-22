import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, FileText, ExternalLink, Award, Briefcase } from 'lucide-react';
import TypeWriter from './components/TypeWriter';

// Navbar Component with scroll progress indicator
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section
      const sections = ['hero', 'projects', 'skills', 'experience', 'achievements', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="relative">
        <div className="absolute top-0 left-0 h-1 bg-purple-600" style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-white text-xl font-bold hover:text-purple-400 transition-colors cursor-pointer" onClick={() => scrollToSection('hero')}>
          meechan
        </div>
        
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        
        <div className="hidden md:flex space-x-8">
          {['projects', 'skills', 'experience', 'achievements', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`${
                activeSection === section ? 'text-purple-400' : 'text-gray-300'
              } hover:text-purple-300 transition-colors`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm flex flex-col space-y-4 px-6 py-4 animate-fadeIn">
          {['projects', 'skills', 'experience', 'achievements', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`${
                activeSection === section ? 'text-purple-400' : 'text-gray-300'
              } hover:text-purple-300 transition-colors text-left`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

// ProjectCard Component
const ProjectCard = ({ 
  title, 
  description, 
  image, 
  technologies, 
  link,
  guide = ''
}) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl border border-gray-700 transform hover:scale-[1.02] transition-transform duration-300">
    <div className="relative">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      {guide && (
        <p className="text-purple-400 mb-2">Guide: {guide}</p>
      )}
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-purple-900/50 text-purple-100 rounded-full text-sm border border-purple-700">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
      >
        View Project <ExternalLink className="ml-2 transform group-hover:translate-x-1 transition-transform" size={16} />
      </a>
    </div>
  </div>
);

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <header id="hero" className="bg-gradient-to-r from-purple-900 to-blue-900 text-white pt-24">
        <div className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center md:items-start h-full">
          <div className="text-left max-w-3xl md:w-2/3">
            <h1 className="text-5xl font-bold mb-6 animate-fadeInUp">
              <TypeWriter text="Hey there, I'm Ansh Varma" delay={80} />
            </h1>
            <p className="text-xl mb-4 animate-fadeInUp animation-delay-200">
              Sophomore at IIIT Delhi<br />
              B.Tech in Computer Science and Applied Mathematics
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed animate-fadeInUp animation-delay-400">
              Passionate about building innovative solutions that make a difference.
              I specialize in full-stack development, systems programming, and data analysis.
              Currently exploring the intersections of technology and social impact through
              projects in emergency response systems and infrastructure management.
            </p>
            <div className="flex space-x-6 animate-fadeInUp animation-delay-600">
              <a target="_blank" href="https://github.com/meechan16" 
                className="hover:text-purple-300 transition-colors transform hover:scale-110">
                <Github size={24} />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/anshvarma16/" 
                className="hover:text-purple-300 transition-colors transform hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a target="_blank" href="mailto:ansh23101@iiitd.ac.in" 
                className="hover:text-purple-300 transition-colors transform hover:scale-110">
                <Mail size={24} />
              </a>
              <a target="_blank" href="https://drive.google.com/file/d/18R_irJadOhtbPcs4XDg7BwibVEgr63pq/view?usp=sharing"
                className="hover:text-purple-300 transition-colors transform hover:scale-110">
                <FileText size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center animate-fadeInRight">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img
                src="/pfp.jpg"
                className="relative w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover"
                alt="Profile"
              />
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
            <ProjectCard
              title="InfraQR"
              description="InfraQR is a smart lab management system that streamlines inventory tracking, financial monitoring, and data organization using QR-based automation."
              image="./infra.png"
              technologies={['JavaScript', 'Flask', 'SQLite']}
              link="https://github.com/Gravitons-IIITD/Comprehensive-Resource-and-Incident-Support-Information-System-2.0"
            />
            <ProjectCard
              title="Pawsh"
              description="A custom shell in C that executes commands, manages processes, and supports built-in functionalities like navigation and history tracking."
              image="./pawsh.png"
              technologies={['JavaScript', 'Flask', 'SQLite']}
              link="https://github.com/Gravitons-IIITD/Comprehensive-Resource-and-Incident-Support-Information-System-2.0"
            />
            <ProjectCard
              title="CRISIS 2.0"
              description="A comprehensive resource and incident support information system for efficient emergency response management."
              image="./crisis.png"
              technologies={['JavaScript', 'Flask', 'SQLite']}
              link="https://github.com/Gravitons-IIITD/Comprehensive-Resource-and-Incident-Support-Information-System-2.0"
            />
            <ProjectCard
              title="Custom OS Module"
              description="Developed a custom Linux kernel module for process management and system monitoring, implementing features like process tracking and resource usage monitoring."
              image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"
              technologies={['C', 'Linux']}
              link="https://github.com/meechan16/Custom-OS-Module"
            />
            <ProjectCard
              title="RISC-V Assembler and Simulator"
              description="Designed a custom Assembler to convert given instruction set architecture to Binary and a simulator to load the Binary in memory and track the progress of all instructions and registers."
              image="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?auto=format&fit=crop&w=800&q=80"
              technologies={['C', 'Python', 'Assembly']}
              link="https://github.com/meechan16/Custom-OS-Module"
              guide="Dr. Sujay Deb"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'Assembly',
              'React.js', 'Django', 'Flask', 'SQL', 'GitHub', 'Docker',
              'Numpy', 'Pandas', 'TensorFlow', 'Figma', 'Canva'
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-6 py-3 bg-gray-900 text-purple-300 rounded-full text-lg border border-purple-500 hover:bg-purple-900 transition-all duration-300 transform hover:scale-110"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                {skill}
              </span>
            ))}
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
            {[
              {
                title: "Lab Intern",
                company: "InfraQR Lab, IIITD",
                period: "Jan 2025 - Present",
                location: "On Campus",
                guide: "Dr. Gaurav Ahuja",
                description: "Working on InfraQR, an industry-level project under a college professor, creating a Django web app with a MySQL database to generate and manage QR codes for lab equipment. Gaining hands-on experience in web development and database integration.",
                skills: ["Django", "MySQL", "WebDev"]
              },
              {
                title: "Data Analysis Intern",
                company: "InterGlobe Aviation Limited (IndiGo)",
                period: "Jun 2023 - Jul 2023",
                location: "Remote",
                description: "Conducted data analysis for the in-flight entertainment (IFE) system on Delhi-Goa flights using Python (pandas), focusing on demographic variables like age and gender. Gained insights into corporate operations, flight booking processes, and the role of data analytics in enhancing app performance and user experience.",
                skills: ["Python", "Pandas", "Data Analysis"]
              },
              {
                title: "Summer Intern",
                company: "G4S IT Services",
                period: "Jun 2022 - Jul 2022",
                location: "On Campus",
                description: "ERP L1 Support Techniques Basics and fundamentals of MS SQL Databases. Basics of .NET and Angular programming. Basics of working on Google Cloud Platform.",
                skills: ["SQL", "Angular", "GCP"]
              }
            ].map((exp, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-800 rounded-lg border border-gray-700 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <Briefcase className="w-8 h-8 text-purple-400" />
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="text-gray-400 text-sm ml-auto">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold">{exp.company}</span> - {exp.location}
                </p>
                {exp.guide && (
                  <p className="text-purple-400 mb-2">Guide: {exp.guide}</p>
                )}
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-900/50 text-purple-100 rounded-full text-sm border border-purple-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
            {[
              {
                title: "Hackathon Runner-Up",
                description: "Runner up in EPOCH 6 hackathon at IIITD for developing innovative solutions."
              },
              {
                title: "KVPY Scholar",
                description: "Achieved All India Rank 642 in Kishore Vaigyanik Protsahan Yojana (KVPY), a prestigious scholarship for science students."
              },
              {
                title: "Children Champion Award",
                description: "Awarded the Children Champion Award by the Delhi Commission for Protection of Child Rights (DCPCR) for outstanding contributions."
              },
              {
                title: "Best Startup Award",
                description: "Received the Best Startup Award 2021 by Entrepreneur Cafe for innovative entrepreneurial efforts."
              }
            ].map((achievement, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-900 rounded-lg border border-gray-700 transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Award className="w-8 h-8 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">
                    {achievement.title}
                  </h3>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">Let's Connect</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm currently looking for internship opportunities and would love to
            connect with you. Feel free to reach out if you'd like to discuss
            potential collaborations or just chat about technology!
          </p>
          <a
            href="mailto:ansh23101@iiitd.ac.in"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 group"
          >
            <Mail className="mr-2 group-hover:animate-bounce" size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 Ansh Varma. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;