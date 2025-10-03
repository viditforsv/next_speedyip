'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Search, 
  FileText, 
  Send, 
  Clock, 
  CheckCircle, 
  Award,
  Calendar,
  Users
} from 'lucide-react'

interface Stage {
  id: string
  title: string
  icon: React.ReactNode
  duration: string
  effort: number
  description: string
  details: string[]
}

const stages: Stage[] = [
  {
    id: 'novelty',
    title: 'Novelty Search',
    icon: <Search className="h-6 w-6" />,
    duration: '3-5 days',
    effort: 20,
    description: 'Comprehensive prior art search to assess patentability',
    details: [
      'Database searches across USPTO, EPO, and PCT',
      'Academic and industry literature review',
      'Patentability assessment report',
      'Risk analysis and recommendations'
    ]
  },
  {
    id: 'drafting',
    title: 'Patent Drafting',
    icon: <FileText className="h-6 w-6" />,
    duration: '7-10 days',
    effort: 40,
    description: 'Professional patent application preparation',
    details: [
      'Detailed technical specifications',
      'Claims drafting and optimization',
      'Drawings and figures creation',
      'Legal compliance review'
    ]
  },
  {
    id: 'filing',
    title: 'USPTO Filing',
    icon: <Send className="h-6 w-6" />,
    duration: '1-2 days',
    effort: 10,
    description: 'Official submission to USPTO',
    details: [
      'Electronic filing system submission',
      'Filing fee payment',
      'Confirmation receipt',
      'Application number assignment'
    ]
  },
  {
    id: 'examination',
    title: 'Examination Process',
    icon: <Clock className="h-6 w-6" />,
    duration: '12-18 months',
    effort: 15,
    description: 'USPTO examiner review and office actions',
    details: [
      'Examiner assignment and review',
      'Office action responses',
      'Claims amendments',
      'Interview coordination'
    ]
  },
  {
    id: 'allowance',
    title: 'Notice of Allowance',
    icon: <CheckCircle className="h-6 w-6" />,
    duration: '1-2 days',
    effort: 5,
    description: 'USPTO approval notification',
    details: [
      'Allowance notification',
      'Issue fee payment',
      'Final review',
      'Publication scheduling'
    ]
  },
  {
    id: 'grant',
    title: 'Patent Grant',
    icon: <Award className="h-6 w-6" />,
    duration: '2-4 weeks',
    effort: 10,
    description: 'Official patent certificate issuance',
    details: [
      'Patent number assignment',
      'Certificate printing',
      'Official publication',
      'Maintenance schedule'
    ]
  }
]

export default function StageTimeline() {
  const [activeStage, setActiveStage] = useState('novelty')

  return (
    <section id="stage-timeline" className="py-20 px-4" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#333333' }}>
              Patent Filing Process Timeline - From Search to Grant
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6c757d' }}>
              Complete patent filing process from initial novelty search to patent grant. Expert USPTO-certified attorneys guide you through each step.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline Steps */}
          <div className="space-y-4">
            {stages.map((stage) => (
              <Card 
                key={stage.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStage === stage.id ? 'ring-2 ring-blue-600 shadow-lg' : 'hover:shadow-md'
                }`}
                style={{
                  backgroundColor: activeStage === stage.id ? '#e3f2fd' : '#ffffff'
                }}
                onClick={() => setActiveStage(stage.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                      <div style={{ color: '#0066B2' }}>{stage.icon}</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold" style={{ color: '#333333' }}>
                          {stage.title}
                        </h3>
                        <Badge variant="outline" className="text-xs" style={{ borderColor: '#0066B2', color: '#0066B2' }}>
                          {stage.duration}
                        </Badge>
                      </div>
                      <p className="text-sm" style={{ color: '#6c757d' }}>{stage.description}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs" style={{ color: '#6c757d' }}>
                          <span>Effort Level</span>
                          <span>{stage.effort}%</span>
                        </div>
                        <Progress value={stage.effort} className="h-2" style={{ backgroundColor: '#e3f2fd' }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stage Details */}
          <div className="sticky top-8">
            <Tabs value={activeStage} onValueChange={setActiveStage}>
              <TabsList className="grid w-full grid-cols-1">
                <TabsTrigger value={activeStage} className="text-left">
                  {stages.find(s => s.id === activeStage)?.title}
                </TabsTrigger>
              </TabsList>
              
              {stages.map((stage) => (
                <TabsContent key={stage.id} value={stage.id} className="mt-6">
                  <Card>
                    <CardContent className="p-6 space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                          <div style={{ color: '#0066B2' }}>{stage.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold" style={{ color: '#333333' }}>
                            {stage.title}
                          </h3>
                          <p style={{ color: '#6c757d' }}>{stage.description}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-sm" style={{ color: '#6c757d' }}>
                          <Calendar className="h-4 w-4" style={{ color: '#0066B2' }} />
                          <span>Duration: {stage.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm" style={{ color: '#6c757d' }}>
                          <Users className="h-4 w-4" style={{ color: '#0066B2' }} />
                          <span>Team Effort: {stage.effort}%</span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold" style={{ color: '#333333' }}>What We Do:</h4>
                        <ul className="space-y-2">
                          {stage.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#6c757d' }}>
                              <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#0066B2' }} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
