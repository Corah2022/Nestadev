"use client";
import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, UserCheck } from "lucide-react";
import Image from "next/image";

export default function LandingPageAbout() {
  return (
    <section className="py-24 bg-white dark:bg-[#18181b]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <div className="w-32 h-32 mb-8 relative">
            {/* User will add kid.jpg or similar girl mascot here */}
            <Image
              src="/person.jpg"
              alt="ELSA Mascot"
              fill
              className="object-cover"
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-black dark:text-white mb-8"
          >
            About Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-medium"
          >
            NestaDev is a UK-based innovation and digital solutions company supporting Health and Social Care SMEs to grow, compete, and operate more effectively. Our work focuses on applying AI, automation, and data-led design to amplify businesses so you can focus on delivering high-quality services.
          </motion.p>
        </div>

        {/* Bottom Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column: Vision & Stats */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-4xl font-bold text-black dark:text-white leading-tight">
                Infrastructure that scales <br /> with your ambition.
              </h3>
              <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                Whether you&apos;re an SME aiming for compliance mastery or an enterprise scaling services, our intelligence architecture is designed to scale with you. No manual bottlenecks, no scattered data.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">100%</span>
                <p className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">CQC Compliance Focus</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-2"
              >
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">Zero</span>
                <p className="text-sm font-bold text-black dark:text-white uppercase tracking-wider">Manual Document Errors</p>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="space-y-12">
            {/* Pillar 1 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Cpu className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-black dark:text-white">Intelligent Systems Design</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  We design and build intelligent systems that help organisations overcome structural barriers to growth in complex, regulated, and highly competitive environments.
                </p>
              </div>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-black dark:text-white">Scalable Digital Engines</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  Applying AI, automation, and data-led design to simplify business-critical processes such as acquisition, compliance, bidding, and operational decision-making.
                </p>
              </div>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-black dark:text-white">Human-Centred Execution</h4>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  By combining human-centred thinking with developer grade execution, NestaDev enables care providers to make better decisions and respond faster to opportunity.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
