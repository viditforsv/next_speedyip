'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Upload, Send, Calendar, Phone } from 'lucide-react'

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inventionType: '',
    model: '',
    internationalFiling: false,
    description: '',
    file: null as File | null
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({ ...prev, file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="lead-capture" className="py-20 px-4 bg-green-50">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <Send className="h-8 w-8 text-white" />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-gray-600">
              We&apos;ve received your information and will contact you within 24 hours with your detailed quote.
            </p>
          </div>
          <div className="space-y-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
            </Button>
            <p className="text-sm text-gray-500">
              Or call us directly at <span className="font-semibold">(555) 123-4567</span>
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-capture" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Get Your Detailed Quote
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your invention and we&apos;ll provide a customized patent strategy and pricing
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Patent Information
              </CardTitle>
              <p className="text-gray-600">
                All information is confidential and secure
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Type of Invention *
                  </label>
                  <Select onValueChange={(value) => handleInputChange('inventionType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select invention type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software">Software/App</SelectItem>
                      <SelectItem value="hardware">Hardware/Device</SelectItem>
                      <SelectItem value="process">Process/Method</SelectItem>
                      <SelectItem value="chemical">Chemical/Pharmaceutical</SelectItem>
                      <SelectItem value="mechanical">Mechanical</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="biotech">Biotechnology</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Preferred Service Model
                  </label>
                  <Select onValueChange={(value) => handleInputChange('model', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service model" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="express">Express ($3,500)</SelectItem>
                      <SelectItem value="professional">Professional ($6,500)</SelectItem>
                      <SelectItem value="premium">Premium ($12,000)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Invention Description
                  </label>
                  <Textarea
                    placeholder="Briefly describe your invention and its key features..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Upload Documents (Optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Drop files here or click to upload
                    </p>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.txt"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Button type="button" variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </label>
                    {formData.file && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {formData.file.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="international"
                    checked={formData.internationalFiling}
                    onCheckedChange={(checked) => handleInputChange('internationalFiling', checked as boolean)}
                  />
                  <label htmlFor="international" className="text-sm text-gray-700">
                    I&apos;m interested in international patent filing
                  </label>
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Send className="mr-2 h-5 w-5" />
                  Get My Detailed Quote
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  What Happens Next?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Instant Confirmation</h4>
                    <p className="text-sm text-gray-600">You&apos;ll receive an email confirmation within minutes</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Review</h4>
                    <p className="text-sm text-gray-600">Our patent attorney will review your invention details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Quote</h4>
                    <p className="text-sm text-gray-600">Receive a detailed quote within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free Consultation</h4>
                    <p className="text-sm text-gray-600">Schedule a free 30-minute consultation call</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">
                    Prefer to Talk?
                  </h3>
                </div>
                <p className="text-blue-800 text-sm mb-4">
                  Speak directly with our patent attorney for immediate answers
                </p>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700 hover:bg-blue-100">
                  Call (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
