import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutSection from './components/sections/AboutSection';
import EducationSection from './components/sections/EducationSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificatesSection from './components/sections/CertificatesSection';
import InterestsSection from './components/sections/InterestsSection';
import LanguagesSection from './components/sections/LanguagesSection';
import portfolioData from './data/portfolio.json';


function App() {
  const [activeSection, setActiveSection] = useState('about');

  // ⬇️ Injecting the avatar image manually since it's in public folder
  const personalWithAvatar = {
    ...portfolioData.personal,
    avatar: '/assets/avatar.jpg',

  };

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection about={portfolioData.about} />;
      case 'education':
        return <EducationSection education={portfolioData.education} />;
      case 'skills':
        return <SkillsSection skills={portfolioData.skills} />;
      case 'projects':
        return <ProjectsSection projects={portfolioData.projects} />;
      case 'certificates':
        return <CertificatesSection certificates={portfolioData.certificates} />;
      case 'interests':
        return <InterestsSection interests={portfolioData.interests} />;
      case 'languages':
        return <LanguagesSection languages={portfolioData.languages} />;
      default:
        return <AboutSection about={portfolioData.about} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        personal={personalWithAvatar}
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <Navigation
        activeSection={activeSection}
        onSectionChange={setActiveSection}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="transition-all duration-500 ease-in-out">
          {renderSection()}
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-300">
            © 2024 {portfolioData.personal.name}. Built with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;