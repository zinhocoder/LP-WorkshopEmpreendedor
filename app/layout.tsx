import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Workshop: Só Para Empreendedores',
  description: 'Um encontro exclusivo para quem faz acontecer! Aprenda com especialistas, troque experiências com outros empreendedores e descubra estratégias práticas para crescer seu negócio de forma inteligente e sustentável. Networking, conteúdo de valor e insights que você só encontra entre quem vive o empreendedorismo na prática.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
