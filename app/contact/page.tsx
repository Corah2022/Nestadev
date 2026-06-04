
import { Navbar } from "@/components/site/navbar";
import NewsLetter from "@/components/NewsLetter";
import LandingFooter from "@/components/site/footer";
import ContactHeader from "@/components/ContactHeader";


export default function Page() {
  return (
    <div className="min-h-screen w-full  border-x border-[#e5e5e5] dark:border-[#262626] mx-auto relative pt-32 text-gray-800 bg-[#f9fafb] dark:bg-[#18181b] dark:text-gray-200">
      {/* lines */}
      <div className="hidden md:block w-px h-full border-r border-[#e5e5e5] dark:border-[#262626] absolute top-0 right-6 z-10"></div>
      <div className="hidden md:block w-px h-full border-l border-[#e5e5e5] dark:border-[#262626] absolute top-0 left-6 z-10"></div>
      <Navbar />
      <ContactHeader />
      <NewsLetter />
      <LandingFooter />
    </div>
  );
}
