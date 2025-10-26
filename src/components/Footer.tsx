import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-lg sm:text-xl font-bold gradient-text mb-3 sm:mb-4">Shanmukha Sai Thota</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Full-Stack Developer specializing in web development, blockchain, and IoT solutions. 
                Let's build something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Connect</h4>
              <div className="flex space-x-3 sm:space-x-4">
                <a 
                  href="https://github.com/SHANNUTHOTA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/shanmukha-sai-54127a28b" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="mailto:shannuthota2005@gmail.com" 
                  className="p-2 bg-primary/10 rounded-lg text-primary hover:bg-primary/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/50 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center">
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base">
              © {currentYear} Shanmukha Sai Thota. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};