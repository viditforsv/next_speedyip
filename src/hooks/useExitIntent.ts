'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseExitIntentReturn {
  shouldShowModal: boolean;
  triggerExitIntent: () => void;
  closeModal: () => void;
}

export function useExitIntent(): UseExitIntentReturn {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  // Check if modal was already shown in this session
  const checkSessionHistory = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    // Check if modal was already shown in this session
    return sessionStorage.getItem('exitIntentModalShown') === 'true';
  }, []);

  // Save modal interaction to sessionStorage
  const saveModalInteraction = useCallback((action: 'closed' | 'submitted') => {
    if (typeof window === 'undefined') return;
    
    // Mark modal as shown in this session
    sessionStorage.setItem('exitIntentModalShown', 'true');
    sessionStorage.setItem('exitIntentModalAction', action);
  }, []);

  const triggerExitIntent = useCallback(() => {
    if (hasTriggered || checkSessionHistory()) return;
    
    setShouldShowModal(true);
    setHasTriggered(true);
  }, [hasTriggered, checkSessionHistory]);

  const closeModal = useCallback(() => {
    setShouldShowModal(false);
    saveModalInteraction('closed');
  }, [saveModalInteraction]);

  // Desktop: Detect mouse leave at top of screen
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the screen
      if (e.clientY <= 0) {
        triggerExitIntent();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [triggerExitIntent]);

  // Mobile: Detect back button and rapid scroll up (exit intent)
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = lastScrollY - currentScrollY;
      
      // Clear previous timeout
      clearTimeout(scrollTimeout);
      
      // If scrolling up rapidly (more than 100px) - likely exit intent
      if (scrollDelta > 100) {
        scrollTimeout = setTimeout(() => {
          triggerExitIntent();
        }, 200);
      }
      
      lastScrollY = currentScrollY;
    };

    // Handle back button on mobile (immediate exit intent)
    const handlePopState = () => {
      triggerExitIntent();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
      clearTimeout(scrollTimeout);
    };
  }, [triggerExitIntent]);

  return {
    shouldShowModal,
    triggerExitIntent,
    closeModal
  };
}
