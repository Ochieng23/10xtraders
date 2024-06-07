import React from "react";
import Image from "next/image";
import interactive from "../images/IB-Website-Logo.svg";
import fidelity from "../images/bbm-logo-1.svg";
import forex from "../images/Fid_Logo_Blk-1-1-768x214.webp";
import tickmill from "../images/Tickmill-logo-2.webp";
import binance from "../images/Binance-Website-Logo.svg";
import fxcm from "../images/FXCM-Website-Logo.svg";
import cfi from "../images/CFI.webp";
import blueberry from "../images/Official-Partners-Logo-ACY.svg";
import eightcup from "../images/Eightcap-Website-Logo.svg";
import avatrade from "../images/avatrade1-300x43.webp";
import acy from "../images/Official-Partners-Logo-300x46.webp";

const logos = [
  { name: "Interactive Brokers", logo: interactive },
  { name: "Fidelity", logo: fidelity },
  { name: "Forex.com", logo: forex },
  { name: "Tickmill", logo: tickmill },
  { name: "Binance", logo: binance },
  { name: "CFI Trade", logo: cfi },
  { name: "FXCM", logo: fxcm },
  { name: "Blueberry Markets", logo: blueberry },
  { name: "Eightcap", logo: eightcup },
  { name: "AvaTrade", logo: avatrade },
  { name: "ACY Securities", logo: acy },
];

function Partners() {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <p className="font-bold text-xl text-gray-600 text-center mb-6">
        Free via our partner brokers & exchanges
      </p>
      <ul
        role="list"
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center items-center"
      >
        {logos.map((company) => (
          <li key={company.name} className="flex justify-center">
            <Image
              src={company.logo}
              alt={company.name}
              width={140}
              height={50}
              className="object-contain"
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Partners;
