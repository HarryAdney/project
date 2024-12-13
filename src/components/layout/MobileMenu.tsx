import React from 'react';
import { Link } from './Link';

interface MobileMenuProps {
  isOpen: boolean;
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-50">
      <div className="px-4 py-2 space-y-1">
        <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
          Home
        </Link>
        <Link href="/collections" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
          Collections
        </Link>
        <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
          About
        </Link>
        <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
          Contact
        </Link>
      </div>
    </div>
  );
}