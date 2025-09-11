import React from 'react';
import { Award, Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer Traine',
      company: 'STUDENT TRIBE',
      location: 'Hyderabad, India',
      duration: 'JUNE 2025 - Present',
      description: 'description: '◦ Gained hands-on experience developing and enhancing web applications with the MERN stack.  Collaborated with a team to build responsive UIs using React.js and Tailwind CSS for seamless layout and performance.  Debugged and resolved complex issues in web apps, improving system efficiency and reliability.  Participated in Agile collaboration to ensure timely project delivery.',
',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful APIs', 'React Hooks']
    }
  ];

  const awards = [
    {
      title: 'Python Language Certification',
      organization: 'OpenWeaver',
      date: 'Feb 2024',
      description: 'Comprehensive certification covering Python programming fundamentals, data structures, and advanced concepts.',
      icon: '🐍'
    },
    {
      title: 'Hands-On EV Design Certification',
      organization: 'JNTUK',
      date: 'Mar 2024',
      description: 'Specialized certification in Electric Vehicle design principles and hands-on implementation techniques.',
      icon: '⚡'
    },
    {
      title: 'Responsive Web Designing Course',
      organization: 'CodeCamp',
      date: 'Mar 2024',
      description: 'Advanced certification in responsive web design, mobile-first approach, and modern CSS techniques.',
      icon: '📱'
    },
    {
      title: 'Front End Technologies Course',
      organization: 'GreatLearning',
      date: 'Apr 2024',
      description: 'Comprehensive course covering modern frontend technologies, frameworks, and best practices.',
      icon: '💻'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My professional journey and continuous learning path in technology.
          </p>
        </div>
        
        {/* Experience Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Work Experience</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-red-400 to-red-500 hidden md:block"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-red-500 rounded-full border-4 border-black shadow-lg group-hover:scale-125 transition-transform duration-300 hidden md:block">
                    <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
                  </div>
                  
                  <div className="md:ml-20">
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl p-6 hover:border-red-400/50 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-500/20 rounded-lg">
                              <Briefcase className="w-5 h-5 text-red-400" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white group-hover:text-red-300 transition-colors">
                                {exp.title}
                              </h3>
                              <p className="text-red-400 font-medium">{exp.company}</p>
                            </div>
                          </div>
                          
                          <div className="text-right text-sm text-gray-400">
                            <div className="flex items-center gap-1 mb-1">
                              <Calendar className="w-4 h-4" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-xs border border-red-500/30">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Certifications Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Awards & Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-600/20 to-red-800/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative bg-black/40 backdrop-blur-lg border border-red-500/30 rounded-2xl p-6 hover:border-red-400/50 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{award.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-red-400" />
                        <h4 className="text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                          {award.title}
                        </h4>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <p className="text-red-400 font-medium">{award.organization}</p>
                        <span className="text-sm text-gray-400 flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {award.date}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
