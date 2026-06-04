"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import { useState, type ComponentType } from "react"

const ICON_COLORS = [
  "bg-primary text-primary-foreground",
  "bg-violet-500 text-white",
  "bg-emerald-500 text-white",
  "bg-amber-500 text-white",
  "bg-rose-500 text-white",
  "bg-sky-500 text-white",
]

const ExpandDetailsList: React.FC<{
  className?: string
  steps: Array<{
    icon: ComponentType<{ className?: string }>
    label: string
    text: string
  }>
}> = ({ className, steps }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <ul
      className={cn(
        "flex flex-col items-stretch gap-2 rounded-2xl border bg-muted p-2 lg:flex-row",
        className
      )}
    >
      {steps.map((step, index) => {
        const isActive = index === activeIndex
        return (
          <li
            key={step.label}
            className={cn(
              "flex gap-2 self-stretch rounded-xl bg-background p-2 transition-[flex-grow] duration-300",
              isActive ? "flex-3" : "flex-2"
            )}
            onPointerEnter={() => setActiveIndex(index)}
          >
            <div className="flex h-full min-h-96 flex-1 flex-col justify-between p-2">
              <span className="font-heading text-xl text-primary lg:text-3xl">
                {index + 1}
                <span className="align-super text-lg text-primary/40">#</span>
              </span>
              <div className="flex flex-col items-start gap-0">
                <p className="font-heading text-xl font-medium text-balance lg:text-2xl">
                  {step.label}
                </p>
                <p className="text-sm leading-tight text-pretty">{step.text}</p>
              </div>
            </div>
            {isActive && (
              <AnimatePresence>
                <motion.div
                  key="icon-panel"
                  className={cn(
                    "flex items-center justify-center",
                    "flex-1 rounded-lg",
                    ICON_COLORS[index % ICON_COLORS.length]
                  )}
                  initial={{ opacity: 0, scale: 0.88 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  <step.icon className="h-12 w-12 shrink-0" />
                </motion.div>
              </AnimatePresence>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default ExpandDetailsList
