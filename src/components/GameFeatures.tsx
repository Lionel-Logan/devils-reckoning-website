import { Brain, Eye, Puzzle, Gamepad, Gamepad2, Users, Award, Video } from "lucide-react";

const GameFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "Psychological Horror",
      description: "Experience mind-bending psychological horror that challenges your perception of reality."
    },
    {
      icon: Eye,
      title: "Unspeakable Creatures",
      description: "Encounter terrifying entities that lurk in the shadows of this twisted hospital reality."
    },
    {
      icon: Puzzle,
      title: "Eerie Puzzles",
      description: "Solve intricate puzzles that reveal the dark secrets hidden within the hospital's walls."
    },
    {
      icon: Gamepad,
      title: "Immersive Gameplay",
      description: "Unreal Engine 5 powered graphics deliver stunning visuals and atmospheric environments."
    },
    {
      icon: Users,
      title: "Emotional Storytelling",
      description: "Follow a father's desperate journey in a gripping narrative about love, loss, and redemption."
    },
    {
      icon: Award,
      title: "Dark Revelations",
      description: "Uncover shocking truths that will leave you questioning everything you thought you knew."
    },
    {
      icon: Gamepad2,
      title: "Multi-platform support with Haptic Feedback",
      description: "Varying ranged support - from Keyboard & Mouse to Xbox Controllers. Feel the world, the way the developers intended."
    },
    {
      icon: Video,
      title: "Cinematic storytelling",
      description: "Motion captured cinematics - to elevate your mood and immerse yourself in-game"
    }
  ];

  return (
    <section id="features" className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/ss12.png')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Game Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into a world where reality bends and horror lurks around every corner. 
            Will you survive the reckoning?
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index} 
                className="feature-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameFeatures;