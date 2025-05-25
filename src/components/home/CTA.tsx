import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
const CTA = () => {
  return <section className="bg-gradient-to-r from-screenwise-teal-dark to-screenwise-teal py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Bring Feeding Therapy Home — Without Losing Control</h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
          You don't have time to chase progress. With Screenwise Eating, your clients stay on track between visits, and your plans stay personalized and evidence-based. Less guesswork. More results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-violet-700 hover:bg-violet-600 text-slate-50">
            Request Demo <ArrowRight className="ml-2" size={18} />
          </Button>
          <Button variant="outline" className="border-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center text-teal-50 bg-teal-600 hover:bg-teal-500">
            Contact Our Team <MessageSquare className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>;
};
export default CTA;