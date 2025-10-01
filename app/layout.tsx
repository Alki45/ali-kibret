import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ali Kibret Muhamed - Data Scientist & Python Developer",
  description:
    "Professional portfolio of Ali Kibret Muhamed, Data Scientist and Python/Django Developer specializing in machine learning, data analysis, and web development.",
  keywords:
    "Data Scientist, Python Developer, Django Developer, Machine Learning, Data Analysis, Portfolio, Ali Kibret Muhamed",
  authors: [{ name: "Ali Kibret Muhamed" }],
  creator: "Ali Kibret Muhamed",
  openGraph: {
    title: "Ali Kibret Muhamed - Data Scientist & Python Developer",
    description:
      "Professional portfolio showcasing data science projects, machine learning solutions, and web development expertise.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Kibret Muhamed - Data Scientist & Python Developer",
    description: "Professional portfolio showcasing data science projects and development expertise.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
