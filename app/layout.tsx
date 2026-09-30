import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "AcessaSaúdeCWB",
  description: "Acesso rápido aos serviços de saúde de Curitiba.",
  icons: {
    icon: "/acessasaudecwb_logo.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
