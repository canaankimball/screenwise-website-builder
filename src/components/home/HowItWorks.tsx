
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Track Your Habits",
    description: "Start by monitoring your current digital use patterns and eating behaviors to identify connections."
  },
  {
    number: "02",
    title: "Personalized Insights",
    description: "Receive customized analysis and recommendations based on your unique lifestyle and goals."
  },
  {
    number: "03",
    title: "Implement Strategies",
    description: "Apply practical techniques to improve both screen habits and nutrition choices simultaneously."
  },
  {
    number: "04",
    title: "Measure Progress",
    description: "Track your journey with our tools and celebrate improvements in your digital-food balance."
  }
];

const HowItWorks = () => {
  return (
    <section className="section bg-screenwise-gray">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">How It Works</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our simple four-step process helps you transform your relationship with both technology and food.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className="relative bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition-all"
          >
            <div className="absolute -top-4 -left-4 bg-screenwise-teal text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-3 mt-4 text-screenwise-navy">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
