'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Shield, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section 
      className="relative py-20 px-4" 
      style={{ background: 'linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 100%)' }}
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <Badge 
              variant="secondary" 
              className="text-sm font-medium" 
              style={{ backgroundColor: '#988780', color: '#ffffff' }}
              role="banner"
            >
              Trusted by 500+ Innovators
            </Badge>
            <h1 
              id="hero-heading"
              className="text-4xl md:text-6xl font-bold leading-tight" 
              style={{ color: '#333333' }}
            >
              Get Your Patent Filed{' '}
              <span style={{ color: '#0066B2' }}>Fast & Right</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#6c757d' }}>
              Expert patent attorneys deliver quality patents in record time. 
              From novelty search to grant - we handle everything.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 items-center" role="list" aria-label="Trust indicators">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6c757d' }} role="listitem">
              <Shield className="h-5 w-5" style={{ color: '#0066B2' }} aria-hidden="true" />
              <span>USPTO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6c757d' }} role="listitem">
              <Clock className="h-5 w-5" style={{ color: '#FFC107' }} aria-hidden="true" />
              <span>30-Day Filing</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#6c757d' }} role="listitem">
              <Users className="h-5 w-5" style={{ color: '#333333' }} aria-hidden="true" />
              <span>500+ Patents Filed</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center" role="group" aria-label="Main actions">
            <Link href="/services">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}
                aria-label="Compare patent filing plans and services"
              >
                Compare Plans
                <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              style={{ 
                borderColor: '#0066B2', 
                color: '#0066B2',
                backgroundColor: '#FFFFFF'
              }}
              aria-label="Get a personalized quote"
            >
              Get a Quote
              <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
            <Link href="/blog">
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-lg px-8 py-6 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:bg-blue-50"
                style={{ 
                  color: '#0066B2',
                  backgroundColor: 'transparent'
                }}
                aria-label="Read our patent blog"
              >
                Read Blog
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-8">
            <p className="text-sm mb-4" style={{ color: '#6c757d' }}>Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60" role="list" aria-label="Client companies">
              <div className="text-lg font-semibold" style={{ color: '#0066B2' }} role="listitem">TechCorp</div>
              <div className="text-lg font-semibold" style={{ color: '#0066B2' }} role="listitem">InnovateLab</div>
              <div className="text-lg font-semibold" style={{ color: '#0066B2' }} role="listitem">StartupXYZ</div>
              <div className="text-lg font-semibold" style={{ color: '#0066B2' }} role="listitem">PatentPro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
