import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function Privacy() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[40vh] bg-secondary flex items-center pt-24 sm:pt-20 pb-12 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary to-forge-orange/5" />
          <div className="container-wide relative z-10">
            <div ref={heroRef} className={cn("max-w-4xl reveal", heroVisible && "visible")}>
              <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-4">
                Legal
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-foreground leading-tight mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg text-secondary-foreground/70 max-w-2xl">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background px-4 sm:px-6">
          <div className="container-wide max-w-4xl">
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Name and contact information</li>
                  <li>Company name and business details</li>
                  <li>Project requirements and communications</li>
                  <li>Payment information (processed securely)</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Communicate with you about projects and updates</li>
                  <li>Respond to your comments, questions, and requests</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. 
                  We may share information with trusted service providers who assist us in operating our 
                  business, subject to confidentiality agreements.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no 
                  method of transmission over the Internet is 100% secure.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  5. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may use cookies and similar tracking technologies to track activity on our website 
                  and hold certain information. You can instruct your browser to refuse all cookies or 
                  to indicate when a cookie is being sent.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to processing of your data</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-forge-orange font-medium mt-2">
                  <a href="mailto:hello@yanforge.com" className="hover:underline">hello@yanforge.com</a> | <a href="tel:+923281441362" className="hover:underline">+92 328 144 1362</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
