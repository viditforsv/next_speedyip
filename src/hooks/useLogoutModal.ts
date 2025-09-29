'use client';

import { useState, useCallback } from 'react';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface UseLogoutModalReturn {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  handleLogout: (contactInfo: ContactInfo) => void;
}

export function useLogoutModal(): UseLogoutModalReturn {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleLogout = useCallback((contactInfo: ContactInfo) => {
    // Default logout handler - can be overridden
    console.log('User logged out with contact info:', contactInfo);
    
    // Example: Save to localStorage for demo purposes
    if (typeof window !== 'undefined') {
      localStorage.setItem('lastLogoutContact', JSON.stringify({
        ...contactInfo,
        timestamp: new Date().toISOString()
      }));
      
      // Clear user session data
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
      
      // Redirect to home page
      window.location.href = '/';
    }
    
    closeModal();
  }, [closeModal]);

  return {
    isOpen,
    openModal,
    closeModal,
    handleLogout
  };
}
