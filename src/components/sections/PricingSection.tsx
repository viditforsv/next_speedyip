'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Star, Zap, Shield, Crown } from 'lucide-react'

interface PricingTier {
  name: string
  price: string
  range: string
  icon: React.ReactNode
  features: string[]
  popular?: boolean
  cta: string
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Express',
    price: '$3,500',
    range: '$3,000 - $4,000',
    icon: <Zap className="h-6 w-6" />,
    features: [
      'Basic novelty search',
      'Standard patent drafting',
      'USPTO filing',
      '30-day turnaround',
      'Email support'
    ],
    cta: 'Get Express Quote'
  },
  {
    name: 'Professional',
    price: '$6,500',
    range: '$5,500 - $7,500',
    icon: <Shield className="h-6 w-6" />,
    features: [
      'Comprehensive novelty search',
      'Advanced patent drafting',
      'USPTO filing + prosecution',
      'Office action responses',
      'Priority support',
      'Patent strategy consultation'
    ],
    popular: true,
    cta: 'Get Professional Quote'
  },
  {
    name: 'Premium',
    price: '$12,000',
    range: '$10,000 - $15,000',
    icon: <Crown className="h-6 w-6" />,
    features: [
      'Full prior art analysis',
      'Premium patent drafting',
      'Complete prosecution',
      'Unlimited office actions',
      'Dedicated attorney',
      'Portfolio strategy',
      'International filing support'
    ],
    cta: 'Get Premium Quote'
  }
]

export default function PricingSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-12">
          <div className="space-y-4">
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#695853' }}>
              Choose the plan that fits your patent needs. All prices include USPTO filing fees.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.name}
              className={`relative transition-all duration-300 hover:shadow-lg ${
                tier.popular ? 'scale-105' : 'hover:shadow-md'
              }`}
              style={{ 
                borderColor: tier.popular ? '#988780' : '#e7ded9',
                borderWidth: tier.popular ? '2px' : '1px'
              }}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="px-4 py-1" style={{ backgroundColor: '#988780', color: '#ffffff' }}>
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e7ded9' }}>
                  <div style={{ color: '#13292a' }}>{tier.icon}</div>
                </div>
                <CardTitle className="text-2xl font-bold" style={{ color: '#13292a' }}>
                  {tier.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-3xl font-bold" style={{ color: '#988780' }}>
                    {tier.price}
                  </div>
                  <div className="text-sm" style={{ color: '#695853' }}>
                    Range: {tier.range}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#8f6152' }} />
                      <span className="text-sm" style={{ color: '#695853' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full font-medium"
                  size="lg"
                  style={{ 
                    backgroundColor: tier.popular ? '#13292a' : '#988780',
                    color: '#ffffff'
                  }}
                >
                  {tier.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center space-y-4">
          <div className="rounded-lg p-6 max-w-4xl mx-auto" style={{ backgroundColor: '#e7ded9' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: '#13292a' }}>
              What&apos;s Included in All Plans
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm" style={{ color: '#695853' }}>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4" style={{ color: '#8f6152' }} />
                <span>USPTO Filing Fees</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4" style={{ color: '#8f6152' }} />
                <span>Patent Attorney Review</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Check className="h-4 w-4" style={{ color: '#8f6152' }} />
                <span>Application Tracking</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
