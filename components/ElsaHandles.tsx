"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gavel, HandHeart, ClipboardList, Eye } from "lucide-react";

const handles = [
  {
    title: "Compliance Automation",
    description: "Keeps your organisation aligned with regulatory requirements automatically.",
    icon: <ShieldCheck className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "Tender Discovery & Tracking",
    description: "Create, Bids Strategy, analyses and track performance from start to finish.",
    icon: <Gavel className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "Social Value Reporting",
    description: "Captures and reports impact without manual admin.",
    icon: <HandHeart className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "Care Documentation",
    description: "Create structured care plans and analyses care notes, that supports safeguarding and delivering of quality care.",
    icon: <ClipboardList className="w-6 h-6 text-violet-600" />,
  },
  {
    title: "Operational Oversight",
    description: "Gives real-time visibility across your organisation.",
    icon: <Eye className="w-6 h-6 text-violet-600" />,
  },
];

export default function ElsaHandles() {
  return (
    <section className="py-24 bg-[#f9fafb] dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-black dark:text-white mb-4"
          >
            What ELSA Handles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 dark:text-gray-400 text-lg"
          >
            Digital engines that automate the resource-intensive parts of business.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {handles.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 bg-white dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 hover:shadow-xl transition-all group w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
