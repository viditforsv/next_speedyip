'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Phone, Clock, Shield } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 text-white" style={{ background: 'linear-gradient(135deg, #0066B2 0%, #004d8c 100%)' }}>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="text-white" style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.3)' }}>
            Limited Time Offer
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ color: '#ffffff' }}>
            Ready to File Your Patent? Get Expert Patent Attorney Help Today
          </h2>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: '#e3f2fd' }}>
            Join 500+ successful inventors who trust SpeedyIP with their patent applications. 
            USPTO-certified attorneys ready to protect your innovation with 30-day filing guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3" style={{ color: '#e3f2fd' }}>
            <Clock className="h-5 w-5" style={{ color: '#ffffff' }} />
            <span>30-Day Filing Guarantee</span>
          </div>
          <div className="flex items-center gap-3" style={{ color: '#e3f2fd' }}>
            <Shield className="h-5 w-5" style={{ color: '#ffffff' }} />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center gap-3" style={{ color: '#e3f2fd' }}>
            <Calendar className="h-5 w-5" style={{ color: '#ffffff' }} />
            <span>Free Consultation</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 hover:bg-gray-100"
            style={{ backgroundColor: '#ffffff', color: '#0066B2' }}
            onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Compare Patent Filing Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            style={{ 
              backgroundColor: 'transparent',
              borderColor: '#ffffff',
              color: '#ffffff'
            }}
          >
            Talk to Patent Attorney
            <Phone className="ml-2 h-5 w-5" aria-hidden="true" />
          </Button>
        </div>

        <div className="pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
          <p className="text-sm" style={{ color: '#e3f2fd' }}>
            Questions? Call us at <span className="font-semibold" style={{ color: '#ffffff' }}>(555) 123-4567</span> or email <span className="font-semibold" style={{ color: '#ffffff' }}>hello@speedyip.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}
