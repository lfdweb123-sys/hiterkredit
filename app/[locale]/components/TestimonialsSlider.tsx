'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

type TestimonialItem = {
  author: string;
  location: string;
  rating: number;
  quote: string;
};

export default function TestimonialsSlider({ items }: { items: TestimonialItem[] }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const count = items.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % count) + count) % count);
    },
    [count]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (count <= 1) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [count]);

  if (count === 0) return null;
  const current = items[index];
  const avatarSrc = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    current.author
  )}&background=0F4C81&color=fff&size=128&rounded=true&bold=true&font-size=0.4`;

  return (
    <div
      className="relative"
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
    >
      <div className="min-h-[260px] md:min-h-[220px] flex flex-col items-center justify-center px-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarSrc}
          alt={current.author}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-sm mb-5"
        />
        <div className="flex items-center gap-1 mb-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={17}
              className={i < current.rating ? 'text-[var(--color-warning,#F59E0B)]' : 'text-[var(--color-line)]'}
              fill="currentColor"
              strokeWidth={0}
            />
          ))}
        </div>
        <p className="font-display italic text-xl md:text-2xl font-medium text-[var(--color-ink)] leading-snug max-w-2xl text-center">
          {current.quote}
        </p>
        <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
          {current.author} — {current.location}
        </p>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-9 h-9 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink-soft)] hover:bg-white hover:text-[var(--color-sky-deep)] transition-colors focus-ring"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-[var(--color-sky-deep)]' : 'w-2 bg-[var(--color-line)]'
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-9 h-9 rounded-full border border-[var(--color-line)] flex items-center justify-center text-[var(--color-ink-soft)] hover:bg-white hover:text-[var(--color-sky-deep)] transition-colors focus-ring"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
