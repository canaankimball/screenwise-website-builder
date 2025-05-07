
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-white to-screenwise-light pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-screenwise-navy animate-fade-in">
              Modern Feeding Therapy, Streamlined.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg animate-fade-in" style={{
              animationDelay: '0.2s'
            }}>Screenwise Eating is a digital platform that empowers feeding therapists to deliver more effective, data-driven care — even between sessions.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{
              animationDelay: '0.4s'
            }}>
              <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center">
                Request a Demo <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-screenwise-teal text-screenwise-teal hover:bg-screenwise-light rounded-full px-8 py-6 text-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 animate-fade-in relative" style={{
            animationDelay: '0.6s'
          }}>
            <div className="absolute inset-0 bg-screenwise-teal rounded-2xl opacity-20 transform rotate-3 scale-105"></div>
            <img src="/lovable-uploads/1e7cfa7d-c175-43d2-97f2-8681914420a0.png" alt="Screenwise Eating dashboard showing analytics and charts" className="rounded-2xl shadow-xl w-full relative z-10" />
          </div>
        </div>
        
        {/* Second dashboard image */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 order-2 md:order-1 animate-fade-in relative" style={{
            animationDelay: '0.8s'
          }}>
            <div className="absolute inset-0 bg-screenwise-navy rounded-2xl opacity-20 transform -rotate-2 scale-105"></div>
            <img 
              src="/lovable-uploads/dcc5b79d-10f6-4010-861a-fd0d4040f3d2.png" 
              alt="Mobile app showing meal metrics including duration, bites per meal, meal volume and bite volume" 
              className="rounded-2xl shadow-xl w-full relative z-10" 
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 mb-10 md:mb-0 md:pl-10 animate-fade-in" style={{
            animationDelay: '0.7s'
          }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">
              Data-Driven Insights at Your Fingertips
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Track meal duration, bite counts, food volume, and more with our powerful analytics dashboard. Make informed decisions and measure progress with real-time data collected during at-home meals.
            </p>
            <div className="flex space-x-3">
              <div className="h-2 w-2 rounded-full bg-screenwise-teal"></div>
              <div className="h-2 w-2 rounded-full bg-screenwise-teal"></div>
              <div className="h-2 w-2 rounded-full bg-screenwise-teal"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
