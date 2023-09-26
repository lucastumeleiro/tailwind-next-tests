'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'

interface ITabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

function TabItems({ value, title, isSelected = false }: ITabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className={twMerge(
        'group relative px-1  pb-4 text-sm font-medium text-zinc-500 outline-none',
        'hover:text-violet-500 data-[state=active]:text-violet-700',
        'dark:text-zinc-400 dark:hover:text-violet-300 dark:data-[state=active]:text-violet-300',
      )}
    >
      <span className="whitespace-nowrap rounded group-focus-visible:ring-2 group-focus-visible:ring-violet-400 group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className={twMerge(
            'absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700',
            'dark:bg-violet-300',
          )}
        />
      )}
    </Tabs.Trigger>
  )
}

export { TabItems }
