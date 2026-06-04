"use client";
import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { TrendingUp, ShieldCheck, Cpu, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white dark:bg-black -mt-32 pt-40 md:pt-48 xl:pt-20 pb-10">

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 w-full max-w-[1560px] mx-auto px-5 lg:px-8 flex flex-col gap-24 xl:gap-32"
      >
        {/* Top Hero Content */}
        <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-16 lg:gap-12">
          {/* Text Section */}
          <div className="text-center lg:text-left relative z-10 flex-1 lg:max-w-2xl">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-[4.5rem] font-bold tracking-tight font-blauer mb-6 leading-[1.1]"
            >
              <span className="text-black dark:text-white block">Your Care Business.</span>
              <span className="text-[#6b21a8] dark:text-violet-400 block">Running at Full</span>
              <span className="text-[#6b21a8] dark:text-violet-400 block">Capacity.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-black/60 dark:text-white/60 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 mb-10 font-normal leading-relaxed"
            >
              Meet ELSA your autonomous business partner that handles compliance, tenders, operations, and growth for care providers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4 lg:justify-start justify-center"
            >
              <Link
                href="https://elsa.nestadev.com/"
                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-[#6b21a8] hover:bg-[#6b21a8]/80 text-white font-semibold rounded-lg transition-all text-sm lg:text-base"
              >
                Try Elsa
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="https://elsa.nestadev.com/"
                className="flex items-center justify-center px-8 py-3.5 text-[#6b21a8] dark:text-violet-400 font-semibold rounded-lg border border-[#6b21a8] dark:border-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all text-sm lg:text-base"
              >
                See How It Works
              </Link>
            </motion.div>
            {/* horizontal separator */}
            <div className='border-[0.5px] w-16 md:w-40 border-black/40 mx-auto lg:mx-0 dark:border-white/10 mt-10 mb-4'></div>
            <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 rounded-lg py-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Built by NestaDev</span>
            </motion.div>
          </div>

          {/* Image Area */}
          <motion.div
            variants={itemVariants}
            className="relative z-10 w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative p-2 sm:p-4 bg-[#f9fafb] dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl transition-all duration-700 ease-out rotate-3 hover:rotate-0 group">
              <Image
                src="/elsa.png"
                height={600}
                width={800}
                alt="hero"
                className="w-full h-auto rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
