import React from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hello, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Anushya Sendurpandi
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium">
                Software Engineer
              </h2>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                <MapPin size={20} />
                <span>Mumbai, India</span>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">
              Passionate software engineer with expertise in full-stack development, 
              data analysis, and creating innovative digital solutions. Let's build 
              something amazing together.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <Mail size={24} className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/anushya-sendurpandi-397196260/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin size={24} className="text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </a>
              <a
                href="https://github.com/Anushya1410"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
              >
                <Github size={24} className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                Get In Touch
              </button>
              <a href="/resume.pdf" download>
                <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Vector Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl lg:text-7xl font-bold shadow-2xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;