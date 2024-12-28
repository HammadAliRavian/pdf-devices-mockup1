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
import {
  JpgToPdfIcon,
  PngToPdfIcon,
  BmpToPdfIcon,
  TiffToPdfIcon,
  WordToPdfIcon,
  PowerPointToPdfIcon,
  TxtToPdfIcon,
  ExcelToPdfIcon,
} from "./components/icons/ConvertToIcons";
import {
  PdfToJpgIcon,
  PdfToPngIcon,
  PdfToBmpIcon,
  PdfToTiffIcon,
  PdfToWordIcon,
  PdfToPptIcon,
  PdfToTxtIcon,
  PdfToExcelIcon,
} from "./components/icons/ConvertFromIcons";
import { GrayscaleIcon, RepairIcon } from "./components/icons/OptimizeIcons";
import { ProtectIcon, UnlockIcon } from "./components/icons/SecurityIcons";

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
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C]/95 via-[#29323C]/95 to-[#002B5C]/95">
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:16px_16px]" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        <div className="container-wrapper relative">
          <div className="flex flex-col items-center justify-center py-12 lg:py-20">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto space-y-8 px-4"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="inline-flex items-center px-6 py-2.5 rounded-full bg-white/10 backdrop-blur-sm text-[#FFF0A5] text-sm font-medium">
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
                  <span className="hidden sm:inline">The</span> Fastest PDF
                  Tools Online
                </span>
              </motion.div>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white max-w-3xl mx-auto">
                  Transform Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF0A5] to-[#FF9800]">
                    PDF Experience
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
                  Professional tools for managing, editing, and securing your
                  PDF documents with enterprise-grade security.
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
              >
                <Link
                  href="/signup"
                  className="w-full sm:w-auto px-8 py-4 bg-[#009688] hover:bg-[#00897b] text-white font-medium rounded-lg transition-all duration-300 text-center min-w-[160px]"
                >
                  Start Free Trial
                </Link>
                <button
                  onClick={() => {
                    document.getElementById("tools-section").scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  className="w-full sm:w-auto group inline-flex items-center justify-center px-8 py-4 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 min-w-[160px]"
                >
                  <span className="font-medium text-white mr-2">
                    Explore Tools
                  </span>
                  <svg
                    className="w-5 h-5 text-white transform group-hover:translate-y-1 transition-transform duration-300"
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
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-12"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
                  {quickActions.slice(0, 3).map((action, index) => (
                    <Link
                      key={index}
                      href={`/${action.path}`}
                      className="group p-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center space-x-4"
                    >
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                        <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFF0A5]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="block font-medium text-white text-base sm:text-lg mb-0.5 truncate">
                          {action.name}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 line-clamp-1">
                          {action.description}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="pt-12 border-t border-white/10"
              >
                <p className="text-sm text-gray-400 mb-6">
                  Trusted by 10,000+ companies worldwide
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-28 bg-white/5 rounded backdrop-blur-sm"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="tools-section" className="py-12 sm:py-20 bg-[#F0F0F0]">
        <div className="container-wrapper">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              All PDF Tools
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Professional tools for all your PDF needs. Easy to use, secure,
              and reliable.
            </p>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {Object.entries(pdfTools).map(([key, category]) => (
              <div key={key} className="space-y-4 sm:space-y-6 px-4 sm:px-0">
                <h3 className="text-lg sm:text-xl font-semibold text-[#002B5C]">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {category.tools.map((tool, index) => (
                    <Link
                      key={index}
                      href={`/${tool.path}`}
                      className="group p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#002B5C]/5 flex items-center justify-center group-hover:bg-[#002B5C]/10 transition-colors duration-300">
                          {tool.icon && (
                            <div className="w-5 h-5 text-[#002B5C]">
                              <tool.icon />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-[#002B5C] group-hover:text-[#009688] transition-colors duration-300 text-sm sm:text-base mb-1">
                            {tool.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                            {tool.description}
                          </p>
                        </div>
                      </div>
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
  mergeEdit: {
    title: "Merge & Edit",
    tools: [
      {
        name: "Merge PDF",
        path: "merge-pdf",
        icon: MergeIcon,
        description: "Combine multiple PDFs into one file",
      },
      {
        name: "Rotate PDF",
        path: "rotate-pdf",
        icon: RotateIcon,
        description: "Rotate pages in your PDF file",
      },
      {
        name: "Remove Pages",
        path: "remove-pages",
        icon: DeleteIcon,
        description: "Delete unwanted pages from PDF",
      },
      {
        name: "Organize PDF",
        path: "organize-pdf",
        icon: ReorderIcon,
        description: "Rearrange pages in your PDF",
      },
    ],
  },
  optimizeExtract: {
    title: "Optimize & Extract",
    tools: [
      {
        name: "Compress PDF",
        path: "compress-pdf",
        icon: CompressIcon,
        description: "Reduce PDF file size",
      },
      {
        name: "Grayscale PDF",
        path: "grayscale-pdf",
        icon: GrayscaleIcon,
        description: "Convert PDF to black and white",
      },
      {
        name: "Extract PDF Pages",
        path: "extract-pages",
        icon: ExtractIcon,
        description: "Extract specific pages from PDF",
      },
      {
        name: "Repair PDF",
        path: "repair-pdf",
        icon: RepairIcon,
        description: "Fix corrupted PDF files",
      },
    ],
  },
  convertTo: {
    title: "Convert to PDF",
    tools: [
      {
        name: "JPG to PDF",
        path: "jpg-to-pdf",
        icon: JpgToPdfIcon,
        description: "Convert JPG images to PDF",
      },
      {
        name: "PNG to PDF",
        path: "png-to-pdf",
        icon: PngToPdfIcon,
        description: "Convert PNG images to PDF",
      },
      {
        name: "Word to PDF",
        path: "word-to-pdf",
        icon: WordToPdfIcon,
        description: "Convert Word documents to PDF",
      },
      {
        name: "PowerPoint to PDF",
        path: "ppt-to-pdf",
        icon: PowerPointToPdfIcon,
        description: "Convert PowerPoint to PDF",
      },
      {
        name: "Excel to PDF",
        path: "excel-to-pdf",
        icon: ExcelToPdfIcon,
        description: "Convert Excel sheets to PDF",
      },
      {
        name: "TXT to PDF",
        path: "txt-to-pdf",
        icon: TxtToPdfIcon,
        description: "Convert text files to PDF",
      },
      {
        name: "BMP to PDF",
        path: "bmp-to-pdf",
        icon: BmpToPdfIcon,
        description: "Convert BMP images to PDF",
      },
      {
        name: "TIFF to PDF",
        path: "tiff-to-pdf",
        icon: TiffToPdfIcon,
        description: "Convert TIFF images to PDF",
      },
    ],
  },
  convertFrom: {
    title: "Convert From PDF",
    tools: [
      {
        name: "PDF to JPG",
        path: "pdf-to-jpg",
        icon: PdfToJpgIcon,
        description: "Convert PDF to JPG images",
      },
      {
        name: "PDF to PNG",
        path: "pdf-to-png",
        icon: PdfToPngIcon,
        description: "Convert PDF to PNG images",
      },
      {
        name: "PDF to Word",
        path: "pdf-to-word",
        icon: PdfToWordIcon,
        description: "Convert PDF to Word document",
      },
      {
        name: "PDF to PowerPoint",
        path: "pdf-to-ppt",
        icon: PdfToPptIcon,
        description: "Convert PDF to PowerPoint",
      },
      {
        name: "PDF to Excel",
        path: "pdf-to-excel",
        icon: PdfToExcelIcon,
        description: "Convert PDF to Excel sheet",
      },
      {
        name: "PDF to TXT",
        path: "pdf-to-txt",
        icon: PdfToTxtIcon,
        description: "Convert PDF to text file",
      },
      {
        name: "PDF to BMP",
        path: "pdf-to-bmp",
        icon: PdfToBmpIcon,
        description: "Convert PDF to BMP images",
      },
      {
        name: "PDF to TIFF",
        path: "pdf-to-tiff",
        icon: PdfToTiffIcon,
        description: "Convert PDF to TIFF images",
      },
    ],
  },
  security: {
    title: "PDF Security",
    tools: [
      {
        name: "Protect PDF",
        path: "protect-pdf",
        icon: ProtectIcon,
        description: "Add password to PDF file",
      },
      {
        name: "Unlock PDF",
        path: "unlock-pdf",
        icon: UnlockIcon,
        description: "Remove PDF password protection",
      },
    ],
  },
};
