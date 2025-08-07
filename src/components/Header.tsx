import React from 'react';
import { Moon, Sun, Menu, X, Home, User, FolderOpen, BookOpen, Mail, Github, Linkedin } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/ACE logo.png';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'blog', label: 'Blog', icon: BookOpen },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-700/50' 
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center transition-all duration-500 ${scrolled ? 'h-14' : 'h-16'}`}>
          
          {/* Left: Logo */}
          <div className="flex items-center flex-1">
            <div className="flex-shrink-0">
              <div className={`relative group cursor-pointer transition-all duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`}>
                <div className={`relative rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                  scrolled ? 'w-20 h-20' : 'w-24 h-24'
                }`}>
                  <div className="relative flex items-center justify-center w-full h-full">
                    <img
                      src={logo}
                      alt="Logo"
                      className={`object-contain transition-all duration-300 ${
                        scrolled ? 'w-22 h-22' : 'w-24 h-24'
                      }`}
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Navigation */}
          <nav className="hidden md:flex justify-center flex-1">
            <div className="flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600 dark:hover:text-blue-400'
                  } ${scrolled ? 'text-xs px-2 py-1' : ''}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Right: Socials + Theme + Menu */}
          <div className="flex items-center justify-end space-x-3 flex-1">
            <div className="hidden md:flex items-center space-x-2">
              <a
                href="https://github.com/anilcemelemir"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${scrolled ? 'p-1.5' : ''}`}
              >
                <Github className={`transition-all duration-300 ${scrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
              </a>
              <a
                href="https://www.linkedin.com/in/an%C4%B1l-cem-elemir-b34a17378/"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${scrolled ? 'p-1.5' : ''}`}
              >
                <Linkedin className={`transition-all duration-300 ${scrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
              </a>
              <a
                href="mailto:anilcemelemir@gmail.com"
                className={`p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${scrolled ? 'p-1.5' : ''}`}
              >
                <Mail className={`transition-all duration-300 ${scrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
              </a>
            </div>

            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 ${scrolled ? 'p-1.5' : ''}`}
            >
              {theme === 'dark' ? 
                <Sun className={`transition-all duration-300 ${scrolled ? 'h-4 w-4' : 'h-5 w-5'}`} /> : 
                <Moon className={`transition-all duration-300 ${scrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
              }
            </button>

            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 ${scrolled ? 'p-1.5' : ''}`}
              >
                {mobileMenuOpen ? 
                  <X className={`transition-all duration-300 ${scrolled ? 'h-4 w-4' : 'h-5 w-5'}`} /> : 
                  <Menu className={`transition-all duration-300 ${scrolled ? 'h-4 w-4' : 'h-5 w-5'}`} />
                }
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/50 dark:border-gray-700/50">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              );
            })}

            <div className="flex justify-center space-x-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:john.doe@example.com"
                className="p-3 rounded-full bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:scale-110 backdrop-blur-sm"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
