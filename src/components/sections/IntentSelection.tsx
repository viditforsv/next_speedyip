'use client'

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Target, Shield, TrendingUp, ArrowRight } from 'lucide-react'

interface IntentCardProps {
  title: string
  description: string
  icon: React.ReactNode
  badge: string
  isSelected: boolean
  onClick: () => void
}

const IntentCard = ({ title, description, icon, badge, isSelected, onClick }: IntentCardProps) => (
  <Card 
    className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
      isSelected ? 'shadow-lg' : 'hover:shadow-md'
    }`}
    style={{ 
      borderColor: isSelected ? '#988780' : '#e7ded9',
      borderWidth: isSelected ? '2px' : '1px',
      backgroundColor: isSelected ? '#f5f1ed' : '#ffffff'
    }}
    onClick={onClick}
  >
    <CardContent className="p-6 text-center space-y-4">
      <div className="mx-auto w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e7ded9' }}>
        <div style={{ color: '#13292a' }}>{icon}</div>
      </div>
      <Badge 
        variant={isSelected ? "default" : "secondary"} 
        className="text-xs"
        style={{ 
          backgroundColor: isSelected ? '#988780' : '#e7ded9',
          color: isSelected ? '#ffffff' : '#13292a'
        }}
      >
        {badge}
      </Badge>
      <h3 className="text-xl font-semibold" style={{ color: '#13292a' }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#695853' }}>{description}</p>
      <div className="flex items-center justify-center font-medium text-sm" style={{ color: '#988780' }}>
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </div>
    </CardContent>
  </Card>
)

export default function IntentSelection() {
  const [selectedIntent, setSelectedIntent] = useState<string | null>(null)

  const intents = [
    {
      id: 'marketing',
      title: 'Marketing-Focused Patent',
      description: 'Build competitive advantage and market positioning through strategic patent protection.',
      icon: <Target className="h-6 w-6" />,
      badge: 'Market Ready'
    },
    {
      id: 'enforcement',
      title: 'Enforcement & Licensing Patent',
      description: 'Create strong patents for licensing revenue and enforcement against competitors.',
      icon: <Shield className="h-6 w-6" />,
      badge: 'Enforcement Ready'
    },
    {
      id: 'strategic',
      title: 'Strategic Portfolio Development',
      description: 'Build comprehensive patent portfolios for long-term business strategy.',
      icon: <TrendingUp className="h-6 w-6" />,
      badge: 'Portfolio Ready'
    }
  ]

  const handleIntentClick = (intentId: string) => {
    setSelectedIntent(intentId)
    // Auto-scroll to Stage Timeline
    setTimeout(() => {
      document.getElementById('stage-timeline')?.scrollIntoView({ 
        behavior: 'smooth' 
      })
    }, 300)
  }

  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#ffffff' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#13292a' }}>
              What&apos;s Your Patent Goal?
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#695853' }}>
              Choose your primary objective to see a customized patent process timeline
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {intents.map((intent) => (
              <IntentCard
                key={intent.id}
                title={intent.title}
                description={intent.description}
                icon={intent.icon}
                badge={intent.badge}
                isSelected={selectedIntent === intent.id}
                onClick={() => handleIntentClick(intent.id)}
              />
            ))}
          </div>

          {selectedIntent && (
            <div className="mt-8 p-4 rounded-lg max-w-2xl mx-auto" style={{ backgroundColor: '#e7ded9' }}>
              <p className="font-medium" style={{ color: '#13292a' }}>
                ✓ Selected: {intents.find(i => i.id === selectedIntent)?.title}
              </p>
              <p className="text-sm mt-1" style={{ color: '#695853' }}>
                Scroll down to see your customized patent timeline
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
