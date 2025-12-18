import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import ParticleEffect from "@/components/ParticleEffect";

export const metadata: Metadata = {
  title: "Unlocking Quantum Computing",
  description: "A hands-on quantum computing mystery workshop using Python and Qiskit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen">
        <ParticleEffect />
        <Navigation />
        <main className="relative z-10 ml-64 min-h-screen p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
