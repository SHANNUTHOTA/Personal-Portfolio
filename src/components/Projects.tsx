import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Calendar, Users, Target, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ProjectTimeline } from "@/components/ProjectTimeline";

export const Projects = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>(0.1);
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  const projects = [
    {
      title: "Cattle Tracking System",
      subtitle: "IoT Livestock Monitoring Solution",
      description: "End-to-end IoT livestock monitoring system with real-time GPS tracking and geofencing capabilities for rural livestock management.",
      challenges: ["Long-range rural communication", "GPS precision accuracy", "Power optimization"],
      solutions: ["LoRa-based communication protocol", "GNSS module integration", "ESP32 low-power modes"],
      results: ["3-meter GPS precision", "15km communication range", "6-month battery life"],
      technologies: ["ESP32", "LoRa", "GNSS", "PHP", "MySQL", "JavaScript", "Bootstrap"],
      github: "#",
      demo: "https://careerinedu.com/tracker/map.html",
      status: "Completed",
      category: "IoT",
      year: "2025",
      duration: "24 Hrs",
      teamSize: "3 developers",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Muskan Medicare",
      subtitle: "Healthcare Management Platform",
      description: "Professional corporate website optimized for search engines and user experience with comprehensive pharmaceutical information.",
      challenges: ["SEO optimization", "Performance optimization", "Cross-browser compatibility"],
      solutions: ["Meta tag optimization", "Image compression", "Progressive enhancement"],
      results: ["90+ PageSpeed score", "First page Google ranking", "100% cross-browser support"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO", "Analytics"],
      github: "#",
      demo: "http://muskanmedicare.com",
      status: "Live",
      category: "Corporate",
      year: "2024",
      duration: "2 months",
      teamSize: "5 Developers",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "DrWinz Pharma",
      subtitle: "Corporate Pharmaceutical Website",
      description: "Professional corporate website optimized for search engines and user experience with comprehensive pharmaceutical information.",
      challenges: ["SEO optimization", "Performance optimization", "Cross-browser compatibility"],
      solutions: ["Meta tag optimization", "Image compression", "Progressive enhancement"],
      results: ["90+ PageSpeed score", "First page Google ranking", "100% cross-browser support"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "SEO", "Analytics"],
      github: "#",
      demo: "http://DrWinzPharma.com",
      status: "Live",
      category: "Corporate",
      year: "2024",
      duration: "1 months",
      teamSize: "5 Developers",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "RiyoCar",
      subtitle: "Luxury Car Rental Platform",
      description: "Comprehensive car rental platform with advanced booking system, customer management, and interactive vehicle gallery.",
      challenges: ["Complex booking logic", "Image gallery optimization", "User review system"],
      solutions: ["Calendar-based booking", "Lazy loading images", "Rating and review API"],
      results: ["Seamless booking experience", "Fast loading gallery", "Comprehensive review system"],
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Booking System"],
      github: "#",
      demo: "http://riyocar.com",
      status: "Completed",
      category: "Business",
      year: "2024",
      duration: "1 months",
      teamSize: "5 Developers",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "CareerInEdu",
      subtitle: "AI-Powered Career Guidance Platform",
      description: "Comprehensive career guidance platform with AI-based job recommendations, internship listings, and career analytics.",
      challenges: ["Job matching algorithm", "Large dataset management", "Real-time updates"],
      solutions: ["ML-based recommendations", "Database optimization", "WebSocket integration"],
      results: ["95% job match accuracy", "500+ job listings", "Real-time notifications"],
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap", "AI/ML"],
      github: "#",
      demo: "http://careerinedu.com",
      status: "Completed",
      category: "Education",
      year: "2023",
      duration: "5 months",
      teamSize: "5 developers",  
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div ref={titleRef} className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs sm:text-sm">
              Featured Work
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">
              My Portfolio
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              Showcasing innovative solutions across web development, IoT, blockchain, and e-commerce platforms
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-primary mx-auto mt-6 sm:mt-8 rounded-full"></div>
          </div>
          
          {/* Projects Grid */}
          <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`modern-card h-full group relative overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-primary/10 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{transitionDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} flex-shrink-0`}></div>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                        <Badge 
                          variant={project.status === 'Live' ? 'default' : 'secondary'}
                          className={`text-xs ${project.status === 'Live' ? 'bg-green-500/10 text-green-500 border-green-500/20' : ''}`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold gradient-text mb-1 leading-tight">{project.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-2">
                      <span className="text-xs sm:text-sm text-muted-foreground block">{project.year}</span>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-muted/30 rounded-lg">
                    <div>
                      <span className="text-xs text-muted-foreground block mb-1 flex items-center gap-1">
                        <Calendar className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">Duration</span>
                      </span>
                      <span className="font-semibold text-xs sm:text-sm">{project.duration}</span>
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block mb-1 flex items-center gap-1">
                        <Users className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">Team Size</span>
                      </span>
                      <span className="font-semibold text-xs sm:text-sm">{project.teamSize}</span>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm flex items-center gap-2">
                      <Target className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      Key Results
                    </h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      {project.results.slice(0, 3).map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-primary mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4 sm:mb-6">
                    <h4 className="font-semibold mb-2 sm:mb-3 text-xs sm:text-sm flex items-center gap-2">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.slice(0, 6).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 6 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 6}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 text-xs sm:text-sm py-2 h-auto"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo !== "#" && (
                      <Button 
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:opacity-90 text-white transition-all duration-300 text-xs sm:text-sm py-2 h-auto"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Timeline Section */}
        <div className="mt-16 sm:mt-20">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs sm:text-sm">
              Project Journey
            </Badge>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 gradient-text">Project Timeline</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              Explore my development journey through an interactive timeline of projects and achievements
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>
          
          <ProjectTimeline />
        </div>
      </div>
    </section>
  );
};
