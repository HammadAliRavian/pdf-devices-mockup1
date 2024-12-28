"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

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
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            aria-label="PDFTools Home"
          >
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              PDFTools
            </span>
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
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleToolsToggle}
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
              {isToolsOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="py-2 divide-y divide-gray-100" role="menu">
                    {Object.entries(toolsGroups).map(([category, tools]) => (
                      <div key={category} className="px-2 py-2">
                        <p className="px-3 py-2 text-sm font-medium text-gray-500">
                          {category}
                        </p>
                        {tools.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200"
                            role="menuitem"
                            onClick={() => setIsToolsOpen(false)}
                          >
                            <span className="block text-sm font-medium text-gray-900">
                              {tool.label}
                            </span>
                            <span className="block text-xs text-gray-500">
                              {tool.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
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
              </div>

              {/* Mobile Tools Section */}
              <div className="space-y-2">
                <p className="px-4 text-sm font-medium text-gray-400">Tools</p>
                {Object.entries(toolsGroups).map(([category, tools]) => (
                  <div key={category} className="space-y-1">
                    {tools.map((tool) => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="block px-4 py-3 rounded-md hover:bg-white/10 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="block font-medium">{tool.label}</span>
                        <span className="block text-sm text-gray-400">
                          {tool.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                ))}
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

// Tools groups data
const toolsGroups = {
  "Popular Tools": [
    {
      label: "Merge PDF",
      href: "/merge-pdf",
      description: "Combine multiple PDFs into one",
    },
    {
      label: "Split PDF",
      href: "/split-pdf",
      description: "Separate PDF into multiple files",
    },
  ],
  "Convert PDF": [
    {
      label: "PDF to Word",
      href: "/pdf-to-word",
      description: "Convert PDF to Word document",
    },
    {
      label: "PDF to Excel",
      href: "/pdf-to-excel",
      description: "Convert PDF to Excel spreadsheet",
    },
  ],
};

export default Navbar;
