import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Enhanced Logo */}
          <div className="relative group">
            <div className="text-xl sm:text-2xl font-bold gradient-text cursor-pointer hover:scale-105 transition-transform duration-300">
              Portfolio
            </div>
            <div className="absolute -inset-1 bg-gradient-primary rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:scale-105 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
            <Button 
              size="lg" 
              onClick={() => handleNavClick('#contact')}
              className="ml-4 bg-gradient-primary hover:opacity-90 hover:scale-105 transition-all duration-300 text-white glow-effect"
            >
              Hire Me
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative text-primary hover:bg-primary/10 transition-all duration-300 p-2 rounded-lg"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`w-6 h-6 absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-3 space-y-1 bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`block w-full text-left px-5 py-3 font-medium transition-all duration-300 rounded-xl mx-2 ${
                  activeSection === item.id
                    ? 'text-primary bg-primary/10 shadow-sm scale-[0.98]'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5 hover:translate-x-1'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                  width: 'calc(100% - 1rem)'
                }}
              >
                <span className="flex items-center gap-2">
                  {activeSection === item.id && (
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  )}
                  {item.name}
                </span>
              </button>
            ))}
            <div className="px-4 pt-3 pb-2">
              <Button 
                size="lg" 
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-gradient-primary hover:opacity-90 hover:scale-[1.02] transition-all duration-300 text-white shadow-lg font-semibold py-6"
              >
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};