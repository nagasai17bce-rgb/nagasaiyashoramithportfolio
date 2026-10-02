import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naga Sai — AI Engineer",
  description: "Naga Sai — MTS at Salesforce. AI systems, agents, inference, backend engineering and Voice AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}