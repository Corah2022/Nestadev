"use client";

import { useState } from "react";

const cards = [
  {
    id: 1,
    metric: "Engagement Rate",
    value: "+127%",
  },
  {
    id: 2,
    metric: "Profile Views",
    value: "+89%",
  },
  {
    id: 3,
    metric: "Post Impressions",
    value: "+245%",
  },
  {
    id: 4,
    metric: "Connection Requests",
    value: "+156%",
  },
  {
    id: 5,
    metric: "Comments",
    value: "+198%",
  },
  {
    id: 6,
    metric: "Shares",
    value: "+312%",
  },
  {
    id: 7,
    metric: "Click-Through Rate",
    value: "+78%",
  },
  {
    id: 8,
    metric: "Follower Growth",
    value: "+203%",
  },
];

const CARD_HEIGHT = 70; // px, adjust to match your h-16 + gap

function HoverTranslateTwo() {
  const [active, setActive] = useState(2); // Start with the middle card
  // const [hovered, setHovered] = useState(false);

  // on hover, move to next card (if possible)
  const handleMouseEnter = () => {
    // setHovered(true);
    if (active < cards.length - 1) setActive(active + 1);
  };

  // on leave, return to previous card
  const handleMouseLeave = () => {
    // setHovered(false);
    if (active > 0) setActive(active - 1);
  };

  const containerHeight = 350;
  // grab middle pos
  const middlePos = containerHeight / 2;
  // center the card in the middle of container, but then move up a bit
  const translateY = middlePos - active * CARD_HEIGHT - 35;

  return (
    <>
      <div
        className="relative overflow-hidden flex flex-col items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex flex-col gap-4 transition-transform duration-300 ease-in-out w-full -mt-10 overflow-visible  items-center justify-center"
          style={{
            transform: `translateY(${translateY}px)`,
            backfaceVisibility: "hidden",
          }}
        >
          {cards.map((card, idx) => {
            const isCenter = idx === active;
            return (
              <div
                key={card.id}
                className={`
                  h-16 w-[275px] flex items-center justify-between gap-4 rounded-xl px-6 text-sm 
                  transition duration-300 ease-in-out 
                  ${isCenter
                    ? "scale-[1.00] blur-none z-[99"
                    : "scale-95 blur-[2px] opacity-60"
                  }
                `}
                style={{
                  background:
                    "radial-gradient(65.62% 65.62% at 50% 50%, \
                  rgba(59, 130, 246, 0.32) 0%, \
                  rgba(59, 130, 246, 0) 100%), \
                  linear-gradient( \
                  rgba(59, 130, 246, 0.12) 0%, \
                  rgba(255,255,255,0.10) 100%), \
                  rgba(59, 130, 246, 0.56)",

                  boxShadow:
                    "rgba(59, 130, 246, 0.06) 0px -12px 16px 0px inset, \
                         rgba(59, 130, 246, 0.16) 0px 4px 16px 0px inset, \
                         rgba(59, 130, 246, 0.12) 0px 0.75px 0.25px 0px inset, \
                         rgba(59, 130, 246, 0.32) 0px 0.25px 0.25px 0px inset, \
                          rgba(59, 130, 246, 0.06) 0px 2px 16px 0px, \
                          rgba(59, 130, 246, 0.06) 0px 23px 14px 0px, \
                          rgba(59, 130, 246, 0.19) 0px 10px 10px 0px, \
                          rgba(59, 130, 246, 0.26) 0px 3px 6px 0px, \
                          rgba(59, 130, 246, 0.40) 0px 0px 0px 0.75px",
                }}
              >
                <div className="w-full flex items-center justify-between">
                  <span className="text-white font-medium text-base">
                    {card.metric}
                  </span>
                  <span className="text-white font-semibold text-lg text-green-300">
                    {card.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* blurred gradient overlay at the top */}
        <div
          className="pointer-events-none absolute -top-12 left-0 w-full pt-[100px] pb-[80px] bg-gradient-to-b from-white dark:from-gray-900 to-transparent z-20"
          // done to get rid of random white line
          style={{ filter: "blur(4px)" }}
        />
      </div>
    </>
  );
}

export default HoverTranslateTwo;
