import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface Interest {
  name: string;
  icon: string;
}

interface InterestsSectionProps {
  interests: Interest[];
}

const InterestsSection: React.FC<InterestsSectionProps> = ({ interests }) => {
  const getInterestGradient = (index: number) => {
    const gradients = [
      'from-pink-600 to-rose-600',
      'from-purple-600 to-pink-600',
      'from-indigo-600 to-purple-600',
      'from-blue-600 to-indigo-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full shadow-lg">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          Interests & Hobbies
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-pink-200 to-rose-200"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {interests.map((interest, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${getInterestGradient(index)} rounded-full opacity-10 transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className="text-center relative z-10">
              <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-500 cursor-pointer">
                {interest.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                {interest.name}
              </h3>
              
              {/* Hover effect sparkles */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-4 h-4 text-pink-400 fill-current" />
              </div>
            </div>
            
            {/* Bottom gradient line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getInterestGradient(index)} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;