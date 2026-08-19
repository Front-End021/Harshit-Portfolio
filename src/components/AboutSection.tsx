import { User, Code, Shield, Server } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold text-gradient flex items-center gap-3">
            <User className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            About Me
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main about text */}
          <div className="lg:col-span-2 cyber-card p-8">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
              <span className="text-secondary">$</span>
              <span>cat about.md</span>
            </div>
            
            <p className="text-foreground/90 leading-relaxed text-lg mb-6">
              I'm a <span className="text-primary font-semibold">Cyber Security enthusiast</span> and 
              Computer Science Engineering student specializing in Cyber Security. I have hands-on 
              experience in <span className="text-secondary">Linux system administration</span>, 
              penetration testing fundamentals, network security, and security scripting using 
              Python and Bash.
            </p>
            
            <p className="text-foreground/80 leading-relaxed">
              I've completed extensive practical labs and earned multiple industry-recognized 
              certifications, along with real-world exposure through <span className="text-primary">
              Cyber Cell internships</span>. I'm deeply passionate about ethical hacking, CTF 
              challenges, and securing modern digital systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <Code className="w-4 h-4 text-primary" />
                <span className="text-sm">Clean Code Advocate</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm">Security First</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg">
                <Server className="w-4 h-4 text-primary" />
                <span className="text-sm">Infrastructure Focused</span>
              </div>
            </div>
          </div>

          {/* Stats card */}
          <div className="cyber-card p-8">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
              <span className="text-secondary">$</span>
              <span>./stats.sh</span>
            </div>

            <div className="space-y-6">
              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Labs Completed</span>
                  <span className="text-primary font-bold">150+</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_hsl(var(--primary))]" />
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">TryHackMe Rank</span>
                  <span className="text-secondary font-bold">Top 2%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[98%] bg-gradient-to-r from-secondary to-primary rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_hsl(var(--secondary))]" />
                </div>
              </div>

              <div className="group">
                <div className="flex justify-between mb-2">
                  <span className="text-muted-foreground">Learning Streak</span>
                  <span className="text-primary font-bold">130+ days</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[75%] bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500 group-hover:shadow-[0_0_10px_hsl(var(--primary))]" />
                </div>
              </div>

              <div className="pt-4 border-t border-primary/20">
                <div className="text-xs text-muted-foreground mb-2">Current Focus</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">Pentesting</span>
                  <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">CTF</span>
                  <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">OSCP Prep</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
