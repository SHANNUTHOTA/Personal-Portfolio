import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Subtle Floating Orb Component
const FloatingOrb = ({ delay = 0, size = 'w-6 h-6' }) => (
  <motion.div
    className={`${size} rounded-full opacity-20 blur-sm`}
    style={{
      background: `hsl(var(--primary) / 0.3)`
    }}
    animate={{
      x: [0, 50, -30, 0],
      y: [0, -40, 60, 0],
      scale: [1, 1.1, 0.9, 1],
      opacity: [0.2, 0.4, 0.1, 0.2],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

// Minimal Floating Particles
const FloatingParticles = () => {
  const particles = [];
  for (let i = 0; i < 15; i++) {
    particles.push(
      <motion.div
        key={i}
        className="absolute w-0.5 h-0.5 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          backgroundColor: `hsl(var(--primary) / 0.4)`
        }}
        animate={{
          y: [-20, 20, -20],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: Math.random() * 6 + 4,
          repeat: Infinity,
          delay: Math.random() * 4,
          ease: "easeInOut",
        }}
      />
    );
  }
  return <>{particles}</>;
};

// Subtle Neural Network Connections
const NeuralNetwork = () => (
  <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 400">
    {Array.from({ length: 6 }).map((_, i) => (
      <motion.circle
        key={i}
        cx={80 + (i % 3) * 120}
        cy={80 + Math.floor(i / 3) * 120}
        r="2"
        fill="hsl(var(--primary))"
        animate={{
          r: [2, 4, 2],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.3,
        }}
      />
    ))}
    
    {Array.from({ length: 8 }).map((_, i) => (
      <motion.line
        key={i}
        x1={80 + (i % 3) * 120}
        y1={80 + Math.floor(i / 3) * 120}
        x2={80 + ((i + 1) % 3) * 120}
        y2={80 + Math.floor((i + 1) / 3) * 120}
        stroke="hsl(var(--primary))"
        strokeWidth="1"
        animate={{
          strokeWidth: [0.5, 1.5, 0.5],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </svg>
);

// Quantum Loader Ring - Clean & Neat Design
const QuantumRing = ({ progress, currentPhase, phases }: { 
  progress: number; 
  currentPhase: number; 
  phases: string[]; 
}) => (
  <div className="relative w-72 h-72">
    {/* Background Circle */}
    <svg className="absolute inset-0 w-72 h-72">
      <circle
        cx="144"
        cy="144"
        r="136"
        stroke="hsl(var(--border))"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
    </svg>

    {/* Main Progress Ring */}
    <svg className="absolute inset-0 w-72 h-72 transform -rotate-90">
      <circle
        cx="144"
        cy="144"
        r="136"
        stroke="hsl(var(--primary) / 0.1)"
        strokeWidth="4"
        fill="none"
      />
      <motion.circle
        cx="144"
        cy="144"
        r="136"
        stroke="url(#mainProgressGradient)"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{
          strokeDasharray: "854.51",
          strokeDashoffset: 854.51 * (1 - progress / 100),
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Inner Accent Ring */}
      <motion.circle
        cx="144"
        cy="144"
        r="120"
        stroke="url(#accentGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="20 10"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        opacity="0.6"
      />
      
      <defs>
        <linearGradient id="mainProgressGradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="50%" stopColor="hsl(var(--primary) / 0.7)" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
        <linearGradient id="accentGradient" gradientTransform="rotate(135)">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.4)" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.2)" />
        </linearGradient>
      </defs>
    </svg>
    
    {/* Central Content - Clean Layout */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center space-y-4">
        {/* SS Logo at Top */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-3xl font-bold tracking-wider"
          style={{
            color: `hsl(var(--foreground))`,
            textShadow: `0 0 20px hsl(var(--primary) / 0.5)`
          }}
        >
          SS
        </motion.div>

        {/* Progress Percentage - Main Focus */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-6xl font-bold"
          style={{
            background: `var(--gradient-text)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {Math.round(progress)}%
        </motion.div>
        
        {/* Loading Status - Compact */}
        <motion.div
          key={currentPhase}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono tracking-widest uppercase px-4"
          style={{
            color: `hsl(var(--primary) / 0.9)`
          }}
        >
          {phases[currentPhase].replace(/◇/g, '').trim()}
        </motion.div>

        {/* Loading Dots Indicator */}
        <div className="flex justify-center space-x-1 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: `hsl(var(--primary))`
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface SpectacularPreloaderProps {
  onComplete: () => void;
}

export const SpectacularPreloader: React.FC<SpectacularPreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);

const phases = [
  "◇ SYSTEM BOOTSTRAP INITIATED ◇",
  "◇ FRONTEND INTERFACE DEPLOYED ◇",
  "◇ BACKEND LOGIC ONLINE ◇",
  "◇ DATABASE MIGRATION EXECUTED ◇",
  "◇ AUTH MODULE SYNCHRONIZED ◇",
  "◇ API NETWORK STABILIZED ◇",
  "◇ SERVER CLUSTER OPERATIONAL ◇",
  "◇ APPLICATION LIVE ◇"
];



  useEffect(() => {
    // Progress animation - faster to reach 100% in 2.5 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setGlitchActive(true);
          setTimeout(onComplete, 500); // Quick transition after reaching 100%
          return 100;
        }
        return prev + 1.25; // Faster increment: 100 / 1.25 = 80 iterations * 25ms = 2000ms (2 seconds)
      });
    }, 25); // Faster interval

    // Phase cycling
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % phases.length);
    }, 800);

    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 120);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phaseInterval);
      clearInterval(glitchInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(20px)",
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden ${
          glitchActive ? 'animate-cyber-glitch' : ''
        }`}
        style={{ background: `hsl(var(--background))` }}
      >
        {/* Hero Background Match */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-background/80"></div>
          
          {/* Simple Floating Elements matching Hero section */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Additional subtle background elements */}
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/3 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/3 rounded-full blur-2xl animate-pulse delay-700"></div>
        </div>

        {/* Central Content Container */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Clean Progress Ring */}
          <div className="mb-8">
            <QuantumRing progress={progress} currentPhase={currentPhase} phases={phases} />
          </div>

          {/* Sub-status */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-sm font-mono tracking-widest mb-6"
            style={{
              color: `hsl(var(--muted-foreground))`
            }}
          >
            PROCESSING QUANTUM DATA STREAMS...
          </motion.div>

          {/* Clean Status Indicators */}
          <div className="flex space-x-4">
            {['SYS', 'NET', 'GPU'].map((label, index) => (
              <motion.div
                key={label}
                className="flex items-center space-x-1"
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <div 
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: `hsl(var(--primary))`
                  }}
                />
                <div 
                  className="text-xs font-mono tracking-wider"
                  style={{
                    color: `hsl(var(--muted-foreground))`
                  }}
                >
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimal Corner Elements matching Hero style */}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 border ${
              i === 0 ? 'top-8 left-8 border-r-0 border-b-0' :
              i === 1 ? 'top-8 right-8 border-l-0 border-b-0' :
              i === 2 ? 'bottom-8 left-8 border-r-0 border-t-0' :
              'bottom-8 right-8 border-l-0 border-t-0'
            }`}
            style={{
              borderColor: `hsl(var(--border))`
            }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default SpectacularPreloader;
