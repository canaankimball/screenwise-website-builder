import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/lovable-uploads/5cab5ef1-a411-413d-8ba7-ca15b6162039.png" alt="ScreenWise Eating Logo" className="h-12 brightness-200" />
            </Link>
            <p className="text-gray-300 mb-6">Empowering feeding therapists to deliver more effective, data-driven care.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-screenwise-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-screenwise-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-screenwise-teal transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-screenwise-teal transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/our-story" className="text-gray-300 hover:text-screenwise-teal transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Our Story
                </Link>
              </li>
              <li>
                <Link to="/product" className="text-gray-300 hover:text-screenwise-teal transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Product
                </Link>
              </li>
              <li>
                <Link to="/small-business" className="text-gray-300 hover:text-screenwise-teal transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Small Business
                </Link>
              </li>
              <li>
                <Link to="/enterprise" className="text-gray-300 hover:text-screenwise-teal transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Enterprise
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-screenwise-teal transition-colors flex items-center">
                  <ChevronRight size={16} className="mr-2" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-screenwise-teal" />
                <span className="text-gray-300">(904) 540-2911</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-screenwise-teal" />
                <span className="text-gray-300">screenwiseeating@gmaill.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for tips and updates.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-md bg-white/10 text-white border border-white/20 focus:outline-none focus:border-screenwise-teal" />
              <button type="submit" className="px-4 py-2 bg-screenwise-teal text-white rounded-md hover:bg-screenwise-teal-dark transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ScreenWise Eating. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;