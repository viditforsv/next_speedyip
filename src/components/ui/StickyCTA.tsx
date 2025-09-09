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
    <div className="fixed bottom-6 right-6 z-50 space-y-3">
      <Button
        size="lg"
        className="bg-blue-600 hover:bg-blue-700 shadow-lg"
        onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Get Quote
      </Button>
      
      <Button
        size="sm"
        variant="outline"
        className="bg-white hover:bg-gray-100 shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  )
}
