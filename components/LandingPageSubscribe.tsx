"use client";
import React from "react";
import { motion } from "framer-motion";

export default function LandingPageSubscribe() {
  return (
    <section className="py-24 bg-blue-50 dark:bg-black/20 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-white/5 rounded-[3.5rem] p-12 md:p-16 text-center border border-white dark:border-white/10 shadow-xl"
        >
          <h2 className="text-4xl font-bold text-black dark:text-white mb-6">
            Subscribe to our Newsletter
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building the infrastructure for the next generation of health and social care providers. Stay updated with our latest insights.
          </p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-black outline-none transition-all text-black dark:text-white"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-black outline-none transition-all text-black dark:text-white"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 py-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-black outline-none transition-all text-black dark:text-white"
              />
              <button
                type="submit"
                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-600/20 active:scale-95"
              >
                Subscribe
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
