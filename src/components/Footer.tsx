import { Shield, Terminal } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-primary/20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg text-gradient">Harshit Bhati</span>
          </div>

          {/* Terminal decoration */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Terminal className="w-3 h-3 text-primary" />
            <span>Securing systems since the beginning</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <span className="text-primary">&lt;/&gt;</span> {currentYear} | All rights reserved
          </div>
        </div>

        {/* ASCII art style decoration */}
        <div className="mt-8 text-center text-xs text-primary/30 font-mono hidden md:block">
          <pre className="inline-block text-left">
{`╔══════════════════════════════════════════╗
║  "Security is not a product, but a      ║
║   process." - Bruce Schneier            ║
╚══════════════════════════════════════════╝`}
          </pre>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
