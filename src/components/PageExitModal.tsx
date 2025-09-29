'use client';

import { useState, useEffect, useRef } from 'react';
import LogoutModal from './ui/LogoutModal';

interface PageExitModalProps {
  enabled?: boolean;
  // Trigger modal after user has been on page for this many seconds
  delayBeforeTrigger?: number;
  // Show modal when user has scrolled this far down the page
  scrollTriggerThreshold?: number;
}

export default function PageExitModal({ 
  enabled = true, 
  delayBeforeTrigger = 10,
  scrollTriggerThreshold = 50 
}: PageExitModalProps) {
  const [showModal, setShowModal] = useState(false);
  
  // Track if user has already seen/shared contact info
  const [hasSharedInfo, setHasSharedInfo] = useState(false);
  
  // Track user behavior
  const timeOnPageRef = useRef(Date.now());
  const scrollDepthRef = useRef(0);
  const maxScrollReachedRef = useRef(0);

  const handleLogout = (contactInfo: { name: string; email: string; phone: string }) => {
    console.log('User shared contact info:', contactInfo);
    
    // Save contact info to localStorage for demo purposes
    localStorage.setItem('exitContactInfo', JSON.stringify({
      ...contactInfo,
      timestamp: new Date().toISOString(),
      exitType: 'voluntary_share',
      timeOnPage: Date.now() - timeOnPageRef.current,
      scrollDepth: maxScrollReachedRef.current
    }));
    
    // Mark as shared and close modal
    setHasSharedInfo(true);
    setShowModal(false);
  };

  const handleModalClose = () => {
    // If user closes modal without providing info, just close it
    setShowModal(false);
  };

  // Timer-based trigger: Show modal after user has been on page for specified time
  useEffect(() => {
    if (!enabled || hasSharedInfo) return;

    const timer = setTimeout(() => {
      if (!hasSharedInfo && !showModal) {
        setShowModal(true);
      }
    }, delayBeforeTrigger * 1000);

    return () => clearTimeout(timer);
  }, [enabled, hasSharedInfo, showModal, delayBeforeTrigger]);

  // Scroll-based trigger: Show modal when user reaches certain scroll depth
  useEffect(() => {
    if (!enabled || hasSharedInfo) return;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll percentage
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
      
      // Track maximum scroll depth reached
      if (scrollPercentage > maxScrollReachedRef.current) {
        maxScrollReachedRef.current = scrollPercentage;
      }
      
      // Show modal when user scrolls past threshold and hasn't shared info yet
      if (scrollPercentage >= scrollTriggerThreshold && !hasSharedInfo && !showModal) {
        setShowModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enabled, hasSharedInfo, showModal, scrollTriggerThreshold]);

  // Simple beforeunload handler that doesn't interfere with browser behavior
  useEffect(() => {
    if (!enabled || hasSharedInfo) return;

    const handleBeforeUnload = () => {
      // Just track the exit without showing browser modal or custom modal
      const timeOnPage = Date.now() - timeOnPageRef.current;
      console.log('User exiting page:', {
        timeOnPage,
        scrollDepth: maxScrollReachedRef.current,
        hasSharedInfo
      });
      
      // Save exit data for analytics
      localStorage.setItem('pageExitData', JSON.stringify({
        timestamp: new Date().toISOString(),
        timeOnPage,
        scrollDepth: maxScrollReachedRef.current,
        hasSharedInfo,
        exitReason: 'beforeunload'
      }));
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [enabled, hasSharedInfo]);

  if (!enabled) return null;

  return (
    <LogoutModal
      isOpen={showModal}
      onClose={handleModalClose}
      onLogout={handleLogout}
    />
  );
}
