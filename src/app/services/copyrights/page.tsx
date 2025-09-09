'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copyright, Check, FileText, DollarSign, Target, Briefcase, Scale } from 'lucide-react';

const userJourney = [
  {
    id: 'ownership',
    title: 'Ownership Clarity',
    who: 'Creators, startups, businesses hiring freelancers/employees',
    promise: 'Clear authorship & ownership, clean chain of title',
    features: [
      'Authorship advisory & copyrightability opinions',
      'Work-for-hire and assignment drafting/review',
      'Authorship/ownership advisory & copyrightability opinions'
    ],
    pricing: [
      'Advisory: ₹5,000/hr (min 1 hr; 30-min steps)',
      'Standard Agreement: Starts ₹15,000 (~3 hrs)',
      'Complex Agreement: Starts ₹15,000 (min 3 hrs; scales with complexity)'
    ],
    icon: <Target className="h-6 w-6" />
  },
  {
    id: 'registration',
    title: 'Copyright Registration',
    who: 'Clients needing official records before publishing/distribution',
    promise: 'Accurate filings and recordals, complete documentation',
    features: [
      'Filing assistance per work',
      'Recordals of assignment/transfer',
      'Pre-filing advisory checks',
      'Filings executed via associates; we prepare & coordinate end-to-end'
    ],
    pricing: [
      'Filing + Associate Advisory: Starts ₹15,000 (Govt. fee extra)',
      'Add-on Advisory: ₹5,000/hr'
    ],
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 'license',
    title: 'License & Assign',
    who: 'Creators/companies granting usage rights',
    promise: 'Draft/review agreements to retain control and value',
    features: [
      'Exclusive/non-exclusive licenses, assignments',
      'Usage scopes (term, territory, royalty clauses)',
      'Digital distribution terms'
    ],
    pricing: [
      'Standard Agreement: Starts ₹15,000',
      'Complex Agreement: Starts ₹15,000 (min 3 hrs)',
      'Reviews/Advisory: ₹5,000/hr'
    ],
    icon: <Briefcase className="h-6 w-6" />
  },
  {
    id: 'monetization',
    title: 'Royalty & Monetization',
    who: 'Creators and businesses planning revenue via licensing/syndication',
    promise: 'Practical royalty frameworks and licensing strategies',
    features: [
      'Licensing strategies & royalty frameworks',
      'Guidance on collective rights bodies'
    ],
    pricing: [
      'Advisory Memos: ₹5,000/hr',
      'Complex Revenue Share: As complex agreements (start ₹15,000; min 3 hrs)'
    ],
    icon: <DollarSign className="h-6 w-6" />
  },
  {
    id: 'strategy',
    title: 'Portfolio & Strategy (SoP)',
    who: 'Institutions, publishers, corporates treating copyright as strategic asset',
    promise: 'Custom engagement after SoP review; no public price list',
    features: [
      'Portfolio audits & management',
      'Commercialization roadmaps',
      'Integration with trademarks/patents/brand',
      'IP portfolio strategy'
    ],
    pricing: ['Custom engagement after SoP review'],
    icon: <Scale className="h-6 w-6" />
  }
];

const pricingStructure = [
  {
    activity: 'Opinions / Advisory / Reviews',
    fee: '₹5,000 / hour',
    note: 'Minimum 1 hour; 30-minute increments thereafter'
  },
  {
    activity: 'Work‑for‑Hire / Assignment (Standard)',
    fee: 'Starts ₹15,000',
    note: 'Typically ~3 hours depending on inputs/iterations'
  },
  {
    activity: 'Agreements (Complex)',
    fee: 'Starts ₹15,000',
    note: 'Minimum billing 3 hours; scales with complexity'
  },
  {
    activity: 'Copyright Filing + Associate Advisory (per work)',
    fee: 'Starts ₹15,000',
    note: 'Govt. fee extra by category; add advisory at ₹5,000/hr if opinions/directions on the work are needed pre‑filing'
  },
  {
    activity: 'Recordal of Assignment / Transfer',
    fee: 'Starts ₹10,000',
    note: 'Govt. fee extra; depends on document set & work types'
  },
  {
    activity: 'Coordination with Associates (disputes/takedowns)',
    fee: 'Starts ₹10,000',
    note: 'Effort‑based escalation; external counsel fees separate'
  },
  {
    activity: 'Memos / Written Notes / Session Summaries',
    fee: '₹5,000 / hour',
    note: 'Minimum 1 hour; 30‑minute increments thereafter'
  },
  {
    activity: 'Bulk Instructions (multiple works/agreements)',
    fee: 'Discounted',
    note: 'Per‑unit fees reduce with volume (itemized in your estimate)'
  }
];

const trustIndicators = [
  'Attorney-led',
  'Activity-wise fees (Govt. fees extra)',
  'Bulk discounts',
  'Coordination with associates (for disputes)'
];

const faqs = [
  {
    q: 'Are Govt fees included?',
    a: 'No—Govt. fees extra per work category.'
  },
  {
    q: 'Certificate timelines guaranteed?',
    a: 'No—Govt. processing applies.'
  },
  {
    q: 'Bulk discounts?',
    a: 'Yes—per-unit professional fees reduce with multiple works/agreements.'
  },
  {
    q: 'Disputes/enforcement?',
    a: 'We coordinate with external associates; litigation not advertised.'
  },
  {
    q: 'How is advisory/review billed?',
    a: '₹5,000/hr (min 1 hr; 30-min increments).'
  }
];

export default function CopyrightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#333333' }}>
                Copyright Advisory, Registration Assistance & Agreements in India
              </h1>
              <p className="text-xl mb-8" style={{ color: '#6c757d' }}>
                Get ownership clarity, file your copyright, draft or review license/assignment agreements, 
                plan monetization—or request a custom portfolio strategy.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {trustIndicators.map((indicator, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {indicator}
                  </Badge>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="font-medium"
                  style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                >
                  Get Activity‑Wise Estimate
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="font-medium"
                  style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
                >
                  Talk to a Professional
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                <Copyright className="h-16 w-16" style={{ color: '#0066B2' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              What do you need today?
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Choose the path that fits your copyright needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {userJourney.map((service, index) => (
              <Card key={index} style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}>
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl" style={{ color: '#333333' }}>
                      {service.title}
                    </CardTitle>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium" style={{ color: '#0066B2' }}>
                      <strong>Who:</strong> {service.who}
                    </p>
                    <p className="text-sm" style={{ color: '#6c757d' }}>
                      <strong>Promise:</strong> {service.promise}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>What We Do:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: '#28a745' }} />
                            <span className="text-sm" style={{ color: '#6c757d' }}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Pricing:</h4>
                      <ul className="space-y-1">
                        {service.pricing.map((price, idx) => (
                          <li key={idx} className="text-sm" style={{ color: '#6c757d' }}>
                            {price}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button 
                        size="sm"
                        className="font-medium"
                        style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                      >
                        Get Estimate
                      </Button>
                      <Button 
                        variant="outline"
                        size="sm"
                        className="font-medium"
                        style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Activity‑Wise Professional Fees
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Transparent pricing for all copyright services
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{ backgroundColor: '#FFFFFF' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th className="text-left p-4 font-semibold border-b" style={{ color: '#333333' }}>
                    Activity
                  </th>
                  <th className="text-left p-4 font-semibold border-b" style={{ color: '#333333' }}>
                    Professional Fee
                  </th>
                  <th className="text-left p-4 font-semibold border-b" style={{ color: '#333333' }}>
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingStructure.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-4 align-top font-medium" style={{ color: '#333333' }}>
                      {item.activity}
                    </td>
                    <td className="p-4 align-top whitespace-nowrap font-semibold" style={{ color: '#0066B2' }}>
                      {item.fee}
                    </td>
                    <td className="p-4 align-top text-sm" style={{ color: '#6c757d' }}>
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs mt-4" style={{ color: '#6c757d' }}>
            Government fees & taxes are additional and vary by work category. Scope changes and complexity may affect fees. 
            Government processing applies; no promise of certificate timelines.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>
              Frequently Asked Questions
            </h2>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Common questions about our copyright services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2" style={{ color: '#333333' }}>
                    {faq.q}
                  </h3>
                  <p style={{ color: '#6c757d' }}>
                    {faq.a}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#333333' }}>
            Ready to Protect Your Creative Works?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#6c757d' }}>
            Get expert guidance on copyrighting your creative works and secure your intellectual property rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="font-medium px-8 py-4"
              style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
            >
              Get Activity‑Wise Estimate
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="font-medium px-8 py-4"
              style={{ backgroundColor: '#FFFFFF', color: '#0066B2', borderColor: '#0066B2' }}
            >
              Talk to a Professional
            </Button>
          </div>
          <p className="text-xs mt-4" style={{ color: '#6c757d' }}>
            Govt. fees are additional. Govt. processing applies; no certificate timelines are promised. 
            Filings executed via associates; we prepare & coordinate end‑to‑end.
          </p>
        </div>
      </section>
    </div>
  );
}
