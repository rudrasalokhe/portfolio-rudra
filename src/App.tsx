import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Briefcase, User, Cpu, Menu, X, BookOpen, Terminal } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = [
    { name: 'HTML & CSS', level: 90, icon: <Code2 className="w-6 h-6" /> },
    { name: 'JavaScript', level: 85, icon: <Terminal className="w-6 h-6" /> },
    { name: 'React', level: 80, icon: <Briefcase className="w-6 h-6" /> },
    { name: 'Java', level: 75, icon: <Cpu className="w-6 h-6" /> },
    { name: 'Kotlin', level: 70, icon: <Terminal className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: 'Speed Test App',
      description: 'A speed testing application built to analyze network speed in real-time.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      github: 'https://github.com',
      live: 'https://testforspeed.netlify.app',
      tags: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text"
            >
              Rudra.dev
            </motion.div>

            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <button
              className="md:hidden text-gray-300 hover:text-emerald-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-emerald-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-emerald-400 to-teal-500 text-transparent bg-clip-text">Rudra Salokkhe</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">Full Stack Developer | Mobile & Web Enthusiast</p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-8"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center text-gray-300"
          >
            <p className="mb-6">
              I am a versatile developer with expertise in both web and mobile technologies. 
              My strong foundation in HTML, CSS, and JavaScript, combined with my knowledge of React, 
              Java, and Kotlin, allows me to create comprehensive solutions across different platforms.
            </p>
            <p>
              I'm passionate about creating efficient, user-friendly applications and constantly expanding my 
              technical knowledge to stay current with industry trends and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            My Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-800 p-6 rounded-lg border border-slate-700"
              >
                <div className="flex items-center mb-4">
                  <div className="text-emerald-400">
                    {skill.icon}
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1 }}
                    className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2.5 rounded-full"
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 block">{skill.level}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold text-center mb-12"
          >
            My Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-900 rounded-lg overflow-hidden border border-slate-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-800 rounded-full text-sm border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-bold mb-8"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            I'm always excited to collaborate on new projects and explore opportunities. 
            Whether you have a project in mind or just want to connect, feel free to reach out!
          </motion.p>
          <motion.a
            href="mailto:rudra@example.com"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-emerald-400 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </motion.a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 bg-slate-800">
        <p>© {new Date().getFullYear()} Rudra Salokkhe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;