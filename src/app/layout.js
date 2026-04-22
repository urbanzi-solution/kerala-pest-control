import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat"; // ✅ ADD THIS
import { PopupProvider } from "@/components/PopupContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body className="min-h-screen flex flex-col">
  <PopupProvider>

        <Navbar />

        <main className="flex-grow pt-24 md:pt-10">
          {children}
        </main>

        <Footer />

        {/* ✅ FLOATING WHATSAPP BUTTON (VISIBLE ON ALL PAGES) */}
        <WhatsAppFloat />
 </PopupProvider>
      </body>
    </html>
  );
}