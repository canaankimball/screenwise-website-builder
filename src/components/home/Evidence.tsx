
import React from 'react';
import { Check } from 'lucide-react';

const collaborations = [
  "Authors of widely used feeding therapy protocols and published research",
  "Directors of nationally recognized intensive feeding clinics",
  "Clinical teams from one of the largest ABA therapy organizations in the U.S."
];

const Evidence = () => {
  return (
    <section className="section bg-screenwise-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">Built With Experts. In Use Across the Country.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Screenwise Eating was co-designed with licensed therapists and informed by leaders in the field of pediatric feeding and behavior therapy.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 font-medium">
            We are actively collaborating with:
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
          <ul className="space-y-4">
            {collaborations.map((collaboration, index) => (
              <li key={index} className="flex items-start bg-screenwise-light bg-opacity-30 p-4 rounded-lg">
                <span className="bg-screenwise-teal text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-0.5 flex-shrink-0 shadow-md">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="text-gray-700 font-medium">{collaboration}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 font-medium px-6 py-4 bg-screenwise-light bg-opacity-50 rounded-xl inline-block">
              We are currently conducting an IRB-approved study with Dr. Lee Kern and the Lehigh University Autism Center, and piloting our platform with intensive feeding clinics across the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
