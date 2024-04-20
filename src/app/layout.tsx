import type { Metadata } from 'next';
import { Exo, Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const exo = Exo({ subsets: ['latin'] });
const space_grotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Psicólogo Bruno Carlos - Terapia de casal',
  description:
    'Viva um relacionamento feliz e tranquilo, restaure o amor e desejo pelo parceiro e desfrute de uma relação próspera.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={space_grotesk.className}>{children}</body>
    </html>
  );
}
