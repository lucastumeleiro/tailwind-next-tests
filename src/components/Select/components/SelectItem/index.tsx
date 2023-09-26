'use client'

import { Check } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import * as Select from '@radix-ui/react-select'

type TSelectItemProps = Select.SelectItemProps & {
  text: string
}

function SelectItem({ text, ...props }: TSelectItemProps) {
  return (
    <Select.Item
      className={twMerge(
        'flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50',
        'dark:data-[highlighted]:bg-zinc-700',
      )}
      {...props}
    >
      <Select.ItemText asChild>
        <span className={twMerge('text-black', 'dark:text-zinc-100')}>
          {text}
        </span>
      </Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}

export { SelectItem }
