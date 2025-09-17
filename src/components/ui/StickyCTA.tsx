'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp, MessageCircle } from 'lucide-react'

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-24 z-50 space-y-3" role="complementary" aria-label="Quick actions">
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Get a quote - scroll to contact form"
      >
        <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
        Get Quote
      </Button>
      
      <Button
        size="sm"
        variant="outline"
        className="bg-white hover:bg-gray-100 shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </Button>
    </div>
  )
}
