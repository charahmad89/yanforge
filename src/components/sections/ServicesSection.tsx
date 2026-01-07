import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Globe, Cog, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Presence",
    subtitle: "Websites & Landing Pages",
    description: "High-converting websites built for speed, SEO, and conversions. Not templates—custom systems designed for your business goals.",
    features: ["Custom Design", "Mobile-First", "SEO Optimized", "Analytics Ready"],
    colors: ["hsl(24, 91%, 54%)", "hsl(24, 91%, 60%)", "hsl(24, 91%, 48%)"]
  },
  {
    icon: Cog,
    number: "02",
    title: "AI & Internal Tools",
    subtitle: "Dashboards & Automation",
    description: "Custom AI solutions and internal tools that replace spreadsheets and manual processes. Intelligent dashboards and automation that actually work.",
    features: ["Custom Dashboards", "AI Automation", "Team Portals", "Data Integration"],
    colors: ["hsl(200, 70%, 50%)", "hsl(200, 70%, 60%)", "hsl(200, 70%, 45%)"]
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Growth Systems",
    subtitle: "Funnels & Optimization",
    description: "Complete growth infrastructure—from lead capture to customer retention. Systems that compound over time.",
    features: ["Lead Funnels", "Email Automation", "A/B Testing", "Revenue Tracking"],
    colors: ["hsl(150, 60%, 45%)", "hsl(150, 60%, 55%)", "hsl(150, 60%, 40%)"]
  }
];

function AnimatedPillar({ service, index }: { service: typeof services[0], index: number }) {
  const [colorIndex, setColorIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setColorIndex((prev) => (prev + 1) % service.colors.length);
    }, 2500 + index * 300);
    return () => clearInterval(interval);
  }, [service.colors.length, index]);

  const currentColor = service.colors[colorIndex];

  return (
    <div 
      className="group bg-background rounded-xl border border-border hover:border-forge-orange/30 transition-all duration-500 hover:shadow-medium overflow-hidden"
    >
      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-8 p-5 sm:p-8 md:p-10">
        {/* Number & Icon */}
        <div className="sm:col-span-2 flex sm:flex-col items-center sm:items-start gap-4">
          <span 
            className="font-display text-3xl sm:text-4xl font-bold transition-colors duration-700"
            style={{ color: `${currentColor}40` }}
          >
            {service.number}
          </span>
          <div 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition-all duration-700"
            style={{ backgroundColor: `${currentColor}15` }}
          >
            <service.icon 
              className="w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-700"
              style={{ color: currentColor }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="sm:col-span-6 space-y-3 sm:space-y-4">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              {service.title}
            </h3>
            <p 
              className="text-sm font-medium transition-colors duration-700"
              style={{ color: currentColor }}
            >
              {service.subtitle}
            </p>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Features */}
        <div className="sm:col-span-4 flex flex-col justify-between">
          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <div 
                  className="w-1.5 h-1.5 rounded-full transition-colors duration-700"
                  style={{ backgroundColor: currentColor }}
                />
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="minimal" className="self-start mt-4 sm:mt-6 group/btn" asChild>
            <Link to="/services">
              Learn more
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Animated bottom border */}
      <div 
        className="h-1 transition-all duration-700 opacity-0 group-hover:opacity-100"
        style={{ 
          background: `linear-gradient(90deg, ${service.colors[0]}, ${service.colors[1]}, ${service.colors[2]})` 
        }}
      />
    </div>
  );
}

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted relative overflow-hidden px-4 sm:px-6">
      <div className="container-wide">
        <div ref={ref}>
          {/* Section Header */}
          <div className="mb-10 sm:mb-16">
            <div className={cn("max-w-3xl reveal", isVisible && "visible")}>
              <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                Services
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Three pillars of
                <br />
                <span className="text-muted-foreground">digital infrastructure</span>
              </h2>
            </div>
          </div>

          {/* Services Grid */}
          <div className={cn("space-y-6 sm:space-y-6 focus-expand-group", isVisible && "visible")}>
            {services.map((service, index) => (
              <div 
                key={index}
                className={cn("reveal focus-expand-item transition-all duration-500", isVisible && "visible")}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <AnimatedPillar service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
