import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";


const inter = Inter({
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const metadata = {
  title: "Tanishq Ahire Portfolio",
  description: "A curated portfolio presenting my projects, research, and experience across design, analysis, and problem-solving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#020617] text-white`}>
        
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
