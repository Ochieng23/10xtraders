import { StarIcon } from "@heroicons/react/20/solid";
import { RiMessage2Line } from "react-icons/ri";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 4,
    review:
      "Leverage any indicator or tool on 10xTraders to activate your automated trading strategies instantly.",
    icon: RiMessage2Line,
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    review:
      "As someone who is new to trading, 10xTraders.ai has been a game-changer. The platform is user-friendly and has allowed me to learn and implement strategies with confidence.",
    icon: RiMessage2Line,
  },
  {
    id: 3,
    name: "Michael Lee",
    rating: 4,
    review:
      "The automated trading features of 10xTraders.ai are top-notch. I no longer have to worry about missing opportunities, and my trades are executed with precision.",
    icon: RiMessage2Line,
  },
];

export default function Reviews() {
  return (
    <section className="bg-slate-900 px-6 py-24 sm:py-32 lg:px-8">
      <h4 className="text-lime-600 font-semibold text-center">FEEDBACK</h4>
      <h2 className="text-white text-center text-3xl font-extrabold py-7">
        From The Community
      </h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="relative flex flex-col rounded-lg border border-gray-200 bg-white"
          >
            <div className="bg-lime-100 p-4 rounded-t-lg">
              <div className="flex items-center space-x-4">
                <review.icon
                  className="h-6 w-6 text-lime-600"
                  aria-hidden="true"
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="text-sm font-bold text-gray-900">
                      {review.name}
                    </h3>
                    <div className="ml-2 flex items-center">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <StarIcon
                          key={index}
                          className="h-5 w-5 text-yellow-500"
                          aria-hidden="true"
                        />
                      ))}
                      {Array.from({ length: 5 - review.rating }).map(
                        (_, index) => (
                          <StarIcon
                            key={index}
                            className="h-5 w-5 text-gray-300"
                            aria-hidden="true"
                          />
                        )
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Review On Trustpilot</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="mt-4 text-sm text-gray-700">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
