import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naga Sai — AI Engineer",
  description: "AI engineering, agent systems, inference infrastructure and distributed backend systems.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
