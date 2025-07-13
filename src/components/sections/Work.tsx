import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Work: React.FC = () => {
  const projects = [
    {
      title: 'Route Planner',
      description: 'Intelligent route optimization application with real-time traffic data integration.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['JavaScript', 'Python', 'Google Maps API'],
      githubUrl: 'https://github.com/Anushya1410/Route-Planner',
      liveUrl: '#'
    },
    {
      title: 'TicTacToe',
      description: 'Interactive tic-tac-toe game with AI opponent and multiplayer functionality.',
      image: 'https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Anushya1410/TicTacToe',
      liveUrl: '#'
    },
    {
      title: 'Life Insurance Portfolio',
      description: 'Comprehensive insurance management system with policy tracking and analytics.',
      image: 'https://images.pexels.com/photos/1601775/pexels-photo-1601775.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com/Anushya1410/Life-Insurance-portfolio',
      liveUrl: 'https://sendurpandi-life-insurance-agent.netlify.app/'
    },
    {
      title: 'Snake Game',
      description: 'Classic snake game reimagined with modern graphics and power-ups.',
      image: 'https://images.pexels.com/photos/4792300/pexels-photo-4792300.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['JavaScript', 'React.js', 'CSS'],
      githubUrl: 'https://github.com/Anushya1410/React-Snake-Game',
      liveUrl: '#'
    },
    {
      title: 'Starbucks Clone',
      description: 'Pixel-perfect recreation of Starbucks website with responsive design.',
      image: 'https://images.pexels.com/photos/2061043/pexels-photo-2061043.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Anushya1410/starBuck',
      liveUrl: 'https://anushya1410.github.io/starBuck/'
    }
  ];

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Work
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200"
                  >
                    <Github size={18} className="text-gray-700 dark:text-gray-300" />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-white/90 dark:bg-gray-900/90 rounded-full hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200"
                  >
                    <ExternalLink size={18} className="text-gray-700 dark:text-gray-300" />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;