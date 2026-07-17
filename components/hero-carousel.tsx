'use client'

import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import { useCarousel } from '@/hooks/use-carousel'
import type { CarouselSlide } from '@/lib/artefkarp-data'

export function HeroCarousel({ slides }: { slides: CarouselSlide[] }) {
  const { active, progress, setPaused, goTo, next, prev } = useCarousel({
    length: slides.length,
    interval: 6500,
  })

  const current = slides[active]

  return (
    <section
      id="top"
      className="relative flex h-[100svh] min-h-[600px] w-full flex-col overflow-hidden bg-background"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Βασικοί πυλώνες"
    >
      <div className="grid flex-1 grid-cols-1 md:grid-cols-2">
        {/* Text panel */}
        <div className="relative z-10 flex items-center px-5 pt-24 pb-10 md:px-12 md:pt-0 md:pb-0 lg:px-20">
          <div className="w-full max-w-xl">
            {slides.map((slide, i) => {
              const isActive = i === active
              return (
                <div
                  key={slide.id}
                  className={`transition-all duration-700 ease-out ${
                    isActive
                      ? 'block translate-y-0 opacity-100'
                      : 'pointer-events-none hidden translate-y-4 opacity-0'
                  }`}
                  aria-hidden={!isActive}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <span className="font-serif text-sm text-accent">
                      {slide.index}
                    </span>
                    <span className="h-px w-10 bg-border" />
                    <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      {slide.eyebrow}
                    </span>
                  </div>

                  <a
                    href={slide.href}
                    className="group block"
                    onClick={() => setPaused(false)}
                  >
                    <h2 className="text-balance font-serif text-4xl font-medium leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                      {slide.title}
                    </h2>
                    <p className="mt-6 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
                      {slide.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground">
                      Εξερεύνηση
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </a>
                </div>
              )
            })}
          </div>
        </div>

        {/* Image panel */}
        <div className="relative order-first min-h-[42svh] overflow-hidden bg-foreground md:order-last md:min-h-0">
          {slides.map((slide, i) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
                i === active
                  ? 'scale-100 opacity-100'
                  : 'scale-105 opacity-0'
              }`}
              aria-hidden={i !== active}
            >
              <img
                src={slide.image || '/placeholder.svg'}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent md:bg-gradient-to-r md:from-background/20 md:to-transparent" />
            </div>
          ))}

          {/* Slide counter */}
          <div className="absolute right-8 top-8 z-10 hidden font-serif text-sm text-background/90 md:block">
            <span className="text-background">{current.index}</span>
            <span className="mx-1 text-background/50">/</span>
            <span className="text-background/50">
              {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom control bar with progress timers */}
      <div className="relative z-10 border-t border-border bg-background">
        <div className="flex items-stretch">
          <div className="hidden items-center gap-1 border-r border-border px-4 md:flex">
            <button
              type="button"
              onClick={prev}
              className="flex size-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
              aria-label="Προηγούμενο"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex size-10 items-center justify-center rounded-full text-foreground/70 transition-colors hover:text-foreground"
              aria-label="Επόμενο"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>

          <ul className="grid flex-1 grid-cols-3 md:grid-cols-6">
            {slides.map((slide, i) => (
              <li key={slide.id} className="border-l border-border first:border-l-0">
                <button
                  type="button"
                  onClick={() => goTo(i)}
                  className="group flex w-full flex-col gap-2 px-3 py-3 text-left md:px-4 md:py-4"
                  aria-label={`Μετάβαση: ${slide.title}`}
                  aria-current={i === active}
                >
                  <span className="relative h-0.5 w-full overflow-hidden bg-border">
                    <span
                      className="absolute inset-y-0 left-0 bg-accent transition-[width] duration-100 ease-linear"
                      style={{
                        width:
                          i === active
                            ? `${progress * 100}%`
                            : i < active
                              ? '0%'
                              : '0%',
                      }}
                    />
                  </span>
                  <span
                    className={`truncate text-xs transition-colors md:text-sm ${
                      i === active
                        ? 'text-foreground'
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}
                  >
                    {slide.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
