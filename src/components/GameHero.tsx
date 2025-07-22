import { Button } from "@/components/ui/button";
import { Play, Download } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import TypingText from "./TypingText";
import GlitchText from "./GlitchText";
import ParticleSystem from "./ParticleSystem";

const GameHero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleSystem />
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Animated Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80 animate-pulse-glow" />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="hero-glow">
          <h1 className="game-title mb-6 animate-fade-in-up">
            <GlitchText text="RECKONING" className="font-heading" />
          </h1>
        </div>
        
        <div className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          <TypingText 
            text="A desperate father searching for his comatose son. What begins as a hospital visit spirals into a mind-bending horror experience filled with unspeakable creatures, eerie puzzles, and dark revelations."
            speed={50}
          />
        </div>
        
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
            Download Game
          </Button>
        </div>
        
        <div className="mt-16 animate-fade-in-up">
          <p className="text-sm text-muted-foreground mb-4 font-accent">Built with</p>
          <div className="flex justify-center items-center space-x-6 text-foreground/60">
            <span className="font-bold text-lg font-title animate-float">UNREAL ENGINE 5</span>
            <span className="text-2xl animate-pulse">•</span>
            <span className="font-bold text-lg font-title animate-float animate-float-delay-1">PC | STEAM</span>
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center bg-primary/10 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse shadow-glow"></div>
        </div>
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float animate-float-delay-2 shadow-glow"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-destructive/40 rounded-full animate-float animate-float-delay-3 shadow-glow"></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-accent/20 rounded-full animate-float animate-float-delay-4 shadow-glow"></div>
      <div className="absolute top-60 right-10 w-2 h-2 bg-primary-glow/50 rounded-full animate-float animate-float-delay-5 shadow-glow"></div>
    </section>
  );
};

export default GameHero;