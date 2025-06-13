import React, { useState } from 'react';
import { Briefcase, ChevronRight, Code, Star, Rocket, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  features: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const getProjectGradient = (index: number) => {
    const gradients = [
      'from-indigo-600 to-purple-600',
      'from-blue-600 to-cyan-600',
      'from-purple-600 to-pink-600',
      'from-green-600 to-emerald-600',
      'from-orange-600 to-red-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg">
          <Rocket className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-indigo-200 to-purple-200"></div>
      </div>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 transform hover:-translate-y-2 ${
              selectedProject === project.id 
                ? 'border-indigo-500 ring-4 ring-indigo-100 scale-105' 
                : 'border-transparent hover:border-indigo-200'
            }`}
            onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
          >
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 bg-gradient-to-r ${getProjectGradient(index)} rounded-lg shadow-md`}>
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="ml-auto">
                      <ExternalLink className="w-5 h-5 text-gray-400 hover:text-indigo-500 transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 bg-gradient-to-r ${getProjectGradient(index)} text-white text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-default transform hover:scale-105`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ChevronRight 
                  className={`w-6 h-6 text-gray-400 transition-all duration-300 ml-4 ${
                    selectedProject === project.id ? 'rotate-90 text-indigo-500' : 'hover:text-indigo-400'
                  }`} 
                />
              </div>
              
              {selectedProject === project.id && (
                <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                  <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    Key Features
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg border border-indigo-100 hover:shadow-md transition-all duration-300 cursor-default group transform hover:-translate-y-1"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${getProjectGradient(index)} rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300`}></div>
                        <span className="text-gray-700 group-hover:text-gray-800 transition-colors duration-300 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;