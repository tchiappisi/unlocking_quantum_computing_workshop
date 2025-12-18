import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

export function ImageWithFallback(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    setDidError(true)
  }

  const { src, alt, style, className, ...rest } = props

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'python' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try modern clipboard API first
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        // Fallback for older browsers or when clipboard is blocked
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.warn('Copy failed:', err);
        }
        
        document.body.removeChild(textArea);
      }
    } catch (err) {
      // Silently fail or show a message
      console.warn('Copy to clipboard failed:', err);
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-[#00FFF0]/20 bg-black/50 backdrop-blur-sm">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-[#00FFF0]/10 to-[#8A2BE2]/10 border-b border-[#00FFF0]/20">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-2 text-xs text-[#00FFF0] font-mono">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-[#00FFF0] hover:text-[#8A2BE2] transition-colors p-1"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      
      {/* Code content */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-[#E6E6E6]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
          {code}
        </code>
      </pre>
    </div>
  );
}
import { motion } from 'motion/react';

export function FooterSection() {
  return (
    <footer className="relative py-12 px-6 border-t border-[#00FFF0]/20">
      <div className="absolute inset-0 bg-gradient-to-t from-[#00FFF0]/5 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-8 rounded-full animate-pulse"
                style={{
                  background: i % 2 === 0 ? '#00FFF0' : '#8A2BE2',
                  animationDelay: `${i * 0.15}s`,
                }}
              />
            ))}
          </div>

          <p 
            className="text-[#00FFF0] text-sm font-mono"
            style={{ textShadow: '0 0 10px rgba(0, 255, 240, 0.5)' }}
          >
            Built with Quantum Curiosity
          </p>

          <p className="text-[#E6E6E6]/50 text-sm">
            © {new Date().getFullYear()} Unlocking Quantum Computing. All rights reserved.
          </p>

          <p className="text-[#E6E6E6]/30 text-xs italic">
            "In the quantum world, every observation creates a new reality."
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToStory = () => {
    document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#00FFF0 1px, transparent 1px), linear-gradient(90deg, #00FFF0 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#00FFF0] rounded-full blur-[120px] opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#8A2BE2] rounded-full blur-[120px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="mb-6 bg-gradient-to-r from-[#00FFF0] via-[#8A2BE2] to-[#00FFF0] bg-clip-text text-transparent"
            style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
          >
            Unlocking Quantum Computing: A Hands-On Mystery
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-12 text-[#E6E6E6]/80 max-w-3xl mx-auto"
        >
          Follow the encrypted trail of Dr. Codewell Mashfield using Python and Qiskit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            onClick={scrollToStory}
            className="group relative px-8 py-6 bg-gradient-to-r from-[#00FFF0] to-[#8A2BE2] text-black hover:shadow-[0_0_30px_rgba(0,255,240,0.5)] transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              Begin Investigation
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex justify-center gap-4"
        >
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-[#00FFF0] animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Atom, Link2, Waves } from 'lucide-react';
import { Card } from './ui/card';

const concepts = [
  {
    icon: Atom,
    title: 'Superposition',
    description: 'Learn how quantum bits exist in multiple states simultaneously, unlocking computational power beyond classical computing.',
    color: '#00FFF0',
  },
  {
    icon: Link2,
    title: 'Entanglement',
    description: 'Discover how quantum particles become mysteriously connected, with changes to one instantly affecting the other.',
    color: '#8A2BE2',
  },
  {
    icon: Waves,
    title: 'Interference',
    description: 'Master how quantum waves combine to amplify correct answers and cancel out wrong ones in quantum algorithms.',
    color: '#00FFF0',
  },
];

export function HowItWorksSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-4 text-[#00FFF0]"
            style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
          >
            How It Works
          </h2>
          <p className="text-xl text-[#E6E6E6]/80 max-w-3xl mx-auto">
            Learn quantum computing concepts while solving a mystery. Each puzzle teaches fundamental principles through hands-on Python coding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full p-8 border-[#00FFF0]/30 bg-gradient-to-br from-black/50 to-[#0B0C10]/80 backdrop-blur-sm hover:border-[#00FFF0]/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ backgroundColor: concept.color }} />
                
                <div className="relative">
                  <div 
                    className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-lg border"
                    style={{ 
                      borderColor: `${concept.color}40`,
                      backgroundColor: `${concept.color}10`
                    }}
                  >
                    <concept.icon className="w-8 h-8" style={{ color: concept.color }} />
                  </div>

                  <h3 
                    className="mb-3"
                    style={{ color: concept.color, fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
                  >
                    {concept.title}
                  </h3>

                  <p className="text-[#E6E6E6]/70 leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Github } from 'lucide-react';

export function InstructorSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 
            className="mb-4 text-[#00FFF0]"
            style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
          >
            Your Guide
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="relative overflow-hidden border-[#00FFF0]/30 bg-gradient-to-br from-black/50 to-[#0B0C10]/80 backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#8A2BE2] rounded-full blur-[120px] opacity-10" />
            
            <div className="relative grid md:grid-cols-3 gap-8 p-8 items-center">
              <div className="md:col-span-1">
                <div className="relative w-48 h-48 mx-auto rounded-lg overflow-hidden border-2 border-[#00FFF0]/40">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00FFF0]/20 to-[#8A2BE2]/20" />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1694230155228-cdde50083573?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbGFib3JhdG9yeSUyMHNjaWVudGlzdHxlbnwxfHx8fDE3NjA1MzEyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Tristan Chiappisi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-2 space-y-4">
                <div>
                  <h3 
                    className="text-[#00FFF0] mb-1"
                    style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
                  >
                    Tristan Chiappisi
                  </h3>
                  <p className="text-[#8A2BE2] text-sm font-mono">
                    Principal Data Architect & Quantum Educator
                  </p>
                </div>

                <p className="text-[#E6E6E6]/80 leading-relaxed">
                  Tristan is a Principal Data Architect with a passion for making quantum computing accessible to everyone. 
                  With years of experience in data science, machine learning, and quantum algorithms, he bridges the gap 
                  between theoretical physics and practical programming.
                </p>

                <p className="text-[#E6E6E6]/80 leading-relaxed">
                  Through this interactive mystery experience, Tristan combines storytelling with hands-on coding to help 
                  you build intuition for quantum concepts that can seem impossibly abstract at first.
                </p>

                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00FFF0]/30 bg-[#00FFF0]/5 text-[#00FFF0] hover:bg-[#00FFF0]/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#8A2BE2]/30 bg-[#8A2BE2]/5 text-[#8A2BE2] hover:bg-[#8A2BE2]/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
import { useEffect, useRef } from 'react';

export function ParticleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationId: number;
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();

    // Reduced particle count for better performance
    const particleCount = 20;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      colorIndex: number;
    }[] = [];

    const colors = [
      { r: 0, g: 255, b: 240 },    // #00FFF0
      { r: 138, g: 43, b: 226 }     // #8A2BE2
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        colorIndex: Math.floor(Math.random() * colors.length),
      });
    }

    const maxDistance = 200;
    const maxDistanceSquared = maxDistance * maxDistance;

    function animate() {
      if (!ctx || !canvas) return;
      
      // Clear with solid color (faster than transparent)
      ctx.fillStyle = '#0B0C10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Disable shadow for performance
      ctx.shadowBlur = 0;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        const color = colors[p.colorIndex];
        ctx.fillStyle = `rgb(${color.r}, ${color.g}, ${color.b})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw connections (optimized)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSquared = dx * dx + dy * dy;

          if (distSquared < maxDistanceSquared) {
            const opacity = 0.15 * (1 - distSquared / maxDistanceSquared);
            ctx.strokeStyle = `rgba(0, 255, 240, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.25 }}
    />
  );
}
import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Lock } from 'lucide-react';
import { Card } from './ui/card';
import { CodeBlock } from './CodeBlock';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface PuzzleCardProps {
  number: number;
  title: string;
  storyText: string;
  code?: string;
  locked?: boolean;
}

export function PuzzleCard({ number, title, storyText, code, locked = false }: PuzzleCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="relative overflow-hidden border-[#00FFF0]/30 bg-gradient-to-br from-black/50 to-[#0B0C10]/80 backdrop-blur-sm hover:border-[#00FFF0]/50 transition-all duration-300">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#8A2BE2] rounded-full blur-[80px] opacity-10" />
        
        <div className="relative p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-[#00FFF0]/20 to-[#8A2BE2]/20 border border-[#00FFF0]/30">
                {locked ? (
                  <Lock className="w-6 h-6 text-[#8A2BE2]" />
                ) : (
                  <span className="text-[#00FFF0] font-mono">{number}</span>
                )}
              </div>
              <div>
                <h3 
                  className="text-[#00FFF0] mb-1"
                  style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
                >
                  {title}
                </h3>
                <span className="text-xs text-[#E6E6E6]/50 font-mono">
                  {locked ? 'LOCKED' : 'ACTIVE'}
                </span>
              </div>
            </div>
          </div>

          <p className="text-[#E6E6E6]/80 mb-4 leading-relaxed">
            {storyText}
          </p>

          {code && !locked && (
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger className="flex items-center gap-2 text-[#00FFF0] hover:text-[#8A2BE2] transition-colors mb-4">
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                <span className="text-sm font-mono">{isOpen ? 'Hide Code' : 'Show Starter Code'}</span>
              </CollapsibleTrigger>
              
              <CollapsibleContent>
                <CodeBlock code={code} />
              </CollapsibleContent>
            </Collapsible>
          )}

          {locked && (
            <div className="mt-4 p-3 rounded-lg bg-[#8A2BE2]/10 border border-[#8A2BE2]/20">
              <p className="text-sm text-[#8A2BE2] italic">
                Complete previous puzzles to unlock this challenge.
              </p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
import { PuzzleCard } from './PuzzleCard';

const puzzle1Code = `from qiskit import QuantumCircuit, transpile
from qiskit_aer import AerSimulator
from qiskit.visualization import plot_histogram

# Create a quantum circuit with 2 qubits
qc = QuantumCircuit(2, 2)

# Apply Hadamard gate to create superposition
qc.h(0)

# TODO: Add your code here to solve the puzzle
# Hint: What measurement basis reveals Dr. Mashfield's first clue?

# Measure the qubits
qc.measure([0, 1], [0, 1])

# Run the circuit
simulator = AerSimulator()
compiled_circuit = transpile(qc, simulator)
result = simulator.run(compiled_circuit, shots=1024).result()
counts = result.get_counts()

print("Measurement results:", counts)
plot_histogram(counts)`;

const puzzle2Code = `from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator

# Create a Bell state (entangled pair)
qc = QuantumCircuit(2, 2)

# TODO: Create the |Φ+⟩ Bell state
# Hint: Start with H gate, then use CNOT

qc.measure([0, 1], [0, 1])

# Your code here to decode the coordinates`;

export function PuzzlesSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="mb-4 text-[#00FFF0]"
            style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
          >
            The Quantum Puzzles
          </h2>
          <p className="text-xl text-[#E6E6E6]/80 max-w-3xl mx-auto">
            Five interconnected challenges await. Each puzzle builds on the last, revealing more of Dr. Mashfield's trail.
          </p>
        </div>

        <div className="space-y-6">
          <PuzzleCard
            number={1}
            title="Puzzle 1: Basis Detective"
            storyText="Dr. Mashfield's lab computer shows a single file: 'basis_clue.qasm'. The quantum circuit uses only Hadamard gates. Your task: decode which measurement basis reveals the hidden coordinates. The encrypted message reads: 'X marks the spot where waves collapse.' Could the measurement basis itself be the key?"
            code={puzzle1Code}
          />

          <PuzzleCard
            number={2}
            title="Puzzle 2: Entangled Coordinates"
            storyText="Security footage reveals Dr. Mashfield working with entangled qubits at 23:47. His notebook contains a strange diagram showing two connected particles. The note reads: 'When you measure one, you know the other. The coordinates are entangled in state |Φ+⟩.' Can you recreate the Bell state and extract the location data?"
            code={puzzle2Code}
          />

          <PuzzleCard
            number={3}
            title="Puzzle 3: Superposition Cipher"
            storyText="A USB drive found in the lab contains quantum gates arranged in an unusual pattern. Each qubit exists in superposition, encoding multiple messages simultaneously. Dr. Mashfield's note: 'All answers exist until you look. Choose wisely.' The cipher requires understanding amplitude manipulation."
            locked={true}
          />

          <PuzzleCard
            number={4}
            title="Puzzle 4: Interference Pattern"
            storyText="The lab's quantum computer logs show repeated execution of a circuit with specific phase rotations. The pattern creates constructive interference for certain outcomes. Dr. Mashfield wrote: 'The wrong paths cancel out. Only truth remains bright.' Decode the interference pattern to reveal the next clue."
            locked={true}
          />

          <PuzzleCard
            number={5}
            title="Puzzle 5: The Final Measurement"
            storyText="All previous clues converge here. You've collected quantum states, entangled coordinates, and interference patterns. Dr. Mashfield's final message: 'The answer was always there, waiting to be observed. In quantum mechanics, the act of measurement creates reality. What will you choose to see?' The truth awaits your final measurement."
            locked={true}
          />
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { ExternalLink, BookOpen, Cpu, Github } from 'lucide-react';

const resources = [
  {
    icon: BookOpen,
    title: 'Qiskit Documentation',
    description: 'Comprehensive guides and API references for quantum programming with Qiskit.',
    link: 'https://qiskit.org/documentation/',
    color: '#00FFF0',
  },
  {
    icon: Cpu,
    title: 'IBM Quantum Lab',
    description: 'Run your quantum circuits on real quantum computers through IBM Cloud.',
    link: 'https://quantum-computing.ibm.com/',
    color: '#8A2BE2',
  },
  {
    icon: Github,
    title: 'GitHub Repository',
    description: 'Access all puzzle solutions, starter code, and additional quantum resources.',
    link: '#',
    color: '#00FFF0',
  },
];

export function ResourcesSection() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="mb-4 text-[#00FFF0]"
            style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
          >
            Resources
          </h2>
          <p className="text-xl text-[#E6E6E6]/80 max-w-3xl mx-auto">
            Continue your quantum journey with these essential tools and references.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.a
              key={resource.title}
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="block group"
            >
              <Card className="relative h-full p-6 border-[#00FFF0]/30 bg-gradient-to-br from-black/50 to-[#0B0C10]/80 backdrop-blur-sm hover:border-[#00FFF0]/50 transition-all duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ backgroundColor: resource.color }} />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-lg border"
                      style={{ 
                        borderColor: `${resource.color}40`,
                        backgroundColor: `${resource.color}10`
                      }}
                    >
                      <resource.icon className="w-6 h-6" style={{ color: resource.color }} />
                    </div>
                    <ExternalLink className="w-4 h-4 text-[#E6E6E6]/40 group-hover:text-[#00FFF0] transition-colors" />
                  </div>

                  <h3 
                    className="mb-2"
                    style={{ color: resource.color, fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
                  >
                    {resource.title}
                  </h3>

                  <p className="text-[#E6E6E6]/70 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                </div>
              </Card>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function StorySection() {
  return (
    <section id="story" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <div className="inline-block px-4 py-1 mb-6 rounded-full border border-[#00FFF0]/30 bg-[#00FFF0]/5">
              <span className="text-[#00FFF0] text-sm font-mono">CASE FILE: #QC-2025</span>
            </div>
            
            <h2 
              className="mb-6 text-[#00FFF0]"
              style={{ fontFamily: 'Space Grotesk, JetBrains Mono, monospace' }}
            >
              The Mystery Begins
            </h2>
            
            <div className="space-y-4 text-[#E6E6E6]/80 leading-relaxed">
              <p>
                Dr. Codewell Mashfield, the brilliant quantum physicist, has vanished from his research lab. 
                The only traces left behind are cryptic quantum circuits, scattered code fragments, and a series 
                of encrypted messages.
              </p>
              <p>
                His last known work involved groundbreaking experiments with quantum superposition and entanglement. 
                The security logs show he left exactly at midnight, carrying nothing but his quantum research notebook.
              </p>
              <p>
                Your mission: Use Python and Qiskit to decode the quantum puzzles he left behind. Each puzzle reveals 
                a piece of the truth. The deeper you go into quantum mechanics, the closer you get to finding Dr. Mashfield.
              </p>
              <p className="text-[#8A2BE2] italic">
                "In the quantum realm, observation changes reality. What will you discover when you measure the truth?"
                <br />— Dr. Codewell Mashfield's last entry
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00FFF0]/20 to-[#8A2BE2]/20 rounded-lg blur-xl" />
            <div className="relative rounded-lg overflow-hidden border border-[#00FFF0]/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642354163974-41089602651f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwY2lyY3VpdCUyMGNvbXB1dGVyJTIwY2hpcHxlbnwxfHx8fDE3NjA1MzEyMDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Quantum circuit visualization"
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
**Add your own guidelines here**
<!--

System Guidelines

Use this file to provide the AI with rules and guidelines you want it to follow.
This template outlines a few examples of things you can add. You can add your own sections and format it to suit your needs

TIP: More context isn't always better. It can confuse the LLM. Try and add the most important rules you need

# General guidelines

Any general rules you want the AI to follow.
For example:

* Only use absolute positioning when necessary. Opt for responsive and well structured layouts that use flexbox and grid by default
* Refactor code as you go to keep code clean
* Keep file sizes small and put helper functions and components in their own files.

--------------

# Design system guidelines
Rules for how the AI should make generations look like your company's design system

Additionally, if you select a design system to use in the prompt box, you can reference
your design system's components, tokens, variables and components.
For example:

* Use a base font-size of 14px
* Date formats should always be in the format “Jun 10”
* The bottom toolbar should only ever have a maximum of 4 items
* Never use the floating action button with the bottom toolbar
* Chips should always come in sets of 3 or more
* Don't use a dropdown if there are 2 or fewer options

You can also create sub sections and add more specific details
For example:


## Button
The Button component is a fundamental interactive element in our design system, designed to trigger actions or navigate
users through the application. It provides visual feedback and clear affordances to enhance user experience.

### Usage
Buttons should be used for important actions that users need to take, such as form submissions, confirming choices,
or initiating processes. They communicate interactivity and should have clear, action-oriented labels.

### Variants
* Primary Button
  * Purpose : Used for the main action in a section or page
  * Visual Style : Bold, filled with the primary brand color
  * Usage : One primary button per section to guide users toward the most important action
* Secondary Button
  * Purpose : Used for alternative or supporting actions
  * Visual Style : Outlined with the primary color, transparent background
  * Usage : Can appear alongside a primary button for less important actions
* Tertiary Button
  * Purpose : Used for the least important actions
  * Visual Style : Text-only with no border, using primary color
  * Usage : For actions that should be available but not emphasized
-->@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap');

@custom-variant dark (&:is(.dark *));

:root {
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', 'Courier New', monospace;
  --font-heading: 'Space Grotesk', 'JetBrains Mono', monospace;
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-input-background: var(--input-background);
  --color-switch-background: var(--switch-background);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-background text-foreground;
    font-family: var(--font-body);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
  }
}

/**
 * Base typography. This is not applied to elements which have an ancestor with a Tailwind text class.
 */
@layer base {
  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) {
    h1 {
      font-size: var(--text-2xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h2 {
      font-size: var(--text-xl);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h3 {
      font-size: var(--text-lg);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    h4 {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    p {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }

    label {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    button {
      font-size: var(--text-base);
      font-weight: var(--font-weight-medium);
      line-height: 1.5;
    }

    input {
      font-size: var(--text-base);
      font-weight: var(--font-weight-normal);
      line-height: 1.5;
    }
  }
}

html {
  font-size: var(--font-size);
  scroll-behavior: smooth;
}

/* Custom scrollbar for dark theme */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0B0C10;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #00FFF0 0%, #8A2BE2 100%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #00FFF0 50%, #8A2BE2 100%);
}

/* Glow animations */
@keyframes glow-pulse {
  0%, 100% {
    text-shadow: 0 0 10px rgba(0, 255, 240, 0.5),
                 0 0 20px rgba(0, 255, 240, 0.3),
                 0 0 30px rgba(0, 255, 240, 0.2);
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 255, 240, 0.8),
                 0 0 30px rgba(0, 255, 240, 0.5),
                 0 0 40px rgba(0, 255, 240, 0.3);
  }
}
import { ParticleEffect } from './components/ParticleEffect';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { PuzzlesSection } from './components/PuzzlesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { InstructorSection } from './components/InstructorSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0B0C10] via-[#1a1d29] to-[#0B0C10] text-[#E6E6E6]">
      <ParticleEffect />
      
      <div className="relative z-10">
        <HeroSection />
        <StorySection />
        <PuzzlesSection />
        <HowItWorksSection />
        <InstructorSection />
        <ResourcesSection />
        <FooterSection />
      </div>
    </div>
  );
}

This Figma Make file includes components from [shadcn/ui](https://ui.shadcn.com/) used under [MIT license](https://github.com/shadcn-ui/ui/blob/main/LICENSE.md).

This Figma Make file includes photos from [Unsplash](https://unsplash.com) used under [license](https://unsplash.com/license).