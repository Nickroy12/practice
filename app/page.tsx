import AdvantagesSection from "@/components/Home/AdvantagesSection";
import CTASection from "@/components/Home/CTASection";
import FacebookMarketingCard from "@/components/Home/FacebookMarketingCard";
import FAQSection from "@/components/Home/FAQSection";
import GrowthStrategy from "@/components/Home/GrowthStrategy";
import Hero from "@/components/Home/Hero";
import PaymentMethods from "@/components/Home/PaymentMethods";
import ServicesSection from "@/components/Home/ServicesSection";
import StatsSection from "@/components/Home/StatsSection";
import WorkingProcess from "@/components/Home/WorkingProcess";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero/>
      <StatsSection/>
      <ServicesSection/>
      <FacebookMarketingCard/>
      <WorkingProcess/>
      <PaymentMethods/>
      <GrowthStrategy/>
      <AdvantagesSection/>
      <FAQSection/>
      <CTASection/>
    </main>
  )
}