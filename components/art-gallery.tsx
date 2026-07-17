'use client'

import { useMemo, useState } from 'react'
import { galleryItems, mediumFilters, type Medium } from '@/lib/artefkarp-data'

export function ArtGallery() {
  const [filter, setFilter] = useState<Medium | 'all'>('all')

  const items = useMemo(
    () =>
      filter === 'all'
        ? galleryItems
        : galleryItems.filter((item) => item.medium === filter),
    [filter],
  )

  return (
    <section id="gallery" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">
              Συλλογή
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground md:text-5xl">
              Art Gallery
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Μια επιλογή έργων ταξινομημένη ανά τεχνική μέσο — από το σχέδιο και τη
            ζωγραφική έως τις εγκαταστάσεις και τα performances.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-border pb-6">
          {mediumFilters.map((f) => {
            const isActive = filter === f.value
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border bg-background text-foreground/70 hover:border-foreground/40 hover:text-foreground'
                }`}
                aria-pressed={isActive}
              >
                {f.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="group">
              <div className="overflow-hidden rounded-lg bg-secondary">
                <img
                  src={item.image || '/placeholder.svg'}
                  alt={item.title}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-serif text-lg text-foreground">
                  {item.title}
                </h3>
                <span className="shrink-0 text-sm text-muted-foreground">
                  {item.year}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{item.student}</p>
            </li>
          ))}
        </ul>

        {items.length === 0 && (
          <p className="mt-10 text-center text-muted-foreground">
            Δεν υπάρχουν έργα σε αυτή την κατηγορία.
          </p>
        )}
      </div>
    </section>
  )
}
