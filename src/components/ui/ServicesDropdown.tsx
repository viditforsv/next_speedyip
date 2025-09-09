'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Shield, FileText, Copyright } from 'lucide-react';

interface DropdownItem {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

interface ServiceDropdown {
  title: string;
  href: string;
  items: DropdownItem[];
  icon: React.ReactNode;
}

const serviceDropdowns: ServiceDropdown[] = [
  {
    title: 'Patents',
    href: '/services/patents',
    icon: <Shield className="h-4 w-4" />,
    items: [
      {
        title: 'Patent Search & Analysis',
        href: '/services/patents/search',
        description: 'Comprehensive prior art search',
        icon: <Shield className="h-4 w-4" />
      },
      {
        title: 'Patent Drafting',
        href: '/services/patents/drafting',
        description: 'Professional patent application',
        icon: <Shield className="h-4 w-4" />
      },
      {
        title: 'USPTO Filing',
        href: '/services/patents/filing',
        description: 'Complete USPTO filing process',
        icon: <Shield className="h-4 w-4" />
      },
      {
        title: 'Patent Prosecution',
        href: '/services/patents/prosecution',
        description: 'Handle office actions & appeals',
        icon: <Shield className="h-4 w-4" />
      }
    ]
  },
  {
    title: 'Trademarks',
    href: '/services/trademarks',
    icon: <FileText className="h-4 w-4" />,
    items: [
      {
        title: 'Trademark Search',
        href: '/services/trademarks/search',
        description: 'Comprehensive availability search',
        icon: <FileText className="h-4 w-4" />
      },
      {
        title: 'Trademark Application',
        href: '/services/trademarks/application',
        description: 'Professional application preparation',
        icon: <FileText className="h-4 w-4" />
      },
      {
        title: 'USPTO Filing',
        href: '/services/trademarks/filing',
        description: 'Complete USPTO filing process',
        icon: <FileText className="h-4 w-4" />
      },
      {
        title: 'Trademark Monitoring',
        href: '/services/trademarks/monitoring',
        description: 'Ongoing protection & enforcement',
        icon: <FileText className="h-4 w-4" />
      }
    ]
  },
  {
    title: 'Copyrights',
    href: '/services/copyrights',
    icon: <Copyright className="h-4 w-4" />,
    items: [
      {
        title: 'Copyright Registration',
        href: '/services/copyrights/registration',
        description: 'Professional registration service',
        icon: <Copyright className="h-4 w-4" />
      },
      {
        title: 'DMCA Protection',
        href: '/services/copyrights/dmca',
        description: 'Digital content protection',
        icon: <Copyright className="h-4 w-4" />
      },
      {
        title: 'Copyright Monitoring',
        href: '/services/copyrights/monitoring',
        description: 'Infringement detection & monitoring',
        icon: <Copyright className="h-4 w-4" />
      },
      {
        title: 'Legal Enforcement',
        href: '/services/copyrights/enforcement',
        description: 'Legal action & remedies',
        icon: <Copyright className="h-4 w-4" />
      }
    ]
  }
];

export default function ServicesDropdown() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(index);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsHovering(false);
    }, 200); // 200ms delay to prevent flickering
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovering(true);
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsHovering(false);
    }, 200);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Main Services Link */}
      <Link
        href="/services"
        className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors font-medium"
        onMouseEnter={() => handleMouseEnter(-1)}
        onMouseLeave={handleMouseLeave}
      >
        Services
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
          activeDropdown !== null ? 'rotate-180' : ''
        }`} />
      </Link>

      {/* Dropdown Menu */}
      {activeDropdown !== null && (
        <div
          className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-xl z-50"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
          style={{
            animation: 'fadeInDown 0.2s ease-out'
          }}
        >
          <div className="p-4">
            {/* Main Services Overview */}
            <div className="mb-4 pb-4 border-b border-gray-100">
              <Link
                href="/services"
                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                       style={{ backgroundColor: '#e3f2fd' }}>
                    <div style={{ color: '#0066B2' }}>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold" style={{ color: '#333333' }}>All Services</div>
                    <div className="text-sm" style={{ color: '#6c757d' }}>View all IP services</div>
                  </div>
                </div>
              </Link>
            </div>

            {/* Service Categories */}
            <div className="space-y-2">
              {serviceDropdowns.map((service, index) => (
                <div key={index}>
                  {/* Main Service Link */}
                  <Link
                    href={service.href}
                    className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full flex items-center justify-center" 
                           style={{ backgroundColor: '#e3f2fd' }}>
                        <div style={{ color: '#0066B2' }}>{service.icon}</div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold" style={{ color: '#333333' }}>
                          {service.title}
                        </div>
                        <div className="text-sm" style={{ color: '#6c757d' }}>
                          {service.title === 'Patents' && 'Protect your inventions'}
                          {service.title === 'Trademarks' && 'Secure your brand identity'}
                          {service.title === 'Copyrights' && 'Protect your creative works'}
                        </div>
                      </div>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} style={{ color: '#6c757d' }} />
                    </div>
                  </Link>

                  {/* Sub-services */}
                  {activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-1">
                      {service.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded flex items-center justify-center" 
                                 style={{ backgroundColor: '#f8f9fa' }}>
                              <div style={{ color: '#0066B2' }}>{item.icon}</div>
                            </div>
                            <div>
                              <div className="text-sm font-medium" style={{ color: '#333333' }}>
                                {item.title}
                              </div>
                              <div className="text-xs" style={{ color: '#6c757d' }}>
                                {item.description}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
