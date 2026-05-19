import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nick Jain. — Recruitment Specialist",
  description: "Nick Jain. is a seasoned Recruitment Specialist at Metro Associates with 8+ years placing top talent across Healthcare, Engineering, AI, IoT, and Sales globally.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        {children}
        <Script
          id="nextivacx-code-snippet"
          src="https://d3po7etsbw5eiv.cloudfront.net/Simplify360Chat.js?key=NmEwYjYzMGE5NjFjZTYzZTcwOGQzNzBlfDQxNzIzNzA="
          strategy="afterInteractive"
        />
        <Script id="hide-greeting" src="/hide-greeting.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
