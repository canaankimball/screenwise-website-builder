
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check, PlusCircle, ChevronDown } from 'lucide-react';
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { 
  ChartContainer, 
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const ProductFeature = ({ icon, title, description, image }) => (
  <div className="mb-12 animate-fade-in hover-lift">
    <div className="mb-6 overflow-hidden rounded-xl shadow-md">
      <img 
        src={image} 
        alt={title} 
        className="w-full object-cover h-48 md:h-64 hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="flex items-start gap-3">
      <div className="mt-1 bg-screenwise-light p-2 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-screenwise-navy">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const ClinicalFeature = ({ title, description, status = null }) => (
  <div className="border rounded-lg p-5 hover:shadow-md transition-all bg-white">
    <div className="flex justify-between items-start mb-2">
      <h4 className="font-medium text-screenwise-navy">{title}</h4>
      {status && (
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === 'beta' ? 'bg-amber-100 text-amber-800' : 
          status === 'in development' ? 'bg-blue-100 text-blue-800' : 
          'bg-green-100 text-green-800'
        }`}>
          {status}
        </span>
      )}
    </div>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Product = () => {
  const [openSection, setOpenSection] = useState(null);
  
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-screenwise-light bg-opacity-30 pt-20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-screenwise-navy">
              Features Built for Feeding Therapists
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Our comprehensive platform provides everything you need to deliver effective feeding therapy and track meaningful progress
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-6">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-screenwise-teal text-screenwise-teal hover:bg-screenwise-light rounded-full px-8 py-6">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Two Column Features Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
            {/* Therapist Portal Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-screenwise-navy text-center lg:text-left">
                Therapist Portal
              </h2>

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                title="Log Activity"
                description="Securely record session details, notes, and behavior observations for each client in one centralized location."
                image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
              />

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                title="Charts and Graphs"
                description="Visualize mealtime data using customizable dashboards that help identify patterns and track progress over time."
                image="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600"
              />

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>}
                title="Set Goals"
                description="Define individualized feeding goals for each client with measurable objectives that adapt as children progress."
                image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=600"
              />

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>}
                title="Adjust Interventions"
                description="Modify chew intervals, reward timing, and prompts in real-time to optimize each therapy session for your client."
                image="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600"
              />
            </div>

            {/* YumEats Mobile App Column */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-screenwise-navy text-center lg:text-left">
                YumEats Mobile App
              </h2>

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>}
                title="Incentivized Mealtime"
                description="Child-friendly app delivers structured screen-based rewards for bites, making mealtime more engaging and effective."
                image="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=600"
              />

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>}
                title="Post-Meal Caregiver Log"
                description="Quick logging tool for caregivers to report observations, making it easy to track progress between therapy sessions."
                image="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&q=80&w=600"
              />

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="Incentive Selection"
                description="Caregivers or therapists can pre-select or randomize engaging videos/audiobooks to keep children motivated during meals."
                image="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=600"
              />

              <ProductFeature
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-screenwise-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
                title="Statistics for Tracking"
                description="Caregivers can monitor meal duration, bites per meal, and other key metrics to see real progress over time."
                image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Features Section */}
      <section className="py-20 px-4 md:px-8 bg-screenwise-gray">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Browse Our Clinical Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides specialized tools designed by feeding therapists, for feeding therapists
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ClinicalFeature 
              title="At-home session video recording/upload" 
              description="Allow families to record sessions at home and securely upload them for therapist review."
              status="in development"
            />
            
            <ClinicalFeature 
              title="AI Computer Vision Bite Recognition" 
              description="Automatically detect bites and chewing behavior using advanced machine learning algorithms."
              status="beta"
            />
            
            <ClinicalFeature 
              title="Disruptive behavior tracking" 
              description="Log and analyze behaviors that interfere with successful feeding sessions."
            />
            
            <ClinicalFeature 
              title="Eating metrics tracking" 
              description="Measure meal volume, number of bites, volume per bite, meal duration and more."
            />
            
            <ClinicalFeature 
              title="Adjustable incentive lengths/frequency" 
              description="Customize reward timing based on individual client needs and therapeutic goals."
            />
            
            <ClinicalFeature 
              title="Automatic progressions" 
              description="System automatically adjusts difficulty based on client progress and preset parameters."
            />
            
            <ClinicalFeature 
              title="Customized operational definitions" 
              description="Create clear, consistent definitions for behaviors and interventions across your practice."
            />
            
            <ClinicalFeature 
              title="Tracking acceptance and swallowing" 
              description="Record detailed data on food acceptance, chewing patterns, and successful swallowing."
            />
            
            <ClinicalFeature 
              title="Editable terminology" 
              description='Customize terminology (e.g., "bite" → "chew") to match your clinical approach and client needs.'
            />
            
            <ClinicalFeature 
              title="Weight log notifications" 
              description="Set up alerts for significant weight changes to monitor nutritional outcomes."
            />
            
            <ClinicalFeature 
              title="Customizable charts and graphs dashboard" 
              description="Build visual representations of data that matter most for each client's unique situation."
            />
            
            <ClinicalFeature 
              title="Downloadable meal logs" 
              description="Export detailed feeding records for sharing with healthcare teams or for record keeping."
              status="in development"
            />
            
            <ClinicalFeature 
              title="Export charts/graphs as CSV" 
              description="Download raw data for further analysis or inclusion in clinical documentation."
              status="in development"
            />
            
            <ClinicalFeature 
              title="Add team members" 
              description="Include pediatricians, dietitians, and other specialists in the collaborative care team."
            />
            
            <ClinicalFeature 
              title="Notebook for each client" 
              description="Maintain detailed notes, observations, and plans in one centralized, secure location."
            />
            
            <ClinicalFeature 
              title="Calendar view for sessions" 
              description="Easily navigate between upcoming and past sessions with a clear visual calendar interface."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-screenwise-navy to-screenwise-teal-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Feeding Therapy Practice?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join therapists nationwide who are improving clinical outcomes with our specialized platform
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-screenwise-navy hover:bg-screenwise-light rounded-full px-8 py-6 text-lg">
              Start Your Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
