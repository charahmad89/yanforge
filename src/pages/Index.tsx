import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CinematicIntro } from "@/components/CinematicIntro";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Helmet>
        <title>Yanforge - Web Development & Digital Systems Agency | Pakistan</title>
        <meta name="description" content="Yanforge builds custom websites, web applications, internal tools, and digital infrastructure for businesses. Professional web development agency serving Pakistan and worldwide." />
        <meta name="keywords" content="web development, website design, digital agency, web development Pakistan, custom websites, business websites, landing pages, internal tools, automation, SEO services" />
        <link rel="canonical" href="https://yanforge.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Yanforge - Web Development & Digital Systems Agency" />
        <meta property="og:description" content="Building digital systems for modern businesses. Custom websites, web applications, and growth infrastructure." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yanforge.com" />
        <meta property="og:site_name" content="Yanforge" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Yanforge - Web Development & Digital Systems Agency" />
        <meta name="twitter:description" content="Building digital systems for modern businesses. Custom websites, web applications, and growth infrastructure." />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yanforge",
            "description": "Web development and digital systems agency building custom websites, internal tools, and growth systems for businesses.",
            "url": "https://yanforge.com",
            "telephone": "+923281441362",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PK"
            },
            "sameAs": [
              "https://wa.me/923281441362",
              "https://www.linkedin.com/company/yanforge",
              "https://www.facebook.com/share/1BbFzYmt7Y/",
              "https://www.instagram.com/yanforge?igsh=MTZrYWhxdTkycDkyNA=="
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "email": "yanforge09@gmail.com",
                "contactType": "customer service"
              },
              {
                "@type": "ContactPoint",
                "email": "hello@yanforge.com",
                "contactType": "customer service"
              }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "08:00",
              "closes": "22:00"
            }
          })}
        </script>
      </Helmet>
      
      {showIntro && <CinematicIntro onComplete={() => setShowIntro(false)} />}
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <ServicesSection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
