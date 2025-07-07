
import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
          <img
            src="/lovable-uploads/454a60ea-7b8c-444f-87b5-1549446aa28d.png"
            alt="Richard Scott"
            className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in delay-300">
          Richard Scott
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90 animate-fade-in delay-500">
          Full Stack Developer
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-700">
          Passionate developer with expertise in modern web technologies, 
          creating innovative solutions that bridge design and functionality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-1000">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-red-600 hover:bg-white/90 font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="ghost"
            className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
