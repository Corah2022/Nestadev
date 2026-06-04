"use client"

import { motion } from "motion/react"
import type { Variants } from "motion/react"

// ─── Shared variants ────────────────────────────────────────────────────────

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

const fadeRightVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

// ─── FadeUp ─────────────────────────────────────────────────────────────────

type FadeUpProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeUp({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" as const }}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeLeft ────────────────────────────────────────────────────────────────

type FadeLeftProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeLeft({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: FadeLeftProps) {
  return (
    <motion.div
      className={className}
      variants={fadeLeftVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" as const }}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeRight ───────────────────────────────────────────────────────────────

type FadeRightProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  once?: boolean
}

export function FadeRight({
  children,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
}: FadeRightProps) {
  return (
    <motion.div
      className={className}
      variants={fadeRightVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" as const }}
    >
      {children}
    </motion.div>
  )
}

// ─── FadeScale ────────────────────────────────────────────────────────────────

const fadeScaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: { opacity: 1, scale: 1 },
}

export function FadeScale({
  children,
  className,
  delay = 0,
  duration = 0.45,
  once = true,
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      variants={fadeScaleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: "easeOut" as const }}
    >
      {children}
    </motion.div>
  )
}

// ─── StaggerGroup ────────────────────────────────────────────────────────────

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
}

type StaggerGroupProps = {
  children: React.ReactNode
  className?: string
  once?: boolean
  stagger?: number
  delayChildren?: number
  as?: "div" | "ul" | "ol" | "section"
}

export function StaggerGroup({
  children,
  className,
  once = true,
  stagger = 0.1,
  delayChildren = 0.05,
  as: Tag = "div",
}: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }

  const MotionTag = motion[Tag]

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants}>
      {children}
    </motion.div>
  )
}

export function StaggerItemLi({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.li className={className} variants={staggerItemVariants}>
      {children}
    </motion.li>
  )
}
