import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "../images/ExploreX-1-1.webp";
import { GoArrowUpRight } from "react-icons/go";

// Sample post data for illustration
const posts = [
  {
    _id: "1",
    tag: "Third Party Signals",
    slug: "sample-post",
    mainImage: img1,
    title: "Optimize & Plan",
    description:
      "Effortlessly enhance and fine-tune your strategies with our cutting-edge testing and simulation tools. Our comprehensive insights and analysis resources empower you to make informed trading decisions, boosting your performance and maximizing your returns.s",
  },
  {
    _id: "2",
    tag: "Fine Tune",
    slug: "sample-post2",
    mainImage: img1,
    title: "Refine & Execute",
    description:
      "Enhance and perfect your strategies with our state-of-the-art testing and simulation tools. Our insights and analytical resources empower you to make informed trading decisions, boosting your performance and maximizing your returns.",
  },
  {
    _id: "3",
    tag: "FEEDBACK",
    slug: "sample-post3",
    mainImage: img1,
    title: "Automated Signals",
    description:
      "Create personalized alerts to stay informed wherever you are. 10xTraders.ai scripts continuously monitors real-time market trends, essential financial indicators, and economic developments 24/7, ensuring you never miss a crucial update.",
  },
  {
    _id: "4",
    tag: "Reason With Us",
    slug: "sample-post4",
    mainImage: img1,
    title: "Strategy Library",
    description:
      "Out of fresh ideas? We’ve got you covered with a wide array of live strategy examples, ready to kickstart your trading journey smoothly and efficiently.",
  },
  // Add more posts here if needed
];

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
    <div className="mt-0 flex-col gap-10 bg-white px-10 py-10">
      {posts.map((post, index) => (
        <Link href="#" key={post._id}>
          <div
            className={`mt-2 flex flex-col gap-7 rounded-md md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <div className="flex w-full flex-col justify-between px-8 py-20 md:w-3/5">
              <div className="flex flex-col gap-4">
                <h3 className="text-yellow-400 font-semibold">{post.tag}</h3>
                <h2 className="text-4xl font-bold text-black">{post.title}</h2>
                <p className="text-black text-xl">
                  {truncateText(post.description, 70)}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center text-lime-600"
                >
                  <span>Get Started</span>
                  <GoArrowUpRight className="ml-2" />
                </Link>
              </div>
            </div>
            {/* Image Section */}
            <div className="group relative overflow-hidden rounded-md md:w-2/5">
              <Image
                src={post.mainImage}
                width={400}
                height={400}
                className="max-h-[400px] w-full object-cover"
                alt="main blog image"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Features;
