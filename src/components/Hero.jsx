"use client";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import styles from "../styles/blinkingLine.module.css";

const BlinkingLine = () => {
  return <div className={styles.blinkingLine}></div>;
};

export default function Hero() {
  return (
    <div className="relative pb-16 bg-gray-50 mt-7 pt-20 text-center lg:pt-22 shadow-md isolate">
      <div className="relative isolate -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-100 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
      </div>
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Natural{" "}
        <span className="relative whitespace-nowrap ">
         
          <span className="relative">Language</span>
          <br />
        </span>{" "}
        Trading Automation
        <BlinkingLine />
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Effortly design, test, and automate trading strategies using plain
        english commands. Simplify your trading process and make smarter
        decisions.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button variant="outline" href="/register"><span className="font-bold">Request Demo</span></Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          // variant="outline"
          color="blue"
        >
          {/* <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-lime-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg> */}
          <span className="ml-3 ">Get Started</span>
        </Button>
      </div>
      <div className="flex items-center justify-center mt-10 lg:mt-10">
        <video
          className="rounded-lg border-3 "
          width="1000"
          height="600"
          controls
          preload="none"
        >
          <source src="/path/to/video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
