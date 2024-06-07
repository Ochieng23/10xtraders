import Image from "next/image";
import image1 from "../images/ad1.png";
import image2 from "../images/ad2.webp";
import image3 from "../images/ad3.webp";
import image4 from "../images/ad4.webp";

const products = [
  {
    id: 1,
    name: "TradingView Alerts",
    href: "#",
    description:
      "Use any line or tech indicator available on TradingView to trigger your automated trading strategies.",
    imageSrc: image1,
    imageAlt: "TradingView Alerts illustration.",
  },
  {
    id: 2,
    name: "Dollar Cost Averaging (DCA)",
    href: "#",
    description:
      "Increase your trade size on scheduled time intervals to limit exposure to volatility or spread out one larger investment into smaller investments.",
    imageSrc: image2,
    imageAlt: "Dollar Cost Averaging illustration.",
  },
  {
    id: 3,
    name: "Trade At A Specific Timing",
    href: "#",
    description:
      "Time your entry & exit in a way that only if a certain event happens at a certain time your orders will be triggered.",
    imageSrc: image3,
    imageAlt: "Trade Timing illustration.",
  },
  {
    id: 4,
    name: "Trailing Take Profit",
    href: "#",
    description:
      "Set your Trailing-Stop to trigger only after a certain profit was reached, so you can lock your profits while guarding your position.",
    imageSrc: image4,
    imageAlt: "Trailing Take Profit illustration.",
  },
];

export default function AdvancedFeatures() {
  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-yellow-400 text-center font-semibold">Customize</h3>
        <h2 className="text-3xl text-center font-extrabold tracking-tight text-gray-900">
          Comprehensive Trading Automations Solutions
        </h2>
        <p className="text-center text-slate-400 text-xl px-10 mt-4">
          From simplifying your daily trades to building intricate automated
          systems, 10XTraders.ai empowers you to automate your trading
          effortlessly, with zero coding required.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
            >
              <div className="flex-1 p-6 flex flex-col">
                <div className="aspect-w-4 aspect-h-3 bg-white sm:aspect-none sm:h-48">
                  <Image
                    width={400}
                    height={300}
                    layout="responsive"
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-center object-contain sm:h-full sm:w-full"
                  />
                </div>
                <h3 className="mt-0 text-sm font-bold text-center text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="mt-0 text-sm text-center text-gray-500">
                  {product.description}
                </p>
                <div className="flex-1 flex items-end justify-center mt-4">
                  <a
                    href={product.href}
                    className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-lime-600 hover:bg-lime-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
