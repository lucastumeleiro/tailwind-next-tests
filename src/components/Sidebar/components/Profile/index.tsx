import { Button } from '@/components/Button'
import { LogOut } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

function Profile() {
  return (
    <div className=" flex items-center gap-3">
      <img
        src="https://github.com/lucastumeleiro.png"
        className="h-10 w-10 rounded-full"
        alt="Foto do perfil do usuário"
      />
      <div className="flex flex-1 flex-col truncate ">
        <span
          className={twMerge(
            'truncate text-sm font-semibold text-zinc-700',
            'dark:text-zinc-100',
          )}
        >
          Lucas Tumeleiro
        </span>
        <span
          className={twMerge(
            'truncate text-xs text-zinc-700',
            'dark:text-zinc-400',
          )}
        >
          lucasftumeleiro@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className=" h-5 w-5 text-zinc-500 hover:text-violet-500" />
      </Button>
    </div>
  )
}

export { Profile }
