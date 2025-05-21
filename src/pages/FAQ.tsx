
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const FAQ = () => {
  return (
    <Layout>
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-screenwise-navy mb-4 text-center">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 mb-12 text-center">
              Find answers to common questions about YumEats and our feeding therapy platform.
            </p>
            
            <Accordion type="single" collapsible className="w-full space-y-4">
             <AccordionItem value="item-1" className="border rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">
                Who is this platform designed for?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                Screenwise is designed for feeding therapists—such as BCBAs, SLPs, OTs, and other clinicians—who work with children struggling with eating and feeding challenges. The platform bridges the gap between in-clinic therapy and mealtime at home by allowing therapists to send personalized feeding plans, track real-time data remotely, and support families in building consistent, structured eating routines. Whether supporting children with autism, sensory processing difficulties, or other developmental needs, Screenwise Eating helps streamline care and improve therapy outcomes beyond the clinic.
              </AccordionContent>
            </AccordionItem>

              
              <AccordionItem value="item-2" className="border rounded-lg px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">Is YumEats HIPAA compliant?</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  Yes, YumEats is fully HIPAA compliant. We implement industry-standard encryption, secure data storage, and strict access controls to ensure that all patient information is protected according to healthcare privacy regulations.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3" className="border rounded-lg px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">How do I track data?</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  The YumEats platform includes comprehensive data tracking tools for both therapists and caregivers. Therapists can log sessions, track goals, and generate reports through the portal. Caregivers can log meals, record observations, and automatically track mealtime metrics through the mobile app. All data synchronizes in real-time across devices.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4" className="border rounded-lg px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">How do therapists monitor at-home use?</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  Therapists have access to a dashboard that shows all client activity, including at-home sessions logged by caregivers. They can view detailed metrics, meal logs, and progress toward goals. Therapists can also set up notifications for specific events or milestones to monitor progress in real-time.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5" className="border rounded-lg px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">What devices are compatible?</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  The YumEats mobile app is compatible with iOS smartphones and tablets. The therapist portal is web-based and can be accessed from any modern web browser on computers, laptops, and tablets. We recommend using the latest version of Chrome, Safari, Firefox, or Edge for optimal performance.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-6" className="border rounded-lg px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">How do I cancel or upgrade my plan?</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  You can upgrade or downgrade your plan at any time from your account settings page. Plan changes take effect at the start of your next billing cycle. To cancel your subscription, go to Account Settings &gt; Subscription &gt; Cancel Subscription. You'll maintain access until the end of your current billing period.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-7" className="border rounded-lg px-4 shadow-sm">
                <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">Can I customize the app for my clinic?</AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  Yes, custom enterprise plans include options for custom branding, including your logo and color scheme. Additional customization options are available for enterprise clients, including custom terms, assessment tools, and integration with existing systems.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border rounded-lg px-4 shadow-sm">
              <AccordionTrigger className="text-lg font-medium text-screenwise-navy py-4">
                Can multiple therapists and collaborators access the same client profile?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 pb-4">
                Yes. Unlimited therapists and collaborators can be invited to view a client’s profile, as long as they are granted access by the client’s designated administrator. However, only the administrator has permission to make changes to the client’s therapy plan, goals, and settings. This structure ensures collaboration across teams while maintaining secure and consistent oversight.
              </AccordionContent>
            </AccordionItem>
            </Accordion>

            
            
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Don't see your question? We're here to help.
              </p>
              <div className="flex justify-center">
                <Button className="bg-screenwise-teal hover:bg-screenwise-teal-dark text-white rounded-full px-8 py-6">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
