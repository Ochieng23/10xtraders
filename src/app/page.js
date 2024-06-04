import { CallToAction } from "@/components/CallToAction";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Partners, { PartnersPage1, PartnersPage2 } from "@/components/Partners";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div>
          <Hero />
        </div>

        <PartnersPage1 />
        <PartnersPage2 />
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-300" />
          </div>
        </div>

        <div>
          <Features />
        </div>
        <CallToAction/>
      </main>
      <Footer/>
    </>
  );
}
