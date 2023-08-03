import Link from "next/link"

function LogoMix() {
  return (
    <div className="flex h-7">
      <Link href="/" className="h-full">
        <img id="icon" src="pswu.svg" alt="pswu icon"/>
      </Link>
      <div className="blinking-cursor h-full"></div>
    </div>
  )
}

export default LogoMix
