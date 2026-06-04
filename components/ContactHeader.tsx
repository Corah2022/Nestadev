"use client";
import { TimelineContent } from "@/components/ui/pro-ui/timeline-animation";
import { useRef } from "react";



export default function ContactHeader() {
  const contactRef = useRef<HTMLDivElement>(null);


  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  // Chart bar animation variants
  const barVariants = {
    hidden: { scaleY: 0, originY: 1 },
    visible: (i: number) => ({
      scaleY: 1,
      transition: {
        delay: 2.8 + i * 0.1, // Start after chart container appears
        duration: 0.8,
      },
    }),
  };

  // Chat message variants
  const messageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 3.2 + i * 0.6,
        duration: 0.5,
      },
    }),
  };
  const colorClasses = {
    green: "before:bg-green-500 shadow-green-500/20",
    orange: "before:bg-orange-500 shadow-orange-500/20",
    blue: "before:bg-blue-500 shadow-blue-500/20",
  };

  return (
    <section className="relative mt-12 border-y border-[#e5e5e5] dark:border-[#262626] w-full" ref={contactRef}>

      <div className="w-full pb-16 border-b border-[#e5e5e5] dark:border-[#262626]">
        <article className="max-w-5xl mx-auto py-10 text-center space-y-2 px-8">
          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={contactRef}
            customVariants={revealVariants}
            className="text-4xl md:text-[53px] font-blauer tracking-[-0.8px]  font-medium"
          >
            Contact Us
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={contactRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-400 sm:text-lg text-sm sm:w-[60%] w-full mx-auto"
          >
            Follow up on our newsletter to stay updated with our latest news and updates.
          </TimelineContent>
        </article>
      </div>
    </section>
  );
}