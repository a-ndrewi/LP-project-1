"use client";

import Image from "next/image";
import {
  type PointerEvent,
  type TouchEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Slide = {
  image: string;
  alt: string;
  text: string;
};

type PlantHighlightsCarouselProps = {
  basePath: string;
  items: Slide[];
};

export default function PlantHighlightsCarousel({
  basePath,
  items,
}: PlantHighlightsCarouselProps) {
  const slides = items.map((item) => ({
    image: `${basePath}${item.image}`,
    alt: item.alt,
    text: item.text,
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [slides.length]);

  const goTo = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  const handleSwipe = (deltaX: number) => {
    const threshold = 50;

    if (deltaX > threshold) {
      goTo(activeIndex - 1);
    } else if (deltaX < -threshold) {
      goTo(activeIndex + 1);
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    startX.current = event.clientX;
    setIsDragging(true);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    handleSwipe(event.clientX - startX.current);
    startX.current = null;
    setIsDragging(false);
  };

  const onTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    startX.current = event.touches[0]?.clientX ?? null;
    setIsDragging(true);
  };

  const onTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    const touchX = event.changedTouches[0]?.clientX;
    if (typeof touchX === "number") {
      handleSwipe(touchX - startX.current);
    }

    startX.current = null;
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-[1320px]">
      <div
        className="touch-pan-y select-none overflow-hidden rounded-[24px]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onPointerLeave={() => {
          startX.current = null;
          setIsDragging(false);
        }}
        onTouchCancel={() => {
          startX.current = null;
          setIsDragging(false);
        }}
      >
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <article
              key={slide.alt}
              className="flex min-w-full justify-center px-1"
              aria-hidden={index !== activeIndex}
            >
              <div className="flex min-h-[140px] items-center justify-center gap-4 rounded-[16px] border border-primary bg-background px-4 py-4 text-center sm:gap-6 sm:px-6">
                <div className="relative h-20 w-20 shrink-0 sm:h-25 sm:w-25">
                  <div className="absolute inset-0 rounded-full bg-panel" />
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={80}
                    height={80}
                    className={
                      index === 2
                        ? "relative h-30 w-20 left-3 bottom-5"
                        : "relative h-30 w-30 object-contain sm:h-25 sm:w-25"
                    }
                  />
                </div>

                <p className="text-sm leading-6 text-card sm:text-base">
                  {slide.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-accent" : "w-2.5 bg-primary/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}