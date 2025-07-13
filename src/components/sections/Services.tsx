import React from 'react';
import { Database, Code, Layers, Terminal, WholeWord as Wordpress } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Database size={40} />,
      title: 'Data Analyst',
      description: 'Transform raw data into actionable insights using advanced analytics and visualization techniques.'
    },
    {
      icon: <Code size={40} />,
      title: 'Web Developer',
      description: 'Create responsive, user-friendly websites with modern technologies and best practices.'
    },
    {
      icon: <Layers size={40} />,
      title: 'Full Stack Developer',
      description: 'Build end-to-end applications with expertise in both frontend and backend technologies.'
    },
    {
      icon: <Terminal size={40} />,
      title: 'Python Developer',
      description: 'Develop robust applications, automation scripts, and data processing solutions using Python.'
    },
    {
      icon: <Wordpress size={40} />,
      title: 'WordPress Developer',
      description: 'Design and develop custom WordPress themes, plugins, and complete website solutions.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I offer a comprehensive range of development and analytical services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-6 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;