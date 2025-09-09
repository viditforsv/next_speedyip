"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useState, useEffect } from "react"
import { 
  MousePointer, 
  FileText, 
  CreditCard, 
  Tag, 
  Layout, 
  Type, 
  Palette, 
  MousePointer2, 
  Smartphone 
} from "lucide-react"

export default function ComponentsDemoPage() {
  const [activeTab, setActiveTab] = useState("buttons")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const tabs = [
    { id: "colors", label: "Colors", icon: Palette },
    { id: "buttons", label: "Buttons", icon: MousePointer },
    { id: "forms", label: "Forms", icon: FileText },
    { id: "cards", label: "Cards", icon: CreditCard },
    { id: "badges", label: "Badges", icon: Tag },
    { id: "layout", label: "Layout", icon: Layout },
    { id: "typography", label: "Typography", icon: Type },
    { id: "interactive", label: "Interactive", icon: MousePointer2 },
    { id: "responsive", label: "Responsive", icon: Smartphone },
  ]

  const renderButtonsSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Buttons</h2>
        <p style={{ color: '#6c757d' }}>All button variants, sizes, and states</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Button Variants */}
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Variants</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Different button styles for various use cases</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button style={{ backgroundColor: '#0066B2', color: '#FFFFFF', border: 'none' }}>Default</Button>
              <Button variant="secondary" style={{ backgroundColor: '#f8f9fa', color: '#333333', border: '1px solid #e5e5e5' }}>Secondary</Button>
              <Button variant="destructive" style={{ backgroundColor: '#dc3545', color: '#FFFFFF', border: 'none' }}>Destructive</Button>
              <Button variant="outline" style={{ backgroundColor: '#FFFFFF', color: '#0066B2', border: '2px solid #0066B2' }}>Outline</Button>
              <Button variant="ghost" style={{ backgroundColor: 'transparent', color: '#0066B2', border: 'none' }}>Ghost</Button>
              <Button variant="link" style={{ backgroundColor: 'transparent', color: '#0066B2', border: 'none', textDecoration: 'underline' }}>Link</Button>
            </div>
          </CardContent>
        </Card>

        {/* Button Sizes */}
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Sizes</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Different button sizes for various contexts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" style={{ backgroundColor: '#0066B2', color: '#FFFFFF', border: 'none' }}>Small</Button>
              <Button size="default" style={{ backgroundColor: '#0066B2', color: '#FFFFFF', border: 'none' }}>Default</Button>
              <Button size="lg" style={{ backgroundColor: '#0066B2', color: '#FFFFFF', border: 'none' }}>Large</Button>
              <Button size="icon" className="w-10 h-10" style={{ backgroundColor: '#FFC107', color: '#333333', border: 'none' }}>
                <div className="w-4 h-4 bg-current rounded"></div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderFormsSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Forms</h2>
        <p style={{ color: '#6c757d' }}>Input fields, validation states, and form layouts</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Basic Input Fields */}
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Input Fields</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Different input types and states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Text Input</label>
              <input 
                type="text" 
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  '--tw-ring-color': '#0066B2'
                }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Email Input</label>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  '--tw-ring-color': '#0066B2'
                }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Password Input</label>
              <input 
                type="password" 
                placeholder="Enter password"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  '--tw-ring-color': '#0066B2'
                }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Textarea</label>
              <textarea 
                placeholder="Enter your message"
                rows={3}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  '--tw-ring-color': '#0066B2'
                }}
              />
            </div>
          </CardContent>
        </Card>

        {/* Validation States */}
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Validation States</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Input fields with different validation states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Valid Input</label>
              <input 
                type="text" 
                defaultValue="Valid input"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#28a745', 
                  backgroundColor: '#f8fff9',
                  color: '#333333',
                  '--tw-ring-color': '#28a745'
                }}
              />
              <p className="text-xs" style={{ color: '#28a745' }}>✓ Input is valid</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Error Input</label>
              <input 
                type="email" 
                defaultValue="invalid-email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#dc3545', 
                  backgroundColor: '#fff8f8',
                  color: '#333333',
                  '--tw-ring-color': '#dc3545'
                }}
              />
              <p className="text-xs" style={{ color: '#dc3545' }}>✗ Please enter a valid email address</p>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Disabled Input</label>
              <input 
                type="text" 
                defaultValue="Disabled field"
                disabled
                className="w-full px-3 py-2 border rounded-md cursor-not-allowed"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#f8f9fa',
                  color: '#6c757d'
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Form Layouts */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>SpeedyIP Contact Form</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Complete contact form with all field types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" style={{ color: '#333333' }}>First Name</label>
                <input 
                  type="text" 
                  placeholder="John"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ 
                    borderColor: '#e5e5e5', 
                    backgroundColor: '#FFFFFF',
                    color: '#333333',
                    '--tw-ring-color': '#0066B2'
                  }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium" style={{ color: '#333333' }}>Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                  style={{ 
                    borderColor: '#e5e5e5', 
                    backgroundColor: '#FFFFFF',
                    color: '#333333',
                    '--tw-ring-color': '#0066B2'
                  }}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Email</label>
              <input 
                type="email" 
                placeholder="john@company.com"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  '--tw-ring-color': '#0066B2'
                }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Company</label>
              <input 
                type="text" 
                placeholder="Your Company"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  '--tw-ring-color': '#0066B2'
                }}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium" style={{ color: '#333333' }}>Service Interest</label>
              <select 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                style={{ 
                  borderColor: '#e5e5e5', 
                  backgroundColor: '#FFFFFF',
                  color: '#333333',
                  '--tw-ring-color': '#0066B2'
                }}
              >
                <option>Select a service</option>
                <option>Patent Filing</option>
                <option>Patent Search & Analysis</option>
                <option>Patent Drafting</option>
                <option>Patent Prosecution</option>
                <option>Patent Portfolio Management</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Message</label>
              <textarea 
                placeholder="Tell us about your patent needs..."
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="newsletter"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="newsletter" className="text-sm text-gray-700">
                Subscribe to our newsletter for patent insights
              </label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Send Message</Button>
          </CardFooter>
        </Card>

        {/* Search & Filter Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Search &amp; Filters</CardTitle>
            <CardDescription>Advanced search with filters and options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Search</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search patents, services..."
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <div className="h-4 w-4 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Category</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Categories</option>
                  <option>Utility Patents</option>
                  <option>Design Patents</option>
                  <option>Plant Patents</option>
                  <option>Provisional Patents</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Status</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>All Status</option>
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Expired</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Date Range</label>
              <div className="grid grid-cols-2 gap-3">
                <input 
                  type="date" 
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="date" 
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Filters</label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="urgent"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="urgent" className="text-sm text-gray-700">Urgent filing needed</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="international"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="international" className="text-sm text-gray-700">International patent filing</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="consultation"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consultation" className="text-sm text-gray-700">Free patent consultation</label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex gap-3">
            <Button variant="outline" className="flex-1">Clear Filters</Button>
            <Button className="flex-1">Apply Filters</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  )

  const renderCardsSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cards</h2>
        <p className="text-gray-600">Different card layouts for content presentation</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Basic Card */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>
              A simple card with header, content, and footer.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              This is the main content area of the card. It can contain any type of content.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Action</Button>
          </CardFooter>
        </Card>

        {/* Service Card */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardHeader>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <div className="h-6 w-6 bg-blue-600 rounded"></div>
            </div>
            <CardTitle>Patent Filing Services</CardTitle>
            <CardDescription>
              Fast and reliable patent filing with expert attorneys and streamlined process.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                Expert Patent Attorneys
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                30-Day Filing Promise
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                USPTO Certified
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Learn More</Button>
          </CardFooter>
        </Card>

        {/* Testimonial Card */}
        <Card className="hover:shadow-lg transition-all duration-300">
          <CardContent className="pt-6">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-4 w-4 bg-yellow-400 rounded mr-1"></div>
              ))}
            </div>
            <p className="text-gray-600 mb-4 text-sm">
              &ldquo;SpeedyIP delivered our patent filing in record time with exceptional quality. 
              Their expert team made the entire process seamless.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
              <div>
                <p className="font-semibold text-sm">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Founder, InnovateLab</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderBadgesSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Badges</h2>
        <p style={{ color: '#6c757d' }}>Small labels for categorization and status</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Variants</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Different badge styles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Badge style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}>Default</Badge>
              <Badge variant="secondary" style={{ backgroundColor: '#f8f9fa', color: '#333333', border: '1px solid #e5e5e5' }}>Secondary</Badge>
              <Badge variant="destructive" style={{ backgroundColor: '#dc3545', color: '#FFFFFF' }}>Destructive</Badge>
              <Badge variant="outline" style={{ backgroundColor: '#FFFFFF', color: '#0066B2', border: '1px solid #0066B2' }}>Outline</Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>SpeedyIP Use Cases</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Real-world badge examples</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Badge style={{ backgroundColor: '#FFC107', color: '#333333' }}>Fast Patent Filing</Badge>
              <Badge variant="outline" style={{ backgroundColor: '#FFFFFF', color: '#0066B2', border: '1px solid #0066B2' }}>Expert Attorneys</Badge>
              <Badge style={{ backgroundColor: '#0066B2', color: '#FFFFFF' }}>USPTO Certified</Badge>
              <Badge style={{ backgroundColor: '#28a745', color: '#FFFFFF' }}>30-Day Promise</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderLayoutSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Layout Components</h2>
        <p style={{ color: '#6c757d' }}>Grid systems and layout patterns</p>
      </div>
      
      <div className="space-y-12">
        {/* Grid System */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Responsive Grid</CardTitle>
            <CardDescription>Grid system that adapts to different screen sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200">
                  <p className="text-sm font-medium text-blue-900">Grid Item {i + 1}</p>
                  <p className="text-xs text-blue-600 mt-1">Responsive</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Flexbox */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Flexbox Layout</CardTitle>
            <CardDescription>Flexible layout patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-900">Flex Item 1</p>
              </div>
              <div className="flex-1 bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-900">Flex Item 2</p>
              </div>
              <div className="flex-1 bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-green-900">Flex Item 3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderTypographySection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Typography</h2>
        <p style={{ color: '#6c757d' }}>Exo 2 font family with text hierarchy</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Font Family Info */}
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Primary Font</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Exo 2 - Modern sans-serif typeface</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
              <p className="text-lg font-bold mb-2" style={{ color: '#333333' }}>Exo 2</p>
              <p className="text-sm mb-2" style={{ color: '#6c757d' }}>Primary font family used throughout SpeedyIP</p>
              <p className="text-xs" style={{ color: '#6c757d' }}>Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)</p>
            </div>
            <div className="text-sm" style={{ color: '#6c757d' }}>
              <p className="mb-2">Backup fonts:</p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Arial (sans-serif)</li>
                <li>Helvetica (sans-serif)</li>
                <li>sans-serif (generic fallback)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Typography Scale */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Typography Scale</CardTitle>
            <CardDescription>Text hierarchy and sizing system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Heading 1 - Main Title</h1>
              <p className="text-sm text-gray-500">Used for page titles and hero sections</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Heading 2 - Section Title</h2>
              <p className="text-sm text-gray-500">Used for major section headings</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Heading 3 - Subsection</h3>
              <p className="text-sm text-gray-500">Used for subsections and card titles</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Heading 4 - Card Title</h4>
              <p className="text-sm text-gray-500">Used for card titles and smaller headings</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Body Text Examples */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Body Text Examples</CardTitle>
            <CardDescription>Different body text sizes and their usage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-lg text-gray-700 mb-1">Body Large</p>
                <p className="text-sm text-gray-500">Used for highlighted content and important paragraphs</p>
              </div>
              <div>
                <p className="text-base text-gray-700 mb-1">Body Default</p>
                <p className="text-sm text-gray-500">Used for regular content and standard paragraphs</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Body Small</p>
                <p className="text-sm text-gray-500">Used for captions, footnotes, and secondary text</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderColorsSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">SpeedyIP Color Palette</h2>
        <p className="text-gray-600">Our professional color scheme</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Primary Colors */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Primary Colors</CardTitle>
            <CardDescription>Main brand colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#0066B2' }}>
              <span className="text-white font-medium text-sm">#0066B2</span>
            </div>
            <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFC107' }}>
              <span className="text-gray-900 font-medium text-sm">#FFC107</span>
            </div>
            <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#333333' }}>
              <span className="text-white font-medium text-sm">#333333</span>
            </div>
          </CardContent>
        </Card>
        
        {/* Secondary Colors */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Secondary Colors</CardTitle>
            <CardDescription>Supporting colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e5e5e5' }}>
              <span className="text-gray-900 font-medium text-sm">#FFFFFF</span>
            </div>
            <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f8f9fa' }}>
              <span className="text-gray-900 font-medium text-sm">#f8f9fa</span>
            </div>
            <div className="h-16 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#6c757d' }}>
              <span className="text-white font-medium text-sm">#6c757d</span>
            </div>
          </CardContent>
        </Card>

        {/* Usage Examples */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Color Usage</CardTitle>
            <CardDescription>How colors are applied</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#0066B2' }}></div>
                <span className="text-sm">Speedy Blue - Primary actions, headers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FFC107' }}></div>
                <span className="text-sm">Golden Yellow - Highlights, CTAs</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#333333' }}></div>
                <span className="text-sm">Black Outline - Text, borders</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e5e5e5' }}></div>
                <span className="text-sm">White - Backgrounds, cards</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Color Combinations */}
      <div className="mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Color Combinations</CardTitle>
            <CardDescription>Examples of how colors work together</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Primary Button */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Primary Button</h4>
                <button 
                  className="px-4 py-2 rounded text-white font-medium"
                  style={{ backgroundColor: '#0066B2' }}
                >
                  Get Started
                </button>
              </div>
              
              {/* Secondary Button */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Secondary Button</h4>
                <button 
                  className="px-4 py-2 rounded font-medium border-2"
                  style={{ 
                    backgroundColor: '#FFFFFF', 
                    color: '#0066B2',
                    borderColor: '#0066B2'
                  }}
                >
                  Learn More
                </button>
              </div>
              
              {/* Accent Button */}
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#f8f9fa' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Accent Button</h4>
                <button 
                  className="px-4 py-2 rounded font-medium"
                  style={{ backgroundColor: '#FFC107', color: '#333333' }}
                >
                  Contact Us
                </button>
              </div>
              
              {/* Card Example */}
              <div className="p-6 rounded-lg border" style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
                <h4 className="font-semibold mb-2" style={{ color: '#333333' }}>Card Example</h4>
                <p className="text-sm mb-3" style={{ color: '#6c757d' }}>
                  This shows how text appears on white backgrounds
                </p>
                <div className="text-xs" style={{ color: '#6c757d' }}>
                  Secondary text color
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderInteractiveSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Interactive Elements</h2>
        <p style={{ color: '#6c757d' }}>Hover effects and focus states</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Hover Effects</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Interactive hover states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="hover:scale-105 transition-transform"
              style={{ backgroundColor: '#0066B2', color: '#FFFFFF', border: 'none' }}
            >
              Hover Scale
            </Button>
            <Button 
              variant="outline" 
              className="hover:bg-blue-50 transition-colors"
              style={{ backgroundColor: '#FFFFFF', color: '#0066B2', border: '2px solid #0066B2' }}
            >
              Hover Color
            </Button>
            <Card 
              className="hover:shadow-lg transition-shadow cursor-pointer"
              style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}
            >
              <CardContent className="p-4">
                <p className="text-sm" style={{ color: '#333333' }}>Hover this card</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
        
        <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
          <CardHeader>
            <CardTitle className="text-xl" style={{ color: '#333333' }}>Focus States</CardTitle>
            <CardDescription style={{ color: '#6c757d' }}>Accessibility-focused interactions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Focus Ring</Button>
            <Button variant="outline" className="focus:bg-blue-50">Focus Background</Button>
            <div className="p-4 border rounded-lg focus-within:ring-2 focus-within:ring-blue-500">
              <p className="text-sm">Focus container</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )

  const renderResponsiveSection = () => (
    <section className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#333333' }}>Responsive Design</h2>
        <p style={{ color: '#6c757d' }}>Mobile-first responsive patterns</p>
      </div>
      
      <Card style={{ backgroundColor: '#FFFFFF', borderColor: '#e5e5e5' }}>
        <CardHeader>
          <CardTitle className="text-xl" style={{ color: '#333333' }}>Breakpoint Indicators</CardTitle>
          <CardDescription style={{ color: '#6c757d' }}>Current screen size detection</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-6 rounded-lg border" style={{ backgroundColor: '#f8f9fa', borderColor: '#e5e5e5' }}>
            <p className="text-sm font-medium mb-4" style={{ color: '#333333' }}>Current Breakpoint:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded text-xs" style={{ backgroundColor: '#e3f2fd', color: '#0066B2' }}>
                Mobile: <span className="md:hidden font-bold">✓ Active</span><span className="hidden md:inline">Hidden</span>
              </div>
              <div className="p-3 rounded text-xs" style={{ backgroundColor: '#e3f2fd', color: '#0066B2' }}>
                Tablet: <span className="hidden md:inline lg:hidden font-bold">✓ Active</span><span className="md:hidden lg:inline">Hidden</span>
              </div>
              <div className="p-3 rounded text-xs" style={{ backgroundColor: '#e3f2fd', color: '#0066B2' }}>
                Desktop: <span className="hidden lg:inline font-bold">✓ Active</span><span className="lg:hidden">Hidden</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )

  const renderContent = () => {
    switch (activeTab) {
      case "buttons":
        return renderButtonsSection()
      case "forms":
        return renderFormsSection()
      case "cards":
        return renderCardsSection()
      case "badges":
        return renderBadgesSection()
      case "layout":
        return renderLayoutSection()
      case "typography":
        return renderTypographySection()
      case "colors":
        return renderColorsSection()
      case "interactive":
        return renderInteractiveSection()
      case "responsive":
        return renderResponsiveSection()
      default:
        return renderButtonsSection()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="mb-8">
              <div className="mb-4">
                <img 
                  src="/speedyip_logo.png" 
                  alt="SpeedyIP Logo" 
                  className="h-8 w-auto mb-2"
                />
                <div>
                  <Badge variant="secondary" className="text-xs">Design System</Badge>
                  <h1 className="text-lg font-bold text-gray-900">SpeedyIP Components</h1>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Component library showcase
              </p>
            </div>
            
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto px-8 py-8">
            {isMounted ? renderContent() : <div className="animate-pulse">Loading...</div>}
          </div>
        </div>
      </div>
    </div>
  )
} 