import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Github, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineProject {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'web' | 'mobile' | 'iot' | 'blockchain' | 'ai';
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  image?: string;
}

export const ProjectTimeline = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const projects: TimelineProject[] = [
    {
      id: '1',
      title: 'IoT Cattle Tracking System',
      description: 'Real-time GPS tracking system with LoRa communication for livestock monitoring developed for KBN CodeSpark Hackathon 2025.',
      date: '2025-07',
      category: 'iot',
      technologies: ['Arduino', 'ESP32', 'LoRa', 'GPS/GNSS', 'PHP', 'MySQL'],
      status: 'completed',
      highlights: ['Team lead of 4 developers', 'KBN CodeSpark Hackathon 2025', 'Real-time GPS tracking', '15km communication range'],
      liveUrl: 'https://careerinedu.com/tracker/map.html',
    },
    {
      id: '2',
      title: 'Muskan Medicare E-commerce',
      description: 'Full-featured medical e-commerce platform with secure payment processing and comprehensive product catalog.',
      date: '2025-06',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL', 'PHP'],
      status: 'completed',
      highlights: ['100+ products listed', 'Secure payment gateway', 'Mobile-responsive design', 'Live deployment'],
      liveUrl: 'https://muskanmedicare.com',
    },
    {
      id: '3',
      title: 'DrWinz Pharma Website',
      description: 'Professional corporate pharmaceutical website optimized for search engines and user experience.',
      date: '2024-11',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      status: 'completed',
      highlights: ['90+ PageSpeed score', 'First page Google ranking', 'Cross-browser compatibility', 'SEO optimized'],
      liveUrl: 'https://drwinzpharma.com',
    },
    {
      id: '4',
      title: 'RiyoCar Rental Platform',
      description: 'Luxury car rental platform with advanced booking system and interactive vehicle gallery.',
      date: '2024-08',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      status: 'completed',
      highlights: ['Calendar-based booking', 'Image gallery optimization', 'User review system', 'Booking management'],
      liveUrl: 'https://riyocar.com',
    },
    {
      id: '5',
      title: 'CareerInEdu Platform',
      description: 'Comprehensive educational career guidance platform with course recommendations and career path analysis.',
      date: '2023-12',
      category: 'web',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL', 'PHP'],
      status: 'completed',
      highlights: ['Career guidance system', 'Course recommendations', 'Interactive UI/UX', 'Educational platform'],
      liveUrl: 'https://careerinedu.com',
    },
    {
      id: '6',
      title: 'Blockchain Voting System',
      description: 'Decentralized voting platform using smart contracts for transparent elections (PL Genesis Hackathon 2024).',
      date: '2024-06',
      category: 'blockchain',
      technologies: ['Solidity', 'Web3.js', 'Smart Contracts', 'React'],
      status: 'completed',
      highlights: ['PL Genesis Hackathon 2024', 'Smart contract development', 'Transparent voting', 'Blockchain integration'],
    },
    {
      id: '7',
      title: 'Aptos & Algorand Projects',
      description: 'Exploration projects for learning Move programming and cryptocurrency wallet integration.',
      date: '2024-04',
      category: 'blockchain',
      technologies: ['Aptos Move', 'Algorand SDK', 'Cryptocurrency APIs'],
      status: 'completed',
      highlights: ['Move programming language', 'Wallet integration', 'Cryptocurrency concepts', 'Multiple hackathon participation'],
    },
  ];

  const categories = [
    { value: 'all', label: 'All Projects', color: 'bg-gray-500' },
    { value: 'web', label: 'Web', color: 'bg-blue-500' },
    { value: 'iot', label: 'IoT', color: 'bg-green-500' },
    { value: 'blockchain', label: 'Blockchain', color: 'bg-purple-500' },
    { value: 'ai', label: 'AI/ML', color: 'bg-red-500' },
  ];

  const filteredProjects = filterCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === filterCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planned': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.value === category);
    return categoryData?.color || 'bg-gray-500';
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.value}
            onClick={() => setFilterCategory(category.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              filterCategory === category.value
                ? `${category.color} text-white shadow-lg`
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative px-4 md:px-0">
        {/* Timeline line - centered on all screen sizes */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary to-primary/20"></div>

        {/* Projects */}
        <div className="space-y-8 md:space-y-12">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4 md:gap-8 items-center">
                  {/* Left Column - Shows card if even index, empty if odd */}
                  <div className={`${isEven ? 'block pr-2 md:pr-0' : ''}`}>
                    {isEven && (
                      <Card 
                        className={`modern-card cursor-pointer transition-all duration-300 hover:shadow-xl ${
                          selectedProject === project.id ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      >
                        <CardContent className="p-3 sm:p-6">
                          <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <Badge className={`${getCategoryColor(project.category)} text-white text-[10px] sm:text-xs`}>
                              {project.category.toUpperCase()}
                            </Badge>
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                          </div>
                          
                          <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 gradient-text">{project.title}</h3>
                          <p className="text-muted-foreground text-xs sm:text-base mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <Badge key={tech} variant="outline" className="text-[9px] sm:text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 2 && (
                              <Badge variant="outline" className="text-[9px] sm:text-xs">
                                +{project.technologies.length - 2}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            {project.date}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>

                  {/* Right Column - Shows card if odd index, empty if even */}
                  <div className={`${!isEven ? 'block pl-2 md:pl-0' : ''}`}>
                    {!isEven && (
                      <Card 
                        className={`modern-card cursor-pointer transition-all duration-300 hover:shadow-xl ${
                          selectedProject === project.id ? 'ring-2 ring-primary' : ''
                        }`}
                        onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      >
                        <CardContent className="p-3 sm:p-6">
                          <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <Badge className={`${getCategoryColor(project.category)} text-white text-[10px] sm:text-xs`}>
                              {project.category.toUpperCase()}
                            </Badge>
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getStatusColor(project.status)}`}></div>
                          </div>
                          
                          <h3 className="text-sm sm:text-xl font-bold mb-1 sm:mb-2 gradient-text">{project.title}</h3>
                          <p className="text-muted-foreground text-xs sm:text-base mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{project.description}</p>
                          
                          <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                            {project.technologies.slice(0, 2).map((tech) => (
                              <Badge key={tech} variant="outline" className="text-[9px] sm:text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 2 && (
                              <Badge variant="outline" className="text-[9px] sm:text-xs">
                                +{project.technologies.length - 2}
                              </Badge>
                            )}
                          </div>

                          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                            {project.date}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>

                {/* Center dot - centered on all screen sizes */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full ${getCategoryColor(project.category)} border-2 sm:border-4 border-background shadow-lg`}
                    whileHover={{ scale: 1.3 }}
                    animate={selectedProject === project.id ? { scale: 1.4 } : { scale: 1 }}
                  ></motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-background rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-2xl font-bold gradient-text">{project.title}</h2>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-muted rounded-full transition-colors"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h3 className="font-semibold mb-2">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Highlights</h3>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <Star className="w-3 h-3 mr-2 text-yellow-500" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
