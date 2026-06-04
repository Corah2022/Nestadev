"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { HeroVideoDialog } from "./ui/magic-ui/heroo-video-dialog";

export default function HowItWorks() {
  return (
    <section className="relative w-full py-24 bg-white dark:bg-[#18181b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center mb-16">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-black dark:text-white"
          >
            See ELSA in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 mt-4 text-lg"
          >
            From admin overload to streamlined operations see how ELSA works inside a care business.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <HeroVideoDialog
            videoSrc="https://www.youtube.com/watch?v=G7wO4quF70w"
            thumbnailAlt="ELSA in Action"
            animationStyle="from-center"
          >
            <div className="bg-white dark:bg-white/5 rounded-[2.5rem] p-3 border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden group">
              {/* Image Preview Area */}
              <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-black/5 dark:border-white/5">
                <Image
                  src="/elsa-demo.png"
                  alt="ELSA Demo Preview"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors" />
              </div>

              {/* Bottom Bar */}
              <div className="flex items-center justify-between px-8 py-6">
                <div className="flex w-full justify-between flex-row-reverse items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-600/30 transition-transform group-hover:scale-110">
                    <Play className="w-6 h-6 fill-white" />
                  </div>
                  <span className="text-xl font-medium text-black dark:text-white">
                    
                  </span>
                </div>
              </div>
            </div>
          </HeroVideoDialog>
        </motion.div>
      </div>
    </section>
  );
}
