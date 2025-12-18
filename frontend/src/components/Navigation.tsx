"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { workshopPages } from "@/lib/workshop-data";

export default function Navigation() {
  const pathname = usePathname();
  const mainPages = workshopPages.filter(p => p.order <= 9);
  const utilityPages = workshopPages.filter(p => p.order >= 10);

  return (
    <nav className="fixed top-0 left-0 h-screen w-64 bg-[#0B0C10]/95 backdrop-blur-sm border-r border-[#00FFF0]/20 text-white p-4 overflow-y-auto z-20">
      <div className="mb-8">
        <Link href="/" className="block group">
          <span className="text-xl font-bold text-[#00FFF0] group-hover:text-[#8A2BE2] transition-colors" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            Quantum Workshop
          </span>
          <span className="block text-xs text-[#8A2BE2]/60 mt-1 font-mono">
            CASE FILE: #QC-2025
          </span>
        </Link>
      </div>

      <div className="space-y-1">
        {mainPages.map((page) => (
          <Link
            key={page.id}
            href={page.path}
            className={`block px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
              pathname === page.path
                ? "bg-gradient-to-r from-[#00FFF0]/20 to-[#8A2BE2]/20 border border-[#00FFF0]/40 text-[#00FFF0] font-medium"
                : "text-[#E6E6E6] hover:bg-[#00FFF0]/10 hover:text-[#00FFF0] hover:border-[#00FFF0]/20 border border-transparent"
            }`}
          >
            <span className="block">{page.title}</span>
            {pathname === page.path && (
              <span className="text-xs text-[#8A2BE2]">{page.subtitle}</span>
            )}
          </Link>
        ))}
      </div>

      <div className="border-t border-[#00FFF0]/20 mt-6 pt-4 space-y-1">
        {utilityPages.map((page) => (
          <Link
            key={page.id}
            href={page.path}
            className={`block px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
              pathname === page.path
                ? "bg-[#8A2BE2]/20 border border-[#8A2BE2]/40 text-[#8A2BE2] font-medium"
                : "text-[#E6E6E6]/80 hover:bg-[#8A2BE2]/10 hover:text-[#8A2BE2] border border-transparent"
            }`}
          >
            {page.title}
          </Link>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="flex justify-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-4 rounded-full animate-pulse"
              style={{
                background: i % 2 === 0 ? '#00FFF0' : '#8A2BE2',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
        <div className="text-xs text-[#00FFF0]/50 text-center font-mono">
          <div>4-Hour Workshop</div>
          <div className="text-[#8A2BE2]/50">Simulation Only</div>
        </div>
      </div>
    </nav>
  );
}
