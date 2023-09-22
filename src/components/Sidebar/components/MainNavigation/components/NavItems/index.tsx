import { ElementType } from 'react'
import { ChevronDown } from 'lucide-react'

interface INavItemProps {
  title: string
  icon: ElementType
}

function NavItem({ title, icon: Icon }: INavItemProps) {
  return (
    <a
      href=""
      className=" group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5  text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-700">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-500 group-hover:text-violet-400" />
    </a>
  )
}

export { NavItem }
