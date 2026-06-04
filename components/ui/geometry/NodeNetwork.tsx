"use client";
import React from "react";
import { motion } from "framer-motion";

export const NodeNetwork = ({ className }: { className?: string }) => {
  // Generate random nodes
  const nodes = [
    { x: 20, y: 30, r: 4, color: "#8b5cf6" },
    { x: 80, y: 20, r: 6, color: "#3b82f6" },
    { x: 50, y: 60, r: 8, color: "#8b5cf6" },
    { x: 15, y: 80, r: 5, color: "#a855f7" },
    { x: 85, y: 70, r: 4, color: "#3b82f6" },
    { x: 60, y: 90, r: 7, color: "#8b5cf6" },
    { x: 30, y: 15, r: 5, color: "#3b82f6" },
    { x: 95, y: 45, r: 5, color: "#a855f7" },
    { x: 35, y: 95, r: 6, color: "#3b82f6" },
  ];

  // Define edges connecting nodes (indices)
  const edges = [
    [0, 2], [1, 2], [2, 3], [2, 4], [2, 5], [0, 6], [1, 7], [4, 7], [3, 8], [5, 8], [1, 6]
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none opacity-40 ${className || ""}`}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((edge, i) => {
          const n1 = nodes[edge[0]];
          const n2 = nodes[edge[1]];
          return (
            <motion.line
              key={`edge-${i}`}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="rgba(139, 92, 246, 0.3)"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1, ease: "easeInOut" }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r / 3}
            fill={node.color}
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 1 + i * 0.1,
            }}
          />
        ))}

        {/* Pulsing Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r / 2}
            fill="none"
            stroke={node.color}
            strokeWidth="0.2"
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
};
