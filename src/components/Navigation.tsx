import React from 'react';
import { User, GraduationCap, Briefcase, Award, Heart, Globe } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, onSectionChange }) => {
  const sections = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'certificates', label: 'Certificates', icon: Award },
    { id: 'interests', label: 'Interests', icon: Heart },
    { id: 'languages', label: 'Languages', icon: Globe },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
<div className="flex space-x-2 py-4 overflow-visible px-2">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
  key={id}
  onClick={() => onSectionChange(id)}
  className={`relative z-10 flex items-center gap-2 px-6 py-3 text-sm font-medium whitespace-nowrap rounded-full transition-all duration-300 cursor-pointer focus:outline-none transform hover:-translate-y-1
  ${
    activeSection === id
      ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500 ring-2 ring-offset-2 ring-blue-300 shadow-[0_0_25px_rgba(6,182,212,0.8)] hover:shadow-[0_0_40px_rgba(6,182,212,1)] scale-105'
      : 'text-gray-600 bg-white shadow-[0_0_12px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.7)] hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100'
  }`}


>
  <Icon className="w-4 h-4" />
  <span>{label}</span>
</button>

            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;