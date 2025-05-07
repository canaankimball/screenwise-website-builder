
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-screenwise-light pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-screenwise-navy animate-fade-in">
              Modern Feeding Therapy, Streamlined.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Screenwise Eating is a digital platform that empowers feeding therapists to deliver more effective, data-driven care — even between sessions.
            </p>
            <p className="text-md md:text-lg text-gray-600 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Feeding therapy shouldn't end when a family walks out the door. With Screenwise Eating, therapists can assign, monitor, and adapt home-based interventions with confidence. Built in partnership with leading clinicians, our platform brings structure, data, and accountability to the at-home environment — without adding complexity to your workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Request a Demo <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-screenwise-teal text-screenwise-teal hover:bg-screenwise-light rounded-full px-8 py-6 text-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in relative" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 bg-screenwise-teal rounded-2xl opacity-20 transform rotate-3 scale-105"></div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600" 
              alt="Person using ScreenWise Eating app" 
              className="rounded-2xl shadow-xl w-full relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
