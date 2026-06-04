"use client"
import {
  FadeLeft,
  FadeRight,
  FadeScale,
  FadeUp,
  StaggerGroup,
  StaggerItem,
} from "@/components/ui/animate"
import ExpandDetailsList from "@/components/expand-details-list"
import {
  BadgeQuestionMarkIcon,
  CheckCircle2Icon,
  PlugIcon,
  SmilePlusIcon,
} from "lucide-react"
import Link from "next/link"
import { ArrowRight } from "iconsax-react"

export default function Steps() {
  const howItWorksSteps = [
    {
      icon: PlugIcon,
      label: "Connect Your Agency",
      text: "Set up your profile in minutes. Upload policies, CQC ratings, past bids, and connect Google Workspace. Elsa learns your agency.",
    },
    {
      icon: BadgeQuestionMarkIcon,
      label: "Ask Elsa Anything",
      text: "Switch between Chat, Audit Mode, Strategy Mode, and Accessibility Expert. Ask in plain English. Elsa understands care regulations and your own documents.",
    },
    {
      icon: CheckCircle2Icon,
      label: "Take Action Instantly",
      text: "Elsa doesn't just advise. She acts. Generate a policy, draft a tender section, score a care plan, or create an Easy Read in one step.",
    },
    {
      icon: SmilePlusIcon,
      label: "Stay Ahead, Always",
      text: "Live tender alerts, CQC readiness scores, and deadline tracking. Elsa surfaces what your agency needs to know before you need to ask.",
    },
  ]

  return (
    <section
      id="how-it-works"
      className="w-full overflow-x-clip p-4 py-24 pt-32"
    >
      <div className="wrapper flex flex-col gap-12">
        <StaggerGroup
          className="mx-auto flex w-full max-w-4xl flex-col gap-2 text-center"
          stagger={0.1}
          delayChildren={0.05}
        >
          <StaggerItem>
            <h2 className="tracking-widest uppercase">How it works</h2>
          </StaggerItem>
          <StaggerItem>
            <p className="text-center font-heading text-2xl font-semibold tracking-tight lg:text-5xl">
              From Setup to Results <br />
              <span className="text-foreground/50">in Minutes</span>
            </p>
          </StaggerItem>
        </StaggerGroup>
        <FadeUp delay={0.1}>
          <ExpandDetailsList
            className="mx-auto w-full max-w-6xl"
            steps={howItWorksSteps}
          />
        </FadeUp>
      </div>
      <Link
        href="https://elsa.nestadev.com/"
        className="bg-[#7811F3] font-blauer mt-10 mx-auto font-medium gap-2 text-white h-10 w-max flex items-center justify-center text-sm tracking-wide rounded-full px-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-[#7811F3]/80 transition-all ease-out active:scale-95"
      >
        Get Started with ELSA
        <ArrowRight variant="TwoTone" color="currentColor" size={22} />
      </Link>
    </section>
  )
}