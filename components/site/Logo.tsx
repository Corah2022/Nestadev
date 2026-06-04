"use client"
import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
  variant?: "default" | "compact";
}

export default function Logo({
  width = 138,
  height = 43,
  variant = "default",
}: LogoProps = {}) {
  // We're using the elsa.jpeg image for all variants currently
  return (
    <div className="flex items-center">
      <Image
        src="/nesta.png"
        alt="Elsa Logo"
        width={width}
        height={height}
        className="object-contain h-auto w-24"
        priority
      />
    </div>
  );
}
