import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-red-950/30 to-black"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="border-t border-red-500/30 pt-8">
          <div className="text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Manohar. All rights reserved.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and lots of coffee</span>
            </div>
            
            <div className="mt-6 flex justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;