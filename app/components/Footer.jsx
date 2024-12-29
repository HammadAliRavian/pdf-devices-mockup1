"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#002B5C] text-white">
      <div className="container-wrapper">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative w-10 h-10">
                  <svg viewBox="0 0 40 40" fill="none">
                    <rect
                      x="4"
                      y="4"
                      width="32"
                      height="32"
                      rx="8"
                      className="fill-[#009688]"
                    />
                    <path
                      d="M12 14h16l-4 4H16l-4-4z"
                      className="fill-white/90"
                    />
                    <path
                      d="M14 20h12l-4 4h-4l-4-4z"
                      className="fill-white/80"
                    />
                    <path
                      d="M16 26h8l-2 2h-4l-2-2z"
                      className="fill-white/70"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-[#FFF0A5] bg-clip-text text-transparent">
                    PDFDevices
                  </span>
                  <span className="text-[10px] text-[#FFF0A5]/80 tracking-wider font-medium">
                    PROFESSIONAL PDF TOOLS
                  </span>
                </div>
              </Link>
              <p className="text-gray-300 max-w-md">
                Professional PDF tools to manage, edit, and convert your
                documents with ease. Secure, reliable, and easy to use.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/tools"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    All Tools
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tools */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Popular Tools
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/merge-pdf"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Merge PDF
                  </Link>
                </li>
                <li>
                  <Link
                    href="/compress-pdf"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Compress PDF
                  </Link>
                </li>
                <li>
                  <Link
                    href="/convert-pdf"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Convert PDF
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-300 hover:text-[#FFF0A5] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PDFDevices. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#FFF0A5] text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#FFF0A5] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-[#FFF0A5] text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
