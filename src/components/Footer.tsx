import { Instagram, Twitter, Linkedin, Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Brand Tagline */}
          <div className="text-center md:text-left">
            <p className="font-inter text-lg">
              <span className="font-bold text-primary">Mirago.ai</span>
              <span className="text-secondary-foreground"> — Your Brilliant Companion on the Road</span>
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-4">
            <a 
              href="https://www.instagram.com/mirago.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 text-secondary-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-full h-full" />
            </a>
            <a 
              href="https://www.tiktok.com/@mirago.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 text-secondary-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <Video className="w-full h-full" />
            </a>
            <a 
              href="https://www.linkedin.com/company/mirago-ai/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 text-secondary-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-full h-full" />
            </a>
            <a 
              href="https://x.com/Mirago_ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 text-secondary-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <Twitter className="w-full h-full" />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-secondary-foreground/20 text-center">
          <p className="font-inter text-sm" style={{ color: '#FFFFFFB3' }}>
            © 2025 Aloha Al Lab. All rights reserved. Made with ❤️ for adventurous women.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;