'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Check, Clock, Users, Award, FileText, Zap, Target, Building2 } from 'lucide-react';
import Link from 'next/link';

const patentServices = [
  {
    title: 'Patent Search & Analysis',
    description: 'Comprehensive prior art search to ensure your invention is novel and non-obvious.',
    features: ['Prior art database search', 'Novelty analysis', 'Patentability assessment', 'Competitive landscape review']
  },
  {
    title: 'Patent Drafting',
    description: 'Professional patent application drafting by experienced patent attorneys.',
    features: ['Detailed specification', 'Claims drafting', 'Technical drawings', 'Abstract preparation']
  },
  {
    title: 'USPTO Filing',
    description: 'Complete USPTO filing process with all required documentation.',
    features: ['Application submission', 'Fee payment', 'Filing confirmation', 'Application tracking']
  },
  {
    title: 'Patent Prosecution',
    description: 'Handle USPTO communications and office actions throughout the examination process.',
    features: ['Office action responses', 'Examiner interviews', 'Amendment preparation', 'Final rejection appeals']
  }
];

const processSteps = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Discuss your invention and determine patentability',
    icon: <Users className="h-6 w-6" />
  },
  {
    step: '2',
    title: 'Prior Art Search',
    description: 'Comprehensive search of existing patents and publications',
    icon: <FileText className="h-6 w-6" />
  },
  {
    step: '3',
    title: 'Application Drafting',
    description: 'Professional drafting of patent specification and claims',
    icon: <Shield className="h-6 w-6" />
  },
  {
    step: '4',
    title: 'USPTO Filing',
    description: 'Submission to USPTO with all required documentation',
    icon: <Award className="h-6 w-6" />
  },
  {
    step: '5',
    title: 'Prosecution',
    description: 'Handle office actions and examiner communications',
    icon: <Clock className="h-6 w-6" />
  }
];

const customerSegments = [
  {
    title: 'Marketing (Fast Grant)',
    subtitle: 'Quick Credibility & Visibility',
    description: 'Perfect for startups, entrepreneurs, and academics who need fast patent grants for investor presentations and credibility building.',
    icon: <Zap className="h-8 w-8" />,
    features: [
      '2-3 years to grant',
      '₹1,65,000 - ₹2,00,000',
      'Streamlined drafting',
      'Grant-oriented approach',
      'Investor presentations',
      'Academic submissions'
    ],
    targetCustomers: 'Startups, Entrepreneurs, Academics, Investors',
    pricing: '₹1,65,000 - ₹2,00,000',
    timeline: '2-3 years',
    bestFor: 'Quick grants, investor decks, academic submissions'
  },
  {
    title: 'Enforcement (Commercialization)',
    subtitle: 'Competitive Protection & Licensing',
    description: 'Ideal for established companies and manufacturers who need strong, enforceable patent rights for competitive advantage and licensing opportunities.',
    icon: <Target className="h-8 w-8" />,
    features: [
      '3-4 years to grant',
      '₹2,95,000 - ₹3,50,000',
      'Broad claim drafting',
      'Multiple embodiments',
      'Licensing opportunities',
      'Enforcement readiness'
    ],
    targetCustomers: 'Established Companies, Manufacturers, Licensing Businesses',
    pricing: '₹2,95,000 - ₹3,50,000',
    timeline: '3-4 years',
    bestFor: 'Competitive protection, licensing, enforcement'
  },
  {
    title: 'Strategic (Portfolio)',
    subtitle: 'Multi-Jurisdiction IP Strategy',
    description: 'Designed for large corporations and multinational companies who need comprehensive IP strategy and multi-jurisdiction patent protection.',
    icon: <Building2 className="h-8 w-8" />,
    features: [
      'Custom timeline',
      'Custom pricing',
      'Multi-jurisdiction filing',
      'Portfolio strategy',
      'Risk mitigation',
      'Long-term IP management'
    ],
    targetCustomers: 'Large Corporations, Multinational Companies, IP-focused Businesses',
    pricing: 'Custom quotes',
    timeline: 'Variable',
    bestFor: 'Corporate IP strategy, multi-jurisdiction protection'
  }
];

export default function PatentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#333333' }}>
                Patent Services
              </h1>
              <p className="text-xl mb-8" style={{ color: '#6c757d' }}>
                Protect your inventions with comprehensive patent filing services. From initial search 
                to USPTO filing and prosecution, we guide you through every step of the patent process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#contact">
                  <Button 
                    size="lg"
                    className="font-medium"
                    style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                  >
                    Get Patent Quote
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="font-medium"
                    style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
                  >
                    Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                <Shield className="h-16 w-16" style={{ color: '#0066B2' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Segments */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Choose Your Patent Strategy
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Three distinct approaches tailored to different business needs and budgets
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {customerSegments.map((segment, index) => {
              // Define the route for each segment
              const segmentRoutes = ['/services/patents/marketing', '/services/patents/enforcement', '/services/patents/strategic'];
              const segmentRoute = segmentRoutes[index];
              
              return (
                <Link key={index} href={segmentRoute} className="group">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer" 
                        style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" 
                           style={{ backgroundColor: '#e3f2fd' }}>
                        <div style={{ color: '#0066B2' }}>{segment.icon}</div>
                      </div>
                      <CardTitle className="text-2xl font-bold" style={{ color: '#333333' }}>
                        {segment.title}
                      </CardTitle>
                      <p className="text-lg font-semibold" style={{ color: '#0066B2' }}>
                        {segment.subtitle}
                      </p>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <p className="text-center" style={{ color: '#6c757d' }}>
                        {segment.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm" style={{ color: '#333333' }}>
                          Key Features:
                        </h4>
                        <ul className="space-y-2">
                          {segment.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm" style={{ color: '#6c757d' }}>
                              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#0066B2' }}></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium" style={{ color: '#333333' }}>Pricing:</span>
                          <span className="text-sm font-semibold" style={{ color: '#0066B2' }}>{segment.pricing}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium" style={{ color: '#333333' }}>Timeline:</span>
                          <span className="text-sm" style={{ color: '#6c757d' }}>{segment.timeline}</span>
                        </div>
                        <div className="pt-2">
                          <span className="text-xs" style={{ color: '#6c757d' }}>
                            Best for: {segment.bestFor}
                          </span>
                        </div>
                      </div>
                      
                      <div className="pt-4">
                        <Button 
                          className="w-full font-medium group-hover:bg-blue-700"
                          style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                        >
                          Choose {segment.title} →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Our Patent Services
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Complete patent protection from concept to grant
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {patentServices.map((service, index) => (
              <Card key={index} style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <CardHeader>
                  <CardTitle className="text-xl" style={{ color: '#333333' }}>
                    {service.title}
                  </CardTitle>
                  <p style={{ color: '#6c757d' }}>
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4" style={{ color: '#28a745' }} />
                        <span className="text-sm" style={{ color: '#6c757d' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Our Patent Process
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Step-by-step guidance through the patent filing process
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" 
                     style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}>
                  {step.icon}
                </div>
                <div className="text-2xl font-bold mb-2" style={{ color: '#0066B2' }}>
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#333333' }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: '#6c757d' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333333' }}>
            Ready to Protect Your Invention?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6c757d' }}>
            Get expert guidance on patenting your invention and secure your intellectual property rights.
          </p>
          <Link href="#contact">
            <Button 
              size="lg"
              className="font-medium px-8 py-4"
              style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
            >
              Start Your Patent Application
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
