
import React from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-500 to-red-700">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/15 rounded-full blur-md animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        {/* Enhanced Profile Image with better framing */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/10 rounded-full blur-md transform scale-110"></div>
            <img
              src="/lovable-uploads/454a60ea-7b8c-444f-87b5-1549446aa28d.png"
              alt="Richard Scott"
              className="relative w-56 h-56 rounded-full mx-auto object-cover object-center border-4 border-white/30 shadow-2xl hover:scale-105 transition-all duration-500 hover:border-white/40"
              style={{ objectPosition: 'center top' }}
            />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in delay-300 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Richard Scott
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-6 text-white/90 animate-fade-in delay-500">
          <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
        </h2>
        
        <p className="text-lg md:text-xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-700">
          Passionate developer with expertise in modern web technologies, 
          creating innovative solutions that bridge design and functionality with a focus on user experience.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 animate-fade-in delay-900">
          <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-1000">
          <Button 
            size="lg" 
            variant="secondary"
            className="bg-white text-red-600 hover:bg-white/90 font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="ghost"
            className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="h-6 w-6 text-white/60 mt-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
