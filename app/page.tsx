import Header from "@/components/sections/Header";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import HowItsWorks from "@/components/sections/HowItsWorks";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center-center space-y-3">
      <Header />

      <Hero />
      <Features />
      <HowItsWorks />

      <Footer />
    </section>
  );
}
