import React from 'react';
import Layout from '@/components/Layout';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
const OurStory = () => {
  const teamMembers = [{
    name: 'Canaan Kimball',
    role: 'Co-Founder',
    bio: 'Mechanical engineering and business student at Lehigh. Leads product and strategy. Passionate about building life-changing tools for families.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=200',
    initials: 'CK'
  }, {
    name: 'Eric Markovcy',
    role: 'Co-Founder',
    bio: 'Strength coach and father of two. Inspired by his son\'s journey through feeding therapy. Drives partnerships and mission.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=200',
    initials: 'EM'
  }, {
    name: 'Evan Mazor',
    role: 'Chief Technical Officer',
    bio: 'Full-stack developer. Builds the therapist portal and mobile app. Product-focused and mission-aligned.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=200',
    initials: 'EM'
  }];
  const advisors = [{
    name: 'Dr. Laura Seiverling',
    credentials: 'BCBA-D',
    bio: 'Pediatric feeding psychologist and BCBA. Author, expert in feeding disorders. Advises clinical design.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=200',
    initials: 'LS'
  }, {
    name: 'Sean Casey',
    credentials: 'BCBA',
    bio: 'Behavior analyst and clinic director. Advises on real-world implementation and caregiver coaching.',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=200',
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
            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600" alt="Father and son" className="rounded-2xl shadow-xl w-full relative z-10" />
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
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We believe technology should bridge the gap between clinic and home, enhancing—never replacing—the human connection at the heart of effective therapy. Our platform empowers therapists to extend their impact beyond sessions and gives families the structure, support, and consistency they need to help their children thrive.
          </p>
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
      <section className="section bg-screenwise-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            We're building a future where every child with feeding challenges has access to consistent, effective support both in and out of the clinic.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/product" className="bg-white text-screenwise-navy hover:bg-screenwise-light px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1 inline-flex items-center">
              Learn About Our Platform <ArrowRight className="ml-2" size={16} />
            </a>
            <a href="/contact" className="border border-white text-white hover:bg-white hover:text-screenwise-navy px-8 py-3 rounded-full font-medium transition-all transform hover:-translate-y-1">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </Layout>;
};
export default OurStory;