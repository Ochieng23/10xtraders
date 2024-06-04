import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../images/ExploreX-1-1.webp";

// Sample post data for illustration
const post = {
  _id: "1",
  slug: "sample-post",
  mainImage: img1,
  title: "Trade Smarter. Invest Better.",
  description:
    "Remove the guesswork from trading with advanced automated solutions. Stay ahead of the market with precise and timely executions. Maximize your trading potential and make informed decisions effortlessly.",
};

const post2 = {
  _id: "2",
  slug: "sample-post2",
  mainImage: img1,
  title: "Insights & Strategies",
  description:
    "Easily evaluate and refine your strategies with our advanced testing and simulation tools. Our insights and analysis resources empower you to make strategic trading decisions, enhancing your performance and maximizing returns.",
};

const post3 = {
  _id: "3",
  slug: "sample-post3",
  mainImage: img1,
  title: "Intelligent Alerts",
  description:
    "Set up custom alerts to keep you updated on the go. 10xTraders.ai constantly tracks real-time market movements, key financial indicators, and economic changes 24/7, ensuring you never miss a critical update.",
};

const post4 = {
  _id: "4",
  slug: "sample-post4",
  mainImage: img1,
  title: "Strategy Vault",
  description:
    "Running out of ideas? We've got you covered with an extensive range of real-time strategy examples to help you get started effortlessly and swiftly.",
};

function Features() {
  function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) {
      return text;
    }
    const words = text.split(" ");
    const truncatedText = words.slice(0, maxLength).join(" ");
    return truncatedText + "...";
  }

  return (
    <div className="mt-0 flex-col gap-10 bg-slate-50 px-10 py-10">
      <Link href="#">
        <div className="mt-2 flex flex-col gap-7 rounded-md  md:flex-row">
          {/* Text Section: Right */}
          <div className="flex w-full flex-col  justify-between px-8 py-40 md:w-3/5">
            <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold text-black max-w-l">
                {post.title}
              </h2>
              <p className="text-black text-xl">
                {truncateText(post.description, 70)}
              </p>
              <Link href="#" className="mt-4 inline-block text-blue-500">
                Get Started
              </Link>
            </div>
          </div>
          {/* Image Section: Left */}
          <div className="group relative overflow-hidden rounded-bl-md rounded-tl-md md:w-2/5">
            <Image
              src={post.mainImage}
              width={400}
              height={400}
              className="max-h-[500px] w-full rounded-bl-md rounded-tl-md object-cover"
              alt="main blog image"
            />
          </div>
        </div>
      </Link>
      <Link href="#">
        <div className="mt-2 flex flex-col gap-10 rounded-md  md:flex-row">
          {/* Image Section: Left */}
          <div className="group relative overflow-hidden rounded-bl-md rounded-tl-md md:w-2/5">
            <Image
              src={post2.mainImage}
              width={400}
              height={400}
              className="max-h-[500px] w-full rounded-bl-md rounded-tl-md object-cover"
              alt="main blog image"
            />
          </div>
          {/* Text Section: Right */}
          <div className="flex w-full flex-col justify-between px-8 py-40 md:w-3/5">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-black">{post2.title}</h2>
              <p className="text-black text-xl">
                {truncateText(post2.description, 50)}
              </p>
              <Link href="#" className="mt-4 inline-block text-blue-500">
                Get Started
              </Link>
            </div>
          </div>
          
        </div>
      </Link>
      <Link href="#">
        <div className="mt-2 flex flex-col gap-10 rounded-md  md:flex-row">
          {/* Text Section: Right */}
          <div className="flex w-full flex-col justify-between px-8 py-40 md:w-3/5">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-black">{post3.title}</h2>
              <p className="text-black text-xl">
                {truncateText(post3.description, 50)}
              </p>
              <Link href="#" className="mt-4 inline-block text-blue-500">
                Get Started
              </Link>
            </div>
          </div>
          {/* Image Section: Left */}
          <div className="group relative overflow-hidden rounded-bl-md rounded-tl-md md:w-2/5">
            <Image
              src={post3.mainImage}
              width={400}
              height={400}
              className="max-h-[500px] w-full rounded-bl-md rounded-tl-md object-cover"
              alt="main blog image"
            />
          </div>
        </div>
      </Link>
      <Link href="#">
        <div className="mt-2 flex flex-col gap-10 rounded-md  md:flex-row">
          {/* Image Section: Left */}
          <div className="group relative overflow-hidden rounded-bl-md rounded-tl-md md:w-2/5">
            <Image
              src={post4.mainImage}
              width={400}
              height={400}
              className="max-h-[500px] w-full rounded-bl-md rounded-tl-md object-cover"
              alt="main blog image"
            />
          </div>
          {/* Text Section: Right */}
          <div className="flex w-full flex-col justify-between px-8 py-40 md:w-3/5">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold text-black">{post4.title}</h2>
              <p className="text-black text-xl">
                {truncateText(post4.description, 70)}
              </p>
              <Link href="#" className="mt-4 inline-block text-blue-500">
                Get Started
              </Link>
            </div>
          </div>
          
        </div>
      </Link>
     
    </div>
  );
}

export default Features;
