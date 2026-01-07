import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, Linkedin, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import yanforgeLogo from "@/assets/yanforge-logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled 
          ? "bg-secondary border-b border-forge-orange/10 shadow-lg" 
          : "bg-secondary/95 backdrop-blur-sm"
      )}
    >
      <div className="container-wide px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={yanforgeLogo} 
              alt="Yanforge" 
              className="h-12 sm:h-14 md:h-16 w-auto transition-transform duration-300 group-hover:scale-105 mix-blend-screen logo-animate"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 overflow-hidden group",
                  location.pathname === link.href 
                    ? "text-forge-orange bg-forge-orange/10" 
                    : "text-secondary-foreground hover:text-forge-orange"
                )}
              >
                {/* Hover slide animation */}
                <span className="relative z-10">{link.label}</span>
                <span 
                  className={cn(
                    "absolute inset-0 bg-forge-orange/10 transform transition-transform duration-300 ease-out",
                    location.pathname === link.href 
                      ? "translate-y-0" 
                      : "translate-y-full group-hover:translate-y-0"
                  )}
                />
              </Link>
            ))}
          </nav>


          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center gap-3 ml-2">
            <a
              href="https://wa.me/923281441362"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/yanforge"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1BbFzYmt7Y/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/yanforge?igsh=MTZrYWhxdTkycDkyNA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-secondary-foreground rounded-lg hover:bg-forge-orange/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={cn(
            "md:hidden fixed inset-x-0 top-16 bottom-0 bg-secondary transition-all duration-300 transform z-40",
            mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          )}
        >
          <nav className="flex flex-col p-6 space-y-2 bg-secondary">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                to={link.href}
                className={cn(
                  "relative px-4 py-4 rounded-xl text-lg font-medium transition-all duration-300 overflow-hidden group",
                  location.pathname === link.href 
                    ? "text-forge-orange bg-forge-orange/10" 
                    : "text-secondary-foreground"
                )}
                style={{ 
                  animationDelay: mobileOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {/* Slide animation on hover */}
                <span className="relative z-10 flex items-center justify-between">
                  {link.label}
                  <ArrowRight className={cn(
                    "w-5 h-5 transition-all duration-300",
                    location.pathname === link.href 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  )} />
                </span>
                <span 
                  className={cn(
                    "absolute inset-0 bg-forge-orange/10 transform transition-transform duration-300 ease-out",
                    location.pathname === link.href 
                      ? "translate-y-0" 
                      : "translate-y-full group-hover:translate-y-0"
                  )}
                />
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-4">
              <a
                href="https://wa.me/923281441362"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/yanforge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1BbFzYmt7Y/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/yanforge?igsh=MTZrYWhxdTkycDkyNA=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-lg text-secondary-foreground hover:text-forge-orange hover:bg-forge-orange/10 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

          </nav>
        </div>
      </div>
    </header>
  );
} 
