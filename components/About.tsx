"use client";
import React from 'react'
import { motion } from 'framer-motion'
import { Cog, Globe, Shield } from 'lucide-react'
import Image from 'next/image'

const features = [
  {
    title: 'Intelligent Systems Design',
    description:
      'We design and build intelligent systems that help organisations overcome structural barriers to growth in complex, regulated, and highly competitive environments.',
    icon: <Globe />,
  },
  {
    title: 'Scalable Digital Engines',
    description:
      'Applying AI, automation, and data-led design to simplify business-critical processes such as acquisition, compliance, bidding, and operational decision-making.',
    icon: <Cog />,
  },
  {
    title: 'Human-Centred Execution',
    description:
      'By combining human-centred thinking with developer grade execution, NestaDev enables care providers to make better decisions and respond faster to opportunity.',
    icon: <Shield />,
  },
]

const integrations = [
  'Care Planning',
  'Compliance',
  'Tender Management',
  'Analytics',
  'Process Automation',
  'CQC Readiness',
]

export default function About() {
  return (
    <section className="py-24 px-5 md:px-10 bg-[#f9fafb] dark:bg-[#18181b] text-black dark:text-white overflow-hidden relative border-y border-[#e5e5e5] dark:border-[#262626]">
      {/* Background Slashes */}
      <div className="hidden md:block absolute top-0 left-0 md:left-6 h-full w-4 md:w-4 xl:w-10 text-[#e5e5e5] dark:text-[#262626] bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-0" ></div>
      <div className="hidden md:block absolute top-0 right-0 md:right-6 h-full w-4 md:w-4 xl:w-10 text-[#e5e5e5] dark:text-[#262626] bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] z-0"></div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Main Brand Story */}
        <div className="bg-white dark:bg-[#27272a] rounded-[2rem] p-10 md:p-16 shadow-xl border border-[#e5e5e5] dark:border-[#3f3f46] overflow-hidden relative group">
          <Image
            src="https://images.unsplash.com/photo-1759269834694-3daf291dce44?q=80&w=627&auto=format&fit=crop"
            alt="Abstract architecture"
            fill
            className="absolute top-0 right-0 w-full opacity-[0.03] dark:opacity-[0.1] pointer-events-none hidden lg:block object-cover object-right group-hover:scale-105 transition-transform duration-700"
          />

          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="size-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500">
                Company Introduction
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-[-0.8px] font-blauer text-balance leading-[1.1] mb-8 text-gray-900 dark:text-white">
              Built by experts, <br className="hidden md:block" /> for the future of Care.
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 text-pretty leading-relaxed mb-12 font-medium">
              <p>
                NestaDev is a UK-based innovation company supporting Health and Social Care SMEs to grow and operate more effectively. We design intelligent systems that help organisations overcome structural barriers to growth in complex, regulated environments.
              </p>
              <p>
                By applying AI and data-led design, we build scalable digital engines that automate business-critical processes—from compliance to bidding. Combining human-centred thinking with developer-grade execution, we enable care providers to reduce manual effort, respond faster to opportunity, and focus on delivering high-quality services.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-[#e5e5e5] dark:border-[#3f3f46]">
              {integrations.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium text-gray-500 hover:text-blue-500 transition-colors cursor-default bg-[#f9fafb] dark:bg-[#18181b] px-4 py-2 rounded-full border border-[#e5e5e5] dark:border-[#3f3f46]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Stats Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold tracking-[-0.8px] font-blauer text-balance text-gray-900 dark:text-white">
              Infrastructure that scales with your ambition.
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-pretty leading-relaxed font-medium">
              Whether you&apos;re an SME aiming for compliance mastery or an enterprise scaling services, our intelligence architecture is designed to scale with you. No manual bottlenecks, no scattered data.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 pt-4">
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-black font-blauer text-gray-900 dark:text-white">100%</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  CQC Compliance Focus
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl lg:text-5xl font-black font-blauer text-gray-900 dark:text-white">Zero</div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Manual Document Errors
                </div>
              </div>
            </div>
          </div>


        </div>

        {/* Feature Grid to fill space */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 bg-white dark:bg-[#27272a] border border-[#e5e5e5] dark:border-[#3f3f46] rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="size-14 rounded-2xl bg-[#f9fafb] dark:bg-[#18181b] flex items-center border border-[#e5e5e5] dark:border-[#3f3f46] justify-center text-blue-500 mb-6 shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-[-0.8px] font-blauer text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-pretty font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}