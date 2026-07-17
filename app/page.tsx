import { SiteNav } from '@/components/site-nav'
import { HeroCarousel } from '@/components/hero-carousel'
import { IntroStatement } from '@/components/intro-stats'
import { SchoolMuseum } from '@/components/school-museum'
import { ArtGallery } from '@/components/art-gallery'
import { ExhibitionsTimeline } from '@/components/exhibitions-timeline'
import { SiteFooter } from '@/components/site-footer'
import { carouselSlides } from '@/lib/artefkarp-data'

export default function Page() {
  return (
    <main className="bg-background">
      <SiteNav />
      <HeroCarousel slides={carouselSlides} />
      <IntroStatement />
      <SchoolMuseum />
      <ArtGallery />
      <ExhibitionsTimeline />
      <SiteFooter />
    </main>
  )
}
