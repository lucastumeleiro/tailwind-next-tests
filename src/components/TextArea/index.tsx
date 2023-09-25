import { ComponentProps } from 'react'

type TTextAreaProps = ComponentProps<'textarea'>

function TextArea(props: TTextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 shadow-sm"
      {...props}
    />
  )
}

export { TextArea }
