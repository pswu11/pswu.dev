import Wrapper from "../components/Wrapper"
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"

export function RootLayout() {
  return (
    <div className="min-h-screen w-screen gradient-purple text-base-white flex justify-center">
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </div>
  )
}
