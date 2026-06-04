'use client'
import { Activity, Map as MapIcon, MessageCircle } from 'lucide-react'
import DottedMap from 'dotted-map'
import { Area, AreaChart, CartesianGrid } from 'recharts'
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'

const map = new DottedMap({ height: 55, grid: 'diagonal' })
const points = map.getPoints()

const svgOptions = {
    backgroundColor: 'transparent',
    color: '#3b82f6', // blue-500
    radius: 0.15,
}

const Map = () => {
    const viewBox = `0 0 120 60`
    return (
        <svg
            viewBox={viewBox}
            className="w-[200%] sm:w-[150%] md:w-full h-auto max-w-none -ml-[50%] sm:-ml-[25%] md:ml-0"
            style={{ background: svgOptions.backgroundColor }}>
            {points.map((point, index) => (
                <circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r={svgOptions.radius}
                    fill={svgOptions.color}
                    className="opacity-20"
                />
            ))}
        </svg>
    )
}

const chartConfig = {
    desktop: {
        label: 'Compliance Score',
        color: '#2563eb', // blue-600
    },
    mobile: {
        label: 'Tender Wins',
        color: '#a855f7', // purple-500
    },
} satisfies ChartConfig

const chartData = [
    { month: 'Jan', desktop: 56, mobile: 224 },
    { month: 'Feb', desktop: 56, mobile: 224 },
    { month: 'Mar', desktop: 126, mobile: 252 },
    { month: 'Apr', desktop: 205, mobile: 410 },
    { month: 'May', desktop: 200, mobile: 126 },
    { month: 'Jun', desktop: 400, mobile: 800 },
]

const MonitoringChart = () => {
    return (
        <ChartContainer
            className="h-[300px] md:h-96 w-full"
            config={chartConfig}>
            <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                    left: 0,
                    right: 0,
                }}>
                <defs>
                    <linearGradient
                        id="fillDesktop"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-desktop)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                    <linearGradient
                        id="fillMobile"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="55%"
                            stopColor="var(--color-mobile)"
                            stopOpacity={0.1}
                        />
                    </linearGradient>
                </defs>
                <CartesianGrid vertical={false} stroke="rgba(156,163,175,0.1)" />
                <ChartTooltip
                    active
                    cursor={false}
                    content={<ChartTooltipContent className="bg-white dark:bg-[#27272a] border-[#e5e5e5] dark:border-[#3f3f46]" />}
                />
                <Area
                    strokeWidth={2}
                    dataKey="mobile"
                    type="stepBefore"
                    fill="url(#fillMobile)"
                    fillOpacity={0.1}
                    stroke="var(--color-mobile)"
                    stackId="a"
                />
                <Area
                    strokeWidth={2}
                    dataKey="desktop"
                    type="stepBefore"
                    fill="url(#fillDesktop)"
                    fillOpacity={0.1}
                    stroke="var(--color-desktop)"
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    )
}

export default function PlatformFeatures() {
    return (
        <section className="px-4 md:px-6 py-16 md:py-32 bg-white dark:bg-[#18181b] border-t border-[#e5e5e5] dark:border-[#262626] overflow-hidden w-full max-w-[100vw]">
            <div className="mx-auto grid max-w-6xl w-full min-w-0 border border-[#e5e5e5] dark:border-[#3f3f46] rounded-[2rem] overflow-hidden md:grid-cols-2 bg-[#f9fafb] dark:bg-[#27272a] shadow-2xl">
                <div className="w-full min-w-0">
                    <div className="p-6 sm:p-12">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                            <MapIcon className="size-4" />
                            Live Operations
                        </span>

                        <p className="mt-6 text-2xl sm:text-3xl font-blauer font-bold tracking-tight text-gray-900 dark:text-white text-pretty">Global care monitoring. See compliance status instantly.</p>
                    </div>

                    <div
                        aria-hidden
                        className="relative">
                        <div className="absolute inset-0 z-10 m-auto size-fit">
                            <div className="rounded-xl bg-white dark:bg-[#18181b] relative flex max-w-[80vw] sm:max-w-none items-center gap-2 border border-[#e5e5e5] dark:border-[#3f3f46] px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium shadow-xl">
                                <span className="text-base sm:text-lg shrink-0">🇬🇧</span> <span className="truncate">London Care Home - 100% CQC</span>
                            </div>
                        </div>

                        <div className="relative overflow-hidden h-64 md:h-80 opacity-60 dark:opacity-100 flex items-center">
                            <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f9fafb_75%)] dark:bg-[radial-gradient(ellipse_at_center,transparent_0%,#27272a_75%)]"></div>
                            <Map />
                        </div>
                    </div>
                </div>

                <div className="overflow-hidden border-t border-[#e5e5e5] dark:border-[#3f3f46] bg-white dark:bg-[#18181b]/50 p-6 sm:p-12 md:border-0 md:border-l w-full min-w-0">
                    <div className="relative z-10">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                            <MessageCircle className="size-4" />
                            AI Support Agent
                        </span>

                        <p className="my-6 text-2xl sm:text-3xl font-blauer font-bold tracking-tight text-gray-900 dark:text-white text-pretty">Reach out to ELSA for real-time compliance answers.</p>
                    </div>
                    <div
                        aria-hidden
                        className="flex flex-col gap-8 mt-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-xs">
                                    V
                                </span>
                                <span className="text-gray-500 dark:text-gray-400 text-xs font-medium">Sat 22 Feb</span>
                            </div>
                            <div className="rounded-2xl rounded-tl-sm bg-gray-100 dark:bg-[#27272a] border border-[#e5e5e5] dark:border-[#3f3f46] mt-2 w-[85%] sm:w-3/4 p-4 text-sm text-gray-700 dark:text-gray-300">What is our current CQC rating across all branches, and are there any outstanding risks?</div>
                        </div>

                        <div>
                            <div className="rounded-2xl rounded-tr-sm mb-2 ml-auto w-[90%] sm:w-3/4 bg-blue-600 p-4 text-sm text-white shadow-md shadow-blue-500/20">All branches are currently rated 'Good'. However, the North Branch is missing 2 staff training certificates that expire next week. I have already drafted the reminder emails.</div>
                            <span className="text-gray-500 dark:text-gray-400 block text-right text-xs font-medium">Now</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-full border-y border-[#e5e5e5] dark:border-[#3f3f46] bg-white dark:bg-[#18181b] p-6 sm:p-8 md:p-12">
                    <p className="text-center text-3xl sm:text-4xl font-blauer font-bold lg:text-7xl text-gray-900 dark:text-white tracking-[-0.8px]">100% Automated</p>
                </div>

                <div className="relative col-span-full bg-[#f9fafb] dark:bg-[#27272a] flex flex-col md:block w-full min-w-0 overflow-hidden">
                    <div className="relative md:absolute z-10 max-w-[100vw] sm:max-w-lg px-6 pt-8 md:px-12 md:pt-12 top-0 left-0">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                            <Activity className="size-4" />
                            Activity Analytics
                        </span>

                        <p className="my-4 md:my-6 text-xl sm:text-2xl font-blauer font-bold tracking-tight text-gray-900 dark:text-white">
                            Monitor your operational growth in real-time. <span className="text-gray-500 dark:text-gray-400 font-medium text-lg sm:text-xl md:block hidden lg:inline">Instantly identify trends.</span>
                        </p>
                    </div>
                    <div className="mt-4 md:mt-40 px-2 sm:px-6 md:px-12 pb-6 md:pb-12 w-full min-w-0 overflow-hidden">
                        <MonitoringChart />
                    </div>
                </div>
            </div>
        </section>
    )
}
