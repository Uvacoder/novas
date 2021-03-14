import { FunctionComponent } from 'react'
import { CategoryInfo } from '../domain/Category'

interface NavbarCategoryItemProps {
  category: CategoryInfo
}

export const NavbarCategoryItem: FunctionComponent<NavbarCategoryItemProps> = ({ category }) => (
  <a href={`categories/${category.name}`} className='flex flex-row items-center px-2 flex-shrink-0 border-r border-black'>
    <div className={`w-2 h-2 mr-2 rounded-full bg-${category.color}`}></div>
    {category.name.toUpperCase()}
  </a>
)
