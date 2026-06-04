import React from "react";
import { motion } from "framer-motion";

export const WavyRibbon = ({ className }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className || ""}`}>
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full opacity-60"
        preserveAspectRatio="none"
      >
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M0,160 C320,300 420,0 720,160 C1020,320 1120,0 1440,160"
          stroke="url(#gradient-blue)"
          strokeWidth="40"
          strokeLinecap="round"
          style={{ filter: "blur(10px)" }}
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut", delay: 0.2 }}
          d="M0,200 C320,340 420,40 720,200 C1020,360 1120,40 1440,200"
          stroke="url(#gradient-purple)"
          strokeWidth="60"
          strokeLinecap="round"
          style={{ filter: "blur(15px)" }}
        />
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.4 }}
          d="M0,120 C320,260 420,-40 720,120 C1020,280 1120,-40 1440,120"
          stroke="url(#gradient-cyan)"
          strokeWidth="30"
          strokeLinecap="round"
          style={{ filter: "blur(8px)" }}
        />
        <defs>
          <linearGradient id="gradient-blue" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="1" stopColor="#60a5fa" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-purple" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient-cyan" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06b6d4" stopOpacity="0.7" />
            <stop offset="1" stopColor="#22d3ee" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
