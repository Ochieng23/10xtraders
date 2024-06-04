import Image from "next/image";
import Link from "next/link";
import React from "react";

// Sample post data for illustration
const post = {
  _id: "1",
  slug: "sample-post",
  mainImage: "/path/to/image.jpg",
  
  title: "Sample Post Title",
  description:
    "This is a sample description for the blog post. It provides a brief overview of the content.",
  _createdAt: "2024-06-03T12:00:00Z",
  author: {
    name: "Author Name",
    image: "/path/to/author-image.jpg",
  },
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
    <div className="mt-10 flex-col gap-10 bg-slate-100 px-10 py-10">
      <Link
        href={{
          pathname: `/post/${post.slug}`,
          query: { slug: post.slug },
        }}
        key={post._id}
      >
        <div className="mt-2 flex flex-col gap-10 rounded-md bg-white duration-200 hover:shadow-md md:flex-row">
          {/* Image Section: Left */}
          <div className="group relative w-full overflow-hidden rounded-bl-md rounded-tl-md md:w-3/5">
            <Image
              src={post.mainImage}
              width={400}
              height={400}
              className="max-h-[500px] w-full rounded-bl-md rounded-tl-md object-cover duration-500 group-hover:scale-105"
              alt="main blog image"
            />
            <div className="absolute left-0 top-0 h-full w-full bg-black/20 duration-200 group-hover:hidden" />
          </div>
          {/* Text Section: Right */}
          <div className="flex w-full flex-col justify-between px-8 py-10 md:w-2/5">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                
                  <p className="text-xs text-green-600" >
                    {post.title}
                  </p>
                
              </div>
              <h2 className="cursor-pointer text-2xl font-semibold text-black duration-200 hover:text-red-600">
                {post.title}
              </h2>
              <p className="text-gray-500">
                {truncateText(post.description, 50)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Features;
