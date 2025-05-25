
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import CTA from '@/components/home/CTA';
import ClinicalValue from '@/components/home/ClinicalValue';
import Evidence from '@/components/home/Evidence';
import WhoItsFor from '@/components/home/WhoItsFor';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <ClinicalValue />
      <Evidence />
      <WhoItsFor />
      <CTA />
    </Layout>
  );
};

export default Index;
