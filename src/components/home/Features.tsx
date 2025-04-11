
import React from 'react';
import { Smartphone, Brain, Heart, Clock, BarChart, Users } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-10 w-10 text-screenwise-teal" />,
    title: "Screen Time Awareness",
    description: "Track and analyze how digital device usage impacts your eating habits."
  },
  {
    icon: <Brain className="h-10 w-10 text-screenwise-teal" />,
    title: "Mindful Eating",
    description: "Learn techniques to be more present and aware during meals."
  },
  {
    icon: <Heart className="h-10 w-10 text-screenwise-teal" />,
    title: "Balanced Nutrition",
    description: "Receive personalized guidance for a healthier relationship with food."
  },
  {
    icon: <Clock className="h-10 w-10 text-screenwise-teal" />,
    title: "Meal Timing",
    description: "Optimize when you eat to align with your digital lifestyle."
  },
  {
    icon: <BarChart className="h-10 w-10 text-screenwise-teal" />,
    title: "Progress Tracking",
    description: "Monitor improvements in both eating habits and screen time."
  },
  {
    icon: <Users className="h-10 w-10 text-screenwise-teal" />,
    title: "Community Support",
    description: "Connect with others on the same journey toward digital-food balance."
  }
];

const Features = () => {
  return (
    <section className="section bg-white" id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">Our Features</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          ScreenWise Eating provides tools and resources to help you create a healthier balance between technology use and eating habits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="card hover:border-screenwise-teal/30 hover:translate-y-[-5px] duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-screenwise-navy">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
