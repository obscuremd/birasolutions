"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type Slide = { label: string; src?: string };

type HeroCarouselProps = {
  slides: (string | Slide)[];
  children: React.ReactNode;
  className?: string;
  minHeight?: string;
};

export function HeroCarousel({
  slides,
  children,
  className,
  minHeight = "min-h-[calc(100svh-5.25rem)]",
}: HeroCarouselProps) {
  const normalized: Slide[] = slides.map((s) =>
    typeof s === "string" ? { label: s } : s,
  );
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (idx: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent((idx + normalized.length) % normalized.length);
        setTransitioning(false);
      }, 300);
    },
    [transitioning, normalized.length],
  );

  const next = useCallback(() => go(current + 1), [go, current]);
  const prev = useCallback(() => go(current - 1), [go, current]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  return (
    <section className={cn("relative overflow-hidden", minHeight, className)}>
      {normalized.map((slide, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            i === current ? "opacity-100" : "opacity-0",
          )}
        >
          {slide.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slide.src}
              alt={slide.label}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div
              className="absolute inset-0 image-slot scan-lines"
              style={{ borderRadius: 0 }}
            >
              <div className="absolute inset-0 tech-dots opacity-60" />
              <div
                className="absolute -right-32 -top-32 size-[500px] rounded-full opacity-18 blur-[80px]"
                style={{
                  background:
                    "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
                }}
              />
              <div
                className="absolute -bottom-20 -left-20 size-[400px] rounded-full opacity-15 blur-[70px]"
                style={{
                  background:
                    "radial-gradient(circle, var(--bs-green) 0%, transparent 70%)",
                }}
              />
              <div className="absolute bottom-12 right-12 text-right">
                <p className="text-[0.58rem] font-bold tracking-[0.28em] uppercase text-[var(--bs-blue)]/60 mb-1">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(normalized.length).padStart(2, "0")}
                </p>
                <p className="font-bold text-[var(--bs-white)]/20 text-lg max-w-[220px] leading-snug">
                  {slide.label}
                </p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 hero-overlay" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--bs-dark)] to-transparent" />
        </div>
      ))}

      <div className="relative z-10 h-full">{children}</div>

      {/* Controls */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={() => {
            prev();
            resetTimer();
          }}
          className="flex size-8 items-center justify-center rounded-lg border border-[var(--bs-navy-border)] bg-[var(--bs-dark)]/70 text-[var(--bs-muted)] hover:border-[var(--bs-blue)] hover:text-[var(--bs-blue)] transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-3.5" />
        </button>
        <div className="flex items-center gap-2">
          {normalized.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                go(i);
                resetTimer();
              }}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "transition-all duration-300 rounded-full",
                i === current
                  ? "h-1.5 w-6 bg-[var(--bs-blue)]"
                  : "size-1.5 bg-[var(--bs-muted)]/50 hover:bg-[var(--bs-muted)]",
              )}
            />
          ))}
        </div>
        <button
          onClick={() => {
            next();
            resetTimer();
          }}
          className="flex size-8 items-center justify-center rounded-lg border border-[var(--bs-navy-border)] bg-[var(--bs-dark)]/70 text-[var(--bs-muted)] hover:border-[var(--bs-blue)] hover:text-[var(--bs-blue)] transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="size-3.5" />
        </button>
      </div>

      {/* Corner accents — blue */}
      <div className="pointer-events-none absolute left-0 top-0 h-16 w-px bg-gradient-to-b from-[var(--bs-blue)] to-transparent opacity-50 z-10" />
      <div className="pointer-events-none absolute left-0 top-0 h-px w-16 bg-gradient-to-r from-[var(--bs-blue)] to-transparent opacity-50 z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-[var(--bs-green)] to-transparent opacity-30 z-10" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[var(--bs-green)] to-transparent opacity-30 z-10" />
    </section>
  );
}

/* ── Compact inline carousel ─────────────────────────────────── */
type InlineSlide = { label: string; src?: string };

type InlineCarouselProps = {
  title: string;
  /** Accept string shorthand or full slide objects with optional src */
  slides: (string | InlineSlide)[];
  className?: string;
};

export function ImageCarousel({
  title,
  slides,
  className,
}: InlineCarouselProps) {
  const normalized: InlineSlide[] = slides.map((s) =>
    typeof s === "string" ? { label: s } : s,
  );

  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % normalized.length),
    [normalized.length],
  );

  useEffect(() => {
    timerRef.current = setInterval(next, 4000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [next]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 4000);
  };

  const slide = normalized[current];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[var(--radius)] border border-[var(--bs-navy-border)] bg-[var(--bs-navy-mid)]",
        className,
      )}
    >
      {/* ── Image area — 16/9 aspect ratio ── */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {slide.src ? (
          /* Real image — fills the slot */
          <Image
            src={slide.src}
            alt={slide.label}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          /* Styled placeholder — shown when no src is provided */
          <div className="absolute inset-0 image-slot">
            <div className="absolute inset-0 tech-dots opacity-40" />
            <div
              className="absolute right-0 top-0 size-48 opacity-20 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, var(--bs-blue) 0%, transparent 70%)",
              }}
            />
            {/* Centred placeholder icon + label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-full border border-[var(--bs-navy-border)] bg-[var(--bs-navy-light)] text-[var(--bs-muted)]">
                <ImageIcon className="size-5" strokeWidth={1.5} />
              </div>
              <p className="text-[0.72rem] font-bold tracking-[0.18em] uppercase text-[var(--bs-muted)] text-center max-w-[180px] leading-snug">
                {slide.label}
              </p>
              <p className="text-[0.62rem] text-[var(--bs-subtle)]">
                Replace with approved imagery
              </p>
            </div>
          </div>
        )}

        {/* Dark gradient at bottom of image for caption legibility */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--bs-navy-mid)] to-transparent" />

        {/* Slide counter — top left */}
        <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-[var(--bs-navy-border)] bg-[var(--bs-dark)]/70 px-2.5 py-1 backdrop-blur-sm">
          <span className="text-[0.58rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-muted)]">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(normalized.length).padStart(2, "0")}
          </span>
        </div>

        {/* Title badge — top right */}
        <div className="absolute right-3 top-3 rounded-full border border-[var(--bs-navy-border)] bg-[var(--bs-dark)]/70 px-2.5 py-1 backdrop-blur-sm">
          <span className="text-[0.58rem] font-bold tracking-[0.2em] uppercase text-[var(--bs-blue)]/70">
            {title}
          </span>
        </div>
      </div>

      {/* ── Caption bar below image ── */}
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <p className="text-[0.8rem] font-semibold text-[var(--bs-white)] leading-snug truncate">
          {slide.label}
        </p>

        {/* Dot navigation */}
        <div className="flex items-center gap-1.5 shrink-0">
          {normalized.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "transition-all duration-300 rounded-full",
                i === current
                  ? "h-1.5 w-5 bg-[var(--bs-blue)]"
                  : "size-1.5 bg-[var(--bs-muted)]/40 hover:bg-[var(--bs-muted)]",
              )}
            />
          ))}
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[var(--bs-navy-border)]">
        <div
          className="h-full bg-[var(--bs-blue)] transition-all duration-300"
          style={{ width: `${((current + 1) / normalized.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
