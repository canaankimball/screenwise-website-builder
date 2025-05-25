
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingTier = ({
  title,
  price,
  clients
}: {
  title: string;
  price: string;
  clients: string;
}) => <div className="flex flex-col rounded-2xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl bg-white border-2 border-gray-200">
    <h3 className="text-xl font-bold text-screenwise-navy">{title}</h3>
    <div className="mt-4 mb-2">
      <span className="text-3xl font-bold text-screenwise-navy">{price}</span>
      {price !== 'Free' && <span className="text-gray-500 text-sm">/month</span>}
    </div>
    <p className="text-gray-600 mb-4">{clients}</p>
  </div>;

const Pricing = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-screenwise-navy mb-6">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">Start with a free trial and scale as you grow.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
            <PricingTier 
              title="Free Trial" 
              price="Free" 
              clients="1 client profile" 
            />
            <PricingTier 
              title="Starter" 
              price="$7.99" 
              clients="Up to 5 clients" 
            />
            <PricingTier 
              title="Basic" 
              price="$14.99" 
              clients="Up to 10 clients" 
            />
            <PricingTier 
              title="Pro" 
              price="$24.99" 
              clients="Up to 20 clients" 
            />
          </div>

          {/* Features list moved here */}
          <div className="mb-12 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-screenwise-navy mb-4">All plans include:</h3>
            <ul className="flex flex-col space-y-2 text-left">
              <li className="flex items-start">
                <Check size={18} className="text-screenwise-teal mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Access for 1 therapist</span>
              </li>
              <li className="flex items-start">
                <Check size={18} className="text-screenwise-teal mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Client access to YumEats app</span>
              </li>
            </ul>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white border border-screenwise-navy text-screenwise-navy hover:bg-screenwise-light rounded-full px-8 py-6"
              onClick={() => window.open('https://forms.gle/LXALB8iVEWS6SwwJA', '_blank')}
            >
              Start Free Trial
            </Button>
            <Button 
              className="bg-screenwise-teal text-white hover:bg-screenwise-teal-dark rounded-full px-8 py-6"
              onClick={() => window.open('https://calendly.com/canaankimball/30min', '_blank')}
            >
              Book Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Bulk Pricing Section */}
      <section className="py-16 bg-screenwise-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-screenwise-navy mb-4">Need access for more than 1 therapist?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">We offer custom pricing for larger clinics, schools, and companies looking to empower multiple therapists.</p>
          <Button className="bg-screenwise-teal text-white hover:bg-screenwise-teal-dark rounded-full px-8 py-6">
            Send us an inquiry
          </Button>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-screenwise-navy mb-8 text-center">Drive Better Outcomes and Revenue</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">Improved Success Rates</h3>
              <p className="text-gray-600">Our platform increases feeding therapy success rates by improving home follow-through.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">More Time with Clients</h3>
              <p className="text-gray-600">Therapists spend less time on manual logging and more time with clients.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">Data-Driven Progress</h3>
              <p className="text-gray-600">Better data. Faster progress. Happier families.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover-lift">
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">Clinical Efficiency</h3>
              <p className="text-gray-600">Clinics using our tools see higher satisfaction and measurable improvements in treatment efficiency.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
