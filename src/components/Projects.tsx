import React, { useState } from 'react';
import { Github, Filter } from 'lucide-react';
import foreXpert from '../assets/forexpert_logo.png';
import LungCancer from '../assets/Cancer_Project_logo.png';
import SteamSales from '../assets/Steam_Project_logo.png';
import BlogProject from '../assets/Blog_logo.png';
import PacketQuest from '../assets/Packet_Quest_logo.png';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  image: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'Blog Website',
      description: 'A multi-layered ASP.NET Core MVC blog project featuring admin panel, user authentication and more.',
      technologies: ['ASP.NET Core', 'C#', 'MSSQL', 'SCSS', 'JavaScript'],
      category: 'web',
      image: BlogProject,
      githubUrl: 'https://github.com/anilcemelemir/.NET-Blog-Website',
      featured: false
    },
    {
      id: 2,
      title: 'Packet Quest Game',
      description: 'An educational Python game that gamifies the OSI Model, built with Pygame.',
      technologies: ['Pygame', 'Python', 'Computer Networks'],
      category: 'game',
      image: PacketQuest,
      githubUrl: 'https://github.com/anilcemelemir/Packet-Quest-Game',
      featured: true
    },
    {
      id: 3,
      title: 'Steam Sales Predictor',
      description: 'Creating AI model to predict sales of the games that will be released. For game developers.',
      technologies: ['Pandas', 'Scikit-Learn', 'Python', 'Machine Learning', 'Flask'],
      category: 'ai',
      image: SteamSales,
      githubUrl: 'https://github.com/anilcemelemir/SteamSalesPrediction',
      featured: false
    },
    {
      id: 4,
      title: 'foreXpert',
      description: 'an AI-powered currency forecasting web app built with Flask, Prophet, and XGBoost.',
      technologies: ['Flask', 'Python', 'XGBoost', 'Prophet', 'Machine Learning', 'Pandas'],
      category: 'ai',
      image: foreXpert,
      githubUrl: 'https://github.com/anilcemelemir/foreXpert',
      featured: false
    },
    {
      id: 5,
      title: 'Lung Cancer Predictor',
      description: 'A Flask-based machine learning application that predicts lung cancer risk and survival chances using patient data and comorbidities.',
      technologies: ['Flask', 'Python', 'Machine Learning', 'Pandas'],
      category: 'ai',
      image: LungCancer,
      githubUrl: 'https://github.com/anilcemelemir/LungCancerPrediction',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'game', label: 'Games' },
    { id: 'ai', label: 'AI Projects' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects = projects.filter(project => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'featured') return project.featured;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience 
            in building modern web and mobile applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center text-gray-600 dark:text-gray-400 mr-4">
            <Filter className="h-5 w-5 mr-2" />
            <span>Filter by:</span>
          </div>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;