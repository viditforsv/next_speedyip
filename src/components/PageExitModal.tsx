'use client';

import { useState, useEffect } from 'react';
import LogoutModal from './ui/LogoutModal';

interface PageExitModalProps {
  enabled?: boolean;
}

export default function PageExitModal({ enabled = true }: PageExitModalProps) {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = (contactInfo: { name: string; email: string; phone: string }) => {
    console.log('User shared contact info:', contactInfo);
    
    // Save contact info to localStorage for demo purposes
    localStorage.setItem('exitContactInfo', JSON.stringify({
      ...contactInfo,
      timestamp: new Date().toISOString(),
      exitType: 'modal_interaction'
    }));
    
    // Close modal
    setShowModal(false);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  // Show modal after 5 seconds
  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <LogoutModal
      isOpen={showModal}
      onClose={handleModalClose}
      onLogout={handleLogout}
    />
  );
}
