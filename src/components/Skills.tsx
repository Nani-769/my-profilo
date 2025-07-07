
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'REST APIs', 'GraphQL'],
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'Photoshop', 'VS Code', 'Postman'],
      color: 'bg-purple-100 text-purple-800'
    },
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'PHP'],
      color: 'bg-orange-100 text-orange-800'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className={`${category.color} px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
