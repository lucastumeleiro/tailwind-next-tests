import { Search } from 'lucide-react'
import { Input } from '../../../Input'

function InputSearch() {
  return (
    <Input.Root>
      <Input.Prefix>
        <Search className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control placeholder="Search" />
    </Input.Root>
  )
}
export { InputSearch }
