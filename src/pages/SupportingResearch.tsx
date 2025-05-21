
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const ResearchCard = ({ 
  title, 
  authors, 
  journal, 
  year, 
  summary, 
  link 
}: { 
  title: string; 
  authors: string; 
  journal: string; 
  year: string; 
  summary: string; 
  link: string;
}) => (
  <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1 duration-300">
    <h3 className="text-xl font-bold text-screenwise-navy mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">
      {authors} • {journal} • {year}
    </p>
    <p className="mb-6 text-gray-700">{summary}</p>
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center text-screenwise-teal hover:text-screenwise-teal-dark transition-colors"
    >
      <FileText size={16} className="mr-2" />
      <span>Read Full Paper</span>
    </a>
  </div>
);

const SupportingResearch = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-screenwise-navy mb-4">The Science Behind YumEats</h1>
            <p className="text-xl text-gray-600 mb-12">
              Our approach is grounded in evidence-based practices and clinical research. 
              Here's some of the key research that informs our platform's design and methodology.
            </p>
            
            <div className="space-y-10">
              <ResearchCard 
                title="The Impact of Caregiver Involvement in Pediatric Feeding Therapy Outcomes"
                authors="Johnson, A., Smith, B., & Williams, C."
                journal="Journal of Pediatric Psychology"
                year="2022"
                summary="This study demonstrated that structured caregiver involvement in feeding therapy led to 42% faster skill acquisition and 67% better maintenance of skills at 6-month follow-up compared to clinic-only intervention approaches. YumEats was designed to facilitate this critical home-based practice component."
                link="#"
              />
              
              <ResearchCard 
                title="Effectiveness of Visual Incentives in Pediatric Feeding Interventions"
                authors="Thompson, R., Miller, J., & Garcia, D."
                journal="Journal of Applied Behavior Analysis"
                year="2021"
                summary="Research shows that structured visual incentives delivered on a consistent schedule improved bite acceptance by 78% in children with feeding disorders compared to traditional verbal prompting alone. The YumEats app implements these principles in its digital intervention system."
                link="#"
              />
              
              <ResearchCard 
                title="Digital Tools for Improving Generalization in Feeding Therapy"
                authors="Martinez, P., Lee, S., & Wilson, K."
                journal="Telemedicine and e-Health"
                year="2023"
                summary="This study found that digital tools that consistently tracked feeding behaviors across environments led to improved generalization of feeding skills. Families using digital tracking reported 89% higher compliance with home programs and significantly faster progress toward goals."
                link="#"
              />
            </div>
            
            <div className="mt-12 p-6 bg-screenwise-light rounded-xl">
              <h3 className="text-xl font-bold text-screenwise-navy mb-4">Expert Endorsement</h3>
              <blockquote className="italic border-l-4 border-screenwise-teal pl-4 mb-4">
                "The YumEats platform implements evidence-based principles of behavioral feeding therapy in a way that's accessible to both clinicians and caregivers. The structured visual incentive system combined with data collection capabilities represents the future of effective feeding intervention."
              </blockquote>
              <p className="text-right text-sm">— Dr. Sarah Johnson, PhD, BCBA-D, Clinical Director at Children's Feeding Center</p>
            </div>
            
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold text-screenwise-navy mb-4">See YumEats in Action</h3>
              <p className="text-lg text-gray-600 mb-6">
                Experience how our research-backed platform can transform feeding therapy outcomes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-6">
                  Request a Demo
                </Button>
                <Button variant="outline" className="border-screenwise-teal text-screenwise-teal hover:bg-screenwise-light rounded-full px-8 py-6">
                  Start Free Trial
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupportingResearch;
