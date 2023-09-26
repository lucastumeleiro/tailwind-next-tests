'use client'

import { ReactNode } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

interface ISelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder, ...props }: ISelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger
        className={twMerge(
          'outline-non flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm',
          'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
          'data-[placeholder]:text-zinc-600',
          'dark:border-zinc-700 dark:bg-zinc-800 dark:data-[placeholder]:text-zinc-400',
          'dark:focus:border-violet-500 dark:focus:ring-violet-500/20',
        )}
      >
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />

        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={4}
          className={twMerge(
            'z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm',
            'dark:border-zinc-700 dark:bg-zinc-800',
          )}
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
