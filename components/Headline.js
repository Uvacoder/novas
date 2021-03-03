import React from 'react'
import Image from 'next/image'

export const Headline = ({ article }) => {
  return (
    <a href={`/articles/${article.id}`} className='relative'>
      <div className='w-full h-128 bg-center bg-cover'>
        <div className='flex flex-col text-center items-center justify-evenly h-full w-full bg-opacity-60 bg-black relative z-1'>
          <span className='text-white text-sm tracking-widest'>SCIENCE | FEB, 19TH</span>
          <h2 className='text-white font-bold text-5xl font-serif hover:underline'>{article.title}</h2>
          <span className='text-white font-bold text-2xl'>Maybe that's just what the future holds for us.</span>
        </div>
      </div>
    </a>
  )
}
