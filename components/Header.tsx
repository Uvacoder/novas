import { useState } from 'react'
import { Container } from './Container'
import { CategoryInfo } from '../domain/Category'
import { HeaderMenu } from './HeaderMenu'
import TabsIcon from '../public/icons/menu.svg'
import SearchIcon from '../public/icons/search.svg'
import tw, { css } from 'twin.macro'

interface HeaderProps {
  hasBorder: boolean
  categories: Record<string, CategoryInfo>
}

export const Header = ({ hasBorder, categories }: HeaderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <Container>
      <header
        tw='relative flex flex-row sticky p-2 md:(px-4 py-8) justify-between items-center border-b border-black z-50'
        css={[hasBorder && tw`border-purple-600`]}
      >
        <div tw='relative'>
          <HeaderMenu
            show={isMenuOpen}
            categories={categories}
            onClose={(): void => setIsMenuOpen(false)}
          />
          <button
            onClick={(): void => setIsMenuOpen(true)}
            tw='w-7 h-7 rounded-full bg-black text-white flex items-center justify-center'
          >
            <TabsIcon tw='fill-current w-3 h-3' />
          </button>
        </div>
        <a href='/#' tw='flex flex-col items-center'>
          <h1 tw='font-medium text-5xl md:text-8xl font-caps italic bg-black text-white'>NOVAS</h1>
        </a>
        <a href='/search' tw='w-7 h-7 rounded-full text-black'>
          <SearchIcon tw='fill-current w-5 h-5 m-0 m-auto' />
        </a>
      </header>
    </Container>
  )
}
