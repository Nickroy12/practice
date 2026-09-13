import Hero from "@/components/Home/Hero";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsSection from "@/components/Home/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <StatsSection/>
      <ServicesSection/>
    </main>
  )
}