import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "../components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PSWU",
  description: "pswu11's website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="experience/froggy.png" sizes="any" />
      </head>
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
