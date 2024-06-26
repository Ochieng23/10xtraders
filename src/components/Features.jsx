import Image from "next/image";
import Link from "next/link";
import React from "react";

import { GoArrowUpRight } from "react-icons/go";

// Sample post data for illustration
const posts = [
  {
    _id: "1",
    tag: "Third Party Signals",
    slug: "sample-post",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1718275686/10_akawsk.jpg",
    title: "Revolutionize Your Trading ",
    description:
      "Automate and backtest your trading strategies seamlessly across major platforms like TV, TS, MT, and Binance.",
  },
  {
    _id: "2",
    tag: "Fine Tune",
    slug: "sample-post2",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1718275708/20_dbt0kw.jpg",
    title: "Create Custom Scripts ",
    description:
      "Create Proprietary, Customizable Trading Scripts & Trading Bots on demand.",
  },
  {
    _id: "3",
    tag: "Automate",
    slug: "sample-post3",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1718275728/30_micout.jpg",
    title: "Powered by Complex Prompt Engineering and GPT-4 Turbo",
    description:
      "Deploy our complex prompt engineering to turbocharge precise AI-generated trading scripts",
  },
  {
    _id: "4",
    tag: "Instant",
    slug: "sample-post4",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1718275745/40_ljmlr3.jpg",
    title: "Real-time market insights",
    description:
      "Get access to cutting edge real time market data & analytics for comprehensive market coverage.",
  },
  {
    _id: "5",
    tag: "peers",
    slug: "sample-post4",
    mainImage:
      "https://res.cloudinary.com/dhz4c0oae/image/upload/v1718275772/50_jsauqc.jpg",
    title: "10X Community",
    description:
      "Access a vibrant community of traders and developers to create, refine and share trade ideas and scripts.",
  },
  // Add more posts here if needed
];

function PrimaryFeatures() {
  function truncateText(text, maxLength) {
    if (!text || text.length <= maxLength) {
      return text;
    }
    const words = text.split(" ");
    const truncatedText = words.slice(0, maxLength).join(" ");
    return truncatedText + "...";
  }

  return (
    <div className="mt-0 flex flex-col gap-10 bg-white px-10 py-10">
      {posts.map((post, index) => (
        <Link
          href="#"
          key={post._id}
          className="no-underline hover:no-underline"
        >
          <div
            className={`mt-2 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2 p-4">
              <img
                src={post.mainImage}
                width={500}
                height={300}
                className="object-cover rounded-lg"
                alt="main blog image"
              />
            </div>
            {/* Text Section */}
            <div className="flex w-full flex-col justify-between p-4 md:w-1/2">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl font-bold text-black">{post.title}</h2>
                <p className="text-black text-xl">
                  {truncateText(post.description, 30)}
                </p>
                <Link
                  href="https://10xtraders.ai/tbb1/"
                  className="mt-4 inline-flex items-center text-lime-600"
                >
                  <span>Get Started</span>
                  <GoArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default PrimaryFeatures;
