
import React from 'react';
import { BarChart3, Clock, UserCheck, Eye } from 'lucide-react';

const valueItems = [
  {
    title: "Real-Time Meal Data",
    description: "Access bite counts, meal duration, gagging/spitting events, and engagement metrics collected at home — no more guessing or relying on imprecise caregiver notes.",
    icon: <BarChart3 size={28} className="text-white" />
  },
  {
    title: "Customizable Intervention Plans",
    description: "Assign meal pacing intervals, reinforcement strategies, food targets, and behavioral goals for each client — remotely and securely.",
    icon: <Clock size={28} className="text-white" />
  },
  {
    title: "Visual Progress Tracking",
    description: "Spot patterns, identify regressions early, and track outcomes over time with intuitive dashboards and graphs.",
    icon: <Eye size={28} className="text-white" />
  },
  {
    title: "Therapist-Caregiver Alignment",
    description: "Give caregivers clarity and structure. Reduce stress and improve compliance with therapist-guided, app-based instructions.",
    icon: <UserCheck size={28} className="text-white" />
  }
];

const ClinicalValue = () => {
  return (
    <section className="section">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">Designed to Enhance Therapy Fidelity and Insight</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {valueItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-screenwise-teal"
            >
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full bg-screenwise-teal flex items-center justify-center mr-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-screenwise-navy">{item.title}</h3>
              </div>
              <p className="text-gray-600 pl-[4.5rem]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicalValue;
