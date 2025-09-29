'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Check, Globe, Users, Award, FileText, ArrowLeft, Zap, Target } from 'lucide-react';
import Link from 'next/link';

const strategicFeatures = [
  'Custom timeline',
  'Custom pricing',
  'Multi-jurisdiction filing',
  'Portfolio strategy',
  'Risk mitigation',
  'Long-term IP management',
  'Corporate integration',
  'Strategic planning'
];

const processSteps = [
  {
    step: '1',
    title: 'Portfolio Analysis',
    description: 'Comprehensive IP landscape assessment',
    icon: <FileText className="h-6 w-6" />
  },
  {
    step: '2',
    title: 'Strategic Planning',
    description: 'Multi-jurisdiction filing strategy',
    icon: <Building2 className="h-6 w-6" />
  },
  {
    step: '3',
    title: 'Global Filing',
    description: 'Coordinated international patent applications',
    icon: <Globe className="h-6 w-6" />
  },
  {
    step: '4',
    title: 'Portfolio Management',
    description: 'Ongoing strategic IP management',
    icon: <Award className="h-6 w-6" />
  }
];

const jurisdictions = [
  'India (Primary)',
  'United States',
  'European Union',
  'China',
  'Japan',
  'Other Major Markets'
];

export default function StrategicPatentsPage() {
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
                  <Building2 className="h-6 w-6" style={{ color: '#0066B2' }} />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold" style={{ color: '#333333' }}>
                    Strategic Patents
                  </h1>
                  <p className="text-lg font-semibold" style={{ color: '#0066B2' }}>
                    Multi-Jurisdiction IP Strategy
                  </p>
                </div>
              </div>
              
              <p className="text-xl mb-8" style={{ color: '#6c757d' }}>
                Designed for large corporations and multinational companies who need comprehensive IP strategy, 
                multi-jurisdiction patent protection, and long-term portfolio management. Treat IP as a strategic business asset.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="font-medium"
                  style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                >
                  Design Portfolio Strategy
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="font-medium"
                  style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                <Building2 className="h-16 w-16" style={{ color: '#0066B2' }} />
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
              Large organizations with strategic IP needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Large Corporations', 'Multinational Companies', 'IP-focused Businesses'].map((customer, index) => (
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
              Strategic Advantages
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Comprehensive IP strategy for enterprise needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
                <Check className="h-5 w-5" style={{ color: '#28a745' }} />
                <span className="font-medium" style={{ color: '#333333' }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Global Coverage
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Multi-jurisdiction patent filing and management
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jurisdictions.map((jurisdiction, index) => (
              <Card key={index} className="text-center p-6" style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                  <Globe className="h-8 w-8" style={{ color: '#0066B2' }} />
                </div>
                <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>{jurisdiction}</h3>
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
              Strategic Process
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Comprehensive approach for portfolio-level IP management
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

      {/* Custom Pricing */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Custom Pricing
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Tailored solutions for your strategic IP needs
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
              <CardHeader>
                <CardTitle className="text-center text-2xl" style={{ color: '#333333' }}>
                  Strategic Patent Pricing
                </CardTitle>
                <p className="text-center" style={{ color: '#6c757d' }}>
                  Custom quotes based on portfolio scope and requirements
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Portfolio Assessment</h4>
                      <p className="text-sm" style={{ color: '#6c757d' }}>
                        Comprehensive IP landscape analysis and strategy development
                      </p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Multi-Jurisdiction Filing</h4>
                      <p className="text-sm" style={{ color: '#6c757d' }}>
                        Coordinated patent applications across multiple countries
                      </p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Portfolio Management</h4>
                      <p className="text-sm" style={{ color: '#6c757d' }}>
                        Ongoing strategic IP management and optimization
                      </p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                      <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Risk Mitigation</h4>
                      <p className="text-sm" style={{ color: '#6c757d' }}>
                        Strategic defensive and offensive patent strategies
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: '#e3f2fd' }}>
                    <p className="text-sm text-center" style={{ color: '#6c757d' }}>
                      <strong>Custom Engagement:</strong> All pricing is customized based on portfolio scope, 
                      jurisdiction requirements, and strategic objectives. Contact us for a detailed proposal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Strategic Value
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Long-term IP strategy for competitive advantage
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6" style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                <Building2 className="h-8 w-8" style={{ color: '#0066B2' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#333333' }}>Corporate Integration</h3>
              <p style={{ color: '#6c757d' }}>
                Seamless integration with corporate IP strategy and business objectives
              </p>
            </Card>
            
            <Card className="text-center p-6" style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                <Globe className="h-8 w-8" style={{ color: '#0066B2' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#333333' }}>Global Protection</h3>
              <p style={{ color: '#6c757d' }}>
                Comprehensive protection across all key markets and jurisdictions
              </p>
            </Card>
            
            <Card className="text-center p-6" style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                <Award className="h-8 w-8" style={{ color: '#0066B2' }} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: '#333333' }}>Long-term Value</h3>
              <p style={{ color: '#6c757d' }}>
                Build valuable IP assets that support long-term business growth
              </p>
            </Card>
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
            {/* Marketing Card */}
            <Link href="/services/patents/marketing" className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105" 
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" 
                       style={{ backgroundColor: '#e3f2fd' }}>
                    <Zap className="h-8 w-8" style={{ color: '#0066B2' }} />
                  </div>
                  <CardTitle className="text-2xl font-bold" style={{ color: '#333333' }}>
                    Marketing (Fast Grant)
                  </CardTitle>
                  <p className="text-lg font-semibold" style={{ color: '#0066B2' }}>
                    Quick Credibility & Visibility
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-center" style={{ color: '#6c757d' }}>
                    Perfect for startups and entrepreneurs who need fast patent grants for investor presentations and credibility building.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium" style={{ color: '#333333' }}>Pricing:</span>
                      <span className="text-sm font-semibold" style={{ color: '#0066B2' }}>₹1,65,000 - ₹2,00,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium" style={{ color: '#333333' }}>Timeline:</span>
                      <span className="text-sm" style={{ color: '#6c757d' }}>2-3 years</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-xs" style={{ color: '#6c757d' }}>
                        Best for: Quick grants, investor decks, academic submissions
                      </span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      className="w-full font-medium group-hover:bg-blue-700"
                      style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                    >
                      Learn About Marketing Patents →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>

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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333333' }}>
            Design Your IP Strategy
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6c757d' }}>
            Let's create a comprehensive patent strategy that supports your business objectives and competitive position.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="font-medium px-8 py-4"
              style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
            >
              Schedule Strategy Session
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
