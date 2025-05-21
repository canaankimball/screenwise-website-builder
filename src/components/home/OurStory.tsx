
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  return (
    <section className="section bg-screenwise-light bg-opacity-30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-screenwise-navy">Born From Real Need. Built by a Family-Therapist-Engineer Team.</h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Our journey started with Eric Markovcy, whose son Ryan was born as a micro-preemie at just 1.3 pounds. Despite quality therapy, Ryan's feeding challenges were only resolved when a therapist was consistently present in the home.
                </p>
                <p className="text-lg text-gray-600">
                  That transformation inspired Eric to team up with Canaan Kimball—a student-athlete at Lehigh University with a background in engineering and entrepreneurship. Together, they built Screenwise Eating: a scalable platform that supports therapists in delivering better care outside the clinic.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're a growing team of engineers, clinicians, and researchers driven by one goal: to make feeding therapy more effective, accessible, and data-informed.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/our-story">
                  <Button variant="outline" className="border-screenwise-teal text-screenwise-teal hover:bg-screenwise-light rounded-full px-8 py-6 text-lg flex items-center shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300">
                    Read Full Story <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute inset-0 bg-screenwise-teal rounded-2xl opacity-20 transform -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=600" 
                alt="Father and child" 
                className="rounded-2xl shadow-xl w-full relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
