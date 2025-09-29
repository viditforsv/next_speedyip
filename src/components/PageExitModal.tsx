'use client';

import { useState, useEffect } from 'react';
import LogoutModal from './ui/LogoutModal';

interface PageExitModalProps {
  enabled?: boolean;
}

export default function PageExitModal({ enabled = true }: PageExitModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [pendingExit, setPendingExit] = useState(false);

  const handleLogout = (contactInfo: { name: string; email: string; phone: string }) => {
    console.log('User exiting with contact info:', contactInfo);
    
    // Save contact info to localStorage for demo purposes
    localStorage.setItem('exitContactInfo', JSON.stringify({
      ...contactInfo,
      timestamp: new Date().toISOString(),
      exitType: 'page_close'
    }));
    
    // Allow the page to close/navigate
    setPendingExit(true);
    setShowModal(false);
  };

  const handleModalClose = () => {
    // If user closes modal without providing info, allow exit
    setPendingExit(true);
    setShowModal(false);
  };

  useEffect(() => {
    if (!enabled) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!pendingExit) {
        event.preventDefault();
        // Show the modal
        setShowModal(true);
        // Return a message (though modern browsers often ignore custom messages)
        return 'Are you sure you want to leave?';
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden && !pendingExit) {
        // Page is being hidden (tab switch, minimize, etc.)
        setShowModal(true);
      }
    };

    const handlePageHide = () => {
      if (!pendingExit) {
        // Page is being unloaded
        setShowModal(true);
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [enabled, pendingExit]);

  // Reset pendingExit after a delay to allow for new exit attempts
  useEffect(() => {
    if (pendingExit) {
      const timer = setTimeout(() => {
        setPendingExit(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [pendingExit]);

  if (!enabled) return null;

  return (
    <LogoutModal
      isOpen={showModal}
      onClose={handleModalClose}
      onLogout={handleLogout}
    />
  );
}
