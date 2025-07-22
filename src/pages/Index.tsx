import GameNavigation from "@/components/GameNavigation";
import GameHero from "@/components/GameHero";
import GameFeatures from "@/components/GameFeatures";
import GameScreenshots from "@/components/GameScreenshots";
import GameDownload from "@/components/GameDownload";

const Index = () => {
  return (
    <div className="min-h-screen">
      <GameNavigation />
      
      <main>
        <div id="home">
          <GameHero />
        </div>
        
        <GameFeatures />
        <GameScreenshots />
        <GameDownload />
      </main>
      
      {/* Footer */}
      <footer className="bg-gradient-to-t from-background/60 to-background/20 backdrop-blur-sm border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="font-heading text-3xl font-bold text-primary mb-4">RECKONING</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A psychological horror experience that will challenge your perception of reality.
              Built with Unreal Engine 5 for the ultimate immersive experience.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-muted-foreground">
            <span>© 2024 Game Studio. All rights reserved.</span>
            <span>•</span>
            <span>Powered by Unreal Engine 5</span>
            <span>•</span>
            <span>Rated M for Mature</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
