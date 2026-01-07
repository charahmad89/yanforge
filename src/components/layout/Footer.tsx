import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import yanforgeLogo from "@/assets/yanforge-logo.jpeg";

const footerLinks = {
  services: [
    { label: "Web Presence", href: "/services" },
    { label: "Internal Tools", href: "/services" },
    { label: "Growth Systems", href: "/services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  social: [
    { label: "WhatsApp", href: "https://wa.me/923281441362" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/yanforge" },
    { label: "Facebook", href: "https://www.facebook.com/share/1BbFzYmt7Y/" },
    { label: "Instagram", href: "https://www.instagram.com/yanforge?igsh=MTZrYWhxdTkycDkyNA==" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-muted/10">
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-105 duration-300">
              <img 
                src={yanforgeLogo} 
                alt="Yanforge" 
                className="h-10 sm:h-12 w-auto mix-blend-screen logo-animate"
              />
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              Building digital systems for modern businesses. 
              We design and develop the software infrastructure that powers growth.
            </p>
            <div className="flex items-center gap-2">
              <a 
                href="mailto:hello@yanforge.com" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-forge-orange transition-colors"
              >
                hello@yanforge.com
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-forge-orange transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-forge-orange transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.href}
                    className="text-muted-foreground hover:text-forge-orange transition-all duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Links */}
          <div className="md:col-span-2">
            <h4 className="font-display font-semibold text-secondary-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-forge-orange transition-all duration-300 text-sm inline-flex items-center gap-1 group hover:translate-x-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-muted/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Yanforge. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-forge-orange transition-all duration-300 hover:translate-y-[-2px] inline-block">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-forge-orange transition-all duration-300 hover:translate-y-[-2px] inline-block">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
