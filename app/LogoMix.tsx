import Link from "next/link"
import Image from "next/image"

function LogoMix() {
  return (
    <div className="flex h-7">
      <Link href="/" className="h-full">
        <Image id="icon" src="pswu.svg" alt="pswu icon" />
      </Link>
      <div className="blinking-cursor h-full"></div>
    </div>
  )
}

export default LogoMix
