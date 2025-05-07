
import React from 'react';

const valueItems = [
  {
    title: "Real-Time Meal Data",
    description: "Access bite counts, meal duration, gagging/spitting events, and engagement metrics collected at home — no more guessing or relying on imprecise caregiver notes."
  },
  {
    title: "Customizable Intervention Plans",
    description: "Assign meal pacing intervals, reinforcement strategies, food targets, and behavioral goals for each client — remotely and securely."
  },
  {
    title: "Visual Progress Tracking",
    description: "Spot patterns, identify regressions early, and track outcomes over time with intuitive dashboards and graphs."
  },
  {
    title: "Therapist-Caregiver Alignment",
    description: "Give caregivers clarity and structure. Reduce stress and improve compliance with therapist-guided, app-based instructions."
  }
];

const ClinicalValue = () => {
  return (
    <section className="section">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">Designed to Enhance Therapy Fidelity and Insight</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {valueItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all border-t-4 border-screenwise-teal"
            >
              <h3 className="text-xl font-semibold mb-3 text-screenwise-navy">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalValue;
