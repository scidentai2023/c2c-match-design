import React from 'react';

export function Avatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-secondary ${className}`} {...props} />
  );
}

export function AvatarImage({ src, alt, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={src} alt={alt} className="aspect-square h-full w-full object-cover" {...props} />;
}

export function AvatarFallback({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`flex items-center justify-center w-full h-full bg-secondary text-secondary-foreground text-sm font-medium ${className}`} {...props} />;
}
