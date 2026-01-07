import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, Zap, Code2, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import yanforgeLogo from "@/assets/yanforge-logo.jpeg";

const values = [
  {
    icon: Target,
    title: "Systems Over Shortcuts",
    description: "We build infrastructure that scales, not quick fixes that break. Every project is designed for long-term growth."
  },
  {
    icon: Users,
    title: "Partnership Mindset",
    description: "We're not vendors, we're partners. Your success is our success, and we treat every client relationship accordingly."
  },
  {
    icon: Zap,
    title: "Relentless Efficiency",
    description: "No bloat, no unnecessary complexity. We deliver exactly what you need to move faster and grow smarter."
  }
];

export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>About Yanforge - Web Development Agency | Our Story & Mission</title>
        <meta name="description" content="Learn about Yanforge - a web development agency building digital systems for businesses. Discover our story, values, and commitment to creating scalable digital infrastructure." />
        <meta name="keywords" content="about Yanforge, web development company, digital agency Pakistan, web design team, software development company" />
        <link rel="canonical" href="https://yanforge.com/about" />
        
        <meta property="og:title" content="About Yanforge - Web Development Agency" />
        <meta property="og:description" content="Learn about Yanforge and our mission to build digital systems for modern businesses." />
        <meta property="og:url" content="https://yanforge.com/about" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Yanforge",
              "description": "Web development agency building digital systems for businesses",
              "foundingLocation": "Pakistan",
              "knowsAbout": ["Web Development", "Digital Marketing", "Business Automation", "SEO"]
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero */}
          <section className="min-h-[60vh] sm:min-h-[70vh] bg-secondary flex items-center pt-24 sm:pt-20 pb-12 sm:pb-0 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-forge-orange/5" />
            <div className="absolute top-20 right-10 w-64 h-64 bg-forge-orange/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-forge-orange/10 rounded-full blur-3xl" />
            
            <div className="container-wide relative z-10">
              <div ref={heroRef} className={cn("max-w-4xl reveal", heroVisible && "visible")}>
                <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-6">
                  About Yanforge
                </p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 sm:mb-8">
                  We build digital systems for
                  <span className="text-forge-orange"> businesses that refuse to stay small</span>
                </h1>
                <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
                  Yanforge was born from a simple observation: local businesses deserve the same 
                  digital infrastructure as enterprise companies—without the enterprise budget.
                </p>
              </div>
            </div>
          </section>

          {/* Story */}
          <section className="section-padding bg-background px-4 sm:px-6">
            <div className="container-wide">
              <div ref={storyRef} className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
                <div className={cn("reveal order-2 md:order-1", storyVisible && "visible")}>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The story behind the forge
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
                    <p>
                      We started Yanforge after years of watching talented business owners 
                      struggle with outdated websites, broken funnels, and manual processes 
                      that ate into their time and profits.
                    </p>
                    <p>
                      The problem wasn't lack of ambition—it was lack of access. Enterprise 
                      solutions were too expensive, and DIY tools created more problems than 
                      they solved.
                    </p>
                    <p>
                      So we built something different: a systems-first approach that gives 
                      growing businesses real digital infrastructure. Not templates. Not 
                      band-aids. Real systems designed for scale.
                    </p>
                  </div>
                </div>
                <div className={cn("reveal delay-200 order-1 md:order-2", storyVisible && "visible")}>
                  <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-forge-orange/20 via-transparent to-transparent" />
                    
                    {/* Central logo with icons */}
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="grid grid-cols-2 gap-4 sm:gap-6 p-8 sm:p-12">
                        {[Code2, Sparkles, Shield, Zap].map((Icon, i) => (
                          <div 
                            key={i}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-charcoal/50 border border-forge-orange/20 flex items-center justify-center transition-all duration-500 hover:border-forge-orange/50 hover:bg-forge-orange/10"
                          >
                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-forge-orange" />
                          </div>
                        ))}
                      </div>
                      
                      {/* Center logo */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-18 sm:h-18 rounded-full overflow-hidden shadow-lg border-2 border-forge-orange">
                        <img src={yanforgeLogo} alt="Yanforge" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="section-padding bg-muted px-4 sm:px-6">
            <div className="container-wide">
              <div ref={valuesRef}>
                <div className={cn("max-w-3xl mb-10 sm:mb-16 reveal", valuesVisible && "visible")}>
                  <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                    Our Values
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    What drives everything we build
                  </h2>
                </div>

                <div className={cn("stagger-children grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8", valuesVisible && "visible")}>
                  {values.map((value, index) => (
                    <div 
                      key={index}
                      className="bg-background rounded-xl p-6 sm:p-8 border border-border hover:border-forge-orange/30 transition-all duration-500"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 sm:mb-6">
                        <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-forge-orange" />
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                        {value.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="section-padding bg-secondary px-4 sm:px-6">
            <div className="container-wide text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 sm:mb-6">
                Ready to build something together?
              </h2>
              <p className="text-secondary-foreground/70 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Let's talk about how Yanforge can help your business grow with systems that scale.
              </p>
              <Button variant="forge" size="lg" asChild>
                <Link to="/contact">
                  Start a Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
