"use client";

import { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { StreamlinedExperience } from "./_sections/streamlined-experience";
import { Features } from "./_sections/features";
import { HeroBar } from "./_components/hero_bar";

const HomePage = () => {
  const taglineStyle = {
    background: "linear-gradient(45deg, #75FBC8, #fff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  // Ref for the scrolling news ticker
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Effect to handle the auto-scrolling
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (scroller) {
      // Logic for auto-scrolling
      // You would use setInterval to increment the scroll position
      // Make sure to clear the interval when the component unmounts
    }
  }, []);

  const newsItems = [
    {
      id: 1,
      title: "Mainnet Live!",
      category: "News",
      date: "12 20, 2023",
      imageUrl: "https://placehold.co/600x400/png", // Replace with actual image URLs
    },
    {
      id: 1,
      title: "Mainnet Live!",
      category: "News",
      date: "12 20, 2023",
      imageUrl: "https://placehold.co/600x400/png", // Replace with actual image URLs
    },
    {
      id: 1,
      title: "Mainnet Live!",
      category: "News",
      date: "12 20, 2023",
      imageUrl: "https://placehold.co/600x400/png", // Replace with actual image URLs
    },
    {
      id: 1,
      title: "Mainnet Live!",
      category: "News",
      date: "12 20, 2023",
      imageUrl: "https://placehold.co/600x400/png", // Replace with actual image URLs
    },
    // ... more news items
  ];

  const components = [
    {
      id: 1,
      title: "0",
      content: "Total DID Minted",
    },
    {
      id: 2,
      title: "0",
      content: "Total Value Locked",
    },
    {
      id: 3,
      title: "0",
      content: "Total Transactions",
    },
    {
      id: 4,
      title: "0",
      content: "Daily Transactions",
    },
  ];

  return (
    <div className="flex flex-col overflow-x-clip">
      <HeroBar />
      <div className="flex flex-col h-screen">
        <div className="flex-grow flex">
          <div className="w-3/4 flex items-center justify-center pl-20 pr-10 py-10">
            {/* Container taking up 4/5th of the width and centering content vertically */}
            <div
              className="flex flex-col space-y-12"
              style={{ maxWidth: "1000px" }}
            >
              {/* Flex container with a larger maximum width and increased space between elements */}
              <h1
                className="text-[3rem] lg:text-[6rem] font-bold"
                style={{
                  background: "linear-gradient(45deg, #75FBC8, #fff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: "1.3", // Reduced line height for tighter spacing between lines
                }}
              >
                {/* Responsive font size, gradient color, and custom line spacing */}
                Unleashing Web3
                <br />
                with Web2 Ease
              </h1>
              <p
                className="text-md lg:text-3xl font-bold
                 text-neutral-100 leading-relaxed"
                style={{
                  lineHeight: "1.3",
                }}
              >
                {/* Subtitle with responsive font size and a relaxed line height */}
                Elevate your Web3 applications with intuitive infrastructure
                services. Innovatively embracing the Web3 paradigm shift.
              </p>
            </div>
          </div>
          <div className="w-1/4 overflow-auto border-l border-slate-600">
            {/* Adjusted width for right-side content */}
            <h2 className="text-3xl font-bold mb-4 pl-10 pr-10 pt-10">
              NEWS & EVENTS
            </h2>{" "}
            {newsItems.map((news, index) => (
              <div
                key={news.id}
                className={`mb-4 flex pl-10 pr-10 pb-6 border-b border-slate-600 ${index == 0 ? "pt-6 border-t border-slate-600" : ""
                  }`}
              >
                {/* Add a top border to all items except the first */}
                <div className="w-24 h-16 relative mr-3">
                  {/* Fixed size container for Image */}
                  <Image
                    src={news.imageUrl}
                    objectFit="cover"
                    alt="News image"
                    layout="fill" // Use 'fill' for responsive layout within the fixed-size container
                    className="rounded" // Apply rounded corners
                  />
                </div>
                <div className="flex-1 min-w-0 pl-3 flex flex-col justify-center">
                  {" "}
                  {/* Added flex column container with centered content */}
                  <h3 className="text-xl font-semibold text-white truncate">
                    {news.title}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="py-1 bg-[#002f2f] text-[#75FBC8] rounded text-sm inline-block">
                      {news.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1 text-[#75FBC8]" />
                      {news.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full bg-white text-black">
          {" "}
          {/* Container for the fixed item and the marquee */}
          <div className="h-24 flex items-center pl-4">
            {" "}
            {/* Fixed item container */}
            <span className="text-lg lg:text-xl font-bold whitespace-nowrap pl-4 pr-8">
              Support Chains
            </span>
            <Marquee
              className="h-24 bg-white text-black flex items-center"
              gradient={false}
              speed={30}
            >
              {/* Bottom scrolling bar */}
              {/* Ticker news items */}
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              <div className="mx-4">Vara Network</div>
              {/* etc. */}
            </Marquee>
          </div>
        </div>
      </div>
      <div className="bg-black flex justify-between items-center pt-10 pb-10">
        {components.map((component) => (
          <div key={component.id} className="w-1/4 p-2 text-center">
            <h3 className="text-5xl font-bold mb-2">{component.title}</h3>
            <p className="text-2xl mt-8">{component.content}</p>

            <div className="border-b-4 ml-12 mr-12 pb-10 border-slate-800"></div>
          </div>
        ))}
      </div>
      <StreamlinedExperience />
      <Features />
    </div>
  );
};

export default HomePage;
