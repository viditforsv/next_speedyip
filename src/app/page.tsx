'use client'

// Metadata moved to layout.tsx
import HeroSection from '@/components/sections/HeroSection'
import IntentSelection from '@/components/sections/IntentSelection'
import StageTimeline from '@/components/sections/StageTimeline'
import TrustSection from '@/components/sections/TrustSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTA from '@/components/sections/FinalCTA'

// Metadata moved to layout.tsx for client component

const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'SpeedyIP',
  alternateName: 'SpeedyIP Patent Services',
  description: 'Professional patent filing services with expert attorneys and fast-track processing.',
  url: 'https://speedyip.com',
  logo: 'https://speedyip.com/speedyip_logo.png',
  telephone: '+1-555-123-4567',
  email: 'hello@speedyip.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Innovation Drive',
    addressLocality: 'San Francisco',
    addressRegion: 'CA',
    postalCode: '94105',
    addressCountry: 'US',
  },
  openingHours: 'Mo-Fr 09:00-18:00',
  priceRange: '$3500-$15000',
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Patent Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Express Patent Filing',
          description: 'Basic patent filing service with 30-day turnaround',
        },
        price: '3500',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Professional Patent Filing',
          description: 'Comprehensive patent service with prosecution support',
        },
        price: '6500',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Premium Patent Filing',
          description: 'Full-service patent filing with dedicated attorney',
        },
        price: '12000',
        priceCurrency: 'USD',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sarah Chen',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'SpeedyIP helped us file our core patent in just 30 days. Their expertise saved us months of delays.',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Michael Rodriguez',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'Professional service from start to finish. Our patent was granted on the first try thanks to their thorough approach.',
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <HeroSection />
      <IntentSelection />
      <StageTimeline />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
    </>
  )
}