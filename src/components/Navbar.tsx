
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-md flex items-center justify-center text-white font-bold">
              T
            </div>
            <span className="font-bold text-xl text-brand-purple-darkest">
              Tripmind Assist
            </span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-700 hover:text-brand-purple">
            Features
          </a>
          <a href="#personal" className="text-gray-700 hover:text-brand-purple">
            Personal
          </a>
          <a href="#business" className="text-gray-700 hover:text-brand-purple">
            Business
          </a>
          <a href="#planner" className="text-gray-700 hover:text-brand-purple">
            Try it
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-brand-purple hover:bg-brand-purple-dark">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
