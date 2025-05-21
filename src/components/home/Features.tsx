
import React from 'react';
import { FilePen, ChartBar, Target, Notebook, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <FilePen className="h-10 w-10 text-screenwise-teal" />,
    title: "Customizable Therapy Plans",
    description: "Tailor treatment approaches to each child's specific feeding challenges and goals."
  },
  {
    icon: <ChartBar className="h-10 w-10 text-screenwise-teal" />,
    title: "Data & Charts",
    description: "Visualize progress with comprehensive analytics and data tracking for informed decision making."
  },
  {
    icon: <Target className="h-10 w-10 text-screenwise-teal" />,
    title: "Goal Setting",
    description: "Create measurable objectives that adapt as children progress through their therapy journey."
  },
  {
    icon: <Notebook className="h-10 w-10 text-screenwise-teal" />,
    title: "Meal Logs",
    description: "Track detailed mealtime behaviors, food acceptance, and intervention effectiveness."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-screenwise-teal" />,
    title: "Secure Messaging",
    description: "Maintain continuous communication between therapists and caregivers between sessions."
  }
];

const Features = () => {
  return (
    <section className="section bg-screenwise-light py-20" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform provides everything feeding therapists and families need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center hover-lift"
            >
              <div className="h-20 w-20 bg-screenwise-navy rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-screenwise-navy">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
