import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const GameScreenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const media = [
    {
      type: 'image',
      src: "/assets/ss9.png",
      title: 'No Place to Hide',
      description: 'Play as Ritchie - uncover truths - some of which, may seem a little too much to take in'
    },
    {
      type: 'image',
      src: "/assets/ss10.png",
      title: 'High-Fidelity Graphics',
      description: 'Powered by Unreal Engine 5 - Devil\'s Reckoning offers stunning visuals and quality'
    },
    {
      type: 'image',
      src: "/assets/ss2.png",
      title: 'Eerie Environment',
      description: 'Explore the eerie hospital corridors where nothing is as it seems'
    },
    {
      type: 'image',
      src: "/assets/ss1.png",
      title: 'Cinematic Storytelling',
      description: 'Elevate yourself with AI-motion captured cinematics - as you follow Ritchie through the darkness of hell'
    },
    {
      type: 'image',
      src: "/assets/ss4.png",
      title: 'Interactive Puzzles',
      description: 'Solve puzzles - find your way out - save Jamie from hell'
    },
    {
      type: 'image',
      src: "/assets/ss14.png",
      title: 'Multi-Platform support',
      description: 'Whether you are PC, or a console gamer - Devils\' Reckoning supports Keyboard & Mouse and Xbox Controller'
    },
    {
      type: 'image',
      src: "/assets/ss15.png",
      title: 'Immersive storytelling',
      description: 'The hospital is not just a place - it\'s countless emotions - and you explore them through various entities throughout the game world'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <section id="screenshots" className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/ss9.png')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Screenshots</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the haunting visuals and atmospheric environments crafted with Unreal Engine 5
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Main Image Display */}
          <div className="relative rounded-2xl overflow-hidden shadow-dark">
            <img 
              src={media[currentSlide].src}
              alt={media[currentSlide].title}
              className="w-full h-[75vh] object-cover"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            
            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm border-border hover:bg-background/40"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/20 backdrop-blur-sm border-border hover:bg-background/40"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
            
            {/* Content Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {media[currentSlide].title}
              </h3>
              <p className="text-muted-foreground">
                {media[currentSlide].description}
              </p>
            </div>
          </div>
          
          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {media.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative rounded-lg overflow-hidden transition-all ${
                  currentSlide === index 
                    ? 'ring-2 ring-primary scale-105' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img 
                  src={item.src}
                  alt={item.title}
                  className="w-24 h-14 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Trailer Section */}
        <div id="trailer" className="mt-20 text-center">
          <div className="atmospheric-card max-w-2xl mx-auto p-8">
            <h3 className="text-3xl font-bold text-foreground mb-4 text-primary custom-body-font">Official Teaser</h3>
            <p className="text-muted-foreground mb-6">
              Watch the official teaser and prepare yourself for the horror that awaits.
            </p>
            <a
              href="https://www.youtube.com/watch?v=YKt0-F02-vA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="download-btn">
                <Play className="mr-2 h-5 w-5" />
                Watch Trailer
              </Button>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GameScreenshots;