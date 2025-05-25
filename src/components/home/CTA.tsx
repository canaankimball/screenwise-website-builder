
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-screenwise-navy to-screenwise-teal-dark text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Bring Feeding Therapy Home — Without Losing Control</h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          You don't have time to chase progress. With Screenwise Eating, your clients stay on track between visits, and your plans stay personalized and evidence-based. Less guesswork. More results.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-screenwise-navy hover:bg-screenwise-light rounded-full px-8 py-6 text-lg">
            Request Demo <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button variant="outline" className="border-white rounded-full px-8 py-6 text-lg text-slate-50 bg-violet-500 hover:bg-violet-400">
            Contact Our Team <MessageSquare className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
