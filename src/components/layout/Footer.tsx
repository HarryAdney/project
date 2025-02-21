import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">James Jones Furniture</h3>
            <p className="text-gray-400">
              Quality furniture crafted with care since 1990. Visit our showroom on Newport Road.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/collections" className="text-gray-400 hover:text-white">Collections</Link></li>
              <li><Link href="/delivery" className="text-gray-400 hover:text-white">Delivery Information</Link></li>
              <li><Link href="/care" className="text-gray-400 hover:text-white">Furniture Care</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+44 123 456 7890</span>
              </p>
              <p className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@jamesjonesfurniture.com</span>
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.facebook.com/jamesjonesnewportroad" className="text-gray-400 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} James Jones Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}