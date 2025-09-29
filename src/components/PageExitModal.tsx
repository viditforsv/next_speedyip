'use client';

import { useState, useEffect, useRef } from 'react';
import LogoutModal from './ui/LogoutModal';

interface PageExitModalProps {
  enabled?: boolean;
}

export default function PageExitModal({ enabled = true }: PageExitModalProps) {
  const [showModal, setShowModal] = useState(false);
  const [pendingExit, setPendingExit] = useState(false);
  const exitAllowedRef = useRef(false);

  const handleLogout = (contactInfo: { name: string; email: string; phone: string }) => {
    console.log('User exiting with contact info:', contactInfo);
    
    // Save contact info to localStorage for demo purposes
    localStorage.setItem('exitContactInfo', JSON.stringify({
      ...contactInfo,
      timestamp: new Date().toISOString(),
      exitType: 'page_close'
    }));
    
    // Allow the page to close/navigate
    exitAllowedRef.current = true;
    setPendingExit(true);
    setShowModal(false);
  };

  const handleModalClose = () => {
    // If user closes modal without providing info, allow exit
    exitAllowedRef.current = true;
    setPendingExit(true);
    setShowModal(false);
  };

  useEffect(() => {
    if (!enabled) return;

    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      // If exit is allowed, do nothing - let the page unload normally
      if (exitAllowedRef.current) {
        return;
      }
      
      // Don't call preventDefault() or return any value to avoid browser modal
      // Instead, just track the exit attempt and let our modal handle it
    };

    // Detect common browser navigation shortcuts
    const handleKeyDown = (event: KeyboardEvent) => {
      // Alt + Left/Right arrow (browser back/forward)
      if (event.altKey && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
        if (!exitAllowedRef.current) {
          setShowModal(true);
        }
      }
    };

    // Detect mouse leaving to browser chrome area
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 5 && !exitAllowedRef.current) {
        setShowModal(true);
      }
    };

    // Detect clicks that might lead to navigation (like browser back button)
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      // Check for external links or browser navigation
      if (target.tagName === 'A' && target.getAttribute('target') === '_blank') {
        if (!exitAllowedRef.current) {
          setShowModal(true);
          event.preventDefault(); // Prevent navigation until user decides
        }
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('click', handleClick);
    };
  }, [enabled, pendingExit]);

  // Reset pendingExit after a delay to allow for new exit attempts
  useEffect(() => {
    if (pendingExit) {
      const timer = setTimeout(() => {
        setPendingExit(false);
        exitAllowedRef.current = false;
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
