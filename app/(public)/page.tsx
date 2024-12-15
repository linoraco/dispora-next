import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Brands from "@/components/Home/Brands";
import Feature from "@/components/Features";
import About from "@/components/Home/About";
import FeaturesTab from "@/components/Home/FeaturesTab";
import FunFact from "@/components/Home/FunFact";
import FAQ from "@/components/Home/FAQ";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Dinas Pemuda Dan Olahraga Kabupaten Minahasa Selatan",
  description: "Dinas Pemuda Dan Olahraga Kabupaten Minahasa Selatan",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      {/* <Integration /> */}
      {/* <CTA /> */}
      <FAQ />
      <Blog />
    </main>
  );
}
