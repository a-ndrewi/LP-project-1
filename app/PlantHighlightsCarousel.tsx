"use client";

import Image from "next/image";
import { type PointerEvent, useEffect, useRef, useState } from "react";

type Slide = {
  image: string;
  alt: string;
  text: string;
};

export default function PlantHighlightsCarousel({
  basePath,
}: {
  basePath: string;
}) {
  const slidesWithAssets: Slide[] = [
    {
      image: `${basePath}/images/plant-1-removebg-preview.png`,
      alt: "Plant 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus.",
    },
    {
      image: `${basePath}/images/plant-2-removebg-preview.png`,
      alt: "Plant 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus.",
    },
    {
      image: `${basePath}/images/plant-3-removebg-preview.png`,
      alt: "Plant 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slidesWithAssets.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [slidesWithAssets.length]);

  const goTo = (index: number) => {
    setActiveIndex((index + slidesWithAssets.length) % slidesWithAssets.length);
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
    setIsDragging(true);
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) {
      return;
    }

    const deltaX = event.clientX - startX.current;
    const threshold = 50;

    if (deltaX > threshold) {
      goTo(activeIndex - 1);
    } else if (deltaX < -threshold) {
      goTo(activeIndex + 1);
    }

    startX.current = null;
    setIsDragging(false);
  };

  return (
    <div className="w-full max-w-[1320px]">
      <div
        className="overflow-hidden rounded-[24px]"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={() => {
          startX.current = null;
          setIsDragging(false);
        }}
      >
        <div
          className={`flex transition-transform duration-500 ease-in-out ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slidesWithAssets.map((slide, index) => (
            <article
              key={slide.alt}
              className="min-w-full px-1 flex justify-center"
              aria-hidden={index !== activeIndex}
            >
              <div className="flex min-h-[140px] items-center gap-4 rounded-[16px] border border-primary bg-background px-4 py-4 sm:gap-6 sm:px-6">
                <div className="relative h-20 w-20 shrink-0 sm:h-25 sm:w-25">
                  <div className="absolute inset-0 rounded-full bg-panel" />
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    width={80}
                    height={80}
                    className="relative left-2 bottom-2 z-10 h-20 w-14 object-contain sm:left-3 sm:bottom-3 sm:h-30 sm:w-20"
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
        {slidesWithAssets.map((slide, index) => (
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
