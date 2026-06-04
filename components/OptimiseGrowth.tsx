"use client"
import React, { useRef, useState } from "react";
import { TimelineContent } from "@/components/ui/pro-ui/timeline-animation";
import { ClipboardText, SearchNormal1, Setting4, TrendUp } from "iconsax-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function OptimiseGrowth() {
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

  type ImageKey = 'item-1' | 'item-2' | 'item-3' | 'item-4'
  const [activeItem, setActiveItem] = useState<ImageKey>('item-1')

  const images = {
    'item-1': {
      image: '/compliance_illustration_1777976001370.png',
      alt: 'Audit-Ready Record',
    },
    'item-2': {
      image: '/care_planning_illustration_1777975935273.png',
      alt: 'Operational Clarity',
    },
    'item-3': {
      image: '/care_network_brain_1777975902997.png',
      alt: 'Automated Administration',
    },
    'item-4': {
      image: '/social_value_illustration_1777975967300.png',
      alt: 'Sustainable Growth',
    },
  }

  return (
    <section className="py-24 px-6 overflow-hidden bg-white dark:bg-[#18181b] relative border-y border-[#e5e5e5] dark:border-[#262626]" ref={heroRef}>
      <div className="bg-linear-to-b absolute inset-0 -z-10 sm:inset-6 sm:rounded-b-3xl dark:block dark:to-[color-mix(in_oklab,var(--color-zinc-900)_75%,var(--color-background))]"></div>

      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 px-6">

        <TimelineContent
          as="div"
          animationNum={2}
          timelineRef={heroRef}
          customVariants={revealVariants}
          className="grid gap-12 sm:px-12 lg:grid-cols-2 lg:gap-20 lg:px-0"
        >
          {/* Accordion List */}
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem((value || 'item-1') as ImageKey)}
            className="w-full space-y-4"
          >
            <AccordionItem value="item-1" className="border-[#e5e5e5] dark:border-[#3f3f46]">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-4 text-xl font-blauer font-bold text-gray-900 dark:text-white text-left">
                  <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl shrink-0">
                    <ClipboardText size="24" variant="TwoTone" color="currentColor" />
                  </div>
                  1. Secure Your Record
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed pb-6 pl-16">
                Never lose a critical insight again. ELSA builds a complete, searchable operational memory by capturing every meeting and note, ensuring your organisation stays audit-ready and data-secure.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-[#e5e5e5] dark:border-[#3f3f46]">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-4 text-xl font-blauer font-bold text-gray-900 dark:text-white text-left">
                  <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl shrink-0">
                    <SearchNormal1 size="24" variant="TwoTone" color="currentColor" />
                  </div>
                  2. Gain Total Clarity
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed pb-6 pl-16">
                Identify risks before they escalate. ELSA monitors compliance across your entire operation in real-time, giving you the clarity to lead with confidence and safety.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-[#e5e5e5] dark:border-[#3f3f46]">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-4 text-xl font-blauer font-bold text-gray-900 dark:text-white text-left">
                  <div className="p-3 bg-pink-500/10 text-pink-500 rounded-xl shrink-0">
                    <Setting4 size="24" variant="TwoTone" color="currentColor" />
                  </div>
                  3. Automate the Hard Work
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed pb-6 pl-16">
                Win back hundreds of admin hours. From generating audit-ready care plans to drafting winning tenders, ELSA takes over the manual work so your team can focus on care.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-[#e5e5e5] dark:border-[#3f3f46]">
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-4 text-xl font-blauer font-bold text-gray-900 dark:text-white text-left">
                  <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl shrink-0">
                    <TrendUp size="24" variant="TwoTone" color="currentColor" />
                  </div>
                  4. Scale with Confidence
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed pb-6 pl-16">
                Drive better ratings and business growth. Every interaction helps ELSA improve your service standards and safety, automatically surfacing growth opportunities for you.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Image Display */}
          <div className="bg-[#f9fafb] dark:bg-[#27272a] relative flex overflow-hidden rounded-3xl border border-[#e5e5e5] dark:border-[#3f3f46] p-4 shadow-xl">
            <div className="w-16 absolute inset-0 right-0 ml-auto border-l border-[#e5e5e5] dark:border-[#3f3f46] bg-[repeating-linear-gradient(-45deg,currentColor,currentColor_1px,transparent_1px,transparent_8px)] text-[#0000000a] dark:text-[#ffffff0a]"></div>
            <div className="aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/3] bg-white dark:bg-[#18181b] relative w-full md:w-[calc(100%-4rem)] rounded-2xl shadow-sm border border-[#e5e5e5] dark:border-[#3f3f46] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="size-full overflow-hidden bg-white dark:bg-[#18181b] flex items-center justify-center p-8"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={images[activeItem].image}
                      className="size-full object-cover object-center mix-blend-multiply dark:mix-blend-luminosity"
                      alt={images[activeItem].alt}
                      fill
                    />
                    <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </TimelineContent>
      </div>
    </section>
  )
}
