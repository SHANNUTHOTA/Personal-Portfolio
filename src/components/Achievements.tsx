import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Users, Clock, Lightbulb, Target, Globe, Heart, Code } from "lucide-react";

export const Achievements = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation<HTMLDivElement>(0.1);
  const { ref: strengthsRef, isVisible: strengthsVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const { ref: hobbiesRef, isVisible: hobbiesVisible } = useScrollAnimation<HTMLDivElement>(0.3);

  const strengths = [
    {
      icon: Target,
      title: "Self-Motivated",
      description: "Driven by passion and curiosity to continuously learn and improve",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Lightbulb,
      title: "Adaptive & Optimistic",
      description: "Quick to adapt to new technologies and maintain positive outlook",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "Leadership Qualities",
      description: "Natural initiator with proven experience leading teams and organizing events",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Excellent at managing multiple projects and meeting deadlines",
      color: "from-orange-500 to-red-500"
    }
  ];

  const hobbies = [
    {
      icon: Code,
      title: "Coding & Hackathons",
      description: "Participating in coding competitions and hackathons to solve real-world problems"
    },
    {
      icon: Lightbulb,
      title: "IoT & Hardware Projects",
      description: "Exploring innovative IoT solutions and hardware integrations"
    },
    {
      icon: Heart,
      title: "Cricket & Outdoor Sports",
      description: "Playing cricket and engaging in various outdoor activities for fitness and teamwork"
    },
    {
      icon: Globe,
      title: "Traveling & Technology",
      description: "Exploring new places while discovering emerging technologies and trends"
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-primary rounded-full opacity-5 blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Strengths & Interests
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              What drives me beyond coding - the qualities and passions that shape my approach to technology and life.
            </p>
            <div className="w-32 h-1 bg-gradient-primary mx-auto mt-8 rounded-full"></div>
          </div>
          
          {/* Strengths Section */}
          <div ref={strengthsRef} className={`mb-20 transition-all duration-1000 ${strengthsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Core Strengths</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
              {strengths.map((strength, index) => (
                <Card 
                  key={index} 
                  className={`bg-gradient-card border-border/50 card-hover group relative overflow-hidden transition-all duration-700 ${strengthsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{transitionDelay: `${index * 0.1}s`}}
                >
                  <CardContent className="p-6 relative z-10 text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`p-4 bg-gradient-to-r ${strength.color} bg-opacity-10 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <strength.icon className="w-8 h-8 text-primary group-hover:animate-bounce-gentle" />
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">
                      {strength.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {strength.description}
                    </p>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div ref={hobbiesRef} className={`transition-all duration-1000 ${hobbiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Hobbies & Interests</h3>
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              {hobbies.map((hobby, index) => (
                <Card 
                  key={index} 
                  className={`bg-gradient-card border-border/50 card-hover group relative overflow-hidden transition-all duration-700 ${hobbiesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{transitionDelay: `${index * 0.15}s`}}
                >
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-6">
                      <div className="p-3 bg-gradient-primary bg-opacity-10 rounded-xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                        <hobby.icon className="w-6 h-6 text-primary group-hover:animate-bounce-gentle" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-3 gradient-text group-hover:scale-105 transition-transform duration-300">
                          {hobby.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-lg"></div>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-8 gradient-text">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="text-lg py-2 px-4 border-primary/50 text-primary hover:bg-primary/10">
                Telugu - Native
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4 border-primary/50 text-primary hover:bg-primary/10">
                English - Professional
              </Badge>
              <Badge variant="outline" className="text-lg py-2 px-4 border-primary/50 text-primary hover:bg-primary/10">
                Hindi - Elementary
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
