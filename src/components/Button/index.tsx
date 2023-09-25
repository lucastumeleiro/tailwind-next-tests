import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

const buttonVariant = tv({
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold shadow-sm outline-none',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],
  variants: {
    variant: {
      primary: 'bg-violet-600 text-white hover:bg-violet-700',
      outline: 'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
      ghost: twMerge(
        'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500',
        'dark:hover:bg-zinc-800 dark:text-zinc-400',
      ),
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type TButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariant>

function Button({ variant, className, ...props }: TButtonProps) {
  return <button className={buttonVariant({ variant, className })} {...props} />
}
export { Button }
