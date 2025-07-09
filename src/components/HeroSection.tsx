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
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6 animate-fade-in">
        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-medium leading-[0.9] mb-12 tracking-tight">
          She travels to become<br />
          <span className="text-golden-hour bg-gradient-to-r from-golden-hour to-desert-warm bg-clip-text text-transparent animate-pulse">— with Mirago.</span>
        </h1>
        
        <p className="font-inter text-2xl md:text-3xl font-light mb-16 max-w-3xl mx-auto leading-relaxed text-white/90">
          For the woman who chooses the road—and herself.
        </p>
        
        <Button 
          size="lg" 
          className="group bg-primary hover:bg-primary/90 text-primary-foreground font-inter text-lg px-12 py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 relative overflow-hidden"
        >
          <span className="relative z-10">Begin Your Becoming</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-golden-hour to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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