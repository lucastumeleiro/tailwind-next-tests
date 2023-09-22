import { LogOut } from 'lucide-react'

function Profile() {
  return (
    <div className=" flex items-center gap-3">
      <img
        src="https://github.com/lucastumeleiro.png"
        className="h-10 w-10 rounded-full"
        alt="Foto do perfil do usuário"
      />
      <div className="flex flex-1 flex-col truncate ">
        <span className="truncate text-sm font-semibold text-zinc-700">
          Lucas Tumeleiro
        </span>
        <span className="truncate text-xs text-zinc-700">
          lucasftumeleiro@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded ">
        <LogOut className=" h-5 w-5 text-zinc-500 hover:text-violet-500" />
      </button>
    </div>
  )
}

export { Profile }
