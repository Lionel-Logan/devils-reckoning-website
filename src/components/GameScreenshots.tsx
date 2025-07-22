import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import screenshot1 from "@/assets/screenshot-1.jpg";
import screenshot2 from "@/assets/screenshot-2.jpg";
import screenshot3 from "@/assets/screenshot-3.jpg";

const GameScreenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const media = [
    {
      type: 'image',
      src: screenshot1,
      title: 'Hospital Ward',
      description: 'Explore the eerie hospital corridors where nothing is as it seems.'
    },
    {
      type: 'image',
      src: screenshot2,
      title: 'Supernatural Encounters',
      description: 'Face unspeakable creatures that defy explanation.'
    },
    {
      type: 'image',
      src: screenshot3,
      title: 'Dark Puzzles',
      description: 'Solve mysterious puzzles to uncover the truth.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <section id="screenshots" className="py-20 px-4 bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Screenshots & Media</h2>
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
              className="w-full h-[60vh] object-cover"
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
            <h3 className="text-3xl font-bold text-foreground mb-4">Official Trailer</h3>
            <p className="text-muted-foreground mb-6">
              Watch the official gameplay trailer and prepare yourself for the horror that awaits.
            </p>
            <Button className="download-btn">
              <Play className="mr-2 h-5 w-5" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameScreenshots;