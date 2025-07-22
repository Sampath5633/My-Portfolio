import React from 'react';
import { User, Mail, Phone, Github, Linkedin, Download } from 'lucide-react';
import Navigation from './Navigation';

interface HeaderProps {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    linkedin: string;
    github: string;
    avatar: string;
  };
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ personal, activeSection, onSectionChange }) => {
  return (
    <header className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      {/* Glowing blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="flex flex-col items-center gap-12">
          {/* Avatar */}
          <div className="group relative cursor-pointer">
            <div className="w-52 h-52 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl">
              <img
                src={personal.avatar}
                alt="Avatar"
                className="w-full h-full rounded-full object-cover transition-all duration-300 group-hover:brightness-110"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:bg-green-400">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping"></div>
          </div>

          {/* Name & Title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 uppercase bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient-x transition-transform duration-300 hover:scale-110 cursor-default">
              {personal.name}
            </h1>
            <p className="text-2xl lg:text-3xl text-blue-200 mb-8 font-light hover:text-blue-100 hover:scale-105 transition-all cursor-default">
              {personal.title}
            </p>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-0 mb-8 max-w-xl mx-auto">
              <div className="flex flex-col items-center">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-all duration-300 group cursor-pointer p-3 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                >
                  <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/40 transition-all duration-300">
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{personal.email}</span>
                </a>
              </div>

              <div className="flex flex-col items-center justify-start h-full">
                <a
                  href={`tel:${personal.phone}`}
                  className="flex items-center gap-3 text-blue-100 hover:text-white transition-all duration-300 group cursor-pointer p-3 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                >
                  <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/40 transition-all duration-300">
                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{personal.phone}</span>
                </a>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:shadow-[0_0_25px_rgba(191,219,254,0.5)] cursor-pointer group transform hover:-translate-y-1"
              >
                <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                <span className="font-medium drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]">LinkedIn</span>
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(100,116,139,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] cursor-pointer group transform hover:-translate-y-1"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                <span className="font-medium drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]">GitHub</span>
              </a>

              <a
                href="/Sam_new.pdf"
                download="Sam_Resume.pdf"
                title="Download Resume"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-300 via-teal-400 to-indigo-500 hover:from-cyan-400 hover:to-indigo-600 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_15px_rgba(34,211,238,0.6)] hover:shadow-[0_0_25px_rgba(99,102,241,0.8)] cursor-pointer group transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5 animate-bounce group-hover:rotate-12 transition-transform duration-300 drop-shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                <span className="font-medium drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
