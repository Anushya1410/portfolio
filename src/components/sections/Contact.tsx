import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">anushya1410@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 8108943776</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors duration-300">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Address</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Sion West, Mumbai<br />
                    Maharashtra 400022, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/anushya-sendurpandi-397196260/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 hover:scale-110 transform"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Anushya1410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors duration-300 hover:scale-110 transform"
                >
                  <Github size={24} />
                </a>
                <a
                  href="anushya1410@gmail.com"
                  className="p-3 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors duration-300 hover:scale-110 transform"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-300 resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Send size={24} className="mr-3" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Anushya Portfolio. Made with using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;