import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";

const GameHero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/ss13.png')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="hero-glow">
          <h1 className="game-title mb-6 animate-fade-in-up">
            DEVILS' RECKONING
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          A desperate father searching for his comatose son. What begins as a hospital visit spirals into a 
          <span className="text-primary font-semibold"> mind-bending horror experience</span> filled with 
          unspeakable creatures, eerie puzzles, and dark revelations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Button 
            onClick={() => scrollToSection('trailer')}
            className="download-btn group"
          >
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Trailer
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => scrollToSection('download')}
            className="bg-secondary/20 backdrop-blur-sm border-border hover:bg-secondary/40 text-foreground px-8 py-4 text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Beta
          </Button>
        </div>
        
        <div className="mt-16 animate-fade-in-up">
          <p className="text-sm text-muted-foreground mb-4">Built with</p>
          <div className="flex justify-center items-center space-x-6 text-foreground/60">
            <span className="font-bold text-lg">UNREAL ENGINE 5</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHero;