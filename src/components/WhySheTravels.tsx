const WhySheTravels = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-4">
          Why She Travels
        </h2>
        
        <div className="w-24 h-px bg-muted-foreground/30 mx-auto mb-16" />
        
        <div className="space-y-8 font-inter text-foreground max-w-3xl mx-auto">
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              She doesn't travel to escape.<br />
              <span className="font-medium">She travels to become.</span>
            </p>
          </div>
          
          <div className="space-y-6 text-xl md:text-2xl font-light leading-relaxed">
            <p>
              To become fearless.<br />
              To become free.<br />
              To become fully herself—or someone entirely new.
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We believe solo travel is not a detour.<br />
              <span className="font-medium text-primary">It's a rite of passage.</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Mirago is her brilliant companion—<br />
              her quiet protector, her intuitive guide.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              We don't tell her who to be.<br />
              <span className="font-medium text-primary">We ask who she's becoming.</span>
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed">
              And we walk beside her as she finds the answer—<br />
              again and again, on every road she claims for herself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySheTravels;