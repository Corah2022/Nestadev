"use client"
import { TimelineContent } from '@/components/ui/pro-ui/timeline-animation';
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FileCheck, BarChart3, Folder, TrendingUp, FolderTree, Shield, FileText, CheckCircle } from "lucide-react";
import { ArrowRight } from 'iconsax-react';
import Link from 'next/link';

export default function Introducing() {
  const containerRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  };

  const introRef = useRef<HTMLDivElement>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const features = [
    {
      title: "Auto-Policy Documentation",
      description: "Creates and updates policies automatically.",
      icon: <FileCheck className="w-8 h-8 text-white" />,
    },
    {
      title: "Predictive Risk Analysis",
      description: "Identifies risks before they become issues.",
      icon: <BarChart3 className="w-8 h-8 text-white" />,
    },
    {
      title: "Autonomous Filing",
      description: "Keeps records sorted and easily accessible.",
      icon: <Folder className="w-8 h-8 text-white" />,
    },
  ];

  return (
    <section
      ref={containerRef}
    >
      <div
        className="relative py-24 px-6 md:px-12 bg-gradient-to-b from-[#6b21a8] to-[#4c1d95] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-32 h-32 md:w-40 md:h-40 mb-10 rounded-full border-4 border-white/20 bg-white p-1 overflow-hidden shadow-2xl"
          >
            <Image
              src="/kid.jpg"
              alt="ELSA Mascot"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight"
          >
            Meet ELSA
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-lg text-left md:text-center md:text-xl text-white/80 leading-relaxed mb-10 md:mb-20"
          >
            ELSA helps care providers run their entire operations from one system automating compliance, managing tenders, organising workflows,
            and strengthens data behind business decisions.
          </motion.p>


          <div ref={introRef} className='flex flex-wrap gap-4 md:grid md:grid-cols-2 md:gap-6'>
            <TimelineContent
              as="div"
              animationNum={1}
              timelineRef={introRef}
              customVariants={revealVariants} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-white " />
              <span className="text-white">Automates compliance workflows</span>
            </TimelineContent>
            <TimelineContent
              as="div"
              animationNum={2}
              timelineRef={introRef}
              customVariants={revealVariants} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-white " />
              <span className="text-white">
                Discover, manage and track tenders</span>
            </TimelineContent>
            <TimelineContent
              as="div"
              animationNum={3}
              timelineRef={introRef}
              customVariants={revealVariants} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-white " />
              <span className="text-white">
                Manage care documentation</span>
            </TimelineContent>
            <TimelineContent
              as="div"
              animationNum={3}
              timelineRef={introRef}
              customVariants={revealVariants} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-white " />
              <span className="text-white">
                Centralises operations</span>
            </TimelineContent>
            <TimelineContent
              as="div"
              animationNum={3}
              timelineRef={introRef}
              customVariants={revealVariants} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-white " />
              <span className="text-white">
                Supports business growth</span>
            </TimelineContent>
          </div>
          <div className="flex w-full justify-start md:justify-center">
            <Link
              href="https://elsa.nestadev.com/"
              className="bg-white font-blauer mt-8 font-medium gap-2 dark:bg-white text-blue-600 h-10 w-max flex items-center justify-center text-sm tracking-wide rounded-full text-blue-600 px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-white/90 transition-all ease-out active:scale-95"
            >
              Explore ELSA
              <ArrowRight variant="TwoTone" color="currentColor" size={22} />
            </Link>
          </div>
          {/* Features Grid */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-left hover:bg-white/[0.15] transition-colors group"
              >
                <div className="mb-6 p-3 rounded-2xl bg-white/10 w-fit group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div> */}
        </div>

        {/* Decorative background blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/5 blur-[120px] pointer-events-none -z-10 rounded-full" />
      </div>


    </section>
  );
}