import React from 'react';
import { CheckCircle, Sparkles, Star } from 'lucide-react';

interface AboutSectionProps {
  about: {
    description: string;
    highlights: string[];
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ about }) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-purple-200"></div>
      </div>
      
      <div className="space-y-6">
        <div className="relative p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-default group">
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            {about.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {about.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group transform hover:-translate-y-1 hover:scale-105"
            >
              <div className="p-1 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                <CheckCircle className="w-5 h-5 text-green-500 group-hover:text-green-600 transition-colors duration-300" />
              </div>
              <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 font-medium">
                {highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;