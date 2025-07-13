import React from 'react';
import { Download, FileText, Trophy } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Resume & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download my comprehensive resume and view my coding achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Resume Download Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText size={48} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Download Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Get a comprehensive overview of my skills, experience, and achievements 
                in a professionally formatted PDF document.
              </p>
              <a href="/resume.pdf" download>
  <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
    <Download size={24} className="mr-3" />
    Download PDF Resume
  </button>
</a>

            </div>
          </div>

          {/* Coding Achievements */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
              Coding Achievements
            </h3>

            {/* HackerRank */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                    <Trophy size={32} className="text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                      HackerRank
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Algorithm Challenges</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Problems Solved</div>
                </div>
              </div>
            </div>

            {/* LeetCode */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <Trophy size={32} className="text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                      LeetCode
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Coding Challenges</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">80+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Problems Solved</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl p-6 text-center">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Problem Solving Score
              </h4>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                130+
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Combined challenges across platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;