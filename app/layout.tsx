import type React from "react"
import type { Metadata } from "next"
import { Lora, Inter } from "next/font/google"
import "./globals.css"

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EntrustFi - Investing at the Intersection of Tradition and Innovation",
  description:
    "A private investment firm leveraging deep global macro expertise and proprietary AI to capitalize on opportunities across digital assets, real estate, and high-growth ventures.",
  keywords: "investment, private equity, AI trading, global macro, digital assets, real estate",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
