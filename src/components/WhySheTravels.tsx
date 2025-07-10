const WhySheTravels = () => {
  return <section className="py-40 bg-background border-t border-magazine-border">
      <div className="container mx-auto px-8 max-w-5xl">
        <h2 className="font-playfair text-5xl md:text-6xl font-medium text-foreground mb-6 text-center tracking-wider">
          Why She Travels
        </h2>
        
        <div className="w-32 h-px bg-magazine-border mx-auto mb-20" />
        
        <div className="space-y-16 font-source-serif text-magazine-text max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            <p className="text-3xl md:text-4xl font-light leading-[2.2] tracking-wide">
              She doesn't travel to escape.<br />
              <span className="italic text-magazine-emphasis font-medium tracking-wider">She travels to become.</span>
            </p>
          </div>
          
          <div className="space-y-12 text-center">
            <p className="text-2xl md:text-3xl font-light leading-[2.4] tracking-wide">
              To become <span className="font-medium text-magazine-emphasis">fearless</span>.<br />
              To become <span className="font-medium text-magazine-emphasis">free</span>.<br />
              To become <span className="font-medium text-magazine-emphasis">fully herself</span>—or someone entirely new.
            </p>
            
            <p className="text-xl md:text-2xl leading-[2.2] opacity-90 tracking-wide">
              We believe solo travel is not a detour.<br />
              <span className="italic text-magazine-emphasis font-medium tracking-wider text-lg small-caps md:text-3xl">It's a rite of passage.</span>
            </p>
            
            <p className="text-xl md:text-2xl leading-[2.2] tracking-wide">
              <span className="font-medium text-magazine-emphasis">Mirago</span>, <span className="italic">her brilliant companion</span>—<br />
              her quiet protector, her intuitive guide.
            </p>
            
            <p className="text-xl md:text-2xl leading-[2.2] tracking-wide">
              We don't tell her where to go.<br />
              <span className="italic text-magazine-emphasis tracking-wider font-medium text-2xl">We ask who she's <span className="font-semibold">becoming</span>.</span>
            </p>
            
            <p className="text-xl md:text-2xl leading-[2.4] tracking-wide">
              We walk beside her —<br />
              again and again,<br className="font-medium" />
              <span className="font-medium text-magazine-emphasis text-3xl">on every road she reclaims as her own</span>.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full h-px bg-magazine-border mt-20" />
    </section>;
};
export default WhySheTravels;