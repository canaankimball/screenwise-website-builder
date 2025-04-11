
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const OurStory = () => {
  return (
    <Layout>
      <div className="pt-20 bg-screenwise-light bg-opacity-30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-screenwise-navy">Our Story</h1>
            <p className="text-lg text-gray-600 mb-8">
              How we're helping people find balance in the digital age
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-6">
              At ScreenWise Eating, we believe that technology and nutrition don't have to be at odds with each other. Our mission is to help people develop healthier relationships with both food and digital devices.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We founded this company after noticing the growing impact of screen time on people's eating habits and overall wellness. What started as a small research project has grown into a comprehensive platform that serves individuals, families, and organizations worldwide.
            </p>
            <p className="text-lg text-gray-600">
              Our team of nutritionists, technologists, and behavioral scientists work together to create innovative solutions that address the unique challenges of eating well in the digital age.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" 
              alt="Our mission" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <section className="section bg-screenwise-gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" 
              alt="Our team" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Our Team</h2>
            <p className="text-lg text-gray-600 mb-6">
              We're a diverse group of experts passionate about helping people thrive in the digital age. Our team includes registered dietitians, UX designers, data scientists, and wellness coaches.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Together, we're building tools that make it easier to maintain mindful eating habits while embracing the benefits of technology. We believe that with the right approach, screen time and mealtime can coexist harmoniously.
            </p>
            <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Our Values</h2>
          <p className="text-lg text-gray-600 mb-12">
            These core principles guide everything we do at ScreenWise Eating
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card hover:border-screenwise-teal hover:border">
            <h3 className="text-xl font-bold mb-3 text-screenwise-navy">Balance</h3>
            <p className="text-gray-600">
              We believe in finding the middle ground between embracing technology and maintaining healthy habits. Balance is at the core of our philosophy.
            </p>
          </div>
          
          <div className="card hover:border-screenwise-teal hover:border">
            <h3 className="text-xl font-bold mb-3 text-screenwise-navy">Mindfulness</h3>
            <p className="text-gray-600">
              Being present and aware, whether with food or devices, is essential for making conscious choices that align with your wellbeing.
            </p>
          </div>
          
          <div className="card hover:border-screenwise-teal hover:border">
            <h3 className="text-xl font-bold mb-3 text-screenwise-navy">Innovation</h3>
            <p className="text-gray-600">
              We're constantly exploring new ways to address the evolving challenges of digital nutrition in the modern world.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurStory;
