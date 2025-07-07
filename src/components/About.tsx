
import React from 'react';
import { Code, Coffee, Globe, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable, scalable solutions' },
    { icon: Globe, title: 'Modern Web', description: 'Latest technologies and best practices' },
    { icon: Coffee, title: 'Problem Solver', description: 'Analytical thinking and creativity' },
    { icon: Heart, title: 'Domain Expertise', description: 'Practical experience in the healthcare domain, building real-world hospital and clinical systems.' },
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
              Hello! I'm Rella Ramu
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
            I'm a passionate Full Stack Developer who loves crafting seamless digital experiences — from intuitive front-end interfaces to robust back-end systems.

With strong expertise in modern web technologies including Angular, React, HTML, CSS, JavaScript, PrimeNG, Bootstrap, and back-end tools like Node.js, PostgreSQL, MongoDB, and SQL, I specialize in building dynamic, scalable, and high-performance applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
            Over the past few years, I've had the privilege of working extensively in the hospital and healthcare domain, developing critical systems like inventory management, user administration, clinic workflows, and financial claim processing. These projects have sharpened my ability to deliver solutions that are not only technically sound but also aligned with real-world operational needs.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My development journey is fueled by curiosity, continuous learning, and a deep drive to solve meaningful problems through clean, efficient code. I thrive on challenges that blend creativity and logic, always aiming to deliver applications that are both beautifully designed and functionally powerful.

When I’m not coding, you’ll find me exploring new tools and frameworks, contributing to open-source projects, or sharing knowledge within the developer community.
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
