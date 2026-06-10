import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealInit from '@/components/RevealInit';
import ScrollRestoration from '@/components/ScrollRestoration';

export const metadata: Metadata = {
  title: 'AI・DX推進ならVIETISジャパン｜戦略から開発・運用まで一気通貫',
  description: 'AI活用診断からシステム開発・運用保守まで一気通貫で支援するAI/DXエージェンシー。350件超の実績。まず無料相談から。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="no-js">
      <body>
        <Header />
        <RevealInit />
        <ScrollRestoration />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
