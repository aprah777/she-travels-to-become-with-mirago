import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import travelFlatlayImage from "@/assets/travel-flatlay.jpg";

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${travelFlatlayImage})` }}
      >
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-6">
          Ready for Her Next Becoming?
        </h2>
        
        <p className="font-inter text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Life is a collection of experiences — and this one is yours.
        </p>
        
        {/* Email Signup */}
        <div className="max-w-md mx-auto">
          <div className="flex gap-3 mb-8">
            <Input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 bg-background/50 border-border/50 backdrop-blur-sm font-inter"
            />
            <Button 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground font-inter px-10 py-6 rounded-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden"
            >
              <span className="relative z-10">Begin the Journey</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-golden-hour to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
          </div>
          
          <p className="font-inter text-sm text-muted-foreground">
            Join the waitlist for early access to Mirago
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;