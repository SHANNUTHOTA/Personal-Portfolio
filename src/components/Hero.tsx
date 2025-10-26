import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Instagram, Sparkles, Code, Zap, Database, Globe, Layers } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import developerAvatar from "@/assets/icon.jpg"; // Import the new avatar image
import React from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

/*
NOTE: Add the following keyframes and custom classes to your global CSS file (e.g., globals.css)
for the animations and text effects to work correctly.

@keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0px) rotate(0deg); }
}

@keyframes pulse-glow {
    0% { box-shadow: 0 0 0 0 rgba(148, 0, 211, 0.4); }
    70% { box-shadow: 0 0 20px 10px rgba(148, 0, 211, 0); }
    100% { box-shadow: 0 0 0 0 rgba(148, 0, 211, 0); }
}

@keyframes fade-in {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes bounce-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

.gradient-text {
    background: linear-gradient(45deg, #8A2BE2, #4B0082, #9400D3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}

.text-shimmer {
    color: #E0E0E0;
}

.glow-effect {
     box-shadow: 0 0 15px rgba(148, 0, 211, 0.6), 0 0 25px rgba(138, 43, 226, 0.4);
}
*/

/*
NOTE: Ensure your tailwind.config.js has the following extensions.

theme: {
    extend: {
        colors: {
            primary: '#9400D3', // Dark Violet
            secondary: '#1a1a2e', // Dark Blue
            'muted-foreground': '#a0aec0', // Cool Gray
            card: '#2d3748', // Darker Gray
            border: '#4a5568', // Gray
        },
        backgroundImage: {
            'gradient-primary': 'linear-gradient(45deg, #8A2BE2, #4B0082)',
            'gradient-secondary': 'radial-gradient(circle, #1e1e3f, #0a0a1a)',
            'gradient-hero': 'linear-gradient(to top, #0a0a1a 80%, transparent 100%)',
        }
    }
}
*/


export const Hero = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full-Stack Developer', 'Blockchain Developer', 'IoT Developer', 'Web Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  // Custom SVG Icons for technologies
  const ReactIcon = () => (
    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7c-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5l-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47c.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7c.52.59 1.03 1.23 1.51 1.9c.82.08 1.63.2 2.4.36c.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63c2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63c-1.46.84-3.45-.12-5.37-1.95c-1.92 1.83-3.91 2.79-5.37 1.95c-1.47-.84-1.63-3.05-1.01-5.63C.98 14.93.15 13.69.15 12s.83-2.93 2.37-3.68C1.98 5.74 2.14 3.53 3.61 2.69c1.46-.84 3.45.12 5.37 1.95c1.92-1.83 3.91-2.79 5.37-1.95z"/>
    </svg>
  );

  const PHPIcon = () => (
    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.313-.27.478-.686.478-1.266 0-.622-.3-.991-.981-.991h-.168v.001zM12.583 10.207h-.944l-.515 2.648h.838c.556 0 .982-.122 1.292-.391.313-.27.478-.686.478-1.266 0-.622-.3-.991-.981-.991h-.168v.001zM1.68 6.73h21.64c.932 0 1.68.748 1.68 1.68v7.18c0 .932-.748 1.68-1.68 1.68H1.68C.748 17.27 0 16.522 0 15.59V8.41c0-.932.748-1.68 1.68-1.68z"/>
    </svg>
  );

  const HTMLIcon = () => (
    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 2h20l-2 18-8-2.5L4 20L2 2zm3.7 7.5H18l-.4 4.5-5.6 1.5-5.6-1.5L6.7 12h3l.2 1.5L12 14l2.1-.5.2-1.5H6.4l-.6-5.5h12.4l-.2 1.5H5.7z"/>
    </svg>
  );

  const CSSIcon = () => (
    <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64h-3.2l-.8 4 7.85 3 9.05-3 2.44-12.25L21.5 3H5z"/>
    </svg>
  );

  const JSIcon = () => (
    <Code className="w-4 h-4 mr-1" />
  );

  const BootstrapIcon = () => (
    <Layers className="w-4 h-4 mr-1" />
  );

  const IoTIcon = () => (
    <Globe className="w-4 h-4 mr-1" />
  );

  const BlockchainIcon = () => (
    <Database className="w-4 h-4 mr-1" />
  );

  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden pt-14 sm:pt-16 md:pt-20">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBackground} 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-15 sm:opacity-20"
        />
        <div className="absolute inset-0 bg-background/85 sm:bg-background/80"></div>
        
        {/* Simple Floating Elements - Responsive */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-3 sm:px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] gap-8 sm:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 gradient-text leading-tight">
              Shanmukha Sai Thota
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-muted-foreground min-h-[2rem] sm:min-h-[2.5rem] md:min-h-[3rem]">
              <span ref={el} />
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Motivated IT student with hands-on experience in full-stack web development 
              using PHP, Laravel, React.js, and MySQL. Demonstrated expertise in building 
              responsive web applications and IoT solutions. Strong foundation in blockchain 
              technologies including ICP, Aptos Move, and Algorand.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button 
                size="default"
                className="bg-gradient-primary hover:opacity-90 transition-opacity text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="default"
                className="text-sm sm:text-base py-2.5 sm:py-3 px-6 sm:px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="https://github.com/SHANNUTHOTA" className="p-2.5 sm:p-3 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://linkedin.com/in/shanmukha-sai-54127a28b" className="p-2.5 sm:p-3 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:shannuthota2005@gmail.com" className="p-2.5 sm:p-3 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/mr__shannu_007/" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl border border-border hover:border-primary/50 transition-colors">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
          
          {/* Right Content - Avatar */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center">
              {/* Avatar Container */}
              <div className="relative flex items-center justify-center mb-4 sm:mb-6 lg:mb-0">
                {/* Responsive avatar: optimized for all screen sizes */}
                <motion.div 
                  className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-3 sm:border-4 border-primary/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0.3)",
                      "0 0 0 8px rgba(139, 92, 246, 0.1)",
                      "0 0 0 16px rgba(139, 92, 246, 0)",
                      "0 0 0 0 rgba(139, 92, 246, 0)"
                    ]
                  }}
                  transition={{ 
                    opacity: { duration: 0.8, delay: 0.5 },
                    scale: { duration: 0.8, delay: 0.5 },
                    boxShadow: { duration: 2.5, repeat: Infinity, ease: "easeInOut" }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={developerAvatar}
                    alt="Developer Avatar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Badges around avatar for large screens */}
                <div className="hidden lg:block">
                  {/* Top skills */}
                  <motion.div 
                    className="absolute -top-4 left-8 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -5, 0], 
                      scale: 1,
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 1.2 },
                      scale: { duration: 0.6, delay: 1.2 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, y: -8 }}
                  >
                    <ReactIcon />
                    React
                  </motion.div>
                  <motion.div 
                    className="absolute -top-4 right-8 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, y: -20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, -5, 0], 
                      scale: 1,
                      rotate: [0, -2, 2, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 1.4 },
                      scale: { duration: 0.6, delay: 1.4 },
                      y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, y: -8 }}
                  >
                    <PHPIcon />
                    PHP
                  </motion.div>
                  
                  {/* Side skills */}
                  <motion.div 
                    className="absolute top-16 -left-8 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: [0, -3, 0], 
                      scale: 1,
                      rotate: [0, 3, -3, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 1.6 },
                      scale: { duration: 0.6, delay: 1.6 },
                      x: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, x: -12 }}
                  >
                    <HTMLIcon />
                    HTML
                  </motion.div>
                  <motion.div 
                    className="absolute top-16 -right-8 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: [0, 3, 0], 
                      scale: 1,
                      rotate: [0, -3, 3, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 1.8 },
                      scale: { duration: 0.6, delay: 1.8 },
                      x: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, x: 12 }}
                  >
                    <CSSIcon />
                    CSS
                  </motion.div>
                  
                  {/* Middle side skills */}
                  <motion.div 
                    className="absolute top-32 -left-10 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: [0, -4, 0], 
                      scale: 1,
                      rotate: [0, 4, -4, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 2.0 },
                      scale: { duration: 0.6, delay: 2.0 },
                      x: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, x: -14 }}
                  >
                    <JSIcon />
                    JS
                  </motion.div>
                  
                  {/* Bootstrap - moved further out */}
                  <motion.div 
                    className="absolute top-32 -right-16 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      x: [0, 6, 0], 
                      scale: 1,
                      rotate: [0, -4, 4, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 2.2 },
                      scale: { duration: 0.6, delay: 2.2 },
                      x: { duration: 2.7, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 3.7, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, x: 20 }}
                  >
                    <BootstrapIcon />
                    Bootstrap
                  </motion.div>
                  
                  {/* Bottom skills */}
                  <motion.div 
                    className="absolute -bottom-4 left-8 bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, 5, 0], 
                      scale: 1,
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 2.4 },
                      scale: { duration: 0.6, delay: 2.4 },
                      y: { duration: 3.3, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 4.3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, y: 8 }}
                  >
                    <IoTIcon />
                    IoT
                  </motion.div>
                  <motion.div 
                    className="absolute -bottom-4 right-8 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-lg flex items-center"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      y: [0, 5, 0], 
                      scale: 1,
                      rotate: [0, -2, 2, 0]
                    }}
                    transition={{ 
                      opacity: { duration: 0.6, delay: 2.6 },
                      scale: { duration: 0.6, delay: 2.6 },
                      y: { duration: 2.9, repeat: Infinity, ease: "easeInOut" },
                      rotate: { duration: 3.9, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.1, y: 8 }}
                  >
                    <BlockchainIcon />
                    Blockchain
                  </motion.div>
                </div>
              </div>
              
              {/* Mobile & Tablet Skills - Responsive layout */}
              <div className="lg:hidden mt-4 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2 justify-center max-w-sm sm:max-w-md mx-auto">
                {[
                  { name: 'React', icon: ReactIcon, color: 'bg-blue-500' },
                  { name: 'PHP', icon: PHPIcon, color: 'bg-blue-600' },
                  { name: 'HTML', icon: HTMLIcon, color: 'bg-green-600' },
                  { name: 'CSS', icon: CSSIcon, color: 'bg-orange-600' },
                  { name: 'JS', icon: JSIcon, color: 'bg-yellow-600' },
                  { name: 'Bootstrap', icon: BootstrapIcon, color: 'bg-purple-600' },
                  { name: 'IoT', icon: IoTIcon, color: 'bg-teal-600' },
                  { name: 'Blockchain', icon: BlockchainIcon, color: 'bg-indigo-600' }
                ].map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.span 
                      key={skill.name} 
                      className={`${skill.color} text-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium flex items-center shadow-sm`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.0 + (index * 0.1), duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <IconComponent />
                      <span className="ml-1">{skill.name}</span>
                    </motion.span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <div className="w-6 h-10 border border-border rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2 animate-bounce"></div>
          </div>
          <ArrowDown className="w-4 h-4 text-muted-foreground animate-pulse" />
        </div>
      </div>
    </section>
  );
};