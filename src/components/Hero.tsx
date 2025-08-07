import React from 'react';
import { MapPin, Download, Eye, ArrowDown } from 'lucide-react';
import profilePhoto from '../assets/Profile Photo.png';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-40 w-60 h-60 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="block">I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-gradient">
                Anıl Cem Elemir
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-medium">
              <span className="block">Full Stack Developer &</span>
              <span className="block text-blue-600 dark:text-blue-400">AI and MVC Enthusiast</span>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start text-gray-600 dark:text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <MapPin className="h-5 w-5 mr-2 text-red-500" />
              <span>Adana, Turkey</span>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: '0.7s' }}>
              I craft clean, functional web applications with a passion for problem-solving.
               From building structured MVC projects to exploring the world of AI,
                I bring ideas to life with code — occasionally using React and Node.js along the way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <button 
                onClick={() => scrollToSection('projects')}
                className="group bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium flex items-center justify-center hover:scale-105 hover:shadow-lg"
              >
                <Eye className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                View My Work
              </button>
              <a
                href={`${import.meta.env.BASE_URL}anil-cem-elemir-cv.pdf`}
                download="AnilCemElemirCV.pdf"
                className="group border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 font-medium flex items-center justify-center hover:scale-105 hover:shadow-lg"
              >
                <Download className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Download CV
              </a>

            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Main Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full"></div>
                
                {/* Profile Image */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600">
                  <img 
                    src={profilePhoto}
                    alt="Anıl Cem Elemir - Full Stack Developer"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Down Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
    </section>
  );
};

export default Hero;