
import React from 'react';
import { Code, Coffee, Globe, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable, scalable solutions' },
    { icon: Globe, title: 'Modern Web', description: 'Latest technologies and best practices' },
    { icon: Coffee, title: 'Problem Solver', description: 'Analytical thinking and creativity' },
    { icon: Heart, title: 'User Focused', description: 'Designing with empathy and purpose' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Hello! I'm Richard Scott
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for creating exceptional 
              digital experiences. With expertise spanning from front-end aesthetics to 
              back-end architecture, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey in development has been driven by curiosity and a commitment to 
              continuous learning. I thrive on challenges that push the boundaries of 
              what's possible in web development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
