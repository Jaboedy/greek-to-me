'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithPlaceholderProps extends Omit<ImageProps, 'placeholder'> {
  customPlaceholder?: string;
}

export function ImageWithPlaceholder({
  src,
  alt,
  className,
  ...props
}: ImageWithPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div 
          className={`absolute inset-0 bg-gray-200 animate-pulse ${className || ''}`}
          aria-hidden="true"
        />
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className || ''} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        onLoadingComplete={() => setIsLoading(false)}
        {...props}
      />
    </>
  );
}
