import React from 'react';
import { Code, Database, Globe, GraduationCap, Award, BrainCircuit } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Globe,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      icon: Database,
      technologies: ['Node.js', 'Flask', 'Python', 'MSSQL', 'MVC', 'PostgreSQL', 'C#'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'AI & ML',
      icon: BrainCircuit,
      technologies: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas', 'NumPy'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Tools',
      icon: Code,
      technologies: ['Git & Github', 'Docker', 'Canva', 'VS Code'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const education = [
    {
      degree: 'Computer Engineering',
      school: 'Adana Alparslan Türkeş University, Turkey',
      year: '2020-2025',
      gpa: '3.29/4.0',
      description: 'Studied core software development, algorithms, data structures, and project-based learning in the Computer Engineering program at Adana Alparslan Türkeş Science and Technology University.',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      degree: 'Software Development Intern',
      school: 'Adana Metropolitan Municipality',
      year: '2023',
      gpa: 'Internship',
      description: 'Contributed to a key web application project using the MVC architecture. Gained practical experience in backend development and collaborative software development.',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Solutions Architect',
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Meta React Developer Certificate',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'MongoDB Certified Developer',
      color: 'from-green-400 to-green-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a recent Computer Engineering graduate with a passion for full-stack web development. 
            I enjoy building structured and scalable web applications, often using the MVC pattern. 
            My final year studies ignited a strong interest in AI, and I'm excited to merge these skills to create innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h3>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My journey into software development began in college, where I discovered the power of code to bring ideas to life. 
                This discovery quickly grew into a passion for web development, focusing on creating practical and efficient applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Throughout my academic projects, I've concentrated on developing websites and web applications, with a strong emphasis on the MVC architecture to build maintainable and scalable software. 
                I believe that a well-structured backend is just as important as a beautiful and intuitive user interface.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Lately, I've become deeply fascinated by Artificial Intelligence, thanks to the advanced courses I took in my final year. 
                When I'm not coding, I'm usually exploring new AI models, learning about machine learning, or working on personal projects that combine web technologies with AI.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Facts</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Recent Computer Engineering Graduate</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Skilled in MVC Architecture</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Passionate about AI & Web Dev</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                <span className="text-gray-700 dark:text-gray-300">Eager to Learn & Contribute</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {skill.category}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full mr-3`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            <GraduationCap className="h-8 w-8 mr-3 text-blue-600" />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${edu.color}`}></div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <p className={`bg-gradient-to-r ${edu.color} bg-clip-text text-transparent font-medium mb-1`}>
                      {edu.school}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.year}</p>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-medium`}>
                    {edu.gpa}
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Certifications Section */}
        {/* <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center flex items-center justify-center">
            <Award className="h-8 w-8 mr-3 text-yellow-600" />
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden">

                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <Award className="h-6 w-6 text-white" />
                </div>
                
                <p className="text-gray-900 dark:text-white font-medium relative z-10">{cert.name}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;