import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-950 py-20"
    >
      <Container className="relative">
        <div className="mx-auto  text-center">
          <h2 className="font-extrabold text-4xl font-extrabold tracking-tight text-white sm:text-4xl">
            Free Via Our Partner Brokers & Exchanges
          </h2>

          <div className="mt-10 flex justify-center space-x-5">
            {/* <Button
              className="px-8 py-4 text-lg font-bold"
              href="/register"
              color="white"
            >
              Request Demo
            </Button> */}
            <Button
              className="px-8 py-4 text-lg font-bold"
              href="https://10xtraders.ai/tbb1/"
              color="blue"
            >
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
