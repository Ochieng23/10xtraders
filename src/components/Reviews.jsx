"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from "@heroicons/react/20/solid";
import { RiMessage2Line } from "react-icons/ri";
import Link from "next/link";

// Define the reviews
const reviews = [
  {
    id: 1,
    name: "Jane Smith",
    rating: 5,
    review:
      "10xTraders.ai has completely transformed my trading experience. With their advanced tools, I can automate my strategies seamlessly, saving time and increasing my profitability.",
    icon: RiMessage2Line,
  },
  {
    id: 2,
    name: "Reynaldo Villafuerte",
    rating: 5,
    review:
      "As someone who is new to trading, 10xTraders.ai has been a game-changer. The platform is user-friendly and has allowed me to learn and implement strategies with confidence.",
    icon: RiMessage2Line,
  },
  {
    id: 3,
    name: "Michael Lee",
    rating: 5,
    review:
      "The automated trading features of 10xTraders.ai are top-notch. I no longer have to worry about missing opportunities, and my trades are executed with precision.",
    icon: RiMessage2Line,
  },
];

export default function ReviewsCarousel() {
  // Define the carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="py-16 px-8 text-center"
      style={{ backgroundColor: "#6FEA3BCC" }}
    >
      <h4 className="text-yellow-800 font-semibold text-center">FEEDBACK</h4>
      <h2 className="text-white text-4xl font-bold mb-10">
        From The Community
      </h2>
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4">
              <div className="bg-white rounded-lg shadow-lg h-96 flex flex-col justify-between overflow-hidden">
                <div className="bg-lime-100 pt-4 px-2 py-4 rounded-t-lg ">
                  <div className="flex items-center space-x-4">
                    <review.icon className="h-6 w-6 text-lime-600" />
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-lg font-bold text-gray-900">
                          {review.name}
                        </h3>
                        <div className="ml-2 flex items-center">
                          {Array.from({ length: review.rating }).map(
                            (_, index) => (
                              <StarIcon
                                key={index}
                                className="h-5 w-5 text-yellow-500"
                              />
                            )
                          )}
                          {Array.from({ length: 5 - review.rating }).map(
                            (_, index) => (
                              <StarIcon
                                key={index}
                                className="h-5 w-5 text-gray-300"
                              />
                            )
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        Review On Trustpilot
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center">
                  <p className="text-gray-700">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Link
        href="https://www.trustpilot.com"
        className="mt-6 inline-block text-white font-semibold"
      >
        MORE REVIEWS ON TRUSTPILOT
      </Link>
    </section>
  );
}
