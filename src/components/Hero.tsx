
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple-darkest/70 to-brand-purple-dark/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24 pb-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your AI Travel Planner for Perfect Trips
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Describe your dream trip in a sentence and get a complete travel plan with flights,
            hotels, activities and more—all tailored to your preferences.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg bg-brand-purple hover:bg-brand-purple-dark">
              Try for Personal Travel
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-white text-white hover:bg-white hover:text-brand-purple-dark">
              Business Solutions
            </Button>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-white">
              <p className="text-4xl font-bold">15k+</p>
              <p className="text-sm opacity-80">Trips Planned</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-bold">98%</p>
              <p className="text-sm opacity-80">Satisfaction Rate</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-bold">250+</p>
              <p className="text-sm opacity-80">Business Partners</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-bold">12M€</p>
              <p className="text-sm opacity-80">Travel Budget Saved</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
          </path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
