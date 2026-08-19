import { Trophy, TrendingUp, Target, Clock, Award, Users } from 'lucide-react';

const achievements = [
  {
    icon: TrendingUp,
    title: 'Top 2% Globally',
    description: 'TryHackMe platform ranking',
    highlight: 'Elite Status'
  },
  {
    icon: Target,
    title: '150+ Labs',
    description: 'Cybersecurity labs completed',
    highlight: 'Hands-on Expert'
  },
  {
    icon: Clock,
    title: '130+ Day Streak',
    description: 'Continuous learning commitment',
    highlight: 'Dedicated'
  },
  {
    icon: Award,
    title: 'Multiple Certifications',
    description: 'Industry-recognized credentials',
    highlight: 'Certified Pro'
  },
  {
    icon: Users,
    title: 'Govt. Internships',
    description: 'Selected for Cyber Cell programs',
    highlight: 'Trusted'
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary" />
            <span className="text-primary">&lt;</span>
            <span className="text-gradient">Achievements</span>
            <span className="text-primary">/&gt;</span>
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        {/* Terminal intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <div className="inline-block bg-card border border-primary/20 rounded-lg px-6 py-3">
            <span className="text-secondary">$</span>
            <span className="text-muted-foreground ml-2">./achievements --unlocked</span>
          </div>
        </div>

        {/* Achievements display */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="cyber-card p-6 text-center group hover-glow relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                  <achievement.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground mb-3">
                  {achievement.description}
                </p>
                
                {/* Highlight badge */}
                <span className="inline-block px-3 py-1 text-xs bg-secondary/20 text-secondary rounded-full">
                  {achievement.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="mt-16 cyber-card p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">150+</div>
              <div className="text-sm text-muted-foreground">Security Labs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary cyber-glow-green">Top 2%</div>
              <div className="text-sm text-muted-foreground">Global Ranking</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gradient">130+</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary cyber-glow-green">6+</div>
              <div className="text-sm text-muted-foreground">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
