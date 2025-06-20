import {
  CallToActionSection,
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from './sections'

export function LandingPage() {
  return (
    <article className="flex flex-col">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  )
}
