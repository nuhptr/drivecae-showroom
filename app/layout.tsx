import type { Metadata } from "next"
import "./globals.css"

import { Footer, Navbar } from "@/components"

export const metadata: Metadata = {
   title: "Carddrive | showroom",
   description: "Carddrive showroom to showcase the latest and greatest car models.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={"relative"} suppressHydrationWarning>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   )
}
