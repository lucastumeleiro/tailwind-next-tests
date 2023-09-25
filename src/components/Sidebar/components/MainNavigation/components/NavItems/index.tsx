import { ElementType } from 'react'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface INavItemProps {
  title: string
  icon: ElementType
}

function NavItem({ title, icon: Icon }: INavItemProps) {
  return (
    <a
      href=""
      className={twMerge(
        'group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50',
        'dark:hover:bg-zinc-800',
      )}
    >
      <Icon className="h-5 w-5  text-zinc-500" />
      <span
        className={twMerge(
          'font-medium text-zinc-700 group-hover:text-violet-700',
          'dark:text-zinc-200 dark:group-hover:text-violet-300',
        )}
      >
        {title}
      </span>
      <ChevronDown
        className={twMerge(
          'ml-auto h-5 w-5 text-zinc-500 group-hover:text-violet-400',
          'dark:text-zinc-600',
        )}
      />
    </a>
  )
}

export { NavItem }
