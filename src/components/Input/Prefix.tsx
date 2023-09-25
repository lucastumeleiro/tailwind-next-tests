import { ComponentProps } from 'react'

type TInputPrefixProps = ComponentProps<'div'>

function Prefix(props: TInputPrefixProps) {
  return <div {...props} />
}

export { Prefix }
