import { timelineEntries } from '@/lib/artefkarp-data'

const categoryLabel: Record<string, string> = {
  exhibition: 'Έκθεση',
  action: 'Δράση',
}

export function ExhibitionsTimeline() {
  return (
    <section id="exhibitions" className="scroll-mt-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">
            Χρονολόγιο
          </p>
          <h2 className="font-serif text-3xl font-medium text-foreground md:text-5xl">
            Εκθέσεις & Δράσεις
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Προσωρινές σχολικές εκθέσεις και κοινωνικές δράσεις — από φεστιβάλ και
            συνεργασίες μέχρι δράσεις μνήμης και συμπερίληψης.
          </p>
        </div>

        <ol className="mt-14 border-t border-border">
          {timelineEntries.map((entry) => (
            <li
              key={entry.id}
              className="grid gap-2 border-b border-border py-8 md:grid-cols-[120px_160px_1fr] md:items-baseline md:gap-8"
            >
              <span className="font-serif text-2xl text-foreground">
                {entry.year}
              </span>
              <span
                className={`w-fit rounded-full px-3 py-1 text-xs uppercase tracking-wider ${
                  entry.category === 'exhibition'
                    ? 'bg-foreground text-background'
                    : 'bg-accent text-accent-foreground'
                }`}
              >
                {categoryLabel[entry.category]}
              </span>
              <div>
                <h3 className="font-serif text-xl text-foreground">
                  {entry.title}
                </h3>
                <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
