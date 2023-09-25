import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

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
      ghost: 'rounded-md px-2 hover:bg-zinc-50 shadow-none',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

type TButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariant>

function Button({ variant, ...props }: TButtonProps) {
  return <button className={buttonVariant({ variant })} {...props} />
}
export { Button }
