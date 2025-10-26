import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SkillRadarChart } from "./SkillRadarChart";

export const Skills = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>(0.2);
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation<HTMLDivElement>(0.3);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React.js", level: 90 },
        { name: "PHP", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development", 
      icon: "⚙️",
      skills: [
        { name: "Laravel", level: 88 },
        { name: "Node.js", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "API Development", level: 82 },
        { name: "Database Design", level: 80 }
      ]
    },
    {
      title: "IoT & Hardware",
      icon: "🔌",
      skills: [
        { name: "Arduino/ESP32", level: 90 },
        { name: "LoRa Communication", level: 85 },
        { name: "GPS Tracking", level: 80 },
        { name: "Sensor Integration", level: 85 },
        { name: "Hardware Prototyping", level: 82 }
      ]
    },
    {
      title: "Blockchain Development",
      icon: "⛓️",
      skills: [
        { name: "Smart Contracts", level: 75 },
        { name: "Solidity", level: 70 },
        { name: "Move Programming", level: 65 },
        { name: "Web3 Integration", level: 72 },
        { name: "Cryptocurrency Wallets", level: 68 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git/GitHub", level: 88 },
        { name: "VS Code", level: 90 },
        { name: "Linux/Unix", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Project Management", level: 85 }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 bg-muted/20 relative overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs sm:text-sm">
              Technical Skills
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              Comprehensive technical skills spanning full-stack development, IoT systems, and emerging blockchain technologies
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
            <div className="lg:col-span-2">
              <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {skillCategories.map((category, categoryIndex) => (
                  <Card 
                    key={categoryIndex} 
                    className={`modern-card group transition-all duration-1000 ${
                      skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center gap-3 mb-4 sm:mb-6">
                        <div className="p-2 sm:p-3 rounded-xl bg-gradient-primary/10 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-xl sm:text-2xl">{category.icon}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold gradient-text">{category.title}</h3>
                      </div>
                      
                      <div className="space-y-3 sm:space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-1.5 sm:space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-xs sm:text-sm">{skill.name}</span>
                              <span className="text-xs text-primary font-semibold">{skill.level}%</span>
                            </div>
                            <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-gradient-primary transition-all duration-1500 ease-out"
                                style={{
                                  width: skillsVisible ? `${skill.level}%` : '0%',
                                  transitionDelay: `${categoryIndex * 0.1 + skillIndex * 0.05}s`
                                }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-500 ${skillsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <Card className="modern-card h-fit lg:sticky lg:top-8">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-primary/10">
                      <span className="text-xl sm:text-2xl">📊</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold gradient-text">Skills Overview</h3>
                  </div>
                  
                  <div className="mb-4 sm:mb-6">
                    <SkillRadarChart />
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-medium">Overall Proficiency</span>
                      <span className="text-xs sm:text-sm font-bold text-primary">82%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary transition-all duration-2000 ease-out"
                        style={{
                          width: skillsVisible ? '82%' : '0%',
                          transitionDelay: '0.8s'
                        }}
                      ></div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border">
                    <h4 className="font-semibold mb-3">Current Focus</h4>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2 mb-2">IoT Systems</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2">Blockchain</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2">Full-Stack</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2">Hardware</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className={`grid md:grid-cols-3 gap-6 items-stretch transition-all duration-1000 delay-700 ${skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              {
                title: "Years of Experience",
                value: "3+",
                description: "Active development experience",
                icon: "⏱️"
              },
              {
                title: "Projects Completed",
                value: "5+",
                description: "Across multiple technologies",
                icon: "🚀"
              },
              {
                title: "Technologies Mastered",
                value: "8+",
                description: "Frontend, Backend, IoT, Blockchain",
                icon: "💡"
              }
            ].map((stat, index) => (
              <Card key={index} className="modern-card text-center group">
                <CardContent className="p-6">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold mb-1">
                    {stat.title}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
