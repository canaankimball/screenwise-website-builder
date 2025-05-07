
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="section bg-screenwise-gray">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">How Screenwise Eating Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Screenwise Eating consists of two connected tools designed to maintain treatment fidelity outside the clinic:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-screenwise-teal">
            <div className="h-16 w-16 bg-screenwise-teal rounded-full flex items-center justify-center text-white mb-6 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-screenwise-navy">Caregiver Mobile App</h3>
            <p className="text-gray-600">
              Guides families through structured home meals using therapist-assigned plans. Tracks bite counts, food volume, behaviors, engagement, and pacing — while delivering rewards via preferred digital content.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-screenwise-teal">
            <div className="h-16 w-16 bg-screenwise-teal rounded-full flex items-center justify-center text-white mb-6 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><line x1="3" x2="21" y1="9" y2="9" /><path d="M9 21v-6" /><path d="M15 21v-6" /></svg>
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-screenwise-navy">Therapist Web Portal</h3>
            <p className="text-gray-600">
              Enables therapists to assign interventions, adjust pacing and reinforcement, and monitor detailed mealtime metrics in real time. Data visualizations highlight trends, bottlenecks, and progress.
            </p>
          </div>
        </div>

        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 font-medium px-6 py-4 bg-screenwise-light bg-opacity-50 rounded-xl inline-block">
            This two-way system creates a continuous therapy loop, improving outcomes and reducing reliance on caregiver-reported data.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
