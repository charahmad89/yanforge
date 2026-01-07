import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const botResponses: Record<string, string[]> = {
  hello: ["Hello! Welcome to Yanforge. How can I assist you today?", "Hi there! I'm the Yanforge AI assistant. What would you like to know about our services?"],
  hi: ["Hi! Great to have you here. How can I help you today?", "Hello! I'm here to assist you with any questions about Yanforge."],
  hey: ["Hey there! Welcome to Yanforge. What can I do for you?"],
  services: ["We offer three core digital solutions:\n\n1. Web Presence\nCustom websites, landing pages, and e-commerce solutions designed to convert visitors into customers.\n\n2. Internal Tools\nDashboards, CRMs, and automation systems that streamline your operations.\n\n3. Growth Systems\nMarketing funnels, analytics, and optimization tools to scale your business.\n\nWhich service interests you most?"],
  pricing: ["Our pricing is tailored to each project's unique requirements. We'd love to understand your needs better.\n\nYou can:\n• Schedule a free consultation call\n• Send us a message with your project details\n• WhatsApp us at +92 328 144 1362\n\nWould you like me to help you get started?"],
  price: ["Our pricing varies based on project scope and complexity. We offer competitive rates and flexible payment options.\n\nFor a detailed quote, please share your project requirements via our contact form or WhatsApp us directly at +92 328 144 1362."],
  cost: ["The cost depends on your specific needs. Our team will provide a transparent, detailed quote after understanding your requirements.\n\nContact us at yanforge09@gmail.com or hello@yanforge.com, or call +92 328 144 1362 to discuss your project."],
  contact: ["You can reach us through multiple channels:\n\n📧 Email: yanforge09@gmail.com or hello@yanforge.com\n📞 Phone: +92 328 144 1362\n💬 WhatsApp: +92 328 144 1362\n\nBusiness Hours: Open everyday from 8:00 AM to 10:00 PM PKT\n\nWe typically respond within 24 hours!"],
  phone: ["Our phone number is +92 328 144 1362\n\nYou can call us or reach out via WhatsApp. We're available everyday from 8:00 AM to 10:00 PM PKT."],
  whatsapp: ["You can reach us on WhatsApp at +92 328 144 1362\n\nFeel free to message us anytime! We'll respond as soon as possible during business hours (8 AM - 10 PM PKT everyday)."],
  website: ["Absolutely! We specialize in creating high-performance websites that are:\n\n✓ Mobile-first & responsive\n✓ SEO optimized for search rankings\n✓ Fast-loading & secure\n✓ Designed for conversions\n\nWhether you need a landing page, corporate site, or e-commerce platform, we've got you covered. Would you like to discuss your project?"],
  automation: ["We build custom automation solutions that save you time and money:\n\n• Workflow automation\n• CRM integrations\n• Email marketing systems\n• Data processing pipelines\n• Custom dashboards\n\nTell us about your manual processes, and we'll show you how to automate them!"],
  about: ["Yanforge is a digital agency focused on building robust digital infrastructure for modern businesses.\n\nWe help companies establish their online presence, streamline operations, and scale growth through technology.\n\nOur team combines technical expertise with business understanding to deliver solutions that actually work."],
  time: ["We're open everyday from 8:00 AM to 10:00 PM PKT.\n\nFeel free to reach out anytime during these hours, and we'll respond promptly!"],
  hours: ["Our business hours are:\n\nOpen Everyday: 8:00 AM - 10:00 PM PKT\n\nYou can also leave us a message outside these hours, and we'll get back to you as soon as we're available."],
  location: ["We're a remote-first team serving clients worldwide.\n\nNo matter where you're located, we can work with you! Our team collaborates across time zones to deliver exceptional results."],
  portfolio: ["We'd be happy to share examples of our work! Please contact us at yanforge09@gmail.com or hello@yanforge.com, or reach us via WhatsApp, and we'll send you relevant case studies based on your industry."],
  work: ["Our portfolio includes various projects across different industries. To see work relevant to your needs, please reach out to us and we'll share specific examples that match your requirements."],
  thanks: ["You're welcome! Is there anything else I can help you with?", "Happy to help! Feel free to ask if you have more questions."],
  thank: ["You're welcome! Let me know if there's anything else you'd like to know.", "My pleasure! Don't hesitate to ask more questions."],
  bye: ["Goodbye! Thank you for visiting Yanforge. Feel free to reach out anytime you need assistance!", "Take care! We're here whenever you need us."],
  help: ["I'm here to help! You can ask me about:\n\n• Our services (web, automation, growth)\n• Pricing and quotes\n• Contact information\n• Business hours\n• How to get started\n\nWhat would you like to know?"],
  start: ["Getting started with Yanforge is easy!\n\n1. Tell us about your project via chat, email, or WhatsApp\n2. Schedule a free consultation to discuss your needs\n3. Receive a custom proposal tailored to your goals\n4. We get to work bringing your vision to life\n\nReady to begin? Contact us at yanforge09@gmail.com or hello@yanforge.com, or WhatsApp +92 328 144 1362"],
  quote: ["To get a quote, please share:\n\n• Your project type (website, automation, etc.)\n• Key features you need\n• Your timeline\n• Any specific requirements\n\nYou can email us at yanforge09@gmail.com or hello@yanforge.com, or WhatsApp +92 328 144 1362, and we'll provide a detailed estimate."],
  mobile: ["Yes! All our websites are built with a mobile-first approach.\n\n98% of users browse on mobile devices, so we ensure your site looks perfect and performs flawlessly on all screen sizes."],
  seo: ["SEO is built into every website we create. Our approach includes:\n\n✓ Technical SEO optimization\n✓ Mobile-first design\n✓ Fast page load speeds\n✓ Proper heading structure\n✓ Meta tags & descriptions\n✓ Schema markup\n\nWant to improve your search rankings? Let's talk!"],
  ecommerce: ["We build powerful e-commerce solutions including:\n\n• Custom online stores\n• Product catalogs\n• Secure payment integration\n• Inventory management\n• Order processing systems\n\nReady to sell online? Contact us to discuss your e-commerce project!"],
  support: ["We provide ongoing support for all our projects:\n\n• Bug fixes & maintenance\n• Performance optimization\n• Feature updates\n• Technical support\n\nOur support team is available everyday from 8 AM to 10 PM PKT."],
};

function getBotResponse(message: string): string {
  const lowerMessage = message.toLowerCase().trim();
  
  // Check for keyword matches
  for (const [keyword, responses] of Object.entries(botResponses)) {
    if (lowerMessage.includes(keyword)) {
      return responses[Math.floor(Math.random() * responses.length)];
    }
  }
  
  // Default response for unmatched queries
  return "Thank you for your message! I'm here to help you learn about Yanforge's services.\n\nYou can ask me about:\n• Services - Web presence, automation, growth systems\n• Pricing - How we structure our quotes\n• Contact - How to reach our team\n• Hours - When we're available\n\nOr type 'help' for more options. For immediate assistance, WhatsApp us at +92 328 144 1362!";
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm the Yanforge AI assistant. How can I help you today?\n\nFeel free to ask about our services, pricing, or anything else!",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: getBotResponse(input),
      isBot: true,
      timestamp: new Date()
    };

    setIsTyping(false);
    setMessages(prev => [...prev, botResponse]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-forge-orange text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl",
          isOpen && "rotate-90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        )}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 w-[calc(100vw-2rem)] sm:w-96 bg-background rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 transform origin-bottom-right",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="bg-secondary p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-forge-orange flex items-center justify-center">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display font-semibold text-secondary-foreground">
              Yanforge AI
            </h3>
            <p className="text-xs text-secondary-foreground/60">
              Always here to help
            </p>
          </div>
          <div className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-secondary-foreground/60">Online</span>
          </div>
        </div>

        {/* Messages */}
        <div className="h-72 sm:h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex animate-fade-in",
                message.isBot ? "justify-start" : "justify-end"
              )}
            >
              <div
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap",
                  message.isBot
                    ? "bg-background border border-border text-foreground rounded-bl-md"
                    : "bg-forge-orange text-primary-foreground rounded-br-md"
                )}
              >
                {message.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="bg-background border border-border rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-forge-orange/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-forge-orange/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-forge-orange/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-background border-t border-border">
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="flex-1 bg-muted border-border focus:border-forge-orange text-sm"
            />
            <Button 
              onClick={handleSend}
              variant="forge"
              size="icon"
              disabled={!input.trim() || isTyping}
              className="transition-all duration-300 hover:scale-105"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
