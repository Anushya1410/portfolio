import React from 'react';

const About: React.FC = () => {
  const technologies = [
    'Python', 'MySQL', 'React.js', 'WordPress', 'JavaScript', 
    'NoSQL', 'Git', 'PHP', 'Tailwind CSS', 'REST API'
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a dedicated software engineer with a passion for creating innovative solutions 
              and solving complex problems. With experience across multiple technologies and 
              domains, I enjoy turning ideas into reality through clean, efficient code.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey in technology has taken me through various roles, from web development 
              to data analysis, allowing me to develop a well-rounded skill set that I bring 
              to every project I work on.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies 
              to deliver the best possible solutions. When I'm not coding, you can find me 
              exploring new frameworks or contributing to open-source projects.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Technologies I Work With
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300 hover:scale-105 transform cursor-pointer"
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Done</div>
              </div>
              <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;