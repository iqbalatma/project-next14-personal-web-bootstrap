import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import "../../public/assets/compiled/css/app.css"
import "../../public/assets/compiled/css/app-dark.css"
import "../../public/assets/compiled/css/iconly.css"
import React from "react";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        {children}
      </AuthProvider>
      </body>
      </html>
  )
}
