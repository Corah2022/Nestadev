"use client"
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'iconsax-react';


function formatArticleDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
}

export type Article = {
  content: {
    article_tag: string;
    article_img: string;
    article_date: string;
    article_title: string;
    article_desc: string;
  }
  full_slug: string;
}

const ArticleCard = (blok: Article) => {
  return (
    <a href={`/${blok.full_slug}`} target='_blank' className='rounded-[12px] overflow-hidden hover:cursor-pointer dark:hover:bg-white/5 hover:shadow-cta-custom-black h-full grow justify-between border flex flex-col gap-4 relative dark:border-white/30 border-[#00050b]/15 dark:bg-[#00050b] bg-white'>
      {/* image container */}
      <div className='w-full bg-center h-[220px] relative overflow-hidden rounded-t-[4px]'>
        <Image fill src={blok.content.article_img} alt='article image' className='object-cover' />
      </div>
      {/* author info */}
      <div className='flex flex-col p-4 flex-1 justify-between'>
        <div>
          <div className='flex flex-col gap-2 flex-1 justify-between'>
            {/* title and description container */}
            <div className='flex-1'>
              <div className={`px-3 py-1 rounded-lg w-max font-medium text-xs bg-[#2588E4]/10 text-blue-600 mb-5`}>{blok.content.article_tag}</div>
              {/* title */}
              <h2 className='dark:text-white #00050B line-clamp-2 font-blauer font-semibold text-lg lg:text-xl min-h-[48px] max-h-[53px] leading-tight'>{blok.content.article_title}</h2>
              {/* description */}
              <p className='dark:text-white/70 text-[#00050b]/70 font-plus-jakarta text-xs mt-5 leading-[21.7px] max-w-[326px] line-clamp-2 min-h-[44px] max-h-[44px] mt-2'>{blok.content.article_desc}</p>
            </div>
          </div>
        </div>

        {/* author container */}
        <div className='h-full'>
          {/* horizontal separator */}
          <div className='border-[0.5px] w-full border-black/10 dark:border-white/10 my-4'></div>
          <div className='flex items-center justify-between'>
            {/* date */}
            <p className='text-xs dark:text-white/70 text-[#00050b]/70 tracking-tight'>{formatArticleDate(blok.content.article_date)}</p>
            <div className='flex items-center gap-2 font-aeonik text-sm '>
              Read More
              <ArrowRight variant='TwoTone' size={22} color='currentColor' />
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ArticleCard;

