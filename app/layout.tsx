import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

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
  metadataBase: new URL("https://www.nickjain.org"),
  title: "Nick Jain. — Recruitment Specialist",
  description: "Nick Jain. is a seasoned Recruitment Specialist at Metro Associates with 8+ years placing top talent across Healthcare, Engineering, AI, IoT, and Sales globally.",
  keywords: [
    "recruitment specialist",
    "DOT recruiter",
    "MEP recruiter",
    "healthcare recruiter",
    "AI recruiter",
    "IoT recruiter",
    "security cleared recruiter",
    "sales recruiter",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nick Jain. — Recruitment Specialist",
    description: "8+ years placing top talent across Healthcare, Engineering, AI, IoT, Security, and Sales for U.S. clients.",
    url: "https://www.nickjain.org",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
