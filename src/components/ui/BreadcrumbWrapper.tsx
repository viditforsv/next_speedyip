'use client';

import { usePathname } from 'next/navigation';
import Breadcrumbs from './Breadcrumbs';

export default function BreadcrumbWrapper() {
  const pathname = usePathname();
  
  // Don't show breadcrumbs on homepage
  if (pathname === '/') return null;
  
  const getBreadcrumbs = () => {
    const segments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [];
    
    // Build breadcrumb items based on path segments
    let currentPath = '';
    
    segments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const isLast = index === segments.length - 1;
      
      // Convert segment to readable label
      let label = segment;
      
      // Special cases for common paths
      switch (segment) {
        case 'blog':
          label = 'Blog';
          break;
        case 'components-demo':
          label = 'Components Demo';
          break;
        case 'how-to-file-patent':
          label = 'How to File a Patent';
          break;
        case 'how-to-file-trademark':
          label = 'How to File a Trademark';
          break;
        case 'rich-content':
          label = 'Rich Content';
          break;
        default:
          // Convert kebab-case to Title Case
          label = segment
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
      }
      
      breadcrumbs.push({
        label,
        href: isLast ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = getBreadcrumbs();
  
  if (breadcrumbs.length === 0) return null;
  
  return (
    <div className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </div>
  );
}
