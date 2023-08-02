import LogoMix from "./LogoMix"
import Navbar from "./Navbar"

export function Header() {
  return (
    <header className="flex justify-between items-center h-[65px]">
      <LogoMix />
      <Navbar />
    </header>
  )
}
