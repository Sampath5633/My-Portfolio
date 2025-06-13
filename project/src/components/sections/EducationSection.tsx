import React, { useState } from 'react';
import { GraduationCap, Calendar, Award, ChevronRight, BookOpen } from 'lucide-react';

interface Education {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  score: string;
  type: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  const [selectedEducation, setSelectedEducation] = useState<string | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Undergraduate': return 'from-purple-600 to-pink-600';
      case 'Intermediate': return 'from-blue-600 to-cyan-600';
      case 'School': return 'from-green-600 to-emerald-600';
      default: return 'from-gray-600 to-slate-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Undergraduate': return GraduationCap;
      case 'Intermediate': return BookOpen;
      case 'School': return Award;
      default: return GraduationCap;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-purple-200 to-pink-200"></div>
      </div>

      <div className="grid gap-6">
        {education.map((edu) => {
          const TypeIcon = getTypeIcon(edu.type);
          return (
            <div
              key={edu.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 transform hover:-translate-y-2 ${
                selectedEducation === edu.id 
                  ? 'border-purple-500 ring-4 ring-purple-100 scale-105' 
                  : 'border-transparent hover:border-purple-200'
              }`}
              onClick={() => setSelectedEducation(selectedEducation === edu.id ? null : edu.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 bg-gradient-to-r ${getTypeColor(edu.type)} rounded-lg shadow-md`}>
                        <TypeIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className={`px-4 py-2 bg-gradient-to-r ${getTypeColor(edu.type)} text-white text-sm rounded-full shadow-md font-medium`}>
                        {edu.type}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{edu.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <p className="text-gray-600 mb-3 font-medium">{edu.degree}</p>
                    
                    <div className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg w-fit">
                      <Award className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-700">{edu.score}</span>
                    </div>
                  </div>
                  
                  <ChevronRight 
                    className={`w-6 h-6 text-gray-400 transition-all duration-300 ${
                      selectedEducation === edu.id ? 'rotate-90 text-purple-500' : 'hover:text-purple-400'
                    }`} 
                  />
                </div>
                
                {selectedEducation === edu.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100 hover:shadow-md transition-all duration-300 cursor-default">
                          <h4 className="font-semibold text-purple-800 mb-2 flex items-center gap-2">
                            <GraduationCap className="w-4 h-4" />
                            Institution
                          </h4>
                          <p className="text-purple-700">{edu.institution}</p>
                        </div>
                        <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:shadow-md transition-all duration-300 cursor-default">
                          <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Duration
                          </h4>
                          <p className="text-blue-700">{edu.duration}</p>
                        </div>
                      </div>
                      <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-md transition-all duration-300 cursor-default">
                        <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          Academic Performance
                        </h4>
                        <p className="text-green-700 font-medium text-lg">{edu.score}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EducationSection;