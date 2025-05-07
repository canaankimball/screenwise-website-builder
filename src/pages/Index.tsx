
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';
import ClinicalValue from '@/components/home/ClinicalValue';
import Evidence from '@/components/home/Evidence';
import WhoItsFor from '@/components/home/WhoItsFor';
import OurStory from '@/components/home/OurStory';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <ClinicalValue />
      <Evidence />
      <WhoItsFor />
      <OurStory />
      <Testimonials />
      <CTA />
    </Layout>
  );
};

export default Index;
