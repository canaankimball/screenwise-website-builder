
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-screenwise-light to-white pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-screenwise-navy animate-fade-in">
              Balance Technology <br/> and Mindful Eating
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover a healthier relationship with food in the digital age with our innovative tools and guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-6 text-lg flex items-center">
                Get Started <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-screenwise-teal text-screenwise-teal hover:bg-screenwise-light rounded-full px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600" 
              alt="Person using ScreenWise Eating app" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
