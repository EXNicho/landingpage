import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { AOSInit } from "./components/AOSInit";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

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
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
