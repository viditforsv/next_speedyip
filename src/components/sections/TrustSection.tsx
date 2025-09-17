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
    <span className="text-3xl font-bold text-blue-600">
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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Stats Counters */}
        <div className="text-center space-y-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Trusted Patent Filing Service - 500+ Patents Filed Successfully
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Leading patent filing service with USPTO-certified attorneys and 95% success rate
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <Counter end={500} duration={2000} suffix="+" />
              <p className="text-gray-600 font-medium">Patents Filed</p>
            </div>
            <div className="text-center space-y-2">
              <Counter end={95} duration={2000} suffix="%" />
              <p className="text-gray-600 font-medium">Success Rate</p>
            </div>
            <div className="text-center space-y-2">
              <Counter end={30} duration={2000} suffix=" days" />
              <p className="text-gray-600 font-medium">Average Filing Time</p>
            </div>
            <div className="text-center space-y-2">
              <Counter end={15} duration={2000} suffix=" years" />
              <p className="text-gray-600 font-medium">Experience</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              What Our Clients Say
            </h3>
            <p className="text-lg text-gray-600">
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
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-semibold text-blue-600">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="h-6 w-6 text-gray-300 absolute -top-2 -left-2" />
                    <p className="text-gray-700 italic pl-4">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <div className="text-center space-y-8">
            <h3 className="text-xl font-semibold text-gray-900">
              Certified & Accredited
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="flex items-center gap-2 text-gray-600">
                <Award className="h-6 w-6 text-blue-500" />
                <span className="font-medium">USPTO Registered</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <span className="font-medium">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-6 w-6 text-purple-500" />
                <span className="font-medium">AIPLA Member</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-6 w-6 text-orange-500" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">100%</div>
                  <p className="text-sm text-gray-600">Confidentiality Guaranteed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600 mb-2">$0</div>
                  <p className="text-sm text-gray-600">Hidden Fees</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">30</div>
                  <p className="text-sm text-gray-600">Day Money-Back Guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
