# Logout Modal Component

A reusable modal component that collects customer contact information when users are logging out of the application.

## Features

- ✅ Collects name, email, and phone number
- ✅ Form validation with error messages
- ✅ Privacy notice for transparency
- ✅ Option to skip without providing information
- ✅ Responsive design for all devices
- ✅ Loading states during submission
- ✅ Accessibility features (ARIA labels, keyboard navigation)
- ✅ Customizable styling with SpeedyIP branding

## Components

### 1. LogoutModal

The main modal component that handles the contact collection form.

**Props:**

- `isOpen: boolean` - Controls modal visibility
- `onClose: () => void` - Called when modal should be closed
- `onLogout: (contactInfo) => void` - Called with collected contact info

### 2. LogoutButton

A button component that triggers the logout modal.

**Props:**

- `className?: string` - Additional CSS classes
- `variant?: 'default' | 'outline' | 'ghost'` - Button style variant
- `size?: 'sm' | 'default' | 'lg'` - Button size
- `children?: React.ReactNode` - Button content

### 3. useLogoutModal Hook

A custom hook for managing logout modal state.

**Returns:**

- `isOpen: boolean` - Modal open state
- `openModal: () => void` - Function to open modal
- `closeModal: () => void` - Function to close modal
- `handleLogout: (contactInfo) => void` - Function to handle logout

## Usage Examples

### Basic Usage

```tsx
import LogoutButton from "@/components/ui/LogoutButton";

function MyComponent() {
  return <LogoutButton variant="outline">Logout</LogoutButton>;
}
```

### Custom Implementation

```tsx
import { useState } from "react";
import LogoutModal from "@/components/ui/LogoutModal";

function MyComponent() {
  const [showModal, setShowModal] = useState(false);

  const handleLogout = (contactInfo) => {
    // Save to your backend
    console.log("Contact info:", contactInfo);

    // Clear user session
    localStorage.removeItem("userToken");

    // Redirect
    window.location.href = "/";
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Logout</button>

      <LogoutModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onLogout={handleLogout}
      />
    </>
  );
}
```

### Using the Hook

```tsx
import { useLogoutModal } from "@/hooks/useLogoutModal";
import LogoutModal from "@/components/ui/LogoutModal";

function MyComponent() {
  const { isOpen, openModal, closeModal, handleLogout } = useLogoutModal();

  return (
    <>
      <button onClick={openModal}>Logout</button>

      <LogoutModal
        isOpen={isOpen}
        onClose={closeModal}
        onLogout={handleLogout}
      />
    </>
  );
}
```

## Form Validation

The modal includes comprehensive form validation:

- **Name**: Required, must not be empty
- **Email**: Required, must be valid email format
- **Phone**: Required, must be valid phone number format

## Styling

The modal uses SpeedyIP's brand colors:

- Primary: `#0066B2` (blue)
- Text: `#333333` (dark gray)
- Secondary text: `#6c757d` (medium gray)
- Background: `#FFFFFF` (white)
- Borders: `#e5e5e5` (light gray)

## Accessibility

- ARIA labels for screen readers
- Keyboard navigation support
- Focus management
- Proper semantic HTML structure
- Color contrast compliance

## Demo

Visit `/logout-demo` to see the logout modal in action with examples and integration instructions.

## Integration with Backend

To integrate with your backend, modify the `handleLogout` function to:

1. Send contact info to your API
2. Clear user session/tokens
3. Handle errors appropriately
4. Redirect user to appropriate page

Example:

```tsx
const handleLogout = async (contactInfo) => {
  try {
    // Save contact info
    await fetch("/api/logout-contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactInfo),
    });

    // Clear session
    await logoutUser();

    // Redirect
    router.push("/");
  } catch (error) {
    console.error("Logout failed:", error);
    // Handle error (show notification, etc.)
  }
};
```
