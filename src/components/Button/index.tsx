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
      primary: twMerge(
        'bg-violet-600 text-white hover:bg-violet-700',
        'dark:bg-violet-500 dark:hover:bg-violet-600',
      ),
      outline: twMerge(
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50',
        'dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
      ),
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
