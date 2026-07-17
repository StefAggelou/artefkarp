'use client'

import { useState } from 'react'
import { conceptAxes } from '@/lib/artefkarp-data'

export function SchoolMuseum() {
  const [activeAxis, setActiveAxis] = useState(conceptAxes[0].id)
  const current = conceptAxes.find((a) => a.id === activeAxis) ?? conceptAxes[0]

  return (
    <section id="museum" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">
              Κεντρικός Πυρήνας
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground md:text-5xl">
              Το Σχολείο Μουσείο
            </h2>
          </div>
          <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
            Συντήρηση & Διάχυση: κάθε έργο τεκμηριώνεται, φωτογραφίζεται και
            γίνεται μέρος μιας ζωντανής συλλογής που ανοίγει στην κοινότητα.
          </p>
        </div>

        {/* Συντήρηση & Διάχυση */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-background p-8">
            <h3 className="font-serif text-2xl text-foreground">Συντήρηση</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              Οι τοιχογραφίες και τα τρισδιάστατα έργα προστατεύονται και
              αποκαθίστανται, ώστε να παραμείνουν ζωντανά μέσα στον χρόνο και να
              συνομιλούν με κάθε νέα γενιά μαθητών.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-background p-8">
            <h3 className="font-serif text-2xl text-foreground">Διάχυση</h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              Μέσα από ψηφιακή τεκμηρίωση, εκθέσεις και συνεργασίες, η δουλειά
              των μαθητών ταξιδεύει έξω από την αίθουσα και φτάνει στη γειτονιά
              και σε άλλα σχολεία.
            </p>
          </div>
        </div>

        {/* Concept & Θεματικές Ενότητες */}
        <div className="mt-20">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">
            Concept
          </p>
          <h3 className="max-w-2xl text-balance font-serif text-2xl font-medium text-foreground md:text-3xl">
            Εννέα δυναμικοί εκπαιδευτικοί άξονες
          </h3>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
              {conceptAxes.map((axis) => {
                const isActive = axis.id === activeAxis
                return (
                  <button
                    key={axis.id}
                    type="button"
                    onMouseEnter={() => setActiveAxis(axis.id)}
                    onFocus={() => setActiveAxis(axis.id)}
                    onClick={() => setActiveAxis(axis.id)}
                    className={`group flex min-h-28 flex-col items-start justify-between p-5 text-left transition-colors ${
                      isActive
                        ? 'bg-foreground text-background'
                        : 'bg-background text-foreground hover:bg-secondary'
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className="text-2xl">{axis.index}</span>
                    <span className="mt-4 text-sm font-medium leading-snug">
                      {axis.title}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="flex flex-col justify-center rounded-lg border border-border bg-background p-8">
              <span className="font-serif text-5xl text-accent">
                {current.index}
              </span>
              <h4 className="mt-4 font-serif text-2xl text-foreground">
                {current.title}
              </h4>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {current.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
