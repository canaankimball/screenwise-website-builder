
import React from 'react';
import { CircleCheck } from 'lucide-react';

const forList = [
  "Board Certified Behavior Analysts (BCBAs)",
  "Feeding Therapists (OTs, SLPs, Psychologists)",
  "Intensive Feeding Clinics",
  "ABA Therapy Organizations"
];

const WhoItsFor = () => {
  return (
    <section className="section">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">A Platform for Feeding Therapists Who Want to Work Smarter</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-6">
              Whether you serve 5 clients or 50, Screenwise Eating helps you extend your impact.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-8">
              Feeding therapy requires consistency. But until now, managing what happens between sessions has relied on trust and fragmented caregiver notes. Screenwise Eating gives you control, structure, and real-time data — without compromising your time.
            </p>
            
            <ul className="space-y-3 mb-8">
              {forList.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CircleCheck className="text-screenwise-teal mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
