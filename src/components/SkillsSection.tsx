import { Cpu, Terminal, Shield, Network, Code, Wrench } from 'lucide-react';

const skills = [
  {
    category: 'Operating Systems',
    icon: Terminal,
    items: ['Kali Linux', 'Ubuntu', 'Fedora', 'Parrot OS'],
    color: 'primary'
  },
  {
    category: 'Security Research',
    icon: Shield,
    items: ['Vulnerability Analysis', 'Threat Hunting', 'Malware Analysis', 'OSINT'],
    color: 'secondary'
  },
  {
    category: 'CTF Categories',
    icon: Cpu,
    items: ['Web Exploitation', 'Network Forensics', 'Cryptography', 'Reverse Engineering'],
    color: 'primary'
  },
  {
    category: 'Network Security',
    icon: Network,
    items: ['Packet Analysis', 'IDS/IPS', 'Firewall Config', 'Traffic Monitoring'],
    color: 'secondary'
  },
  {
    category: 'Programming',
    icon: Code,
    items: ['Python', 'Bash Scripting', 'SQL', 'PowerShell'],
    color: 'primary'
  },
  {
    category: 'Security Tools',
    icon: Wrench,
    items: ['Nmap', 'Burp Suite', 'Metasploit', 'Wireshark'],
    color: 'secondary'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Cpu className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Skills & Expertise</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Terminal-style intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-lg px-6 py-3">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground ml-2">ls -la /skills/</span>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="cyber-card p-6 hover-glow group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${skill.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                  <skill.icon className={`w-5 h-5 ${skill.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <h3 className="font-semibold text-foreground">{skill.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 text-sm rounded-md border transition-all duration-300 
                      ${skill.color === 'primary' 
                        ? 'border-primary/30 text-primary/80 hover:bg-primary/10 hover:border-primary' 
                        : 'border-secondary/30 text-secondary/80 hover:bg-secondary/10 hover:border-secondary'
                      }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional tools */}
        <div className="mt-12 cyber-card p-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <span className="text-secondary">$</span>
            <span>which tools</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {['SIEM', 'IDS/IPS', 'Hashcat', 'John the Ripper', 'Hydra', 'SQLmap', 'Nikto', 'Gobuster', 'OWASP ZAP', 'Ghidra'].map((tool) => (
              <div
                key={tool}
                className="px-4 py-2 bg-muted/50 border border-primary/10 rounded-lg text-foreground/70 hover:border-primary/40 hover:text-primary transition-all duration-300 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
