import { useEffect, useState } from 'react';
import { ChevronDown, Terminal } from 'lucide-react';
import CyberShield from './CyberShield';

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Harshit Bhati';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center matrix-bg scanlines overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Terminal decorations - positioned below navbar */}
      <div className="absolute top-24 left-8 text-primary/30 text-xs hidden lg:block">
        <div className="flex items-center gap-2 mb-1">
          <Terminal className="w-3 h-3" />
          <span>root@kali:~#</span>
        </div>
        <div className="opacity-50">./initialize_portfolio.sh</div>
        <div className="opacity-50">[+] Loading modules...</div>
        <div className="opacity-50">[+] Security protocols active</div>
        <div className="text-secondary/50">[✓] System ready</div>
      </div>

      <div className="absolute top-24 right-8 text-primary/30 text-xs hidden lg:block text-right">
        <div>STATUS: ONLINE</div>
        <div>ENCRYPTION: AES-256</div>
        <div>FIREWALL: ACTIVE</div>
        <div className="text-secondary">THREAT LEVEL: MINIMAL</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Cyber Shield Logo */}
        <div className="flex justify-center mb-6">
          <CyberShield />
        </div>

        {/* Name with typing effect */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
          <span className="text-gradient cyber-glow">{displayedText}</span>
          <span className="inline-block w-[3px] h-[0.8em] bg-primary ml-1 align-baseline animate-[blink_1s_step-end_infinite]" />
        </h1>

        {/* Tagline */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 text-sm md:text-base">
          {[
            'Cyber Security Enthusiast',
            'Linux System Administrator',
            'CTF Player',
            'Security Researcher'
          ].map((tag, index) => (
            <span
              key={tag}
              className="px-4 py-2 border border-primary/30 rounded-full text-primary/80 hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Terminal prompt - static output */}
        <div className="inline-block bg-card/80 backdrop-blur border border-primary/20 rounded-lg px-6 py-4 text-left">
          <div className="flex items-center gap-2">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground">cat</span>
            <span className="text-primary">mission.txt</span>
          </div>
          <p className="text-foreground/80 mt-2 text-sm md:text-base">
            "Securing the digital frontier, one vulnerability at a time."
          </p>
        </div>

        {/* Scroll indicator - outside and below mission box */}
        <div className="mt-8 flex justify-center">
          <button 
            onClick={scrollToAbout}
            className="text-primary/50 hover:text-primary transition-colors animate-bounce cursor-pointer"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
