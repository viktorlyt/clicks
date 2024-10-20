import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";

const font = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "The Clicks - Digital Marketing Agency",
  description: "The Clicks is a digital marketing agency that helps businesses grow online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager gtmId="GTM-588PZWKW" />
        <link rel="icon" href="/app/favicon.ico" /> 
      </head>
      <body className={font.className}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-588PZWKW"
            height="0" 
            width="0" 
            style={{ display:"none", visibility:"hidden" }}
          ></iframe>
        </noscript>
      {children}</body>
    </html>
  );
}
