'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Shield, Copyright } from 'lucide-react';

const services = [
  {
    id: 'patents',
    title: 'Patents',
    description: 'Protect your inventions with comprehensive patent filing services. From initial search to USPTO filing and prosecution.',
    icon: <Shield className="h-8 w-8" />,
    href: '/services/patents',
    features: [
      'Patent Search & Analysis',
      'Patent Drafting',
      'USPTO Filing',
      'Patent Prosecution',
      'Office Action Responses'
    ]
  },
  {
    id: 'trademarks',
    title: 'Trademarks',
    description: 'Secure your brand identity with trademark registration services. Protect your business name, logo, and brand assets.',
    icon: <FileText className="h-8 w-8" />,
    href: '/services/trademarks',
    features: [
      'Trademark Search',
      'Trademark Application',
      'USPTO Filing',
      'Trademark Monitoring',
      'Renewal Services'
    ]
  },
  {
    id: 'copyrights',
    title: 'Copyrights',
    description: 'Protect your creative works with copyright registration. Secure your artistic, literary, and digital content.',
    icon: <Copyright className="h-8 w-8" />,
    href: '/services/copyrights',
    features: [
      'Copyright Registration',
      'DMCA Protection',
      'Copyright Monitoring',
      'Infringement Analysis',
      'Legal Enforcement'
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#333333' }}>
            Our Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6c757d' }}>
            Comprehensive intellectual property protection services to secure your innovations, 
            brand, and creative works with expert legal guidance.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link key={service.id} href={service.href} className="group">
                <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer" 
                      style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" 
                         style={{ backgroundColor: '#e3f2fd' }}>
                      <div style={{ color: '#0066B2' }}>{service.icon}</div>
                    </div>
                    <CardTitle className="text-2xl font-bold" style={{ color: '#333333' }}>
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-center" style={{ color: '#6c757d' }}>
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-sm" style={{ color: '#333333' }}>
                        What's Included:
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm" style={{ color: '#6c757d' }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#0066B2' }}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4">
                      <div className="text-center">
                        <span className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors group-hover:bg-blue-50" 
                              style={{ color: '#0066B2' }}>
                          Learn More
                          <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333333' }}>
            Ready to Protect Your Intellectual Property?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6c757d' }}>
            Get expert guidance on which services you need and how we can help secure your innovations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact"
              className="inline-flex items-center px-8 py-3 rounded-md font-medium transition-colors"
              style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
            >
              Get Free Consultation
            </Link>
            <Link 
              href="/blog"
              className="inline-flex items-center px-8 py-3 rounded-md font-medium border-2 transition-colors"
              style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
