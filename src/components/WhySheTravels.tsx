const WhySheTravels = () => {
  return (
    <section className="py-40 bg-background border-t border-magazine-border">
      <div className="container mx-auto px-8 max-w-5xl">
        <h2 className="font-playfair text-5xl md:text-6xl font-medium text-foreground mb-6 text-center tracking-wider">
          Why She Travels
        </h2>
        
        <div className="w-32 h-px bg-magazine-border mx-auto mb-20" />
        
        <div className="space-y-12 font-source-serif text-magazine-text max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl font-light leading-loose text-justify">
              She doesn't travel to escape.<br />
              <span className="italic text-magazine-emphasis">She travels to become.</span>
            </p>
          </div>
          
          <div className="space-y-10 text-2xl md:text-3xl font-light leading-loose">
            <p className="text-justify">
              To become fearless.<br />
              To become free.<br />
              To become fully herself—or someone entirely new.
            </p>
            
            <p className="text-xl md:text-2xl leading-loose text-justify opacity-90">
              We believe solo travel is not a detour.<br />
              <span className="italic text-magazine-emphasis font-normal tracking-wide">It's a rite of passage.</span>
            </p>
            
            <p className="text-xl md:text-2xl leading-loose text-justify">
              Mirago is her brilliant companion—<br />
              her quiet protector, her intuitive guide.
            </p>
            
            <p className="text-xl md:text-2xl leading-loose text-justify">
              We don't tell her who to be.<br />
              <span className="italic text-magazine-emphasis font-normal tracking-wide">We ask who she's becoming.</span>
            </p>
            
            <p className="text-xl md:text-2xl leading-loose text-justify">
              And we walk beside her as she finds the answer—<br />
              again and again, on every road she claims for herself.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full h-px bg-magazine-border mt-20" />
    </section>
  );
};

export default WhySheTravels;