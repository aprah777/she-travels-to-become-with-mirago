import { Card } from "@/components/ui/card";
import mountainSummitImage from "@/assets/mountain-summit.jpg";
import journalingImage from "@/assets/journaling.jpg";
import travelFlatlayImage from "@/assets/travel-flatlay.jpg";

const HowWeWalk = () => {
  const cards = [
    {
      title: "Dream Bigger",
      image: journalingImage,
      description: "We help you envision journeys that expand rather than exhaust, that honor your deepest curiosities and boldest intentions."
    },
    {
      title: "Explore Fearlessly", 
      image: mountainSummitImage,
      description: "With intelligent safety insights and culturally-aware guidance, you move through the world with confidence and grace."
    },
    {
      title: "Become Limitless",
      image: travelFlatlayImage, 
      description: "Every experience becomes a stepping stone to who you're meant to be—more vibrant, more certain, more completely yourself."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-4">
            How We Walk Beside You
          </h2>
          <div className="w-24 h-px bg-muted-foreground/30 mx-auto mb-8" />
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Mirago isn't just technology—it's companionship designed for the woman 
            who travels not to find herself, but to become herself.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 bg-card hover:-translate-y-2 cursor-pointer">
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 right-6 transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                  <h3 className="font-playfair text-2xl font-medium text-white mb-2 drop-shadow-lg">
                    {card.title}
                  </h3>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <p className="font-inter text-muted-foreground leading-relaxed text-lg">
                  {card.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWalk;