import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LmsBlock from "@/components/LmsBlock";
import TrainingSection from "@/components/TrainingSection";
import ManagementSection from "@/components/ManagementSection";
import TransformationHub from "@/components/TransformationHub";
import ConsultantSection from "@/components/ConsultantSection";
import CtaSection from "@/components/CtaSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <LmsBlock />
        <TrainingSection />
        <ManagementSection />
        <TransformationHub />
        <ConsultantSection />
        <CtaSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}