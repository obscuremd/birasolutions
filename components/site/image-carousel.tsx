"use client";

import { ImageIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

type ImageCarouselProps = {
  title: string;
  slides: string[];
  className?: string;
};

export function ImageCarousel({
  title,
  slides,
  className,
}: ImageCarouselProps) {
  return (
    <Carousel className={cn("w-full", className)} opts={{ loop: true }}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={slide}>
            {/* Compact image frame — 3:2 aspect ratio, no min-height forcing */}
            <div className="image-slot relative flex aspect-[3/2] flex-col justify-between border border-[var(--bira-line)] p-5">
              {/* Top row */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[0.6rem] font-bold tracking-[0.22em] uppercase text-[var(--bira-smoke)]">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </span>
                <ImageIcon
                  className="size-3.5 text-[var(--bira-gold)] opacity-60"
                  strokeWidth={1.5}
                />
              </div>

              {/* Bottom caption */}
              <div className="relative z-10">
                <p className="text-[0.58rem] font-bold tracking-[0.2em] uppercase text-[var(--bira-gold-deep)] mb-1.5">
                  {title}
                </p>
                <p className="font-display text-lg font-semibold text-[var(--bira-charcoal)] leading-snug">
                  {slide}
                </p>
                <p className="mt-1 text-[0.7rem] text-[var(--bira-smoke)]">
                  Placeholder — replaced with approved project imagery
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-3 size-7 rounded-none border border-[var(--bira-line)] bg-white text-[var(--bira-charcoal)] hover:border-[var(--bira-gold)] hover:text-[var(--bira-gold-deep)]" />
      <CarouselNext className="right-3 size-7 rounded-none border border-[var(--bira-line)] bg-white text-[var(--bira-charcoal)] hover:border-[var(--bira-gold)] hover:text-[var(--bira-gold-deep)]" />
    </Carousel>
  );
}
