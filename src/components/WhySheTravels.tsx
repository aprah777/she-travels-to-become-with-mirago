import journalingImage from "@/assets/journaling.jpg";

const WhySheTravels = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-8">
              Why She Travels
            </h2>
            
            <div className="space-y-6 font-inter text-lg leading-relaxed text-muted-foreground">
              <p>
                She doesn't travel to escape—she travels to arrive. 
                To arrive at herself, clearer and more certain than before.
              </p>
              
              <p>
                Every horizon holds a question she's ready to ask. 
                Every path offers a conversation with who she's becoming.
              </p>
              
              <p>
                She understands that the real destination was never 
                marked on any map. It was always waiting within—patient, 
                luminous, and entirely her own.
              </p>
              
              <p className="text-primary font-medium">
                This is travel as transformation. This is journey as becoming.
              </p>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src={journalingImage} 
              alt="Woman writing in a travel journal"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySheTravels;