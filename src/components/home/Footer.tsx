import React from 'react';
import { Mail, PhoneCall, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import Logo from '../Logo';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-blue-600 py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Your Travel Journey Starts Here</h3>
            <p className="mb-6">Sign up and we'll send the best deals to you</p>
            
            <div className="flex flex-col sm:flex-row mx-auto max-w-md gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full py-3 px-4 rounded-md text-gray-900 focus:outline-none"
              />
              <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-6 rounded-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#0F172A] text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <p className="text-gray-400 text-sm mb-2">328 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
              <div className="flex items-center text-gray-400 text-sm mb-1">
                <PhoneCall className="h-4 w-4 mr-2" />
                <span>+1 123 456 7890</span>
              </div>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@gotrip.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Legal Notice</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms and Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Other Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Car Hire</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Activity Finder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tour List</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Flight Finder</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cruise Ticket</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Holiday Rental</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 by GoTrip. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;