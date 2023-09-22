import {
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  LifeBuoy,
  Cog,
} from 'lucide-react'
import { NavItem } from './components/NavItems'

function MainNavigation() {
  return (
    <>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>
    </>
  )
}

export { MainNavigation }
