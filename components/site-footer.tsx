import { Mail, MapPin, Phone } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr]">
          {/* Teacher bio */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-background/50">
              Υπεύθυνη Εργαστηρίου
            </p>
            <h2 className="font-serif text-2xl text-background md:text-3xl">
              Εκπαιδευτικός Εικαστικών
            </h2>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-background/70">
              Καθηγήτρια Εικαστικών του 2ου Γυμνασίου Ευκαρπίας, εμπνεύστρια και
              συντονίστρια του «Σχολείου Μουσείου». Με πολυετή δουλειά στο πεδίο
              της σχολικής δημιουργίας, μετέτρεψε τους διαδρόμους και τις αίθουσες
              σε έναν ζωντανό χώρο τέχνης όπου κάθε μαθητής βρίσκει τη φωνή του.
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-background/50">
              Επικοινωνία
            </p>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-background/50" />
                <span>2ο Γυμνάσιο Ευκαρπίας, Ευκαρπία, Θεσσαλονίκη</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-background/50" />
                <a href="tel:+302310000000" className="hover:text-background">
                  +30 2310 000 000
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-background/50" />
                <a
                  href="mailto:info@artefkarp.gr"
                  className="hover:text-background"
                >
                  info@artefkarp.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-background/15 pt-8 md:flex-row md:items-center md:justify-between">
          <span className="font-serif text-xl">artefkarp</span>
          <p className="text-xs text-background/50">
            © {new Date().getFullYear()} 2ο Γυμνάσιο Ευκαρπίας — Εργαστήριο
            Εικαστικών. Όλα τα έργα ανήκουν στους δημιουργούς μαθητές.
          </p>
        </div>
      </div>
    </footer>
  )
}
