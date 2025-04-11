
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Building, TrendingUp, Clock, Heart, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="h-10 w-10 text-screenwise-teal" />,
    title: "Team Wellness",
    description: "Support your employees' health by helping them develop better digital-eating habits."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-screenwise-teal" />,
    title: "Increased Productivity",
    description: "More mindful technology use leads to better focus and improved work performance."
  },
  {
    icon: <Clock className="h-10 w-10 text-screenwise-teal" />,
    title: "Reduced Burnout",
    description: "Healthier relationships with screens and food can decrease stress and fatigue."
  },
  {
    icon: <Heart className="h-10 w-10 text-screenwise-teal" />,
    title: "Employee Satisfaction",
    description: "Show your team you care about their wellbeing beyond the workplace."
  }
];

const SmallBusiness = () => {
  return (
    <Layout>
      <div className="pt-20 bg-screenwise-light bg-opacity-30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-screenwise-navy">Small Business Solutions</h1>
            <p className="text-lg text-gray-600 mb-8">
              Help your team thrive with better digital-food balance
            </p>
            <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-6 py-3">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">For Small Teams with Big Ambitions</h2>
            <p className="text-lg text-gray-600 mb-6">
              In today's digital workplace, many employees struggle with balancing screen time and healthy eating habits. ScreenWise Eating provides small businesses with affordable tools to support team wellbeing.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our small business package is designed for companies with 5-50 employees who want to invest in their team's health without breaking the budget.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <CheckCircle className="text-screenwise-teal mr-3 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-screenwise-navy">Team Dashboard</h4>
                  <p className="text-gray-600">Monitor aggregate wellness metrics while respecting individual privacy</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-screenwise-teal mr-3 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-screenwise-navy">Group Challenges</h4>
                  <p className="text-gray-600">Build team spirit with fun, healthy competitions and goals</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-screenwise-teal mr-3 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-screenwise-navy">Wellness Resources</h4>
                  <p className="text-gray-600">Access to workshops, guides, and tools for better habits</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
              alt="Small business team" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <section className="section bg-screenwise-gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Benefits for Your Business</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Investing in your team's digital-food balance pays dividends in many ways
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="card hover:border-screenwise-teal/30 hover:translate-y-[-5px] duration-300"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-screenwise-navy">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Small Business Pricing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Affordable solutions sized for your team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card border hover:shadow-xl transition-all">
            <div className="text-center p-2 mb-4">
              <h3 className="text-xl font-bold text-screenwise-navy">Team Essentials</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-screenwise-navy">$99</span>
                <span className="text-gray-500">/month</span>
                <p className="text-sm text-gray-500 mt-1">Up to 10 team members</p>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Basic team dashboard</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Monthly wellness reports</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Team challenges library</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Basic employee accounts</span>
              </div>
            </div>
            <Button className="w-full rounded-full bg-screenwise-teal text-white hover:bg-screenwise-teal-dark">
              Get Started
            </Button>
          </div>

          <div className="card border border-screenwise-teal relative shadow-lg hover:shadow-xl transition-all">
            <div className="text-center p-2 mb-4">
              <h3 className="text-xl font-bold text-screenwise-navy">Team Premium</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-screenwise-navy">$249</span>
                <span className="text-gray-500">/month</span>
                <p className="text-sm text-gray-500 mt-1">Up to 25 team members</p>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Advanced team analytics</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Weekly insights & recommendations</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Custom challenge creation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Premium employee accounts</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Quarterly team workshop</span>
              </div>
            </div>
            <Button className="w-full rounded-full bg-screenwise-teal text-white hover:bg-screenwise-teal-dark">
              Get Started
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SmallBusiness;
