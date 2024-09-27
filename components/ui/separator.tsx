// components/ui/Separator.tsx
import React from 'react';
import { cn } from '@/lib/utils'; // Import utility for className merging (if you have it)

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  className = '',
}) => {
  return (
    <div
      className={cn(
        'bg-red-200',
        orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
        className
      )}
    />
  );
};