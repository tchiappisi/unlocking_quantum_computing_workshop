"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getNextPage, getPrevPage } from "@/lib/workshop-data";

export default function PageNavigation() {
  const pathname = usePathname();
  const prevPage = getPrevPage(pathname);
  const nextPage = getNextPage(pathname);

  return (
    <div className="flex justify-between items-center mt-12 pt-8 border-t border-[#00FFF0]/20">
      {prevPage ? (
        <Link
          href={prevPage.path}
          className="flex items-center gap-2 px-4 py-3 text-[#E6E6E6]/70 hover:text-[#00FFF0] border border-transparent hover:border-[#00FFF0]/30 rounded-lg transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm">
            <span className="block text-xs text-[#8A2BE2]">Previous</span>
            {prevPage.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {nextPage ? (
        <Link
          href={nextPage.path}
          className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#00FFF0] to-[#8A2BE2] text-black font-medium rounded-lg hover:shadow-[0_0_20px_rgba(0,255,240,0.4)] transition-all duration-300"
        >
          <span className="text-sm text-right">
            <span className="block text-xs text-black/60">Next</span>
            {nextPage.title}
          </span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
