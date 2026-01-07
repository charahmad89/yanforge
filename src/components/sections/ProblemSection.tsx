import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { AlertCircle, Clock, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

const problems = [
  {
    icon: Clock,
    title: "Wasted Time",
    description: "Hours lost to manual processes that should be automated. Your team drowns in spreadsheets instead of serving customers.",
    colors: ["hsl(24, 91%, 54%)", "hsl(24, 91%, 45%)", "hsl(24, 91%, 35%)"]
  },
  {
    icon: DollarSign,
    title: "Lost Revenue",
    description: "Outdated websites and broken funnels silently kill conversions. Every day without proper systems costs you money.",
    colors: ["hsl(0, 70%, 50%)", "hsl(0, 70%, 40%)", "hsl(0, 60%, 35%)"]
  },
  {
    icon: AlertCircle,
    title: "Tech Chaos",
    description: "Disconnected tools, band-aid solutions, and technical debt. Your digital presence is a house of cards.",
    colors: ["hsl(45, 90%, 50%)", "hsl(30, 85%, 45%)", "hsl(24, 91%, 54%)"]
  }
];

function AnimatedGradientCard({ problem, index, isVisible }: { problem: typeof problems[0], index: number, isVisible: boolean }) {
  const [colorIndex, setColorIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % problem.colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [problem.colors.length]);

  return (
    <div 
      className="group relative bg-background/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 border border-border hover:border-forge-orange/30 transition-all duration-500 hover:shadow-medium hover:-translate-y-1"
      style={{
        transitionDelay: `${index * 100}ms`
      }}
    >
      {/* Animated gradient border effect */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${problem.colors[colorIndex]} 0%, transparent 50%)`,
          padding: '1px',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          WebkitMaskComposite: 'xor',
        }}
      />
      
      <div 
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-4 sm:mb-6 transition-all duration-700"
        style={{
          backgroundColor: `${problem.colors[colorIndex]}20`,
        }}
      >
        <problem.icon 
          className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-700"
          style={{ color: problem.colors[colorIndex] }}
        />
      </div>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
        {problem.title}
      </h3>
      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
        {problem.description}
      </p>
    </div>
  );
}

export function ProblemSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted relative overflow-hidden px-4 sm:px-6">
      <div className="container-wide relative z-10">
        <div 
          ref={ref} 
          className={cn("space-y-10 sm:space-y-16", isVisible && "visible")}
        >
          {/* Section Header */}
          <div className={cn("max-w-3xl reveal", isVisible && "visible")}>
            <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              The Problem
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Most local businesses are{" "}
              <span className="text-muted-foreground">digitally broken</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              They don't lack ambition. They lack systems. While enterprises have IT departments 
              and million-dollar budgets, local businesses fight with templates and duct-tape solutions.
            </p>
          </div>

          {/* Problem Cards with Color Transitions */}
          <div className={cn("grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8", isVisible && "visible")}>
            {problems.map((problem, index) => (
              <AnimatedGradientCard 
                key={index} 
                problem={problem} 
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
