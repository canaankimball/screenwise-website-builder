
import React from 'react';

const experts = [
  "Dr. Keith Williams & Dr. Laura Seiverling, BCBAs – Authors of Broccoli Boot Camp",
  "Jeffrey Skibitsky, MA, BCBA – President of ABS Kids (36+ clinics)",
  "Dr. Lee Kern – Director, Lehigh University Autism Center",
  "Dr. Emma Auten, BCBA – RWJ Barnabas Intensive Feeding Program",
  "Dr. Kathryn Peterson, BCBA – National expert in pediatric feeding"
];

const Evidence = () => {
  return (
    <section className="section bg-screenwise-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">Built With Experts. In Use Across the Country.</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Screenwise Eating was co-designed with licensed therapists and validated by leaders in the field of pediatric feeding and behavior therapy. Our advisory team includes:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {experts.map((expert, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-screenwise-teal text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="text-gray-700">{expert}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 font-medium">
              We are currently conducting an IRB-approved study and piloting with intensive feeding clinics across the country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
