import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "./Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} gradient-purple text-base-white`}>
        <div
          id="wrapper"
          className="w-screen md:w-[600px] sm:w-5/6 min-h-screen bg-base-layer pt-1 pb-4 px-6 m-auto text-base-white"
        >
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}