import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'CodeStudioHub',
      position: 'Web Developer',
      location: 'Mumbai, India',
      duration: 'Jul 27, 2024 – Oct 27, 2024',
      description: [
        'Developed responsive web applications using React.js and modern JavaScript frameworks',
        'Collaborated with design teams to implement pixel-perfect UI/UX designs',
        'Optimized website performance and improved loading times by 40%',
        'Implemented RESTful APIs and integrated third-party services',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'OceanInfotech',
      position: 'IT Executive',
      location: 'Mumbai, India',
      duration: 'Apr 1, 2025 – May 30, 2025',
      description: [
        'Managed IT infrastructure and provided technical support to 50+ employees',
        'Implemented automated backup solutions and disaster recovery procedures',
        'Maintained network security protocols and system monitoring',
        'Led digital transformation initiatives and software deployment',
        'Reduced system downtime by 60% through proactive maintenance'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and the valuable experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div className="flex items-center mb-4">
                      <Building size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                    </div>

                    <h4 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                      {exp.position}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mb-6 text-gray-600 dark:text-gray-300">
                      <div className="flex items-center">
                        <Calendar size={18} className="mr-2" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={18} className="mr-2" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 dark:text-gray-300 leading-relaxed flex items-start"
                        >
                          <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for timeline balance */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;