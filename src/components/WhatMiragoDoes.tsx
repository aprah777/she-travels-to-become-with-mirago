import { Shield, Brain, Sparkles } from "lucide-react";

const WhatMiragoDoes = () => {
  const features = [
    {
      icon: Shield,
      title: "Intuitive Safety",
      description: "Real-time cultural insights and safety guidance that feels natural, never intrusive. We understand that true security comes from being informed, not confined."
    },
    {
      icon: Brain,
      title: "Contextual Intelligence", 
      description: "Every recommendation is filtered through your values, energy, and intentions. We learn not just where you want to go, but who you want to become along the way."
    },
    {
      icon: Sparkles,
      title: "Serendipity Enabler",
      description: "We create space for the unexpected—those magical moments of connection and discovery that transform a trip into a story you'll carry forever."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-medium text-foreground mb-4">
            What Mirago Does
          </h2>
          <div className="w-24 h-px bg-muted-foreground/30 mx-auto mb-8" />
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto">
            Technology that thinks like a trusted friend, guides like a local, 
            and dreams like you do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-playfair text-2xl font-medium text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="font-inter text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatMiragoDoes;