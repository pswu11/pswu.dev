import { Link } from "react-router-dom"

function LogoMix() {
  return (
    <div className="flex h-7">
      <Link to="/" className="h-full">
        <img id="icon" src="pswu.svg" alt="pswu icon" />
      </Link>
      <div className="blinking-cursor h-full"></div>
    </div>
  )
}

export default LogoMix