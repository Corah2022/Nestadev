"use client"
import {
  Lightbulb,
  BarChart3,
  Bot,
  Trophy,
  Briefcase,
  Target,

} from "lucide-react"
import { useRef } from "react";
import { TimelineContent } from "./ui/pro-ui/timeline-animation";
import ArticleCard, { Article } from "./ArticleCard";


import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const features = [
  {
    icon: Target,
    title: "Analytics & Social Value",
    badge: "Elsa Analytics",
    description: "Track metrics, calculate your score, and export ready-to-use compliance reports for CQC and tenders. Understand your impact deeply.",
    bgClass: "bg-blue-500",
    textClass: "text-white",
    image: "/social_value_illustration_1777975967300.png"
  },
  {
    icon: Trophy,
    title: "Ai Care Business Partners",
    badge: "Elsa Core",
    description: "Elsa helps care providers, improves care quality, win more business and stay compliant with less admin.",
    bgClass: "bg-blue-500",
    textClass: "text-gray-900",
    image: "/care_planning_illustration_1777975935273.png"
  },
  {
    icon: BarChart3,
    title: "Smart Compliance",
    badge: "ELSA Documentation",
    description: "Create and manages policies, review and analyze care plans/ care notes align with CQC and local safeguarding standards.",
    bgClass: "bg-blue-500",
    textClass: "text-white",
    image: "/compliance_illustration_1777976001370.png"
  }
];

const CoreService = () => {
  const heroRef = useRef<HTMLDivElement>(null);
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

  const currentArticles: Article[] = [
    {
      content: {
        article_tag: "Technology & Innovation",
        article_img: "/article1.webp",
        article_date: "2026-02-19",
        article_title: "The Future of Care is Digital: Navigating Innovation in Health and Social Care",
        article_desc: "Explore how technology is transforming health and social care, and what providers need to know to stay ahead in this rapidly evolving landscape.",
      },
      full_slug: "/the-future-of-care-is-digital-navigating-innovation-in-health-and-social-care/",
    },
    {
      content: {
        article_tag: "Procurement & Tendering",
        article_img: "/article2.webp",
        article_date: "2026-02-13",
        article_title: "AI in Health and Social Care Procurement: A New Era for Care Providers",
        article_desc: "Discover how AI is revolutionizing the procurement process in health and social care, creating new opportunities for providers to secure contracts and deliver better care.",
      },
      full_slug: "/ai-in-health-and-social-care-procurement-a-new-era-for-care-providers/",
    },
    {
      content: {
        article_tag: "Procurement & Tendering",
        article_img: "/article3.webp",
        article_date: "2022-01-01",
        article_title: "How to Measure Social Value in the Care Sector: A Practical Guide for Providers",
        article_desc: "Gain insightt into the evolving landscape of social value measurement and how providers can effectively demonstrate their impact.",
      },
      full_slug: "/how-to-measure-social-value-in-the-care-sector-a-practical-guide-for-providers/",
    },
  ]


  return (
    <div className="py-24 md:px-6 flex flex-col gap-42 relative bg-white dark:bg-[#27272a]" ref={heroRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
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
                timelineRef={heroRef}
                customVariants={revealVariants}
                className={`${feature.bgClass} ${isFullWidth ? 'lg:col-span-2' : ''} relative rounded-[2rem] overflow-hidden flex flex-col md:flex-row ${isFullWidth ? 'lg:flex-row' : 'lg:flex-col'} justify-between shadow-xl transition-transform hover:scale-[1.02] duration-300 group`}
              >
                {/* Content Side */}
                <div className={`p-8 md:p-12 lg:p-14 ${isFullWidth ? 'flex-1 lg:w-1/2' : 'flex-1'} z-10 flex flex-col items-start ${feature.textClass}`}>
                  <div className="bg-white px-4 py-1.5 rounded-full text-xs font-bold text-gray-900 mb-6 shadow-sm">
                    {feature.badge}
                  </div>
                  <h3 className="text-3xl text-white md:text-4xl lg:text-5xl font-blauer font-bold mb-4 tracking-tight leading-tight">
                    {feature.title}
                  </h3>
                  <p className={`text-sm text-white md:text-base font-medium opacity-90 leading-relaxed mb-8 ${feature.textClass}`}>
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
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* articles */}
        <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-end mb-16 border-b border-[#e5e5e5] dark:border-[#262626] pb-8 mt-32">
          <div className="text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-widest mb-4">
              Intelligence Hub
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-blauer text-gray-900 dark:text-white tracking-[-0.8px] mb-4">
              Blog
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
              Explore our latest thoughts on AI in healthcare, automated compliance, and strategies to accelerate your growth.
            </p>
          </div>
          <Link
            href={"/blog"}
            className="flex mt-6 md:mt-0 items-center w-max justify-center h-12 px-6 rounded-full bg-white dark:bg-[#18181b] text-gray-900 dark:text-white border border-[#e5e5e5] dark:border-[#3f3f46] shadow-sm hover:shadow-md transition-all font-semibold">
            View All Articles
          </Link>
        </div>
        <div className='grid grid-cols-1 mt-10 gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {/* article list */}
          {
            currentArticles?.map((article, index) => (
              <div key={index}>
                <ArticleCard {...article} />
              </div>
            ))
          }
        </div>
      </div>
    </div >
  )
}

export default CoreService