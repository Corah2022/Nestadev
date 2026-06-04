import LandingPageAbout from "@/components/LandingPageAbout";
import CoreService from "@/components/CoreService";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Introducing from "@/components/Introducing";
import ElsaHandles from "@/components/ElsaHandles";
import OptimizeGrowth from "@/components/OptimiseGrowth";
import PlatformFeatures from "@/components/PlatformFeatures";
import { Navbar } from "@/components/site/navbar";
import LandingPageSubscribe from "@/components/LandingPageSubscribe";
import LandingFooter from "@/components/site/footer";
import Steps from "@/components/Steps";
import BuiltByNestaDev from "@/components/BuiltByNestaDev";

export default function Home() {
  return (
    <div className="min-h-screen w-full  border-x border-[#262626] mx-auto relative pt-32 text-gray-800 bg-[#f9fafb] dark:bg-[#18181b] dark:text-gray-200">
      {/* lines */}
      {/* <div className="hidden md:block w-px h-full border-r border-[#e5e5e5] dark:border-[#262626] absolute top-0 right-6 z-10"></div>
      <div className="hidden md:block w-px h-full border-l border-[#e5e5e5] dark:border-[#262626] absolute top-0 left-6 z-10"></div> */}
      <Navbar />
      <Hero />
      <Introducing />
      <ElsaHandles />
      <HowItWorks />
      <OptimizeGrowth />
      <Steps />
      <BuiltByNestaDev />
      {/* <LandingPageAbout />
      <CoreService />
      <PlatformFeatures />
      <LandingPageSubscribe /> */}
      <LandingFooter />
    </div>
  );
}
