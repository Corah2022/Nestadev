"use client"
import React from "react";
import { motion } from "framer-motion";

export default function BuiltByNestaDev() {
  return (
    <section className="py-10 md:py-20 bg-white dark:bg-[#18181b] border-y border-[#e5e5e5] dark:border-[#262626]">
      <div className="max-w-7xl mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-12 md:rounded-[2.5rem] bg-[#f9fafb] dark:bg-[#27272a]/50 border border-[#e5e5e5] dark:border-[#3f3f46] overflow-hidden text-center"
        >
          {/* Background Decorative Element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                Built by NestaDev
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-4xl font-blauer font-bold text-gray-900 dark:text-white leading-tight max-w-4xl"
            >
              A UK-based company building operational <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-500">
                AI systems
              </span> for care providers.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
