import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'IBM Data Analysis with R',
      issuer: 'Coursera',
      date: '2024',
      description: 'Comprehensive course covering data analysis techniques using R programming language.',
      badge: '🎓',
       link: 'https://www.coursera.org/account/accomplishments/verify/9JEY2NA93GZD'
    },
    {
      title: 'Study Jams Program',
      issuer: 'Google Cloud',
      date: '2023-24',
      description: 'Hands-on training in Google Cloud Platform services and cloud computing fundamentals.',
      badge: '☁️',
       link: 'https://drive.google.com/drive/u/3/folders/1A5OicjMdK0kH0UHPY2ccRqYzH502wQMz'
    },
    {
      title: 'Data Analytics Virtual Internship',
      issuer: 'KPMG',
      date: '2023',
      description: 'Virtual experience program focusing on data analytics and business intelligence.',
      badge: '📊',
       link: 'https://drive.google.com/drive/u/3/folders/1A5OicjMdK0kH0UHPY2ccRqYzH502wQMz'
    },
    {
      title: 'API Fundamentals Student Expert',
      issuer: 'Postman',
      date: '2024',
      description: 'Certification in API development, testing, and documentation using Postman.',
      badge: '🔌',
       link: 'https://drive.google.com/drive/u/3/folders/1A5OicjMdK0kH0UHPY2ccRqYzH502wQMz'
    },
    {
      title: 'Web Design Competition Certificate',
      issuer: 'DCD India',
      date: '2024',
      description: 'Recognition for outstanding performance in web design competition.',
      badge: '🏆',
       link: 'https://drive.google.com/drive/u/3/folders/1A5OicjMdK0kH0UHPY2ccRqYzH502wQMz'
    },
    {
      title: 'DecodeX Hackathon Certificate',
      issuer: 'N.L. Dalmia Institute of Management Studies and Research',
      date: '2025',
      description: 'Awarded for exceptional performance and innovation during the 24-hour DecodeX Hackathon.',
      badge: '🏆',
       link: 'https://drive.google.com/drive/u/3/folders/1A5OicjMdK0kH0UHPY2ccRqYzH502wQMz'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-900/30 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{cert.badge}</div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {cert.title}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-semibold">
                  {cert.issuer}
                </div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {cert.date}
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
                {cert.description}
              </p>

             <div className="text-center">
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 group-hover:scale-105 transform"
  >
    <span className="mr-2">Verify</span>
    <ExternalLink size={16} />
  </a>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;