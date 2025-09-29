'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import LogoutModal from './LogoutModal';

interface LogoutButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  children?: React.ReactNode;
}

export default function LogoutButton({ 
  className = '', 
  variant = 'outline',
  size = 'default',
  children 
}: LogoutButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = (contactInfo: { name: string; email: string; phone: string }) => {
    // Here you would typically:
    // 1. Save the contact info to your backend
    // 2. Clear user session/tokens
    // 3. Redirect to login page or home page
    
    console.log('User logged out with contact info:', contactInfo);
    
    // Example: Save to localStorage for demo purposes
    localStorage.setItem('lastLogoutContact', JSON.stringify({
      ...contactInfo,
      timestamp: new Date().toISOString()
    }));
    
    // Example: Clear any user session data
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    
    // Example: Redirect to home page
    window.location.href = '/';
  };

  const handleLogoutClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button
        onClick={handleLogoutClick}
        variant={variant}
        size={size}
        className={`flex items-center gap-2 ${className}`}
        style={{ 
          backgroundColor: variant === 'outline' ? '#FFFFFF' : '#0066B2', 
          color: variant === 'outline' ? '#6c757d' : '#FFFFFF',
          borderColor: variant === 'outline' ? '#e5e5e5' : undefined
        }}
      >
        <LogOut className="h-4 w-4" />
        {children || 'Logout'}
      </Button>

      <LogoutModal
        isOpen={showModal}
        onClose={handleModalClose}
        onLogout={handleLogout}
      />
    </>
  );
}
