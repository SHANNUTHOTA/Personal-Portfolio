import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation<HTMLElement>(0.2);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation<HTMLDivElement>(0.3);

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-3 sm:mb-4 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 text-xs sm:text-sm">
              About Me
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">About Me</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4 sm:px-0">
              Passionate full-stack developer with expertise in modern web technologies, IoT systems, and blockchain development
            </p>
            <div className="w-20 sm:w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-4 sm:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-200 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} flex flex-col h-full`}>
              <Card className="modern-card flex-1">
                <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-primary/10">
                      <span className="text-xl sm:text-2xl">📚</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">Education</h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-6 flex-grow overflow-y-auto max-h-[400px] sm:max-h-[600px] pr-2">
                    <div className="relative pl-5 sm:pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-primary rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">Bachelor of Technology</h4>
                        <p className="text-primary font-semibold text-sm sm:text-base">Information Technology</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">DVR & DR. HS MIC College of Technology, Kanchikacherla</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">2022 - 2026 | CGPA: 7.14</p>
                      </div>
                    </div>
                    
                    <div className="relative pl-5 sm:pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-primary rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">Intermediate (12th)</h4>
                        <p className="text-primary font-semibold text-sm sm:text-base">Mathematics, Physics, Chemistry</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">Sri Chaitanya Junior College</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">2020 - 2022 | Score: 972/1000</p>
                      </div>
                    </div>

                    <div className="relative pl-5 sm:pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-primary rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-base sm:text-lg">SSC</h4>
                        <p className="text-primary font-semibold text-sm sm:text-base">10th Grade</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">Sri Chaitanya Techno School</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">2020 | Score: 998</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="modern-card flex-1">
                <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-primary/10">
                      <span className="text-xl sm:text-2xl">🎯</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">Core Strengths</h3>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 flex-grow">
                    {[
                      { skill: "Full-Stack Development", level: 90 },
                      { skill: "IoT & Hardware", level: 85 },
                      { skill: "Blockchain Development", level: 70 },
                      { skill: "Problem Solving", level: 95 }
                    ].map((item, index) => (
                      <div key={index} className="space-y-1.5 sm:space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm sm:text-base">{item.skill}</span>
                          <span className="text-xs sm:text-sm text-primary font-semibold">{item.level}%</span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                            style={{
                              width: sectionVisible ? `${item.level}%` : '0%',
                              transitionDelay: `${index * 0.1}s`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-400 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} flex flex-col h-full`}>
              <Card className="modern-card flex-1">
                <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-primary/10">
                      <span className="text-xl sm:text-2xl">🏆</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">Hackathon Experience</h3>
                  </div>
                  
                  <div className="space-y-4 sm:space-y-5 flex-grow overflow-y-auto max-h-[600px] pr-2">
                    <div className="p-4 sm:p-5 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-2.5">KBN CodeSpark Hackathon 2025</h4>
                      <p className="text-sm sm:text-base text-foreground/70 mb-2.5 font-semibold">IoT-based Cattle Tracking System</p>
                      <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                        Led team of 3 developers in developing real-time GPS tracking with LoRa communication.
                      </p>
                    </div>
                    
                    <div className="p-4 sm:p-5 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-2.5">PL Genesis Hackathon 2024</h4>
                      <p className="text-sm sm:text-base text-foreground/70 mb-2.5 font-semibold">Web3 Project Development</p>
                      <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                        Collaborated on smart contract development and blockchain integration.
                      </p>
                    </div>
                    
                    <div className="p-4 sm:p-5 bg-card/80 backdrop-blur-sm rounded-xl border border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all">
                      <h4 className="font-bold text-primary text-base sm:text-lg mb-2.5">Aptos & Algorand Hackathons 2024</h4>
                      <p className="text-sm sm:text-base text-foreground/70 mb-2.5 font-semibold">Blockchain Exploration</p>
                      <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                        Learned Move programming and cryptocurrency wallet integration.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="modern-card flex-1">
                <CardContent className="p-4 sm:p-6 md:p-8 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-primary/10">
                      <span className="text-xl sm:text-2xl">👨‍💼</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">Leadership & Contact</h3>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 flex-grow">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">AAGAMA 2024 Event Organizer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Hackathon Event Organizer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm sm:text-base">Team Leadership in Multiple Projects</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 sm:pt-6 space-y-2 sm:space-y-3">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      <strong>📧 Email:</strong> shannuthota2005@gmail.com
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      <strong>📍 Location:</strong> Vijayawada, Andhra Pradesh
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      <strong>📱 Phone:</strong> +91 9492869571
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div ref={statsRef} className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { number: "5+", label: "Projects Completed" },
                { number: "5+", label: "Hackathons Participated" },
                { number: "8+", label: "Technologies Explored" },
                { number: "3+", label: "Years Experience" }
              ].map((stat, index) => (
                <Card key={index} className="modern-card text-center group h-full">
                  <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full">
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground text-center leading-tight">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
