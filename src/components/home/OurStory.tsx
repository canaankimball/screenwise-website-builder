
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, Target } from 'lucide-react';

const OurStory = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-screenwise-navy">Our Story</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Founded by feeding therapy professionals who understand the daily challenges you face, 
            Screenwise Eating was born from a simple observation: the best therapy happens when 
            families can successfully implement strategies at home.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-screenwise-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">Passion-Driven</h3>
              <p className="text-gray-600">Built by therapists who live and breathe feeding therapy every day.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-screenwise-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">Family-Centered</h3>
              <p className="text-gray-600">Designed to strengthen the connection between therapy sessions and home life.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-screenwise-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">Results-Focused</h3>
              <p className="text-gray-600">Every feature is designed to improve therapy outcomes and family satisfaction.</p>
            </div>
          </div>
          
          <div className="bg-screenwise-light rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-screenwise-navy">Join Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6">
              Help us revolutionize feeding therapy by making evidence-based care more accessible, 
              effective, and sustainable for families everywhere.
            </p>
            <Button 
              className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-3"
              onClick={() => window.open('https://calendly.com/canaankimball/30min', '_blank')}
            >
              Book Demo <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
