'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Check, Clock, Users, Award, FileText } from 'lucide-react';

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
                <Button 
                  size="lg"
                  className="font-medium"
                  style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                >
                  Get Patent Quote
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
                <Shield className="h-16 w-16" style={{ color: '#0066B2' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
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
          <Button 
            size="lg"
            className="font-medium px-8 py-4"
            style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
          >
            Start Your Patent Application
          </Button>
        </div>
      </section>
    </div>
  );
}
