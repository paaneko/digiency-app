import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@widgets/header';
import { Footer } from '@widgets/footer';
import Image from 'next/image';
import StyledComponentsRegistry from '@shared/lib/registry';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans text-main-bg`}>
      <head>
        <title>Digiency - Home</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <header className="bg-dark-white-bg fixed top-0 w-full z-50 shadow-lg">
            <div className="container">
              <Header />
            </div>
          </header>
          {children}
          <footer>
            <div className="bg-main-bg py-[60px]">
              <div className="container text-white">
                <Footer />
              </div>
            </div>
            <div className="bg-orange-main">
              <div className="container py-5 mt flex">
                <Image width={20} height={20} src="copyright-icon.svg" alt="copyright-icon" />
                <div className="ml-5 text-white">Copyright 2021. All Right Reserved By Ojjomedia</div>
              </div>
            </div>
          </footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
