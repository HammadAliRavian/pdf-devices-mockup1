"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import {
  MergeIcon,
  SplitIcon,
  CompressIcon,
  ConvertIcon,
} from "./components/icons";
import {
  RotateIcon,
  ReorderIcon,
  DeleteIcon,
  ExtractIcon,
} from "./components/icons/OrganizeIcons";
import {
  PasswordIcon,
  SignIcon,
  WatermarkIcon,
  EncryptIcon,
} from "./components/icons/ProtectIcons";
import {
  WordIcon,
  ExcelIcon,
  PowerPointIcon,
  ImageIcon,
} from "./components/icons/ConvertIcons";

export default function Home() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === "application/pdf") {
        setFile(file);
      }
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type === "application/pdf") {
        setFile(file);
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C]/95 via-[#29323C]/95 to-[#002B5C]/95">
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:16px_16px]" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        <div className="container-wrapper relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="inline-block"
                >
                  <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-[#FFF0A5] text-sm font-medium">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Fastest PDF Tools Online
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
                >
                  Transform Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0A5] to-[#FF9800]">
                    PDF Experience
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-lg text-gray-300 max-w-xl"
                >
                  Professional tools for managing, editing, and securing your
                  PDF documents with enterprise-grade security.
                </motion.p>

                {/* Quick Actions */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* Quick Actions Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {quickActions.slice(0, 2).map((action, index) => (
                      <Link
                        key={index}
                        href={`/${action.path}`}
                        className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center space-x-3"
                      >
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5">
                          <action.icon />
                        </div>
                        <div className="flex-1">
                          <span className="block font-medium text-white">
                            {action.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {action.description}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* All Tools Button */}
                  <div className="mt-6 text-center sm:text-left">
                    <button
                      onClick={() => {
                        document
                          .getElementById("tools-section")
                          .scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className="inline-flex items-center px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 group"
                    >
                      <span className="font-medium text-white">
                        View All Tools
                      </span>
                      <svg
                        className="w-5 h-5 ml-2 text-white transform group-hover:translate-y-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-8 border-t border-white/10"
              >
                <p className="text-sm text-gray-400 mb-4">
                  Trusted by 10,000+ companies worldwide
                </p>
                <div className="flex flex-wrap gap-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-24 bg-white/5 rounded backdrop-blur-sm"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Upload Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                <div
                  className={`relative rounded-xl border-2 border-dashed transition-all duration-200 ${
                    dragActive
                      ? "border-[#FFF0A5] bg-white/10"
                      : "border-white/20 hover:border-white/40"
                  } p-8`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="text-center">
                    <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-white/5 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-[#FFF0A5]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Upload your PDF file
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Drop your file here, or{" "}
                      <span className="text-[#FFF0A5] hover:text-[#FF9800] cursor-pointer">
                        browse
                      </span>
                    </p>
                    <p className="text-xs text-gray-500">Max file size: 50MB</p>
                  </div>
                </div>

                {file && (
                  <div className="mt-4 p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <svg
                          className="w-8 h-8 text-[#FFF0A5]"
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
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {file.name}
                          </p>
                          <p className="text-xs text-gray-400">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setFile(null)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors duration-200"
                      >
                        <svg
                          className="w-5 h-5 text-gray-400 hover:text-white"
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
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="tools-section" className="py-20 bg-[#F0F0F0]">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">All PDF Tools</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional tools for all your PDF needs. Easy to use, secure,
              and reliable.
            </p>
          </div>

          <div className="space-y-12">
            {Object.entries(pdfTools).map(([key, category]) => (
              <div key={key} className="space-y-6">
                <h3 className="text-xl font-semibold text-[#002B5C]">
                  {category.title}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.tools.map((tool, index) => (
                    <Link
                      key={index}
                      href={`/${tool.path}`}
                      className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col space-y-4"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-lg bg-[#002B5C]/5 flex items-center justify-center group-hover:bg-[#002B5C]/10 transition-colors duration-300">
                          {tool.icon ? (
                            <tool.icon />
                          ) : (
                            <svg
                              className="w-5 h-5 text-[#002B5C]"
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
                        <h4 className="font-medium text-[#002B5C] group-hover:text-[#009688] transition-colors duration-300">
                          {tool.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        {tool.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* After Features Section */}
      <section className="py-20 bg-white">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose PDF Devices?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the most comprehensive PDF solution suite designed for
              modern professionals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F0F0F0] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Enterprise-Grade Security
              </h3>
              <p className="text-gray-600 mb-6">
                Bank-level encryption and secure document handling ensure your
                sensitive information stays protected.
              </p>
              <ul className="space-y-3">
                {securityFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-[#009688]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F0F0F0] p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">
                Seamless Integration
              </h3>
              <p className="text-gray-600 mb-6">
                Works perfectly with your existing workflow and favorite
                applications.
              </p>
              <ul className="space-y-3">
                {integrationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5 text-[#009688]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#002B5C] to-[#29323C] text-white">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your PDF Experience?
          </h2>
          <p className="text-lg text-[#F0F0F0] mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied users who have already upgraded their
            PDF workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="btn-primary bg-[#009688]">
              Start Free Trial
            </Link>
            <Link href="/demo" className="btn-primary bg-transparent border-2">
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Edit PDFs",
    description:
      "Easily modify text, images, and layouts in your PDF documents.",
    icon: "edit-document",
  },
  {
    title: "Convert Files",
    description: "Convert PDFs to and from various file formats with ease.",
    icon: "convert-file",
  },
  {
    title: "Secure Documents",
    description: "Protect your PDFs with encryption and password protection.",
    icon: "secure-file",
  },
];

const securityFeatures = [
  "256-bit AES Encryption",
  "Secure Cloud Storage",
  "Password Protection",
  "Digital Signatures",
];

const integrationFeatures = [
  "Cloud Storage Services",
  "Email Platforms",
  "CRM Systems",
  "Document Management",
];

const quickActions = [
  {
    name: "Merge PDF",
    path: "merge-pdf",
    icon: MergeIcon,
    description: "Combine multiple PDFs into one",
  },
  {
    name: "Split PDF",
    path: "split-pdf",
    icon: SplitIcon,
    description: "Separate PDF pages",
  },
  {
    name: "Compress PDF",
    path: "compress-pdf",
    icon: CompressIcon,
    description: "Reduce PDF file size",
  },
  {
    name: "Convert PDF",
    path: "convert-pdf",
    icon: ConvertIcon,
    description: "Change PDF format",
  },
];

const pdfTools = {
  popular: {
    title: "Popular Tools",
    tools: [
      {
        name: "Merge PDF",
        icon: MergeIcon,
        path: "merge-pdf",
        description: "Combine multiple PDFs into one file",
      },
      {
        name: "Split PDF",
        icon: SplitIcon,
        path: "split-pdf",
        description: "Separate one PDF into multiple files",
      },
      {
        name: "Compress PDF",
        icon: CompressIcon,
        path: "compress-pdf",
        description: "Reduce PDF file size without losing quality",
      },
      {
        name: "Convert PDF",
        icon: ConvertIcon,
        path: "convert-pdf",
        description: "Convert PDFs to and from other formats",
      },
    ],
  },
  organize: {
    title: "Organize PDF",
    tools: [
      {
        name: "Rotate PDF",
        path: "rotate-pdf",
        icon: RotateIcon,
        description: "Rotate pages in your PDF file",
      },
      {
        name: "Reorder Pages",
        path: "reorder-pdf",
        icon: ReorderIcon,
        description: "Change the order of pages in PDF",
      },
      {
        name: "Delete Pages",
        path: "delete-pages",
        icon: DeleteIcon,
        description: "Remove pages from your PDF",
      },
      {
        name: "Extract Pages",
        path: "extract-pages",
        icon: ExtractIcon,
        description: "Extract specific pages from PDF",
      },
    ],
  },
  protect: {
    title: "Protect & Sign",
    tools: [
      {
        name: "Password Protect",
        path: "protect-pdf",
        icon: PasswordIcon,
        description: "Secure PDF with a password",
      },
      {
        name: "Sign PDF",
        path: "sign-pdf",
        icon: SignIcon,
        description: "Add digital signatures to PDF",
      },
      {
        name: "Watermark",
        path: "watermark-pdf",
        icon: WatermarkIcon,
        description: "Add watermark to PDF pages",
      },
      {
        name: "Encrypt PDF",
        path: "encrypt-pdf",
        icon: EncryptIcon,
        description: "Encrypt PDF with advanced security",
      },
    ],
  },
  convert: {
    title: "Convert PDF",
    tools: [
      {
        name: "PDF to Word",
        path: "pdf-to-word",
        icon: WordIcon,
        description: "Convert PDF to Word document",
      },
      {
        name: "PDF to Excel",
        path: "pdf-to-excel",
        icon: ExcelIcon,
        description: "Convert PDF to Excel spreadsheet",
      },
      {
        name: "PDF to PPT",
        path: "pdf-to-ppt",
        icon: PowerPointIcon,
        description: "Convert PDF to PowerPoint",
      },
      {
        name: "PDF to Images",
        path: "pdf-to-images",
        icon: ImageIcon,
        description: "Convert PDF pages to images",
      },
    ],
  },
};
