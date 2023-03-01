import './globals.css';
import { Poppins } from '@next/font/google';
import Header from '@widgets/header';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const poppins = Poppins({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans text-main-bg`}>
      <head>
        <title>Digiency - Home</title>
      </head>
      <body>
        <header className="bg-dark-white-bg">
          <div className="container">
            <Header />
          </div>
        </header>
        <div className="container">{children}</div>
        <footer>
          <div className="container" />
        </footer>
      </body>
    </html>
  );
}
