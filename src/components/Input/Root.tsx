import { ComponentProps } from 'react'

type TInputRootProps = ComponentProps<'div'>

function Root(props: TInputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

export { Root }
