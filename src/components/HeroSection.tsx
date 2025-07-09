import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-traveler.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8">
          She travels to become<br />
          <span className="text-golden-hour">— with Mirago.</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto">
          For the woman who chooses the road—and herself.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-inter text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
        >
          Begin Your Becoming
        </Button>
      </div>
      
      {/* Footer Note */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white/80">
        <p className="font-inter text-sm">
          Mirago.ai is coming soon — be among the first to become.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;