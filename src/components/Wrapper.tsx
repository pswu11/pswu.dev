import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function Wrapper({children}: Props) {
  return (
    <div id="wrapper" className="w-[600px] min-h-screen bg-[#f6e8ea05] py-1 px-6">
      {children}
    </div>
  )
}

export default Wrapper
