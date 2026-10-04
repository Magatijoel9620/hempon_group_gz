import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://hempon-group.vercel.app"),
  icons: { icon: "/favicon-v2.ico" },
  title: "Hempon Group — Digital Systems, Websites & Experiences",
  description: "Hempon Group designs and builds high-performance websites, business software, mobile applications, automation and digital systems.",
  keywords: ["Hempon Group", "web development", "business systems", "Flutter", "Next.js", "Supabase", "Kenya"],
  openGraph: { title: "Hempon Group — Digital Systems, Websites & Experiences", description: "Digital products engineered around real business needs.", url: "https://hempon-group.vercel.app", siteName: "Hempon Group", type: "website", locale: "en_KE", images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hempon Group" }] },
  twitter: { card: "summary_large_image", title: "Hempon Group", description: "Digital products engineered around real business needs.", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#07090d", colorScheme: "dark", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body><SmoothScroll/><CursorGlow/>{children}</body></html>;
}
