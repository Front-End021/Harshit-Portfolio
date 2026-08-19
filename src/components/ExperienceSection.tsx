import { Briefcase, Building2, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Cyber Security Consultant',
    organization: 'Atom Cyber Security Inc.',
    location: 'Jaipur, Rajasthan',
    period: 'March 2026 – Present',
    description: 'Works on red teaming engagements, penetration testing, and vulnerability assessment. Conducts VAPT and web application security assessments to identify security weaknesses and support remediation efforts.',
    highlights: ['Red Teaming', 'Penetration Testing', 'VAPT', 'Web Application Security', 'Vulnerability Assessment']
  },
  {
    title: 'Cybersecurity Intern',
    organization: 'Rajasthan Police (Cyber Cell)',
    location: 'Jaipur, Rajasthan',
    period: 'July 2025 – September 2025',
    description: 'Gained hands-on experience in cyber crime investigation, digital forensics, and security incident response. Assisted in analyzing cyber threats and supporting law enforcement operations.',
    highlights: ['Digital Forensics', 'Incident Response', 'Threat Analysis', 'Law Enforcement Support']
  },
  {
    title: 'Cybersecurity Intern',
    organization: 'Uttar Pradesh Police (Cyber Cell)',
    location: 'Amroha, Uttar Pradesh',
    period: 'June 2025 – July 2025',
    description: 'Contributed to cybersecurity awareness initiatives and assisted in investigating cyber crimes. Developed understanding of real-world security challenges faced by law enforcement.',
    highlights: ['Cyber Crime Investigation', 'Security Awareness', 'Report Writing', 'Evidence Collection']
  }
];

const DateBlock = ({ period }: { period: string }) => (
  <div className="inline-flex items-center gap-2 font-mono">
    <Calendar className="w-4 h-4 text-secondary shrink-0" />
    <span
      className="text-primary text-sm md:text-base"
      style={{ textShadow: 'var(--date-glow)' }}
    >
      {period}
    </span>
  </div>
);

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Experience</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Terminal intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-lg px-6 py-3">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground ml-2">cat /var/log/career.log</span>
          </div>
        </div>

        {/* Experience timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary/30 md:-translate-x-1/2" />

            {experiences.map((exp, index) => {
              const cardOnRight = index % 2 === 0;
              return (
                <div key={exp.organization} className="relative mb-12 md:mb-20">
                  {/* Timeline dot - centered on the vertical line */}
                  <div className="absolute top-7 left-4 -translate-x-1/2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_hsl(var(--primary))] z-10" />

                  <div className="md:grid md:grid-cols-2 md:items-center">
                    {/* Date column */}
                    <div
                      className={`pl-10 md:pl-0 md:row-start-1 flex md:items-center ${
                        cardOnRight
                          ? 'md:col-start-1 md:pr-10 md:justify-end'
                          : 'md:col-start-2 md:pl-10 md:justify-start'
                      }`}
                    >
                      <DateBlock period={exp.period} />
                    </div>

                    {/* Card column */}
                    <div
                      className={`pl-10 md:pl-0 mt-3 md:mt-0 md:row-start-1 ${
                        cardOnRight
                          ? 'md:col-start-2 md:pl-10'
                          : 'md:col-start-1 md:pr-10 md:text-right'
                      }`}
                    >
                      {/* Content card */}
                      <div className="cyber-card p-6 group hover-glow">
                        {/* Header */}
                        <div className={`flex items-start gap-3 mb-4 ${!cardOnRight ? 'md:flex-row-reverse' : ''}`}>
                          <div className="p-2 bg-primary/20 rounded-lg shrink-0">
                            <Building2 className="w-5 h-5 text-primary" />
                          </div>
                          <div className={!cardOnRight ? 'md:text-right' : ''}>
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {exp.title}
                            </h3>
                            <p className="text-secondary font-medium">{exp.organization}</p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${!cardOnRight ? 'md:justify-end' : ''}`}>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className={`text-muted-foreground text-sm mb-4 ${!cardOnRight ? 'md:text-right' : ''}`}>
                          {exp.description}
                        </p>

                        {/* Highlights */}
                        <div className={`flex flex-wrap gap-2 ${!cardOnRight ? 'md:justify-end' : ''}`}>
                          {exp.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="px-2 py-1 text-xs border border-primary/30 text-primary/70 rounded"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
