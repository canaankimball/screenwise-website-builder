
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
