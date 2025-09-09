'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ChevronRight, Shield, Clock, Users } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative py-20 px-4" style={{ background: 'linear-gradient(135deg, #e7ded9 0%, #f5f1ed 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm font-medium" style={{ backgroundColor: '#988780', color: '#ffffff' }}>
              Trusted by 500+ Innovators
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: '#13292a' }}>
              Get Your Patent Filed{' '}
              <span style={{ color: '#988780' }}>Fast & Right</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#695853' }}>
              Expert patent attorneys deliver quality patents in record time. 
              From novelty search to grant - we handle everything.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <div className="flex items-center gap-2 text-sm" style={{ color: '#695853' }}>
              <Shield className="h-5 w-5" style={{ color: '#8f6152' }} />
              <span>USPTO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#695853' }}>
              <Clock className="h-5 w-5" style={{ color: '#988780' }} />
              <span>30-Day Filing</span>
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: '#695853' }}>
              <Users className="h-5 w-5" style={{ color: '#13292a' }} />
              <span>500+ Patents Filed</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 font-medium"
              style={{ backgroundColor: '#13292a', color: '#ffffff' }}
            >
              Compare Plans
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 font-medium"
              style={{ 
                borderColor: '#13292a', 
                color: '#13292a',
                backgroundColor: 'transparent'
              }}
            >
              Get a Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/blog">
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-lg px-8 py-6 font-medium"
                style={{ color: '#988780' }}
              >
                Read Blog
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="pt-8">
            <p className="text-sm mb-4" style={{ color: '#695853' }}>Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-lg font-semibold" style={{ color: '#988780' }}>TechCorp</div>
              <div className="text-lg font-semibold" style={{ color: '#988780' }}>InnovateLab</div>
              <div className="text-lg font-semibold" style={{ color: '#988780' }}>StartupXYZ</div>
              <div className="text-lg font-semibold" style={{ color: '#988780' }}>PatentPro</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
