import Features from "@/components/Features";
import { Header } from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>
    <main >
     <div>
      <Hero/>
     </div>
     <div>
     <Features/>
     </div>
     
      
    </main>
    </>
  );
}
