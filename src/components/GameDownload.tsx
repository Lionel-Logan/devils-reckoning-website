import { Download, GamepadIcon, Monitor, HardDrive, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const GameDownload = () => {
  const systemRequirements = {
    minimum: [
      { label: "OS", value: "Windows 10 64-bit" },
      { label: "Processor", value: "Intel i5-8400 / AMD Ryzen 5 2600" },
      { label: "Memory", value: "8 GB RAM" },
      { label: "Graphics", value: "Nvidia GTX 1060 6GB / AMD RX 580 8GB" },
      { label: "DirectX", value: "Version 12" },
      { label: "Storage", value: "5 GB available space" }
    ],
    recommended: [
      { label: "OS", value: "Windows 11 64-bit" },
      { label: "Processor", value: "Intel i7-10700K / AMD Ryzen 7 3700X" },
      { label: "Memory", value: "16 GB RAM" },
      { label: "Graphics", value: "Nvidia RTX 3050 Ti / AMD RX 6700 XT" },
      { label: "DirectX", value: "Version 12" },
      { label: "Storage", value: "5 GB SSD space" }
    ]
  };

  return (
   <section id="download" className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/assets/ss16.png')` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Download Beta</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Are you ready to face the darkness? Download now and begin your terrifying journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Download Section */}
          <div className="atmospheric-card text-center lg:text-left">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-foreground mb-4">Get the Game</h3>
              <p className="text-muted-foreground mb-6">
                Experience the ultimate psychological horror thriller. Get the Demo for PC.
              </p>
              
              <div className="space-y-4">
                <Button className="download-btn w-full lg:w-auto">
                  <Download className="mr-2 h-5 w-5" />
                  Download Game
                </Button>
              </div>
              
              <div className="mt-6 text-sm text-muted-foreground">
                <p>Supports: Windows 10/11 • Controller Compatible</p>
              </div>
            </div>
          </div>
          
          {/* System Requirements */}
          <div className="space-y-6">
            <div className="atmospheric-card">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Cpu className="mr-2 h-5 w-5 text-primary" />
                Minimum Requirements
              </h4>
              <div className="space-y-3">
                {systemRequirements.minimum.map((req, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{req.label}:</span>
                    <span className="text-foreground font-medium">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="atmospheric-card">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <HardDrive className="mr-2 h-5 w-5 text-primary" />
                Recommended Requirements
              </h4>
              <div className="space-y-3">
                {systemRequirements.recommended.map((req, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-muted-foreground">{req.label}:</span>
                    <span className="text-foreground font-medium">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="atmospheric-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">About the Experience</h3>
            <p className="text-muted-foreground leading-relaxed">
              RECKONING is not just a game—it's a psychological journey that will test your sanity. 
              Built with Unreal Engine 5, every shadow, every sound, and every moment has been crafted 
              to deliver an unforgettable horror experience. Follow a desperate father as he navigates 
              through a nightmarish hospital where reality becomes questionable and danger lurks in 
              every corner.
            </p>
            
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Single Player</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Psychological Horror</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Unreal Engine 5</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Mature 17+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameDownload;