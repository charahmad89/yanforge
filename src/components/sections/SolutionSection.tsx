import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Layers, Zap, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export function SolutionSection() {
  const { ref, isVisible } = useScrollReveal();
  const [activeNode, setActiveNode] = useState(0);
  
  // Animate the orbiting nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 6);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-secondary text-secondary-foreground px-4 sm:px-6">
      <div className="container-wide">
        <div ref={ref} className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left: Content */}
          <div className={cn("space-y-6 sm:space-y-8 reveal order-2 lg:order-1", isVisible && "visible")}>
            <div>
              <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                The Solution
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                We build systems,
                <br />
                <span className="text-muted-foreground">not just websites</span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Yanforge doesn't patch problems—we architect solutions. Every project starts with 
              understanding your business, then designing digital infrastructure that scales with you.
            </p>

            {/* Value Props */}
            <div className="space-y-6 sm:space-y-6 pt-4 sm:pt-4">
              {[
                { icon: Layers, title: "Systems Thinking", desc: "We see the whole picture, not just pixels" },
                { icon: Zap, title: "Built for Speed", desc: "Fast to launch, faster to iterate" },
                { icon: Shield, title: "Enterprise Grade", desc: "Local business price, enterprise reliability" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 sm:gap-4 p-5 rounded-xl soft-morph border border-transparent hover:border-white/5">
                  <div className="w-10 h-10 sm:w-10 sm:h-10 rounded-lg bg-forge-orange/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-5 sm:h-5 text-forge-orange" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-secondary-foreground text-base sm:text-base">{item.title}</h4>
                    <p className="text-muted-foreground text-sm sm:text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Animated Visual */}
          <div 
            className={cn(
              "relative reveal order-1 lg:order-2",
              isVisible && "visible"
            )}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="aspect-square max-w-sm sm:max-w-md mx-auto rounded-2xl bg-gradient-to-br from-forge-orange/20 to-forge-orange/5 border border-forge-orange/20 flex items-center justify-center">
              {/* Abstract system visualization */}
              <div className="relative w-3/4 h-3/4">
                {/* Central node with pulse animation */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-forge-orange flex items-center justify-center relative">
                    <span className="font-display font-bold text-primary-foreground text-lg sm:text-xl">Y</span>
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full bg-forge-orange animate-ping opacity-20" />
                  </div>
                </div>
                
                {/* Orbiting nodes with color transitions */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-6 sm:w-8 sm:h-8 rounded-full border transition-all duration-500"
                    style={{
                      top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                      left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                      transform: 'translate(-50%, -50%)',
                      backgroundColor: activeNode === i ? 'hsl(24, 91%, 54%)' : 'transparent',
                      borderColor: activeNode === i ? 'hsl(24, 91%, 54%)' : 'hsl(var(--secondary-foreground) / 0.2)',
                      boxShadow: activeNode === i ? '0 0 20px hsl(24, 91%, 54% / 0.5)' : 'none'
                    }}
                  />
                ))}

                {/* Connection lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="50"
                      x2={50 + 40 * Math.cos((angle * Math.PI) / 180)}
                      y2={50 + 40 * Math.sin((angle * Math.PI) / 180)}
                      stroke={activeNode === i ? "hsl(24, 91%, 54%)" : "hsl(var(--secondary-foreground))"}
                      strokeWidth={activeNode === i ? "1" : "0.5"}
                      strokeOpacity={activeNode === i ? "0.6" : "0.2"}
                      className="transition-all duration-500"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
