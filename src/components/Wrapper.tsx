import { ReactNode } from "react"

type Props = {
  children: ReactNode
}

function Wrapper({children}: Props) {
  return (
    <div id="wrapper" className="w-screen md:w-[600px] sm:w-5/6 min-h-screen bg-[#f6e8ea05] pt-1 pb-4 px-6">
      {children}
    </div>
  )
}

export default Wrapper
