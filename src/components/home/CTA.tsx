
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-screenwise-teal py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Bring Therapy Home — Without Losing Control</h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
          You don't have time to chase progress. With Screenwise Eating, your clients stay on track between visits, and your plans stay personalized and evidence-based. Less guesswork. More results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-screenwise-teal hover:bg-screenwise-light rounded-full px-8 py-6 text-lg">
            Request Demo
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg flex items-center">
            Contact Our Team <MessageSquare className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
