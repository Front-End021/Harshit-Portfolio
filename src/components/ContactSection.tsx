import { Mail, Linkedin, Github, Send, Terminal } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'harshitbhati2004.hb@gmail.com',
    href: 'mailto:harshitbhati2004.hb@gmail.com',
    color: 'primary'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/in/harshit-bhati021',
    href: 'https://www.linkedin.com/in/harshit-bhati021/',
    color: 'secondary'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '@harshitbhati4',
    href: 'https://github.com/harshitbhati4',
    color: 'primary'
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Send className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Contact</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Terminal intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-lg px-6 py-3">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground ml-2">./connect.sh --init</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact message */}
          <div className="cyber-card p-8 mb-12 text-center">
            <Terminal className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's <span className="text-primary">Connect</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating on security projects, CTF challenges, or discussing 
              cybersecurity opportunities? I'm always open to connecting with fellow security 
              enthusiasts and industry professionals.
            </p>
          </div>

          {/* Contact links grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr items-stretch">
            {contactLinks.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                className="cyber-card p-6 group hover-glow flex items-center gap-4 h-full min-w-0 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`p-3 rounded-lg shrink-0 ${contact.color === 'primary' ? 'bg-primary/20 group-hover:bg-primary/30' : 'bg-secondary/20 group-hover:bg-secondary/30'} transition-colors`}>
                  <contact.icon className={`w-6 h-6 ${contact.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <div className="min-w-0">
                  <div className="text-sm text-muted-foreground">{contact.label}</div>
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors break-all">
                    {contact.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              <span className="text-secondary">&gt;</span> Ready to discuss security?
            </p>
            <a
              href="mailto:harshitbhati2004.hb@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 group-hover:animate-bounce" />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
