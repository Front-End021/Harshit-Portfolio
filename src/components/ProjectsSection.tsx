import { FolderGit2, Lock, Network, Key, Github } from 'lucide-react';

const projects = [
  {
    title: 'SecureCrypt / Dark Cipher',
    description: 'AES-256-GCM File Encryption Tool with secure key derivation and authenticated encryption for protecting sensitive files.',
    icon: Lock,
    tags: ['Python', 'Cryptography', 'AES-256-GCM', 'CLI'],
    color: 'primary',
    github: 'https://github.com/harshitbhati4/SecureCrypt.git'
  },
  {
    title: 'NetScanner',
    description: 'Python-based network scanner for discovering hosts, open ports, and services on a network with comprehensive reporting.',
    icon: Network,
    tags: ['Python', 'Networking', 'Scapy', 'Nmap'],
    color: 'secondary',
    github: 'https://github.com/harshitbhati4/Port-Scanner.git'
  },
  {
    title: 'GuessMyPass',
    description: 'Custom password wordlist generator that creates targeted wordlists based on user information for authorized penetration testing.',
    icon: Key,
    tags: ['Python', 'Password Security', 'Wordlists', 'Pentesting'],
    color: 'primary',
    github: 'https://github.com/harshitbhati4/Password-Wordlist-Generator.git'
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <FolderGit2 className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Projects</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Terminal intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-lg px-6 py-3">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground ml-2">ls ~/projects/</span>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="cyber-card group relative overflow-hidden flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-6 relative z-10 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${project.color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20'}`}>
                    <project.icon className={`w-6 h-6 ${project.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300" 
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 text-xs rounded border 
                        ${project.color === 'primary' 
                          ? 'border-primary/30 text-primary/70' 
                          : 'border-secondary/30 text-secondary/70'
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent - fixed to bottom */}
              <div className={`h-1 mt-auto ${project.color === 'primary' ? 'bg-gradient-to-r from-primary to-transparent' : 'bg-gradient-to-r from-secondary to-transparent'}`} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/harshitbhati4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-lg text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
