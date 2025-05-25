
import React from 'react';
import Layout from '@/components/Layout';

const TermsOfUse = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-screenwise-navy mb-8 text-center">Terms of Use</h1>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 leading-relaxed">
              This is placeholder text for the Terms of Use page. You can paste your actual Terms of Use document content here. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfUse;
