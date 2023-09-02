import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>[header]</header>
        <main>{children}</main>
        <footer>[footer]</footer>
      </body>
    </html>
  );
}

export default RootLayout;
