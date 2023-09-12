"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

interface PaginationBarProps {
  href: string;
  page: number;
  pageCount: number;
}

interface PaginationLinksProps {
  children: React.ReactNode;
  href: string;
  enabled?: boolean;
}

function PaginationBar({ href, page, pageCount }: PaginationBarProps) {
  return (
    <div className="flex gap-2 pb-2 items-center">
      <PaginationLink href={`${href}?page=${page - 1}`} enabled={page > 1}>
        <ChevronLeftIcon className="w-4 h-4" />
        <span className="sr-only">Previous Page</span>
      </PaginationLink>
      <span className="">
        Page {page} of {pageCount}
      </span>
      <PaginationLink
        href={`${href}?page=${page + 1}`}
        enabled={page < pageCount}
      >
        <ChevronRightIcon className="w-4 h-4" />
        <span className="sr-only">Next Page</span>
      </PaginationLink>
    </div>
  );
}

function PaginationLink({ children, href, enabled }: PaginationLinksProps) {
  {
    return (
      <>
        {enabled ? (
          <Link
            href={href}
            className="border rounded text-slate-500 text-sm hover:bg-orange-100 hover:text-slate-700"
          >
            {children}
          </Link>
        ) : (
          <span className="border rounded text-slate-300 text-sm cursor-not-allowed">
            {children}
          </span>
        )}
      </>
    );
  }
}

export default PaginationBar;
