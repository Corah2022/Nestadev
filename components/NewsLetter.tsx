"use client"
import { TextureOverlay } from '@/components/ui/texture-overlay';
import Image from 'next/image';
import { useState } from 'react';

const NewsLetter = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };


  return (
    <div className="py-16 md:py-24 relative z-10 bg-blue-500 rounded-2xl">
      {/* blend image */}
      <Image src="/blend.png" alt="blend" width={2094.07} height={1371.33} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <TextureOverlay texture="grid" opacity={0.1} />
        <h1 className="text-white relative z-[10] font-clash font-semibold text-[56px] md:text-[80px] lg:text-[108px] leading-[56px] md:leading-[80px] lg:leading-[111.75px] tracking-[-2%] text-center mb-4 md:mb-6">
          Subscribe to our Newsletter
        </h1>

        {/* Description */}
        <p className="text-[#D7E0EB] relative z-[10] text-center font-medium tracking-[-2%] font-aeonik text-[16px] md:text-[18px] lg:text-[20px] mx-auto max-w-[800px] leading-[18.02px] mb-10 md:mb-12">
          Get the latest updates on Nestsadev’s products and other exclusive content delivered straight to your inbox.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid relative z-[10] grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[620px] mx-auto relative z-10">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
            className="w-full px-6 py-4 rounded-[16px] h-[56px] bg-white/10 backdrop-blur-md border-[1.5px] border-white/20 text-white font-sf-pro text-[16px] placeholder:text-white/60 outline-none focus:border-white/40 transition-all"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required
            className="w-full px-6 py-4 rounded-[16px] h-[56px] bg-white/10 backdrop-blur-md border-[1.5px] border-white/20 text-white font-sf-pro text-[16px] placeholder:text-white/60 outline-none focus:border-white/40 transition-all"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full sm:col-span-2 px-6 py-4 rounded-[16px] h-[56px] bg-white/10 backdrop-blur-md border-[1.5px] border-white/20 text-white font-sf-pro text-[16px] placeholder:text-white/60 outline-none focus:border-white/40 transition-all"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:col-span-2 font-aeonik cursor-pointer tracking-tight font-bold px-8 flex items-center justify-center h-[56px] rounded-[16px] bg-white text-blue-600 hover:bg-white/90 active:scale-[0.98] transition-all text-[16px] font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

      </div>
    </div>
  );
};
export default NewsLetter;