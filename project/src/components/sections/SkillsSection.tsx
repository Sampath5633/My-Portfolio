import React from 'react';
import { Code, Database, Settings, Users, ChevronRight, Zap } from 'lucide-react';

interface SkillsProps {
  skills: {
    languages: string[];
    coursework: string[];
    tools: string[];
    softSkills: string[];
  };
}

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      items: skills.languages,
      icon: Code,
      gradient: 'from-blue-600 to-cyan-600',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:border-blue-400'
    },
    {
      title: 'Relevant Coursework',
      items: skills.coursework,
      icon: Database,
      gradient: 'from-green-600 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      hoverColor: 'hover:border-green-400'
    },
    {
      title: 'Tools & Technologies',
      items: skills.tools,
      icon: Settings,
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      hoverColor: 'hover:border-purple-400'
    },
    {
      title: 'Soft Skills',
      items: skills.softSkills,
      icon: Users,
      gradient: 'from-orange-600 to-red-600',
      bgGradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:border-orange-400'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full shadow-lg">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-green-200 to-emerald-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${category.bgGradient} border-2 ${category.borderColor} ${category.hoverColor} rounded-xl p-6 hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 cursor-default`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group/item transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className={`p-1 bg-gradient-to-r ${category.gradient} rounded-full`}>
                    <ChevronRight className="w-3 h-3 text-white group-hover/item:translate-x-1 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors duration-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;