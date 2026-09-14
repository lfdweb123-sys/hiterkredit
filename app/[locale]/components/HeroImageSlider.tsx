'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type SlideImage = {
  src: string;
  width: number;
  height: number;
  /** CSS object-position value, e.g. "50% 15%". Defaults to "center 20%". */
  focalPoint?: string;
};

export default function HeroImageSlider({
  images,
  alt,
}: {
  images: SlideImage[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(t);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative rounded-[1.75rem] overflow-hidden ring-1 ring-[var(--color-line)]">
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={alt}
          width={img.width}
          height={img.height}
          priority={i === 0}
          style={{ objectPosition: img.focalPoint ?? 'center 20%' }}
          className={`w-full h-64 sm:h-72 object-cover transition-opacity duration-700 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
