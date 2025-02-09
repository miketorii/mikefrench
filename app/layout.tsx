import "./globals.css";

import { NavLinks } from './ui/nav-links';

import Footer from './_components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />      
      </head>
      <body>
        <NavLinks />
        <main>{children}</main>
	<Footer />
      </body>
    </html>
  );
}
