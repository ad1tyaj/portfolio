import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aditya Jha — AI Engineer & Backend Systems",
  description:
    "Production-focused AI Engineer specializing in autonomous AI systems, LLM-powered workflows, and computer vision pipelines. Built and deployed a multi-tenant WhatsApp commerce platform processing 170+ real customer orders.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Next.js",
    "WhatsApp Commerce",
    "LLM",
    "Backend Systems",
    "Aditya Jha",
  ],
  authors: [{ name: "Aditya Jha", url: "mailto:adj0071@gmail.com" }],
  openGraph: {
    title: "Aditya Jha — AI Engineer",
    description:
      "Production-focused AI Engineer specializing in autonomous AI systems, LLM-powered workflows, and computer vision pipelines.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Jha — AI Engineer",
    description:
      "Production AI systems, LLM workflows, and computer vision pipelines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
