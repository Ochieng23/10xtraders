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
    <div className="relative pb-20 bg-gray-50 mt-0 pt-20 text-center lg:pt-22 shadow-md isolate">
      <div className="relative isolate -z-10 py-10">
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
      <h1 className="text-3xl sm:text-6xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
        Turbocharge{" "}
        <span className="relative whitespace-nowrap">
          <span className="relative">Your </span>
          <br />
        </span>{" "}
        Trading Scripts With AI
        <BlinkingLine />
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-900">
        Design, Test and Implement your trading strategies using natural
        language and our proprietary trading script platform
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        {/* <Button
          variant="outline"
          href="/register"
          className="px-8 py-4 text-lg font-bold"
        >
          Get A Demo
        </Button> */}
        <Button
          href="/get-started"
          color="blue"
          className="px-8 md:px-16 sm:w-auto py-4 text-lg font-bold"
        >
          Get Started
        </Button>
      </div>
      <div className="flex items-center justify-center mt-10 lg:mt-10">
        <video
          width="1000"
          height="600"
          className="rounded-lg shadow-lg border-3"
          controls
          preload="none"
          poster="https://res.cloudinary.com/dhz4c0oae/image/upload/v1717991219/WhatsApp_Image_2024-06-09_at_22.56.39_ftmf1n.jpg"
        >
          <source
            src="https://res.cloudinary.com/dhz4c0oae/video/upload/v1718279411/1718228157_1_bbw0zv.mp4"
            type="video/mp4"
          />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srclang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
