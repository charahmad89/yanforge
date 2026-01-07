import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! We'll get back to you within 24 hours.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  const whatsappNumber = "923281441362";
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in Yanforge's services.");

  return (
    <>
      <Helmet>
        <title>Contact Yanforge - Get a Free Quote | Web Development Pakistan</title>
        <meta name="description" content="Contact Yanforge for web development services. Get a free strategy call and quote for your website, internal tools, or digital infrastructure project. Available 8 AM - 10 PM PKT." />
        <meta name="keywords" content="contact Yanforge, web development quote, hire web developer Pakistan, website consultation, free strategy call" />
        <link rel="canonical" href="https://yanforge.com/contact" />
        
        <meta property="og:title" content="Contact Yanforge - Get a Free Quote" />
        <meta property="og:description" content="Contact us for web development services. Get a free strategy call and quote." />
        <meta property="og:url" content="https://yanforge.com/contact" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Yanforge",
              "telephone": "+923281441362",
              "email": "yanforge09@gmail.com",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "08:00",
                "closes": "22:00"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "email": "yanforge09@gmail.com",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Urdu"]
                },
                {
                  "@type": "ContactPoint",
                  "email": "hello@yanforge.com",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Urdu"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+923281441362",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Urdu"]
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
          <section className="min-h-[50vh] sm:min-h-[60vh] bg-secondary flex items-center pt-24 sm:pt-20 pb-12 sm:pb-0 px-4 sm:px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-forge-orange/5" />
            <div className="absolute top-40 right-20 w-72 h-72 bg-forge-orange/5 rounded-full blur-3xl animate-pulse" />
            
            <div className="container-wide relative z-10">
              <div ref={heroRef} className={cn("max-w-4xl reveal", heroVisible && "visible")}>
                <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-4 sm:mb-6">
                  Contact Us
                </p>
                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6 sm:mb-8">
                  Let's build something
                  <span className="text-forge-orange"> remarkable together</span>
                </h1>
                <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl leading-relaxed">
                  Ready to transform your digital presence? Get in touch and let's 
                  discuss how Yanforge can help your business grow.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Form & Info */}
          <section className="section-padding bg-background px-4 sm:px-6">
            <div className="container-wide">
              <div ref={formRef} className="grid lg:grid-cols-2 gap-10 sm:gap-16">
                {/* Form */}
                <div className={cn("reveal", formVisible && "visible")}>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          className="bg-muted border-border focus:border-forge-orange transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          required
                          className="bg-muted border-border focus:border-forge-orange transition-all duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        placeholder="Your company name"
                        className="bg-muted border-border focus:border-forge-orange transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        What service are you interested in?
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-10 px-3 rounded-md bg-muted border border-border text-foreground focus:border-forge-orange focus:outline-none focus:ring-2 focus:ring-forge-orange/20 text-sm transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        <option value="web">Web Presence</option>
                        <option value="tools">Internal Tools</option>
                        <option value="growth">Growth Systems</option>
                        <option value="all">Full Digital Infrastructure</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                        className="bg-muted border-border focus:border-forge-orange resize-none transition-all duration-300"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      variant="forge" 
                      size="lg" 
                      className="w-full sm:w-auto transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className={cn("reveal delay-200", formVisible && "visible")}>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">
                    Get in touch
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-forge-orange/20">
                        <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-forge-orange" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">Email</h3>
                        <div className="flex flex-col">
                          <a href="mailto:yanforge09@gmail.com" className="text-sm sm:text-base text-muted-foreground hover:text-forge-orange transition-all duration-300">
                            yanforge09@gmail.com
                          </a>
                          <a href="mailto:hello@yanforge.com" className="text-sm sm:text-base text-muted-foreground hover:text-forge-orange transition-all duration-300">
                            hello@yanforge.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-forge-orange/20">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-forge-orange" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">Phone</h3>
                        <a href="tel:+923281441362" className="text-sm sm:text-base text-muted-foreground hover:text-forge-orange transition-all duration-300">
                          +92 328 144 1362
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-forge-orange/20">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-forge-orange" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">Location</h3>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          Remote-first team serving clients worldwide
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp Button */}
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl hover:bg-green-500/20 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1 text-sm sm:text-base">WhatsApp</h3>
                        <p className="text-sm text-muted-foreground">
                          Chat with us directly on WhatsApp
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-green-500 ml-auto transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>

                  {/* Office Hours */}
                  <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-muted rounded-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <Clock className="w-5 h-5 text-forge-orange" />
                      <h3 className="font-display text-base sm:text-lg font-semibold text-foreground">
                        Business Hours
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      We typically respond to all inquiries within 24 hours.
                    </p>
                    <div className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <p><span className="font-medium text-foreground">Open Everyday:</span> 8:00 AM - 10:00 PM PKT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
