import React from 'react';
import Layout from '@/components/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStory = () => {
  const teamMembers = [{
    name: 'Canaan Kimball',
    role: 'Co-Founder',
    bio: 'Mechanical engineering and business student at Lehigh. Leads product and strategy. Passionate about building life-changing tools for families.',
    image: '/lovable-uploads/d21c5a4a-3523-4173-8f8f-82adfcaf660d.png',
    initials: 'CK'
  }, {
    name: 'Eric Markovcy',
    role: 'Co-Founder',
    bio: 'Strength coach and father of two. Inspired by his son\'s journey through feeding therapy. Drives partnerships and mission.',
    image: '/lovable-uploads/76d82bf8-a4cc-4cea-9972-8125a08ed6bf.png',
    initials: 'EM'
  }, {
    name: 'Evan Mazor',
    role: 'Chief Technical Officer',
    bio: 'Full-stack developer. Builds the therapist portal and mobile app. Product-focused and mission-aligned.',
    image: '/lovable-uploads/13805f21-a75a-4236-ae21-8ed70bd295be.png',
    initials: 'EM'
  }];
  const advisors = [{
    name: 'Dr. Laura Seiverling',
    credentials: 'BCBA',
    bio: 'Eating disorder psychologist and BCBA. Author of Broccoli Boot Camp, expert in feeding disorders. Advises clinical design.',
    image: '/lovable-uploads/6a6f8844-a163-450c-824f-4f4843c3c3f1.png',
    initials: 'LS'
  }, {
    name: 'Sean Casey',
    credentials: 'BCBA',
    bio: 'BCBA and director of Heartland Feeding clinc. Advises on app implementation and philosophy.',
    image: '/lovable-uploads/989261f3-225d-447b-a4dd-5a0fb8025969.png',
    initials: 'SC'
  }];
  return <Layout>
      {/* Hero Section */}
      <div className="pt-20 bg-screenwise-light bg-opacity-30">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-screenwise-navy">Our Story</h1>
            <p className="text-lg text-gray-600 mb-8">
              How a personal feeding journey inspired a platform to transform therapy
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-screenwise-teal rounded-2xl opacity-20 transform -rotate-2"></div>
            <img src="/lovable-uploads/15dbf675-466c-4a42-b0a5-381d1b46347e.png" alt="Family mealtime" className="rounded-2xl shadow-xl w-full relative z-10" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6 text-screenwise-navy">Born from Real Need</h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600">
                Screenwise Eating was born out of co-founder Eric Markovcy's personal experience with his son Ryan, a micro-preemie born at just 1.3 pounds. After struggling with feeding challenges that weren't resolving in clinical settings, Ryan only made progress once a therapist was consistently present in the home.
              </p>
              <p className="text-lg text-gray-600">
                That transformation inspired Eric to build a solution that could extend feeding therapy into the home for all families facing similar challenges. He knew firsthand how isolating and overwhelming it could feel to navigate feeding difficulties without proper support.
              </p>
              <p className="text-lg text-gray-600">
                Eric teamed up with Canaan Kimball, a student-athlete at Lehigh University, where Eric was his strength coach. Together, they launched Screenwise Eating—a platform that connects feeding therapists with families to provide structured, consistent support between therapy sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="section bg-screenwise-gray">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6 text-screenwise-navy">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">We believe technology should bridge the gap between clinic and home, enhancing—never replacing—the human connection at the heart of effective feeding therapy. Our platform empowers therapists to extend their impact beyond sessions and gives families the structure, support, and consistency they need to help their children thrive.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <Card className="border-2 border-gray-200 hover:border-screenwise-teal transition-all duration-300 flex-1">
              <CardContent className="pt-6">
                <div className="text-4xl text-screenwise-teal mb-4">👪</div>
                <h3 className="text-xl font-semibold mb-2 text-screenwise-navy">Support Families</h3>
                <p className="text-gray-600">Provide structure and stress-free data collection for mealtimes at home</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-200 hover:border-screenwise-teal transition-all duration-300 flex-1">
              <CardContent className="pt-6">
                <div className="text-4xl text-screenwise-teal mb-4">👩‍⚕️</div>
                <h3 className="text-xl font-semibold mb-2 text-screenwise-navy">Empower Therapists</h3>
                <p className="text-gray-600">Extend clinical impact beyond session boundaries</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-gray-200 hover:border-screenwise-teal transition-all duration-300 flex-1">
              <CardContent className="pt-6">
                <div className="text-4xl text-screenwise-teal mb-4">📈</div>
                <h3 className="text-xl font-semibold mb-2 text-screenwise-navy">Improve Outcomes</h3>
                <p className="text-gray-600">Accelerate progress through data-informed care</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-screenwise-navy text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => <div key={index} className="card border-2 border-gray-200 hover:border-screenwise-teal">
                <div className="flex flex-col items-center">
                  <Avatar className="w-32 h-32 mb-4 border-4 border-white shadow-md">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="bg-screenwise-teal text-white text-2xl">{member.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-screenwise-navy">{member.name}</h3>
                  <p className="text-screenwise-teal font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="section bg-screenwise-light bg-opacity-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-screenwise-navy text-center">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {advisors.map((advisor, index) => <div key={index} className="card border-2 border-gray-200 hover:border-screenwise-teal bg-white">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-white shadow-md mx-auto md:mx-0">
                    <AvatarImage src={advisor.image} alt={advisor.name} />
                    <AvatarFallback className="bg-screenwise-teal text-white text-2xl">{advisor.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-xl font-bold text-screenwise-navy text-center md:text-left">
                      {advisor.name}, <span className="text-screenwise-teal">{advisor.credentials}</span>
                    </h3>
                    <p className="text-gray-600 mt-2">{advisor.bio}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-screenwise-navy to-screenwise-teal-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We're building a future where every child with feeding challenges has access to consistent, effective support both in and out of the clinic.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/product">
              <Button className="bg-white text-screenwise-navy hover:bg-screenwise-light rounded-full px-8 py-6 text-lg">
                Learn About Our Platform <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white rounded-full px-8 py-6 text-lg text-white hover:bg-white hover:text-screenwise-navy">
                Contact Us <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};

export default OurStory;
