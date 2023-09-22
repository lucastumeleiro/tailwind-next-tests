'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

interface ITabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

function TabItems({ value, title, isSelected = false }: ITabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="text--sm relative  px-1 pb-4 font-medium text-zinc-500 hover:text-violet-500 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}

export { TabItems }
