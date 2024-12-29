"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

// Merge & Edit Icons
import {
  MergePdfIcon,
  RotatePdfIcon,
  DeletePdfIcon,
  ReorderPdfIcon,
} from "@/public/icons/MergeEditIcons";

// Optimize Icons
import {
  CompressPdfIcon,
  GrayscalePdfIcon,
  ExtractPdfIcon,
  RepairPdfIcon,
} from "@/public/icons/OptimizeIcons";

// Convert To Icons
import {
  JpgToPdfIcon,
  PngToPdfIcon,
  BmpToPdfIcon,
  TiffToPdfIcon,
  WordToPdfIcon,
  PptToPdfIcon,
  TxtToPdfIcon,
  ExcelToPdfIcon,
} from "@/public/icons/ConvertToIcons";


// Convert From Icons
import {
  PdfToJpgIcon,
  PdfToPngIcon,
  PdfToBmpIcon,
  PdfToTiffIcon,
  PdfToWordIcon,
  PdfToPptIcon,
  PdfToTxtIcon,
  PdfToZipIcon,
} from "@/public/icons/ConvertFromIcons";

// Security Icons
import { ProtectPdfIcon, UnlockPdfIcon } from "@/public/icons/SecurityIcons";

// Category Icons
const CategoryIcons = {
  MergeEdit: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
      />
    </svg>
  ),
  OptimizeExtract: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  ConvertTo: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
      />
    </svg>
  ),
  ConvertFrom: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
      />
    </svg>
  ),
  Security: ({ className }) => (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  ),
};

// Update the toolsGroups object to use the imported icons
const toolsGroups = {
  "Merge & Edit": {
    icon: <CategoryIcons.MergeEdit className="w-5 h-5 text-[#4CAF50]" />,
    tools: [
      {
        label: "Merge PDF",
        href: "/merge-pdf",
        description: "Combine multiple PDFs into one",
        icon: MergePdfIcon,
      },
      {
        label: "Rotate PDF",
        href: "/rotate-pdf",
        description: "Rotate pages in your PDF",
        icon: RotatePdfIcon,
      },
      {
        label: "Remove Pages",
        href: "/remove-pages",
        description: "Delete unwanted pages",
        icon: DeletePdfIcon,
      },
      {
        label: "Organize PDF",
        href: "/organize-pdf",
        description: "Rearrange PDF pages",
        icon: ReorderPdfIcon,
      },
    ],
  },
  "Optimize & Extract": {
    icon: <CategoryIcons.OptimizeExtract className="w-5 h-5 text-[#2196F3]" />,
    tools: [
      {
        label: "Compress PDF",
        href: "/compress-pdf",
        description: "Reduce PDF file size",
        icon: CompressPdfIcon,
      },
      {
        label: "Grayscale PDF",
        href: "/grayscale-pdf",
        description: "Convert to black and white",
        icon: GrayscalePdfIcon,
      },
      {
        label: "Extract Pages",
        href: "/extract-pages",
        description: "Extract specific pages",
        icon: ExtractPdfIcon,
      },
      {
        label: "Repair PDF",
        href: "/repair-pdf",
        description: "Fix corrupted PDF files",
        icon: RepairPdfIcon,
      },
    ],
  },
  "Convert To PDF": {
    icon: <CategoryIcons.ConvertTo className="w-5 h-5 text-[#FFC107]" />,
    tools: [
      {
        label: "JPG to PDF",
        href: "/jpg-to-pdf",
        description: "Convert JPG images to PDF",
        icon: JpgToPdfIcon,
      },
      {
        label: "PNG to PDF",
        href: "/png-to-pdf",
        description: "Convert PNG images to PDF",
        icon: PngToPdfIcon,
      },
      {
        label: "BMP to PDF",
        href: "/bmp-to-pdf",
        description: "Convert BMP images to PDF",
        icon: BmpToPdfIcon,
      },
      {
        label: "TIFF to PDF",
        href: "/tiff-to-pdf",
        description: "Convert TIFF images to PDF",
        icon: TiffToPdfIcon,
      },
      {
        label: "Word to PDF",
        href: "/word-to-pdf",
        description: "Convert Word documents to PDF",
        icon: WordToPdfIcon,
      },
      {
        label: "PowerPoint to PDF",
        href: "/ppt-to-pdf",
        description: "Convert PowerPoint to PDF",
        icon: PptToPdfIcon,
      },
      {
        label: "TXT to PDF",
        href: "/txt-to-pdf",
        description: "Convert text files to PDF",
        icon: TxtToPdfIcon,
      },
      {
        label: "Excel to PDF",
        href: "/excel-to-pdf",
        description: "Convert Excel sheets to PDF",
        icon: ExcelToPdfIcon,
      },
    ],
  },
  "Convert from PDF": {
    icon: <CategoryIcons.ConvertFrom className="w-5 h-5 text-[#F44336]" />,
    tools: [
      {
        label: "PDF to JPG",
        href: "/pdf-to-jpg",
        description: "Convert PDF to JPG images",
        icon: PdfToJpgIcon,
      },
      {
        label: "PDF to PNG",
        href: "/pdf-to-png",
        description: "Convert PDF to PNG images",
        icon: PdfToPngIcon,
      },
      {
        label: "PDF to BMP",
        href: "/pdf-to-bmp",
        description: "Convert PDF to BMP images",
        icon: PdfToBmpIcon,
      },
      {
        label: "PDF to TIFF",
        href: "/pdf-to-tiff",
        description: "Convert PDF to TIFF images",
        icon: PdfToTiffIcon,
      },
      {
        label: "PDF to Word",
        href: "/pdf-to-word",
        description: "Convert PDF to Word document",
        icon: PdfToWordIcon,
      },
      {
        label: "PDF to PowerPoint",
        href: "/pdf-to-ppt",
        description: "Convert PDF to PowerPoint",
        icon: PdfToPptIcon,
      },
      {
        label: "PDF to TXT",
        href: "/pdf-to-txt",
        description: "Convert PDF to text file",
        icon: PdfToTxtIcon,
      },
      {
        label: "PDF to ZIP",
        href: "/pdf-to-zip",
        description: "Convert PDF to ZIP file",
        icon: PdfToZipIcon,
      },
    ],
  },
  "PDF Security": {
    icon: <CategoryIcons.Security className="w-5 h-5 text-[#9C27B0]" />,
    tools: [
      {
        label: "Protect PDF",
        href: "/protect-pdf",
        description: "Add password to PDF file",
        icon: ProtectPdfIcon,
      },
      {
        label: "Unlock PDF",
        href: "/unlock-pdf",
        description: "Remove PDF password",
        icon: UnlockPdfIcon,
      },
    ],
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsToolsOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsToolsOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleToolsToggle = () => setIsToolsOpen(!isToolsOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/merge-pdf", label: "Merge PDF" },
    { href: "/compress-pdf", label: "Compress PDF" },
  ];

  const isActiveLink = (href) => {
    return pathname === href ? "text-[#FFF0A5] font-medium" : "text-white";
  };

  return (
    <header className="bg-[#002B5C] text-white shadow-lg sticky top-0 z-50">
      <nav className="container-wrapper">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
            aria-label="PDFDevices Home"
          >
            {/* Logo Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg
                className="w-full h-full"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4"
                  y="4"
                  width="32"
                  height="32"
                  rx="8"
                  className="fill-[#009688]"
                />
                <path d="M12 14h16l-4 4H16l-4-4z" className="fill-white/90" />
                <path d="M14 20h12l-4 4h-4l-4-4z" className="fill-white/80" />
                <path d="M16 26h8l-2 2h-4l-2-2z" className="fill-white/70" />
              </svg>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-[#FFF0A5] bg-clip-text text-transparent">
                PDFDevices
              </span>
              <span className="text-[10px] md:text-xs text-[#FFF0A5]/80 tracking-wider font-medium hidden sm:block">
                PROFESSIONAL PDF TOOLS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {/* Links Section */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`px-4 py-2 rounded-md ${isActiveLink(
                  link.href
                )} hover:bg-white/10 transition-colors duration-200`}
              >
                {link.label}
              </Link>
            ))}

            {/* Tools Dropdown */}
            <div
              className="relative hidden lg:block"
              ref={dropdownRef}
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <button
                className={`flex items-center space-x-1 px-4 py-2 rounded-md ${
                  isToolsOpen ? "bg-white/10" : ""
                } hover:bg-white/10 transition-colors duration-200`}
                aria-expanded={isToolsOpen}
                aria-haspopup="true"
              >
                <span>All Tools</span>
                <svg
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    isToolsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Desktop Dropdown Menu */}
              <div
                className={`
                  fixed 
                  left-1/2 
                  -translate-x-1/2 
                  top-[64px]
                  w-[95vw] 
                  max-w-[1400px]
                  min-h-[500px]
                  bg-white 
                  rounded-xl
                  shadow-xl 
                  transform 
                  transition-all 
                  duration-300 
                  origin-top 
                  border
                  border-gray-100
                  backdrop-blur-sm
                  overflow-hidden
                  ${
                    isToolsOpen
                      ? "opacity-100 translate-y-2"
                      : "opacity-0 -translate-y-8 pointer-events-none"
                  }
                `}
              >
                <div className="p-8">
                  <div className="flex gap-6 overflow-x-auto no-scrollbar">
                    {Object.entries(toolsGroups).map(
                      ([category, { icon, tools }]) => (
                        <div
                          key={category}
                          className={`${
                            tools.length > 4 ? "w-[280px]" : "w-[200px]"
                          } flex-shrink-0 space-y-6`}
                        >
                          <div
                            className={`
                            flex items-center space-x-2 border-b border-gray-100 pb-3
                            ${tools.length > 4 ? "justify-center" : ""}
                          `}
                          >
                            {icon}
                            <h3 className="font-medium text-[#002B5C] text-sm whitespace-nowrap">
                              {category}
                            </h3>
                          </div>
                          <div
                            className={`
                            ${
                              tools.length > 4
                                ? "grid grid-cols-2 gap-3"
                                : "space-y-2"
                            }
                            max-h-[400px] overflow-y-auto no-scrollbar
                          `}
                          >
                            {tools.map((tool) => (
                              <Link
                                key={tool.href}
                                href={tool.href}
                                className="group block"
                                role="menuitem"
                              >
                                <div className="p-2.5 rounded-lg hover:bg-gray-50/80 transition-all duration-200">
                                  <div className="flex items-start space-x-2.5">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#002B5C]/5 flex items-center justify-center group-hover:bg-[#002B5C]/10 transition-colors duration-200">
                                      {tool.icon ? (
                                        <tool.icon className="w-4 h-4 text-[#002B5C]" />
                                      ) : (
                                        <svg
                                          className="w-4 h-4 text-[#002B5C]"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                          />
                                        </svg>
                                      )}
                                    </div>
                                    <div className="flex-1 min-w-0 space-y-0.5">
                                      <p className="text-xs font-medium text-gray-900 group-hover:text-[#009688] transition-colors duration-200">
                                        {tool.label}
                                      </p>
                                      <p className="text-[11px] text-gray-500">
                                        {tool.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/login"
              className="px-4 py-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-md bg-[#009688] hover:bg-[#00897b] transition-colors duration-200"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            onClick={handleToggle}
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-around">
              <span
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`fixed inset-0 lg:hidden bg-[#002B5C] transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <span className="text-xl font-bold">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 px-4 py-6 space-y-6">
              {/* Primary Links */}
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-4 py-3 rounded-md ${isActiveLink(
                      link.href
                    )} hover:bg-white/10 transition-colors duration-200`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {/* All Tools Button for Mobile */}
                <Link
                  href="/tools"
                  className="flex items-center justify-between px-4 py-3 rounded-md hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-medium">All Tools</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="p-4 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/login"
                  className="block px-4 py-3 text-center rounded-md hover:bg-white/10 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block px-4 py-3 text-center rounded-md bg-[#009688] hover:bg-[#00897b] transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
