import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Cog, BarChart3, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FAQSection } from "@/components/sections/FAQSection";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Web Presence",
    subtitle: "Websites & Landing Pages",
    description: "High-converting websites built for speed, SEO, and conversions. Not templates—custom systems designed for your business goals.",
    features: [
      "Custom responsive design tailored to your brand",
      "SEO optimization for maximum visibility",
      "Mobile-first architecture",
      "Performance optimization (sub-3s load times)",
      "Analytics and conversion tracking",
      "CMS integration for easy updates"
    ]
  },
  {
    icon: Cog,
    number: "02",
    title: "AI & Internal Tools",
    subtitle: "Dashboards & Automation",
    description: "Custom AI solutions and internal tools that replace spreadsheets and manual processes. Intelligent dashboards and automation that actually work.",
    features: [
      "Custom Dashboards & CRMs",
      "AI Workflow Automation",
      "Team Management Portals",
      "Data Integration & APIs",
      "Real-time Reporting",
      "Smart Process Optimization"
    ]
  },
  {
    icon: BarChart3,
    number: "03",
    title: "Growth Systems",
    subtitle: "Funnels & Optimization",
    description: "Complete growth infrastructure—from lead capture to customer retention. Systems that compound over time.",
    features: [
      "Lead generation funnels",
      "Email automation sequences",
      "A/B testing frameworks",
      "Revenue and conversion tracking",
      "Customer journey optimization",
      "Retention and upsell systems"
    ]
  }
];

export default function Services() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal();
  const { ref: processRef, isVisible: processVisible } = useScrollReveal();

  return (
    <>
      <Helmet>
        <title>Web Development Services - Custom Websites & Digital Tools | Yanforge</title>
        <meta name="description" content="Professional web development services including custom websites, landing pages, internal dashboards, automation tools, and growth systems. Expert web development in Pakistan." />
        <meta name="keywords" content="web development services, custom website design, landing page development, business automation, internal tools, dashboard development, SEO services, growth systems, Pakistan web agency" />
        <link rel="canonical" href="https://yanforge.com/services" />
        
        <meta property="og:title" content="Web Development Services | Yanforge" />
        <meta property="og:description" content="Professional web development services including custom websites, dashboards, and automation tools." />
        <meta property="og:url" content="https://yanforge.com/services" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Web Development",
            "provider": {
              "@type": "Organization",
              "name": "Yanforge"
            },
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Web Development Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Presence",
                    "description": "Custom websites and landing pages with SEO optimization"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Internal Tools",
                    "description": "Custom dashboards and business automation systems"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Growth Systems",
                    "description": "Lead generation funnels and conversion optimization"
                  }
                }
              ]
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
            
            <div className="container-wide relative z-10">
              <div ref={heroRef} className={cn("max-w-4xl reveal", heroVisible && "visible")}>
                <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-6">
                  Our Services
                </p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 sm:mb-8">
                  Three pillars of
                  <span className="text-forge-orange"> digital infrastructure</span>
                </h1>
                <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
                  Everything your business needs to compete in the digital age. 
                  No more piecing together solutions—get systems that work together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button variant="forge" size="lg" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Services Detail */}
          <section className="section-padding bg-background px-4 sm:px-6">
            <div className="container-wide">
              <div ref={servicesRef} className={cn("space-y-16 sm:space-y-24", servicesVisible && "visible")}>
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "grid md:grid-cols-2 gap-8 sm:gap-12 items-start reveal",
                      servicesVisible && "visible"
                    )}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-forge-orange/20">
                          {service.number}
                        </span>
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center">
                          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-forge-orange" />
                        </div>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {service.title}
                      </h2>
                      <p className="text-forge-orange font-medium mb-4">{service.subtitle}</p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Button variant="forge" asChild>
                        <Link to="/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="bg-muted rounded-xl p-6 sm:p-8">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                        What's Included
                      </h3>
                      <ul className="space-y-3 sm:space-y-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-forge-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 text-forge-orange" />
                            </div>
                            <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="section-padding bg-muted px-4 sm:px-6">
            <div className="container-wide">
              <div ref={processRef}>
                <div className={cn("max-w-3xl mb-10 sm:mb-16 reveal", processVisible && "visible")}>
                  <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                    Our Process
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                    How we build your systems
                  </h2>
                </div>

                <div className={cn("stagger-children grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8", processVisible && "visible")}>
                  {[
                    { step: "01", title: "Discovery", desc: "We learn your business, goals, and challenges" },
                    { step: "02", title: "Strategy", desc: "We design a system architecture that scales" },
                    { step: "03", title: "Build", desc: "We develop your solution with weekly updates" },
                    { step: "04", title: "Launch", desc: "We deploy, train, and provide ongoing support" }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <span className="font-display text-3xl sm:text-5xl font-bold text-forge-orange/20 block mb-3 sm:mb-4">
                        {item.step}
                      </span>
                      <h3 className="font-display text-base sm:text-xl font-semibold text-foreground mb-1 sm:mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <FAQSection />

          {/* CTA */}
          <section className="section-padding bg-secondary px-4 sm:px-6">
            <div className="container-wide text-center">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 sm:mb-6">
                Ready to build your digital infrastructure?
              </h2>
              <p className="text-secondary-foreground/70 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
                Book a free strategy call and let's discuss how we can help your business grow.
              </p>
              <Button variant="forge" size="lg" asChild>
                <Link to="/contact">
                  Book Strategy Call
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
