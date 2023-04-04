import '../(main)/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="m-0">{children}</body>
    </html>
  );
}
