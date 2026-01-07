import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

export function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="container-narrow relative">
        <div 
          ref={ref}
          className={cn(
            "text-center space-y-8 reveal",
            isVisible && "visible"
          )}
        >
          {/* Eyebrow */}
          <p className="text-forge-orange font-medium tracking-wider uppercase text-sm">
            Ready to Build?
          </p>

          {/* Headline */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Let's build systems that
            <br />
            <span className="text-gradient">grow your business</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Every great system starts with a conversation. Book a free 30-minute strategy call 
            to discuss your business needs and see how Yanforge can help.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="forge" size="xl" className="group" asChild>
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Book a Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              No commitment
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Response within 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
