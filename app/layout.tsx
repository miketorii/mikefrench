import "./globals.css";

import { NavLinks } from './ui/nav-links';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
