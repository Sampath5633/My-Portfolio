import React from 'react';
import { Globe, Star, MessageCircle } from 'lucide-react';

interface Language {
  name: string;
  proficiency: string;
}

interface LanguagesSectionProps {
  languages: Language[];
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({ languages }) => {
  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'Native': return 'from-green-600 to-emerald-600';
      case 'Professional': return 'from-blue-600 to-cyan-600';
      case 'Basic': return 'from-yellow-600 to-orange-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const getProficiencyStars = (proficiency: string) => {
    switch (proficiency) {
      case 'Native': return 5;
      case 'Professional': return 4;
      case 'Conversational': return 3;
      default: return 2;
    }
  };

  const getLanguageGradient = (index: number) => {
    const gradients = [
      'from-teal-50 to-cyan-50',
      'from-blue-50 to-indigo-50',
      'from-green-50 to-emerald-50',
      'from-purple-50 to-pink-50'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full shadow-lg">
          <Globe className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Languages
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-teal-200 to-cyan-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {languages.map((language, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${getLanguageGradient(index)} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 cursor-pointer border border-white/50`}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/80 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-700 transition-colors duration-300">
                  {language.name}
                </h3>
              </div>
              <span 
                className={`px-4 py-2 bg-gradient-to-r ${getProficiencyColor(language.proficiency)} text-white text-sm rounded-full shadow-md font-medium transform group-hover:scale-105 transition-transform duration-300`}
              >
                {language.proficiency}
              </span>
            </div>
            
            <div className="flex items-center gap-1 bg-white/60 p-3 rounded-lg">
              {[...Array(5)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className={`w-5 h-5 transition-all duration-300 ${
                    starIndex < getProficiencyStars(language.proficiency)
                      ? 'text-yellow-400 fill-current transform group-hover:scale-110'
                      : 'text-gray-300 group-hover:text-gray-400'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm font-medium text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {getProficiencyStars(language.proficiency)}/5
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSection;