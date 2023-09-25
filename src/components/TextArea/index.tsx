import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TTextAreaProps = ComponentProps<'textarea'>

function TextArea(props: TTextAreaProps) {
  return (
    <textarea
      className={twMerge(
        'min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 shadow-sm outline-none',
        'focus:border-violet-300 focus:ring-4 focus:ring-violet-100',
      )}
      {...props}
    />
  )
}

export { TextArea }
