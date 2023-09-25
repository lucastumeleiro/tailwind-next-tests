import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TInputControlProps = ComponentProps<'input'>

function Control(props: TInputControlProps) {
  return (
    <input
      className={twMerge(
        'flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none',
        'dark:text-zinc-100 dark:placeholder-zinc-400',
      )}
      {...props}
    />
  )
}

export { Control }
