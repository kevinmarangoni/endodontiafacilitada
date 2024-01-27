/* eslint-disable @next/next/no-page-custom-font */

import Theme from '@/theme/ThemeContext'
import type { Metadata } from 'next'
import StyledComponentsRegistry from '../../lib/registry'

export const metadata: Metadata = {
  title: 'Endodontia Facilitada',
  description: 'Endodontia Microscópica, Clínica e Cirúrgica. Somos referência em Tratamento de Canal Sem Dor. Acabe com a dor e o desconforto de canal. Nosso atendimento de endodontia é rápido, indolor e sem estresse.',
  keywords: ["endodontia", "facilitada", "dentista", "canal", "urgente", "urgencia", "sem dor", "tratamento", "dor", "dente", "profissional", "limpeza"],
  icons: {
    icon: ["/public/favicon.ico", "/public/favicon-16x16.png", "/public/favicon-32x32.png"],
    apple: "/public/apple-touch-icon.png"
},
openGraph: {
  type: "website",
  url: "https://example.com",
  title: "My Website",
  description: "My Website Description",
  siteName: "My Website",
  images: [{
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQo_evXZkDZvRquS1k2Ws3-WGmthHxKh5G_P40Qrpwg&s",
  }],
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
          <StyledComponentsRegistry>
        <Theme>
          <body>{children}</body>
        </Theme>
          </StyledComponentsRegistry>
      </html>
  )
}
