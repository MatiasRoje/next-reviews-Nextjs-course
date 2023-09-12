"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  styles?: string;
  prefetch?: boolean;
}

function NavLink({ children, href, styles, prefetch }: NavLinkProps) {
  const pathname = usePathname();

  return (
    <>
      {pathname === href ? (
        <span
          className={`${styles} text-orange-800 hover:underline cursor-pointer`}
        >
          {children}
        </span>
      ) : (
        <Link
          href={href}
          className={`${styles} text-orange-800 hover:underline`}
          prefetch={prefetch}
        >
          {children}
        </Link>
      )}
    </>
  );
}

export default NavLink;
