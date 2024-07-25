import type { Metadata } from 'next'
import './globals.css'
import { inter } from "@/config/fonts";
// import { Provider } from '@/components';


export const metadata: Metadata = {
  title: {
    default: "Home Page - Hiring | App",
    template: ' %s - Hiring | Shop',
  },
  description: 'Ecommerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider> */}
          {children}
        {/* </Provider> */}

      </body>
    </html>
  )
}
