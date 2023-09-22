import { Logo } from './components/Logo'
import { InputSearch } from './components/InputSearch'
import { MainNavigation } from './components/MainNavigation'
import { UsedSpaceWidget } from './components/UsedSpaceWidget'
import { Profile } from './components/Profile'

function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputSearch />

      <MainNavigation />

      <UsedSpaceWidget />

      <Profile />
    </aside>
  )
}
export { Sidebar }
