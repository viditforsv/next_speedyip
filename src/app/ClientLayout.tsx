'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloater from '@/components/ui/WhatsAppFloater'
import BreadcrumbWrapper from '@/components/ui/BreadcrumbWrapper'
import ExitIntentModal from '@/components/ExitIntentModal'
import { useExitIntent } from '@/hooks/useExitIntent'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { shouldShowModal, closeModal } = useExitIntent();

  return (
    <>
      <Header />
      <BreadcrumbWrapper />
      <main id="main-content" className="min-h-screen" role="main">
        {children}
      </main>
      <Footer />
      <WhatsAppFloater />
      <ExitIntentModal isOpen={shouldShowModal} onClose={closeModal} />
    </>
  );
}
