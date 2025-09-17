'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ServicesDropdown from '@/components/ui/ServicesDropdown';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="SpeedyIP Home">
            <Image 
              src="/speedyip_logo.png" 
              alt="SpeedyIP Logo" 
              width={180}
              height={60}
              className="h-15 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav id="navigation" className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Home
            </Link>
            <ServicesDropdown />
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1"
            >
              Blog
            </Link>
            <Button 
              asChild
              className="font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              style={{ backgroundColor: '#13292a', color: '#ffffff' }}
            >
              <Link href="#contact">Get Quote</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Open mobile menu"
              aria-expanded="false"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
