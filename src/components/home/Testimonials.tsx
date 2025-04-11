
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ScreenWise Eating transformed how I balance my work-from-home life. I'm more mindful of both my screen time and eating habits now.",
    author: "Sarah J.",
    role: "Marketing Professional",
    stars: 5
  },
  {
    quote: "As a parent, I was concerned about my children's relationship with food and devices. This program offers practical solutions for the whole family.",
    author: "Michael T.",
    role: "Father of two",
    stars: 5
  },
  {
    quote: "The personalized insights were eye-opening. I never realized how my late-night scrolling was affecting my nutrition choices.",
    author: "Amelia R.",
    role: "Healthcare Worker",
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <section className="section bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-screenwise-navy">What Our Users Say</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how ScreenWise Eating has helped people improve their relationship with technology and food.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-screenwise-light bg-opacity-30 rounded-2xl p-8 border border-screenwise-teal/20 hover:shadow-md transition-all"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-screenwise-teal text-screenwise-teal" />
              ))}
              {[...Array(5 - testimonial.stars)].map((_, i) => (
                <Star key={i + testimonial.stars} className="h-5 w-5 text-gray-300" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-screenwise-navy">{testimonial.author}</p>
              <p className="text-gray-500 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
