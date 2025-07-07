
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Sr. Developer',
      company: 'Tech Innovation Corp',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead full-stack development projects, mentor junior developers, and architect scalable web applications using modern technologies.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd',
      location: 'Remote',
      period: '2020 - 2022',
      description: 'Developed and maintained web applications, collaborated with cross-functional teams, and optimized database performance.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced loading times by 50%',
        'Integrated third-party APIs'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Web Studio',
      location: 'New York, NY',
      period: '2018 - 2020',
      description: 'Created engaging user interfaces, collaborated with designers, and ensured cross-browser compatibility.',
      achievements: [
        'Converted 25+ designs to code',
        'Improved user engagement by 35%',
        'Maintained 99.9% uptime'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey showcasing growth, impact, and contributions across various organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-red-200"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 md:mb-16">
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-lg z-10"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <Calendar className="h-4 w-4 text-red-600" />
                    <span className="text-red-600 font-medium">{exp.period}</span>
                    <MapPin className="h-4 w-4 text-gray-500 ml-2" />
                    <span className="text-gray-500">{exp.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                  <h4 className="text-lg font-semibold text-red-600 mb-4">{exp.company}</h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achieveIndex) => (
                        <li key={achieveIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
