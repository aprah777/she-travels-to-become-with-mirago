import { Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8">
            <h3 className="font-playfair text-3xl font-medium">Mirago</h3>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
          
          {/* Tagline */}
          <p className="font-inter text-lg font-light">
            Mirago.ai — Your Brilliant Companion on the Road
          </p>
          
          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-secondary-foreground/20">
            <p className="font-inter text-sm text-secondary-foreground/70">
              © 2024 Mirago. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;