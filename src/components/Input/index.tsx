import { ComponentProps } from 'react'

type TInputRootProps = ComponentProps<'div'>

type TInputPrefixProps = ComponentProps<'div'>

type TInputControlProps = ComponentProps<'input'>

function InputPrefix(props: TInputPrefixProps) {
  return <div {...props} />
}

function InputControl(props: TInputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

function InputRoot(props: TInputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

const Input = {
  Prefix: InputPrefix,
  Control: InputControl,
  Root: InputRoot,
}
export { Input }
