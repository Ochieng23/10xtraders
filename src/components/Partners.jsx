import React from "react";
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
import Image from "next/image";

const logosPage1 = [
  { name: "Interactive Brokers", logo: interactive },
  { name: "Fidelity", logo: fidelity },
  { name: "Forex.com", logo: forex },
  { name: "Tickmill", logo: tickmill },
  { name: "Binance", logo: binance },
];

const logosPage2 = [
  { name: "CFI Trade", logo: cfi },
  { name: "FXCM", logo: fxcm },
  { name: "Blueberry Markets", logo: blueberry },
  { name: "Eightcap", logo: eightcup },
  { name: "AvaTrade", logo: avatrade },
  { name: "ACY Securities", logo: acy },
];

function PartnersPage1() {
  return (
    <div className="mt-0 lg:mt-0 bg-white py-5 px-1">
      <p className="font-bold text-base text-slate-900 text-center">
        Free via our partner brokers & exchanges
      </p>
      <ul
        role="list"
        className="flex items-center justify-center gap-x-8 gap-y-10 xl:gap-x-12"
      >
        {logosPage1.map((company) => (
          <li key={company.name} className="flex">
            <Image
              src={company.logo}
              alt={company.name}
              width={150}
              height={50}
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function PartnersPage2() {
  return (
    <div className="shadow-md px-1 mt-0 lg:mt-0 bg-white py-5">
      <ul
        role="list"
        className="flex items-center justify-center gap-x-8 gap-y-10 xl:gap-x-12"
      >
        {logosPage2.map((company) => (
          <li key={company.name} className="flex">
            <Image
              src={company.logo}
              alt={company.name}
              width={150}
              height={50}
              unoptimized
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { PartnersPage1, PartnersPage2 };
