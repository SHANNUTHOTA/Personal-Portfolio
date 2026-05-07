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
              <Card className="modern-card">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <span className="text-2xl">🎓</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">Education</h3>
                  </div>

                  <div className="space-y-5">
                    {/* B.Tech */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                        <div className="w-0.5 flex-1 bg-primary/20 mt-1"></div>
                      </div>
                      <div className="pb-5">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">2022 – 2026</span>
                        <h4 className="font-bold text-base mt-1.5">Bachelor of Technology</h4>
                        <p className="text-sm text-primary font-medium">Information Technology</p>
                        <p className="text-xs text-muted-foreground mt-0.5">DVR & DR. HS MIC College of Technology, Kanchikacherla</p>
                        <p className="text-xs font-semibold text-amber-400 mt-1">CGPA: 7.66</p>
                      </div>
                    </div>
                    {/* Intermediate */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary/60 mt-1 flex-shrink-0"></div>
                        <div className="w-0.5 flex-1 bg-primary/20 mt-1"></div>
                      </div>
                      <div className="pb-5">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">2020 – 2022</span>
                        <h4 className="font-bold text-base mt-1.5">Intermediate (12th)</h4>
                        <p className="text-sm text-primary font-medium">MPC — Maths, Physics, Chemistry</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Sri Chaitanya Junior College</p>
                        <p className="text-xs font-semibold text-amber-400 mt-1">Score: 672 / 1000</p>
                      </div>
                    </div>
                    {/* SSC */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary/40 mt-1 flex-shrink-0"></div>
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">2020</span>
                        <h4 className="font-bold text-base mt-1.5">SSC (10th Grade)</h4>
                        <p className="text-sm text-primary font-medium">General</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Sri Chaitanya Techno School</p>
                        <p className="text-xs font-semibold text-amber-400 mt-1">Percentage: 99.8%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* RIGHT COLUMN: Experience + Hackathon + Leadership */}
            <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-400 ${sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} flex flex-col`}>

              {/* Experience Card */}
              <Card className="modern-card">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-primary/10">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">Experience</h3>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 rounded-full bg-primary mt-1 flex-shrink-0"></div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">Oct 2025 – Dec 2025</span>
                      <h4 className="font-bold text-base mt-1.5">Web Developer Intern</h4>
                      <p className="text-sm text-primary font-medium">Whinta · Delhi (WhatsApp Business API)</p>
                      <p className="text-xs text-muted-foreground mt-0.5">3 Months · Remote</p>
                      <ul className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                        <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Built and maintained web apps using Laravel framework</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Developed dynamic, reactive UI components with Vue.js</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Designed and integrated RESTful APIs with MySQL backend</li>
                        <li className="flex items-start gap-2"><span className="text-primary mt-0.5">▸</span>Collaborated in agile team environment on production code</li>
                      </ul>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {["Laravel", "Vue.js", "MySQL", "REST APIs", "PHP", "Bootstrap"].map(t => (
                          <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
