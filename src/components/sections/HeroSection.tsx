import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart, Users, DollarSign, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

function HeroLivePreview() {
  return (
    <div className="relative mt-12 sm:mt-16 lg:mt-20 mx-auto max-w-4xl opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
      {/* Dashboard Preview Card - Reveal Panel Effect */}
      <div className="reveal-panel bg-card border border-border rounded-xl shadow-strong overflow-hidden aspect-video relative group">
        
        {/* Main Content (Visible) */}
        <div className="absolute inset-0 p-6 flex flex-col z-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="h-4 w-32 bg-muted rounded-full" />
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="h-8 w-8 rounded bg-forge-orange/20 mb-3" />
                <div className="h-4 w-20 bg-muted-foreground/20 rounded mb-2" />
                <div className="h-6 w-12 bg-foreground/10 rounded" />
              </div>
            ))}
          </div>
          
          <div className="flex-1 bg-muted/30 rounded-lg border border-border p-4">
            <div className="flex items-end gap-2 h-full pb-2 px-2">
              {[40, 70, 45, 90, 60, 80, 50, 75, 65, 85].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-forge-orange/80 rounded-t-sm transition-all duration-500 group-hover:bg-forge-orange"
                  style={{ height: `${h}%` }} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Reveal Layer (Hidden initially, reveals from inside) */}
        <div className="reveal-panel-layer bg-secondary text-secondary-foreground flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-3xl font-display font-bold mb-2">Real-time Analytics</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Monitor your business performance with custom dashboards designed for your specific metrics.
            </p>
            <Button variant="forge" className="mt-6">Explore Features</Button>
          </div>
        </div>

      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-forge-orange/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl opacity-50" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-secondary overflow-hidden px-4 sm:px-6 py-20">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-secondary/95" />

      <div className="relative z-10 container-wide text-center flex flex-col items-center">
        
        {/* Glass Tube Text - From Business to Digital */}
        <div 
          className="glass-tube px-6 py-3 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          <div className="glass-tube-light" />
          <span className="relative z-10 font-display text-xl sm:text-2xl font-medium text-white tracking-wide">
            From <span className="text-forge-orange">Business</span> to <span className="text-forge-orange">Digital</span>
          </span>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Headline */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-secondary-foreground leading-[1.1] opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Building digital systems
            <br />
            <span className="text-gradient">for modern businesses</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-up px-2"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            We design and build the AI-powered software infrastructure that powers ambitious local businesses. 
            From websites to intelligent tools—systems that actually work.
          </p>

          {/* CTA Group */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <Button variant="hero" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>

        {/* Live Preview Hero */}
        <HeroLivePreview />

      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </div>
    </section>
  );
}
