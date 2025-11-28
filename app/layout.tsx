import type { Metadata } from "next";
import { AOSInit } from "./components/AOSInit";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Arbitrage",
  description: "Digital Automated Arbitrage Trading System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className="antialiased">{children}</body>
    </html>
  );
}
