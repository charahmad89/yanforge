import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export default function Terms() {
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
                Terms & Conditions
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
                  1. Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Yanforge's services, you agree to be bound by these Terms and Conditions. 
                  If you disagree with any part of these terms, you may not access our services.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  2. Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Yanforge provides digital services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Web design and development</li>
                  <li>Internal tools and automation systems</li>
                  <li>Growth and marketing systems</li>
                  <li>Digital consulting and strategy</li>
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  3. Payment Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms are agreed upon before project commencement. A deposit may be required 
                  before work begins. Final payment is due upon project completion unless otherwise agreed 
                  in writing.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, clients receive full ownership of custom work created specifically 
                  for their project. Yanforge retains the right to display completed work in portfolios 
                  and marketing materials unless otherwise agreed.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  5. Confidentiality
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality regarding all client information, business data, 
                  and project details. We will not disclose any confidential information to third parties 
                  without prior written consent.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Yanforge shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of our services or any related matter.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  7. Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting to our website. Continued use of our services constitutes 
                  acceptance of modified terms.
                </p>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 sm:p-8">
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-4">
                  8. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms and Conditions, please contact us at:
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
