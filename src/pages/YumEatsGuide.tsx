import React from 'react';
import Layout from '@/components/Layout';

const YumEatsGuide = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-b from-screenwise-teal/10 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-screenwise-darkBlue">
            YumEats Guide
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Your complete guide to getting the most out of YumEats — built for therapists, caregivers, and families.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-screenwise-darkBlue">Getting Started</h2>
              <p className="text-gray-700">
                Download the YumEats app, create your account, and link your therapist or caregiver profile to begin tracking feeding sessions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-screenwise-darkBlue">Logging a Session</h2>
              <p className="text-gray-700">
                Open the app at mealtime, select the foods being offered, and tap to record bites, sips, and reactions in real time.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-screenwise-darkBlue">Reviewing Progress</h2>
              <p className="text-gray-700">
                Use the therapist portal to view trends, identify breakthroughs, and share data-driven insights with families.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-screenwise-darkBlue">Tips & Best Practices</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Log sessions consistently to build meaningful trend data.</li>
                <li>Use notes to capture context around setbacks and wins.</li>
                <li>Share weekly summaries with families to keep them engaged.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-screenwise-darkBlue">Need Help?</h2>
              <p className="text-gray-700">
                Reach out to our support team at screenwiseeating@gmail.com — we typically respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default YumEatsGuide;