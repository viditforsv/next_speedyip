import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HelpCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: "How long does the patent filing process take?",
    answer: "Our Express service can file your patent application within 30 days. The complete process from filing to grant typically takes 12-18 months, depending on USPTO examination timelines and any office actions that may arise."
  },
  {
    question: "What's included in your patent filing service?",
    answer: "All our services include comprehensive novelty search, professional patent drafting, USPTO filing, and basic prosecution support. Higher-tier plans include office action responses, unlimited revisions, and dedicated attorney support."
  },
  {
    question: "Do you handle international patent filings?",
    answer: "Yes, we can help with international patent filings through the PCT (Patent Cooperation Treaty) system and direct national filings. We have partnerships with local attorneys in major markets worldwide."
  },
  {
    question: "What if my patent application is rejected?",
    answer: "Patent rejections are common and part of the normal process. Our Professional and Premium plans include office action responses at no extra cost. We'll work with you to address examiner concerns and strengthen your application."
  },
  {
    question: "How much does a patent cost in total?",
    answer: "Our pricing ranges from $3,500 to $12,000 for the complete service, including USPTO filing fees. Additional costs may include maintenance fees (due at 3.5, 7.5, and 11.5 years) and any international filing fees if applicable."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "We offer a 30-day money-back guarantee on our services. If you're not completely satisfied with our work, we'll refund your payment. However, USPTO filing fees are non-refundable once paid."
  },
  {
    question: "What types of inventions can you patent?",
    answer: "We can help with utility patents for software, hardware, processes, chemicals, mechanical devices, electrical systems, biotechnology, and more. We cannot assist with design patents or plant patents, but can refer you to specialists."
  },
  {
    question: "Do you provide ongoing patent maintenance services?",
    answer: "Yes, we offer patent maintenance services including fee payments, patent monitoring, and portfolio management. We'll remind you of important deadlines and help maintain your patent portfolio."
  },
  {
    question: "How do you ensure confidentiality?",
    answer: "We maintain strict confidentiality through signed NDAs, secure document handling, and encrypted communication channels. Your invention details are never shared with third parties without your explicit consent."
  },
  {
    question: "Can I speak with a patent attorney before committing?",
    answer: "Absolutely! We offer free 30-minute consultations with our patent attorneys. This allows you to discuss your invention, understand the patent process, and get preliminary advice before making any commitment."
  }
]

export default function FAQSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Patent Filing FAQ - Common Questions About Patent Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert answers to frequently asked questions about patent filing, costs, timeline, and USPTO requirements
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6 mb-4">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-blue-50 border-blue-200 max-w-2xl mx-auto">
            <div className="p-8 space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-blue-900">
                Still Have Questions?
              </h3>
              <p className="text-blue-800">
                Our patent attorneys are here to help. Get personalized answers to your specific questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Patent Consultation
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                  Call Patent Attorney (555) 123-4567
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
