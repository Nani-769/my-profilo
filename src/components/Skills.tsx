
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: ['Angular','React', 'JavaScript', 'HTML', 'CSS', 'PrimeNg','Tailwind CSS', 'Bootstrap', ],
      color: 'bg-blue-50 text-blue-700 border-blue-200',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Backend Development',
      icon: <Database className="w-6 h-6" />,
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL', 'REST APIs','Redis','elastic search'],
      color: 'bg-green-50 text-green-700 border-green-200',
      gradient: 'from-green-500 to-emerald-500'
    },
    // {
    //   title: 'Design & UI/UX',
    //   icon: <Palette className="w-6 h-6" />,
    //   skills: ['Figma', 'Photoshop', 'Adobe XD', 'Sketch', 'Responsive Design', 'User Experience'],
    //   color: 'bg-purple-50 text-purple-700 border-purple-200',
    //   gradient: 'from-purple-500 to-pink-500'
    // },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="w-6 h-6" />,
      skills: ['Git','Postman', 'Kibana', 'VS Code', 'Linux','Docker'],
      color: 'bg-orange-50 text-orange-700 border-orange-200',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build exceptional digital experiences that delight users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    className={`${category.color} px-4 py-2 text-sm font-medium hover:scale-105 transition-all duration-300 cursor-default border rounded-full`}
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
