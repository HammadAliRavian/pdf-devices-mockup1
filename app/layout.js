import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PDF Devices - Professional PDF Solutions",
  description:
    "Transform your PDF experience with powerful tools for managing, editing, and securing your documents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
