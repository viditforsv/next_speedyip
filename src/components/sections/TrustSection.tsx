'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Users, Award, Clock, CheckCircle, Quote } from 'lucide-react'

interface CounterProps {
  end: number
  duration: number
  suffix?: string
  prefix?: string
}

const Counter = ({ end, duration, suffix = '', prefix = '' }: CounterProps) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const increment = end / (duration / 16) // 60fps

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      
      if (progress < duration) {
        setCount(Math.min(Math.floor(increment * progress), end))
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }, [end, duration])

  return (
    <span className="text-3xl font-bold" style={{ color: '#0066B2' }}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechStart Inc.',
    content: 'SpeedyIP helped us file our core patent in just 30 days. Their expertise saved us months of delays.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Founder, InnovateLab',
    content: 'Professional service from start to finish. Our patent was granted on the first try thanks to their thorough approach.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Research Director, BioTech Corp',
    content: 'Complex biotechnology patent handled expertly. The team understood our technology and delivered exceptional results.',
    rating: 5,
    avatar: 'EW'
  }
]

export default function TrustSection() {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        {/* Stats Counters */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#333333' }}>
              Trusted Patent Filing Service - 500+ Patents Filed Successfully
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6c757d' }}>
              Leading patent filing service with USPTO-certified attorneys and 95% success rate
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Counter end={500} duration={2000} suffix="+" />
              <p className="font-medium" style={{ color: '#6c757d' }}>Patents Filed</p>
            </div>
            <div className="text-center space-y-2">
              <Counter end={95} duration={2000} suffix="%" />
              <p className="font-medium" style={{ color: '#6c757d' }}>Success Rate</p>
            </div>
            <div className="text-center space-y-2">
              <Counter end={30} duration={2000} suffix=" days" />
              <p className="font-medium" style={{ color: '#6c757d' }}>Average Filing Time</p>
            </div>
            <div className="text-center space-y-2">
              <Counter end={15} duration={2000} suffix=" years" />
              <p className="font-medium" style={{ color: '#6c757d' }}>Experience</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#333333' }}>
              What Our Clients Say
            </h3>
            <p className="text-lg" style={{ color: '#6c757d' }}>
              Real feedback from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                      <span className="text-sm font-semibold" style={{ color: '#0066B2' }}>
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: '#333333' }}>{testimonial.name}</h4>
                      <p className="text-sm" style={{ color: '#6c757d' }}>{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="h-6 w-6 absolute -top-2 -left-2" style={{ color: '#e3f2fd' }} />
                    <p className="italic pl-4" style={{ color: '#6c757d' }}>
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16" style={{ borderTop: '1px solid #e3f2fd' }}>
          <div className="text-center space-y-8">
            <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>
              Certified & Accredited
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2" style={{ color: '#6c757d' }}>
                <Award className="h-6 w-6" style={{ color: '#0066B2' }} />
                <span className="font-medium">USPTO Registered</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#6c757d' }}>
                <CheckCircle className="h-6 w-6" style={{ color: '#28a745' }} />
                <span className="font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#6c757d' }}>
                <Users className="h-6 w-6" style={{ color: '#988780' }} />
                <span className="font-medium">AIPLA Member</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: '#6c757d' }}>
                <Clock className="h-6 w-6" style={{ color: '#FFC107' }} />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>

            <div className="rounded-lg p-6 max-w-4xl mx-auto" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: '#0066B2' }}>100%</div>
                  <p className="text-sm" style={{ color: '#6c757d' }}>Confidentiality Guaranteed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: '#28a745' }}>$0</div>
                  <p className="text-sm" style={{ color: '#6c757d' }}>Hidden Fees</p>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: '#988780' }}>30</div>
                  <p className="text-sm" style={{ color: '#6c757d' }}>Day Money-Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
