import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VeriWatch – Real-time public safety intelligence",
  description: "Know what's happening on your block — right now. Live police scanner, sex offender map, AI safety assistant and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlowCondensed.variable} ${ibmPlexSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
