import { CallToAction } from "@/components/CallToAction";
import Features from "@/components/Features";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Partners, { PartnersPage1, PartnersPage2 } from "@/components/Partners";
import Image from "next/image";
import Reviews from "@/components/Reviews";

function SlantedDivider() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <div className="w-full h-16 bg-white transform -skew-y-3"></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <div>
          <Hero />
        </div>

        <Partners />
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
          <div className="relative">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
        </div>
        <AdvancedFeatures />
        {/* <Reviews /> */}
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
