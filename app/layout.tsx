import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import StarsBackground from "@/components/ui/StarsBackground"
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "BookHive – Buy, Sell & Exchange Books",
  description: "A modern marketplace for book lovers. Find second-hand books, sell your used books, and exchange with other readers.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-bg text-white">
        <StarsBackground />
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: '#12122a',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.1)',
            },
          }}
        />
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
}