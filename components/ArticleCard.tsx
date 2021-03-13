import { FunctionComponent } from 'react'
import { Article } from '../domain/interfaces'
import Image from 'next/image'

interface ArticleCardProps {
  article: Article
}

export const ArticleCard: FunctionComponent<ArticleCardProps> = ({ article }) => {
  return (
    <div className='relative flex flex-row space-x-4'>
      <div className='relative w-1/4 h-28 md:h-40 flex-shrink-0 border'>
        <Image
          className='object-center object-cover z-0'
          src={`/.images/${article.id}.jpg`}
          layout='fill'
          alt={article.title}
        />
      </div>
      <div className='w-3/4'>
        <span className='font-bold text-xs md:text-sm tracking-wider mb-3'>
          <span className='text-red-600'>{article.categoryName.toUpperCase()}</span>
            <span className='font-serif italic text-xs'>&nbsp; on &nbsp;</span>
          <span className='text-gray-700'>FEB 19TH</span>
        </span>
        <h2 className='font-serif font-semibold tracking-tight cursor-pointer text-md md:text-2xl lg:text-3xl hover:underline underline-wavy'>{article.title}</h2>
      </div>
    </div>
  )
}
