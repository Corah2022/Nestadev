"use client";
import { features } from "@/components/CoreService";
import { TimelineContent } from "@/components/ui/pro-ui/timeline-animation";
import { useRef } from "react";
import { WavyRibbon } from "./ui/geometry/WavyRibbon";
import Image from "next/image";
import { ArrowRight } from "lucide-react";



export default function SolutionsPage() {
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);


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
    <section className="relative mt-12 border-y border-[#e5e5e5] dark:border-[#262626] w-full" ref={aboutRef}>
      <div className="w-full relative border-b border-[#e5e5e5] dark:border-[#262626] overflow-hidden min-h-[50vh] flex items-center justify-center">
        <WavyRibbon className="opacity-100" />
        <article className="max-w-5xl mx-auto py-20 text-center space-y-6 px-8 relative z-10 bg-white/40 dark:bg-black/40 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl p-10">
          <TimelineContent
            as="h1"
            animationNum={0}
            timelineRef={aboutRef}
            customVariants={revealVariants}
            className=""
          >
            <h2 className="text-5xl md:text-[53px] tracking-[-0.8px]  font-bold font-blauer mb-6 bg-hero-pattern-light dark:bg-hero-pattern bg-clip-text text-transparent dark:md:text-transparent md:leading-tight">
              Solutions
            </h2>
          </TimelineContent>
          <TimelineContent
            as="p"
            animationNum={1}
            timelineRef={aboutRef}
            customVariants={revealVariants}
            className="text-gray-600 dark:text-gray-400 sm:text-base text-sm sm:w-[70%] w-full mx-auto"
          >
            NestaDev delivers integrated digital solutions designed to help Health and Social Care organisations grow, compete, and operate with confidence. Each solution can stand alone or work together as part of a wider growth engine.
          </TimelineContent>
        </article>
      </div>
      <div className=" relative w-full">
        {/* slashes */}
        <div className="absolute top-0 left-0 md:left-6 h-full w-4 md:w-4 xl:w-10 text-[#e5e5e5] dark:text-[#262626] bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]" ></div>
        <div className="absolute top-0 right-0 md:right-6 h-full w-4 md:w-4 xl:w-10 text-[#e5e5e5] dark:text-[#262626] bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        <div className="w-full py-20 md:py-32 min-h-[80dvh] relative mx-auto leading-relaxed font-medium py-4 border-x border-[#e5e5e5] dark:border-[#262626] px-5 md:px-16" ref={featuresRef}>
          <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-[43px] font-medium text-gray-900 dark:text-white tracking-[-0.8px] mb-4">
                Core Services
              </h2>
              <p className="text-sm md:text-base max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-400 font-medium text-balance leading-relaxed tracking-tight">
                Digital engines that automate the resource intensive parts of business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const isFullWidth = index === 2;
                return (
                  <TimelineContent
                    key={index}
                    as="div"
                    animationNum={0 + index}
                    timelineRef={featuresRef}
                    customVariants={revealVariants}
                    className={`${feature.bgClass} ${isFullWidth ? 'lg:col-span-2' : ''} relative rounded-[2rem] overflow-hidden flex flex-col md:flex-row ${isFullWidth ? 'lg:flex-row' : 'lg:flex-col'} justify-between shadow-xl transition-transform hover:scale-[1.02] duration-300 group`}
                  >
                    {/* Content Side */}
                    <div className={`p-8 md:p-12 lg:p-14 ${isFullWidth ? 'flex-1 lg:w-1/2' : 'flex-1'} z-10 flex flex-col items-start ${feature.textClass}`}>
                      <div className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 mb-6 shadow-sm">
                        {feature.badge}
                      </div>
                      <h3 className="text-3xl md:text-4xl text-white lg:text-5xl font-blauer font-bold mb-4 tracking-tight leading-tight">
                        {feature.title}
                      </h3>
                      <p className={`text-sm md:text-base text-white font-medium opacity-90 leading-relaxed mb-8 ${feature.textClass}`}>
                        {feature.description}
                      </p>

                      <button className="mt-auto w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-md hover:scale-110 transition-transform flex-shrink-0">
                        <ArrowRight size={20} />
                      </button>
                    </div>

                    {/* Image Side */}
                    <div className={`relative w-full ${isFullWidth ? 'md:w-[45%] lg:w-[45%]' : 'md:w-[45%] lg:w-full'} min-h-[250px] md:min-h-full ${isFullWidth ? 'lg:min-h-[400px]' : 'lg:min-h-[300px] lg:flex-1'} bg-white/10 flex items-center justify-center overflow-hidden mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500`}>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover object-center scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/5 mix-blend-multiply"></div>
                    </div>
                  </TimelineContent>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}