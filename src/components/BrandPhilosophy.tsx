const BrandPhilosophy = () => {
  return (
    <section className="py-40 bg-gradient-to-b from-card/50 to-card relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-golden-hour rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent mx-auto mb-12" />
        
        <blockquote className="font-playfair text-4xl md:text-5xl lg:text-6xl font-medium italic text-foreground leading-relaxed tracking-wide hover:text-primary transition-colors duration-700 cursor-default">
          "The world is wide, but your becoming is infinite."
        </blockquote>
        
        <div className="w-32 h-px bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent mx-auto mt-12" />
        
        <div className="mt-16">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;