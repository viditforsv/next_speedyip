'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, Phone, Clock, Shield } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
            Limited Time Offer
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Protect Your Innovation?
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Join hundreds of successful inventors who trust SpeedyIP with their most valuable ideas. 
            Get started today and secure your competitive advantage.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="flex items-center gap-3 text-blue-100">
            <Clock className="h-5 w-5 text-blue-200" />
            <span>30-Day Filing Guarantee</span>
          </div>
          <div className="flex items-center gap-3 text-blue-100">
            <Shield className="h-5 w-5 text-blue-200" />
            <span>100% Confidential</span>
          </div>
          <div className="flex items-center gap-3 text-blue-100">
            <Calendar className="h-5 w-5 text-blue-200" />
            <span>Free Consultation</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 bg-white text-blue-600 hover:bg-gray-100"
            onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Compare Plans
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-blue-600"
          >
            Talk to Attorney
            <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="pt-8 border-t border-blue-500/30">
          <p className="text-blue-200 text-sm">
            Questions? Call us at <span className="font-semibold text-white">(555) 123-4567</span> or email <span className="font-semibold text-white">hello@speedyip.com</span>
          </p>
        </div>
      </div>
    </section>
  )
}
