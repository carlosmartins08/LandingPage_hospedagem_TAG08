import type { Metadata, Viewport } from 'next';
import { Darker_Grotesque, Manrope } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import CustomCursor from '../components/CustomCursor';

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-darker-grotesque',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'TAG08 Studio | Marketing Estrategico & Design de Elite',
  description: 'Consultoria estrategica de marketing focada em escala e consolidacao de marcas premium.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${manrope.variable} ${darkerGrotesque.variable} scroll-smooth`}>
      <body className="bg-brand-black text-white antialiased font-sans">
        <Providers>
          <CustomCursor />
          <a
            href="#main-content"
            className="sr-only focus-visible:inline-flex focus-visible:items-center focus-visible:gap-2 focus-visible:absolute focus-visible:top-4 focus-visible:left-4 focus-visible:z-[999] focus-visible:bg-white focus-visible:text-brand-black focus-visible:px-4 focus-visible:py-2 focus-visible:rounded-full focus-visible:shadow-lg"
          >
            Pular para o conteudo
          </a>
          <div id="root">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
