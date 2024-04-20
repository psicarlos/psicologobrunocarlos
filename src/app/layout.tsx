import type { Metadata } from 'next';
import { Exo, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });
const exo = Exo({ subsets: ['latin'] });
const space_grotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Psicólogo Bruno Carlos - Terapia de casal',
  description:
    'Viva um relacionamento feliz e tranquilo, restaure o amor e desejo pelo parceiro e desfrute de uma relação próspera.',
  keywords:
    'Terapeuta de casal, Psicologo de casal em Maringá, Psicologo para casal, Terapia de casais, Psicologo on-line, Psicologo Maringá, Clínica de psicologia, Psicologo de casais, casal, psicologo, relacionamento',
  authors: { name: 'Pablo santos' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <GoogleAnalytics gaId="AW-757811905" />
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
