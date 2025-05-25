import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Building2, Users, BarChart, Settings, Shield, HeartHandshake, Award, PenTool } from 'lucide-react';

const enterpriseFeatures = [
  {
    icon: <Users className="h-10 w-10 text-screenwise-teal" />,
    title: "Organization-Wide Analytics",
    description: "Comprehensive data on digital wellness trends across your entire company."
  },
  {
    icon: <BarChart className="h-10 w-10 text-screenwise-teal" />,
    title: "Custom Reporting",
    description: "Tailored reports that align with your organization's specific health metrics and goals."
  },
  {
    icon: <Settings className="h-10 w-10 text-screenwise-teal" />,
    title: "API Integration",
    description: "Seamlessly connect with your existing HR and wellness platforms."
  },
  {
    icon: <Shield className="h-10 w-10 text-screenwise-teal" />,
    title: "Enterprise-Grade Security",
    description: "Advanced data protection and privacy controls that meet corporate standards."
  },
  {
    icon: <PenTool className="h-10 w-10 text-screenwise-teal" />,
    title: "Branded Experience",
    description: "Customize the platform with your company's logo, colors, and messaging."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-screenwise-teal" />,
    title: "Dedicated Success Manager",
    description: "Personal support to ensure your organization achieves its wellness goals."
  }
];

const Enterprise = () => {
  return (
    <Layout>
      <div className="pt-20 bg-screenwise-light bg-opacity-30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-screenwise-navy">Enterprise Solutions</h1>
            <p className="text-lg text-gray-600 mb-8">
              Comprehensive digital wellness programs for large organizations
            </p>
            <Button 
              className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-6 py-3"
              onClick={() => window.open('https://calendly.com/canaankimball/30min', '_blank')}
            >
              Request Enterprise Demo
            </Button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Digital Wellness at Scale</h2>
            <p className="text-lg text-gray-600 mb-6">
              For organizations with 500+ employees, digital distraction and unhealthy eating habits can significantly impact productivity, healthcare costs, and employee satisfaction.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our enterprise solution provides a comprehensive approach to addressing these challenges across your entire organization, with the customization, security, and support that large companies require.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <Building2 className="text-screenwise-teal mr-3" size={24} />
                <span className="text-lg text-gray-700">Trusted by Fortune 500 companies</span>
              </div>
              <div className="flex items-center">
                <Award className="text-screenwise-teal mr-3" size={24} />
                <span className="text-lg text-gray-700">Industry-leading implementation success</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-screenwise-teal mr-3" size={24} />
                <span className="text-lg text-gray-700">SOC 2 and HIPAA compliant</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=600" 
              alt="Enterprise digital wellness" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      <section className="section bg-screenwise-gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Enterprise Features</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed for large organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseFeatures.map((feature, index) => (
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

      <section className="section">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-screenwise-navy">Get a Custom Quote</h2>
            <p className="text-lg text-gray-600">
              Our enterprise pricing is tailored to your organization's specific needs and scale
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-screenwise-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-screenwise-teal"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-screenwise-teal"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-screenwise-teal">
                  <option>500-1,000 employees</option>
                  <option>1,001-5,000 employees</option>
                  <option>5,001-10,000 employees</option>
                  <option>10,000+ employees</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tell us about your needs</label>
              <textarea 
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-screenwise-teal"
              ></textarea>
            </div>
            
            <div className="text-center">
              <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-3">
                Submit Request
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Enterprise;
