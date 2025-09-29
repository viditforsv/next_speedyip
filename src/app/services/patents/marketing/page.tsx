'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Check, Users, Award, FileText, ArrowLeft, Target, Building2 } from 'lucide-react';
import Link from 'next/link';

const marketingFeatures = [
  '2-3 years to grant',
  '₹1,65,000 - ₹2,00,000',
  'Streamlined drafting',
  'Grant-oriented approach',
  'Investor presentations',
  'Academic submissions',
  'Fast turnaround',
  'Cost-effective solution'
];

const processSteps = [
  {
    step: '1',
    title: 'Quick Assessment',
    description: 'Rapid patentability evaluation and prior art check',
    icon: <FileText className="h-6 w-6" />
  },
  {
    step: '2',
    title: 'Streamlined Drafting',
    description: 'Efficient specification preparation focused on grant',
    icon: <Zap className="h-6 w-6" />
  },
  {
    step: '3',
    title: 'Fast Filing',
    description: 'Expedited USPTO submission process',
    icon: <Award className="h-6 w-6" />
  },
  {
    step: '4',
    title: 'Grant-Focused Prosecution',
    description: 'Acceptance-oriented office action responses',
    icon: <Check className="h-6 w-6" />
  }
];

const pricingBreakdown = [
  { stage: 'Novelty Search', price: '₹20,000' },
  { stage: 'Provisional Specification', price: '₹20,000' },
  { stage: 'Complete Specification', price: '₹50,000' },
  { stage: 'FER Response', price: '₹35,000' },
  { stage: 'Hearing & Submissions', price: '₹40,000' },
  { stage: 'Final Disposal', price: 'Included' }
];

export default function MarketingPatentsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <Link href="/services/patents" className="inline-flex items-center gap-2 text-sm font-medium hover:underline" style={{ color: '#0066B2' }}>
              <ArrowLeft className="h-4 w-4" />
              Back to Patent Services
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                  <Zap className="h-6 w-6" style={{ color: '#0066B2' }} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#333333' }}>
                    Marketing Patents
                  </h1>
                  <p className="text-lg font-semibold" style={{ color: '#0066B2' }}>
                    Fast Grant for Credibility & Visibility
                  </p>
                </div>
              </div>
              
              <p className="text-xl mb-8" style={{ color: '#6c757d' }}>
                Perfect for startups, entrepreneurs, and academics who need fast patent grants for investor presentations, 
                credibility building, and academic submissions. Get your patent quickly without compromising quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="font-medium"
                  style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                >
                  Get Marketing Patent Quote
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="font-medium"
                  style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
                >
                  Free Consultation
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                <Zap className="h-16 w-16" style={{ color: '#0066B2' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Perfect For
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Ideal customer segments for fast patent grants
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Startups', 'Entrepreneurs', 'Academics', 'Investors'].map((customer, index) => (
              <Card key={index} className="text-center p-6" style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                  <Users className="h-8 w-8" style={{ color: '#0066B2' }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>{customer}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Key Features
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              What makes our Marketing Patent approach unique
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                <Check className="h-5 w-5" style={{ color: '#28a745' }} />
                <span className="font-medium" style={{ color: '#333333' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Transparent Pricing
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Stage-wise professional fees for Marketing Patents
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
              <CardHeader>
                <CardTitle className="text-center text-2xl" style={{ color: '#333333' }}>
                  Marketing Patent Pricing
                </CardTitle>
                <p className="text-center" style={{ color: '#6c757d' }}>
                  Total: ₹1,65,000 - ₹2,00,000 (excluding government fees)
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pricingBreakdown.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <span className="font-medium" style={{ color: '#333333' }}>{item.stage}</span>
                      <span className="font-semibold" style={{ color: '#0066B2' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#e3f2fd' }}>
                  <p className="text-sm text-center" style={{ color: '#6c757d' }}>
                    <strong>Note:</strong> Government fees and taxes are additional. Pricing may vary based on technical complexity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Fast Track Process
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Streamlined approach for quick patent grants
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Other Patent Models */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Explore Other Patent Models
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Not sure which model is right for you? Compare all our patent approaches
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Enforcement Card */}
            <Link href="/services/patents/enforcement" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105" 
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" 
                       style={{ backgroundColor: '#e3f2fd' }}>
                    <Target className="h-8 w-8" style={{ color: '#0066B2' }} />
                  </div>
                  <CardTitle className="text-2xl font-bold" style={{ color: '#333333' }}>
                    Enforcement (Commercialization)
                  </CardTitle>
                  <p className="text-lg font-semibold" style={{ color: '#0066B2' }}>
                    Competitive Protection & Licensing
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-center" style={{ color: '#6c757d' }}>
                    Ideal for established companies who need strong, enforceable patent rights for competitive advantage and licensing opportunities.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium" style={{ color: '#333333' }}>Pricing:</span>
                      <span className="text-sm font-semibold" style={{ color: '#0066B2' }}>₹2,95,000 - ₹3,50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium" style={{ color: '#333333' }}>Timeline:</span>
                      <span className="text-sm" style={{ color: '#6c757d' }}>3-4 years</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs" style={{ color: '#6c757d' }}>
                        Best for: Competitive protection, licensing, enforcement
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full font-medium group-hover:bg-blue-700"
                      style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                    >
                      Learn About Enforcement Patents →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Strategic Card */}
            <Link href="/services/patents/strategic" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105" 
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" 
                       style={{ backgroundColor: '#e3f2fd' }}>
                    <Building2 className="h-8 w-8" style={{ color: '#0066B2' }} />
                  </div>
                  <CardTitle className="text-2xl font-bold" style={{ color: '#333333' }}>
                    Strategic (Portfolio)
                  </CardTitle>
                  <p className="text-lg font-semibold" style={{ color: '#0066B2' }}>
                    Multi-Jurisdiction IP Strategy
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-center" style={{ color: '#6c757d' }}>
                    Designed for large corporations who need comprehensive IP strategy and multi-jurisdiction patent protection.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium" style={{ color: '#333333' }}>Pricing:</span>
                      <span className="text-sm font-semibold" style={{ color: '#0066B2' }}>Custom quotes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium" style={{ color: '#333333' }}>Timeline:</span>
                      <span className="text-sm" style={{ color: '#6c757d' }}>Variable</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs" style={{ color: '#6c757d' }}>
                        Best for: Corporate IP strategy, multi-jurisdiction protection
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full font-medium group-hover:bg-blue-700"
                      style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                    >
                      Learn About Strategic Patents →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333333' }}>
            Ready for Fast Patent Grant?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6c757d' }}>
            Get your marketing patent quickly and cost-effectively. Perfect for startups and entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="font-medium px-8 py-4"
              style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
            >
              Start Marketing Patent
            </Button>
            <Link href="/services/patents">
              <Button 
                variant="outline"
                size="lg"
                className="font-medium px-8 py-4"
                style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
              >
                Compare All Models
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
