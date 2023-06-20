import Wrapper from "../components/Wrapper"
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"

export function RootLayout() {
  return (
    <div className="min-h-screen w-screen gradient-purple text-base-white flex flex-col items-center">
      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
      <Footer />
    </div>
  )
}
