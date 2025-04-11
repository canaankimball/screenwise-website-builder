
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Product = () => {
  return (
    <Layout>
      <div className="pt-20 bg-screenwise-light bg-opacity-30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-screenwise-navy">Our Product</h1>
            <p className="text-lg text-gray-600 mb-8">
              The complete solution for balancing digital life and nutrition
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">The ScreenWise Eating Platform</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our comprehensive platform helps you understand and improve the relationship between your technology use and eating habits.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Through personalized tracking, actionable insights, and guided programs, we make it easier to develop healthier digital-food habits that last.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={20} />
                <span className="text-gray-700">Personalized screen time and nutrition tracking</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={20} />
                <span className="text-gray-700">AI-powered habit analysis and recommendations</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={20} />
                <span className="text-gray-700">Guided mindful eating exercises and challenges</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={20} />
                <span className="text-gray-700">Progress tracking and improvement metrics</span>
              </div>
            </div>
            <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full">
              Try It Free
            </Button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" 
              alt="ScreenWise Eating Platform" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <section className="section bg-screenwise-gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Key Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore the powerful tools that make ScreenWise Eating unique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-screenwise-navy">Habit Integration</h3>
            <p className="text-gray-600 mb-4">
              Our proprietary system connects your digital behaviors with your eating patterns, revealing hidden correlations and opportunities for improvement.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=600" 
              alt="Habit Integration" 
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="card hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-screenwise-navy">Mindful Moments</h3>
            <p className="text-gray-600 mb-4">
              Scheduled reminders and guided exercises help you break harmful cycles and create space for more conscious eating, even with a busy digital lifestyle.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80&w=600" 
              alt="Mindful Moments" 
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
          
          <div className="card hover:shadow-xl transition-all">
            <h3 className="text-xl font-bold mb-3 text-screenwise-navy">Progress Dashboard</h3>
            <p className="text-gray-600 mb-4">
              Track your journey with visual metrics that show how changes in screen habits impact your nutrition choices and overall wellbeing.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
              alt="Progress Dashboard" 
              className="rounded-lg w-full h-48 object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Pricing Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple, transparent pricing to support your digital-food balance journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="card border hover:shadow-xl transition-all">
            <div className="text-center p-2 mb-4">
              <h3 className="text-xl font-bold text-screenwise-navy">Basic</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-screenwise-navy">$9</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Basic tracking tools</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Weekly insights report</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Essential mindfulness exercises</span>
              </div>
            </div>
            <Button className="w-full rounded-full bg-screenwise-light text-screenwise-teal hover:bg-screenwise-teal hover:text-white">
              Get Started
            </Button>
          </div>

          <div className="card border border-screenwise-teal relative shadow-lg hover:shadow-xl transition-all transform scale-105">
            <div className="absolute top-0 left-0 w-full bg-screenwise-teal text-white text-center py-1 text-sm rounded-t-lg">
              Most Popular
            </div>
            <div className="text-center p-2 mb-4 mt-4">
              <h3 className="text-xl font-bold text-screenwise-navy">Premium</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-screenwise-navy">$19</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Advanced tracking & analytics</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Daily personalized insights</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Complete mindfulness library</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">1-on-1 digital nutrition session</span>
              </div>
            </div>
            <Button className="w-full rounded-full bg-screenwise-teal text-white hover:bg-screenwise-teal-dark">
              Get Started
            </Button>
          </div>

          <div className="card border hover:shadow-xl transition-all">
            <div className="text-center p-2 mb-4">
              <h3 className="text-xl font-bold text-screenwise-navy">Enterprise</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-screenwise-navy">Custom</span>
              </div>
            </div>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">All Premium features</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Team dashboards & reporting</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Custom integration options</span>
              </div>
              <div className="flex items-center">
                <Check className="text-screenwise-teal mr-2" size={18} />
                <span className="text-gray-700">Dedicated support team</span>
              </div>
            </div>
            <Button className="w-full rounded-full bg-screenwise-light text-screenwise-teal hover:bg-screenwise-teal hover:text-white">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Product;
