// Mock data for artefkarp.
// Shaped to map cleanly onto a Headless CMS (e.g. Sanity.io) later:
// each collection is an array of typed documents with stable ids/slugs.

export type CarouselSlide = {
  id: string
  index: string
  eyebrow: string
  title: string
  description: string
  href: string
  image: string
}

export type ConceptAxis = {
  id: string
  index: string
  title: string
  description: string
}

export type Medium =
  | 'drawing'
  | 'construction'
  | 'ceramics'
  | 'installation'

export type GalleryItem = {
  id: string
  title: string
  student: string
  year: string
  medium: Medium
  image: string
}

export type MediumFilter = {
  value: Medium | 'all'
  label: string
}

export type TimelineEntry = {
  id: string
  year: string
  category: 'exhibition' | 'action'
  title: string
  description: string
}

export const carouselSlides: CarouselSlide[] = [
  {
    id: 'museum',
    index: '01',
    eyebrow: 'Κεντρικός Άξονας',
    title: 'Το Σχολείο Μουσείο',
    description:
      'Διάδρομοι, αίθουσες και κατώφλια που μεταμορφώθηκαν σε έναν ζωντανό εκθεσιακό χώρο.',
    href: '#museum',
    image: '/images/hero-museum.png',
  },
  {
    id: 'exhibitions',
    index: '02',
    eyebrow: 'Παρουσίαση',
    title: 'Εκθέσεις',
    description:
      'Ετήσιες παρουσιάσεις των έργων και των τριών τάξεων, ανοιχτές στην κοινότητα.',
    href: '#exhibitions',
    image: '/images/hero-exhibitions.png',
  },
  {
    id: 'gallery',
    index: '03',
    eyebrow: 'Συλλογή',
    title: 'Art Gallery',
    description:
      'Η ψηφιακή πινακοθήκη με σχέδιο, ζωγραφική, κεραμική και εγκαταστάσεις.',
    href: '#gallery',
    image: '/images/hero-gallery.png',
  },
  {
    id: 'actions',
    index: '04',
    eyebrow: 'Συμμετοχή',
    title: 'Δράσεις',
    description:
      'Συνεργατικά εργαστήρια, δράσεις μνήμης, οικολογίας και συμπερίληψης.',
    href: '#exhibitions',
    image: '/images/hero-installations.png',
  },
  {
    id: 'workshop',
    index: '05',
    eyebrow: 'Χώρος',
    title: 'Εργαστήριο',
    description:
      'Ο πυρήνας της δημιουργίας — εκεί όπου κάθε ιδέα γίνεται εικαστικό έργο.',
    href: '#museum',
    image: '/images/hero-history.png',
  },
  {
    id: 'contact',
    index: '06',
    eyebrow: 'Γνωριμία',
    title: 'Επικοινωνία / Καθηγήτρια',
    description:
      'Η υπεύθυνη του εργαστηρίου και τα στοιχεία επικοινωνίας του σχολείου.',
    href: '#contact',
    image: '/images/hero-ceramics.png',
  },
]

export const quickStats = [
  { id: 'axes', value: '9', label: 'Εννοιολογικοί Άξονες' },
  { id: 'murals', value: '50+', label: 'Τοιχογραφίες' },
  { id: 'artworks', value: '100άδες', label: 'Έργα Μαθητών' },
  { id: 'years', value: '12', label: 'Χρόνια Δημιουργίας' },
]

export const conceptAxes: ConceptAxis[] = [
  {
    id: 'identity',
    index: '①',
    title: 'Ταυτότητα',
    description: 'Ποιοι είμαστε — αυτοπροσωπογραφίες, καταγωγή και το εγώ μέσα στην ομάδα.',
  },
  {
    id: 'values',
    index: '②',
    title: 'Αξίες',
    description: 'Ελευθερία, δικαιοσύνη και αλληλεγγύη ως εικαστικά ερωτήματα.',
  },
  {
    id: 'time',
    index: '③',
    title: 'Στην κλεψύδρα του Χρόνου',
    description: 'Μνήμη, παρελθόν και μέλλον στην ίδια επιφάνεια.',
  },
  {
    id: 'inscriptions',
    index: '④',
    title: 'Θεσμικές Επιγραφές',
    description: 'Το κείμενο ως εικόνα και ο δημόσιος χώρος του σχολείου.',
  },
  {
    id: 'ecology',
    index: '⑤',
    title: 'Οικολογία & Φύση',
    description: 'Η σχέση μας με το περιβάλλον μέσα από ανακυκλωμένα υλικά.',
  },
  {
    id: 'communication',
    index: '⑥',
    title: 'Επικοινωνία εκτός Συνόρων',
    description: 'Γέφυρες με άλλους πολιτισμούς και σχολεία του κόσμου.',
  },
  {
    id: 'local',
    index: '⑦',
    title: 'Τοπική Ιστορία',
    description: 'Η Ευκαρπία, οι πρόσφυγες και οι ιστορίες της γειτονιάς.',
  },
  {
    id: 'atrium',
    index: '⑧',
    title: 'Αίθριο',
    description: 'Ο ανοιχτός πυρήνας του σχολείου ως ζωντανό εργαστήρι.',
  },
  {
    id: 'doors',
    index: '⑨',
    title: 'Πόρτες Εργαστηρίων',
    description: 'Κάθε πόρτα μια πρόσκληση — κατώφλια που έγιναν έργα τέχνης.',
  },
]

export const mediumFilters: MediumFilter[] = [
  { value: 'all', label: 'Όλα' },
  { value: 'drawing', label: 'Σχέδιο / Ζωγραφική / Comics' },
  { value: 'construction', label: 'Κατασκευές' },
  { value: 'ceramics', label: 'Κεραμική' },
  { value: 'installation', label: 'Εγκαταστάσεις & Performances' },
]

export const galleryItems: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Πορτρέτο σε Μολύβι',
    student: 'Μαθητής Β΄ Τάξης',
    year: '2024',
    medium: 'drawing',
    image: '/images/art-drawing.png',
  },
  {
    id: 'g2',
    title: 'Αφηρημένη Σύνθεση',
    student: 'Μαθήτρια Γ΄ Τάξης',
    year: '2024',
    medium: 'drawing',
    image: '/images/art-painting.png',
  },
  {
    id: 'g3',
    title: 'Σελίδα Comic',
    student: 'Ομαδικό Έργο',
    year: '2023',
    medium: 'drawing',
    image: '/images/art-comics.png',
  },
  {
    id: 'g4',
    title: 'Γεωμετρική Κατασκευή',
    student: 'Μαθητής Α΄ Τάξης',
    year: '2023',
    medium: 'construction',
    image: '/images/art-construction.png',
  },
  {
    id: 'g5',
    title: 'Κεραμικό Αγγείο',
    student: 'Μαθήτρια Β΄ Τάξης',
    year: '2024',
    medium: 'ceramics',
    image: '/images/art-ceramic.png',
  },
  {
    id: 'g6',
    title: 'Performance «Κίνηση»',
    student: 'Ομάδα Θεάτρου',
    year: '2023',
    medium: 'installation',
    image: '/images/art-performance.png',
  },
  {
    id: 'g7',
    title: 'Κρεμαστά Πουλιά',
    student: 'Ομαδικό Έργο',
    year: '2024',
    medium: 'installation',
    image: '/images/art-installation.png',
  },
  {
    id: 'g8',
    title: 'Τοπίο σε Ακουαρέλα',
    student: 'Μαθήτρια Α΄ Τάξης',
    year: '2024',
    medium: 'drawing',
    image: '/images/art-painting2.png',
  },
]

export const timelineEntries: TimelineEntry[] = [
  {
    id: 't1',
    year: '2024',
    category: 'exhibition',
    title: 'Φεστιβάλ Εικαστικών Ευκαρπίας',
    description: 'Ετήσια έκθεση με έργα και από τις τρεις τάξεις στον αύλειο χώρο.',
  },
  {
    id: 't2',
    year: '2024',
    category: 'action',
    title: 'Δράση Ανακύκλωσης',
    description: 'Δημιουργία εικαστικών εγκαταστάσεων από ανακυκλωμένα υλικά.',
  },
  {
    id: 't3',
    year: '2023',
    category: 'exhibition',
    title: 'Έκθεση με την Ένωση ΑμεΑ',
    description: 'Συνεργατική έκθεση συμπερίληψης και κοινής δημιουργίας.',
  },
  {
    id: 't4',
    year: '2023',
    category: 'action',
    title: 'Το Προσφυγικό στα Μάτια μας',
    description: 'Εικαστικό αφιέρωμα στην ιστορία της προσφυγικής Ευκαρπίας.',
  },
  {
    id: 't5',
    year: '2022',
    category: 'action',
    title: 'Αντιφασιστικές Δράσεις',
    description: 'Τοιχογραφίες μνήμης και μηνύματα για τη δημοκρατία.',
  },
]
