import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    question: "What services does Yanforge offer?",
    answer: "Yanforge offers comprehensive digital solutions including Web Presence (custom websites, landing pages), Internal Tools (dashboards, automation, CRMs), and Growth Systems (funnels, email automation, conversion optimization). We build complete digital infrastructure for businesses."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Project timelines vary based on complexity. A standard business website typically takes 2-4 weeks. More complex projects with custom features, internal tools, or extensive functionality may take 4-8 weeks. We provide detailed timelines during our discovery phase."
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer: "Yes! We provide comprehensive post-launch support including maintenance, updates, performance monitoring, and technical assistance. We believe in building long-term partnerships with our clients to ensure continued success."
  },
  {
    question: "What makes Yanforge different from other agencies?",
    answer: "We focus on building systems, not just websites. Our approach combines strategic thinking with technical excellence to create digital infrastructure that scales with your business. We're partners in your growth, not just vendors."
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer: "Absolutely! Every website we build is optimized for search engines from the ground up. We implement technical SEO best practices, structured data, meta optimization, and content strategies to help your business rank higher and attract more customers."
  },
  {
    question: "Do you work with businesses outside Pakistan?",
    answer: "Yes, we work with clients worldwide! Our remote-first team is equipped to collaborate across time zones. We've successfully delivered projects for businesses in multiple countries and continents."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, battle-tested technologies including React, TypeScript, Node.js, and cloud platforms like AWS and Vercel. We choose the right tools for each project to ensure optimal performance, security, and maintainability."
  },
  {
    question: "How do I get started with Yanforge?",
    answer: "Simply reach out through our contact form or WhatsApp. We'll schedule a free strategy call to understand your business, goals, and challenges. From there, we'll create a custom proposal tailored to your needs."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div 
      className={cn(
        "border border-border rounded-xl overflow-hidden transition-all duration-500",
        isOpen ? "bg-muted/50 border-forge-orange/30" : "bg-transparent hover:border-forge-orange/20"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <button
        onClick={onToggle}
        className="w-full px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 text-left transition-all duration-300"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "font-display font-medium text-sm sm:text-base transition-colors duration-300",
          isOpen ? "text-forge-orange" : "text-foreground"
        )}>
          {question}
        </span>
        <ChevronDown 
          className={cn(
            "w-5 h-5 flex-shrink-0 transition-all duration-500 ease-out",
            isOpen 
              ? "rotate-180 text-forge-orange" 
              : "rotate-0 text-muted-foreground"
          )} 
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-background px-4 sm:px-6" id="faq">
      <div className="container-wide">
        <div ref={ref}>
          <div className={cn("max-w-3xl mb-10 sm:mb-16 reveal", isVisible && "visible")}>
            <p className="text-forge-orange font-medium tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              FAQ
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              Got questions? We've got answers. If you don't find what you're looking for, feel free to contact us.
            </p>
          </div>

          <div className={cn("max-w-3xl space-y-3 sm:space-y-4 stagger-children", isVisible && "visible")}>
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
