import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tanishq Ahire Portfolio",
  description: "A curated portfolio presenting my projects, research, and experience across design, analysis, and problem-solving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white">
        
        {/* Navbar (GLOBAL) */}
        <Navbar />

        {/* All pages render here */}
        <main>
          {children}
        </main>
      <Footer/>
      </body>
    </html>
  );
}
