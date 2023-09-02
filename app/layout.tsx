import Link from "next/link";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <Link href="/">Home</Link>
            </ul>
            <ul>
              <Link href="/reviews">Reviews</Link>
            </ul>
            <ul>
              <Link href="/about">About</Link>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          Game data and images courtesy of{" "}
          <a href="https://rawg.io/" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

export default RootLayout;
