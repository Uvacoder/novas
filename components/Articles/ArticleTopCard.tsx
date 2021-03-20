import { FunctionComponent } from 'react'
import { Article } from '../../domain/Article'
import { colors } from '../colors'
import Zig from '../../public/icons/zig.svg'
import tw, { css, styled, theme, TwStyle } from 'twin.macro'

interface ArticleTopCardProps {
  categoryColor: string
  article: Article
}

export const ArticleTopCard: FunctionComponent<ArticleTopCardProps> = ({ article, categoryColor }) => (
  <div tw='text-center space-y-4 mx-auto flex md:max-w-xs flex-col'>
    <span
      tw='flex justify-center text-xs tracking-wider font-bold'
      css={{ color: categoryColor }}
    >
      {article.categoryName.toUpperCase()}
    </span>
    <div
      tw='pb-4 text-xl md:text-xl text-center font-serif tracking-wide font-bold hover:underline'
      css={{ textDecorationColor: `${categoryColor} !important` }}
    >
      {article.title}
    </div>
    <div tw='flex flex-row justify-center mt-auto!' css={{ color: categoryColor }}>
      <Zig tw='stroke-current w-6 h-5' />
      <Zig tw='stroke-current w-6 h-5' />
      <Zig tw='stroke-current w-6 h-5' />
    </div>
  </div>
)
