"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// Basic action icons
import {
  MergeIcon,
  SplitIcon,
  CompressIcon,
  ConvertIcon,
} from "@/public/icons";

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      href={`/${action.path}`}
                      className="group relative overflow-hidden p-6 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                    >
                      {/* Background Gradient Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative flex flex-col items-center space-y-4">
                        {/* Icon Container */}
                        <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-7 h-7 text-[#FFF0A5]">
                            <action.icon className="w-full h-full" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="text-center space-y-2">
                          <h3 className="font-semibold text-white text-lg group-hover:text-[#FFF0A5] transition-colors duration-200">
                            {action.name}
                          </h3>
                          <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200 line-clamp-2">
                            {action.description}
                          </p>
                        </div>

                        {/* Action Indicator */}
                        <div className="flex items-center justify-center space-x-2 text-[#FFF0A5] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <span className="text-sm font-medium">
                            Get Started
                          </span>
                          <svg
                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Hover Border Effect */}
                      <div className="absolute inset-0 border border-white/10 rounded-xl group-hover:border-[#FFF0A5]/30 transition-colors duration-300" />
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

      {/* Tools Section */}
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
                      <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-3">
                        {/* Icon Container */}
                        <div className="w-12 h-12 rounded-lg bg-[#002B5C]/5 flex items-center justify-center group-hover:bg-[#002B5C]/10 transition-colors duration-300">
                          {tool.icon && (
                            <span className="block w-8 h-8">
                              {React.createElement(tool.icon, {
                                className: "w-full h-full text-[#002B5C]",
                                width: "12 md:32",
                                height: "12md:32",
                                "aria-hidden": "true",
                              })}
                            </span>
                          )}
                        </div>
                        {/* Content */}
                        <div className="flex-1 min-w-0 text-center sm:text-left">
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

      {/* Why Choose PDF Devices? */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#009688] tracking-wider uppercase mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002B5C]">
              Why Choose PDF Devices?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Experience the most comprehensive PDF solution suite designed for
              modern professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-6">
            {/* Features Column */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#002B5C] mb-8">
                Professional Features
              </h3>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#009688]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg
                        className="w-6 h-6 text-[#009688]"
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
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-[#002B5C] mb-2 group-hover:text-[#009688] transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Security & Integration */}
            <div className="space-y-8">
              {/* Security Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-xl bg-gradient-to-br from-[#002B5C] to-[#1a4674] relative overflow-hidden group"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 bg-grid-white/[0.1] bg-[length:16px_16px]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                    <svg
                      className="w-5 h-5 mr-2 text-[#FFF0A5]"
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
                    Enterprise-Grade Security
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {securityFeatures.map((feature, index) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        key={index}
                        className="flex items-center space-x-3 text-white/90 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                          <svg
                            className="w-4 h-4 text-[#FFF0A5]"
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
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Integration Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#009688]/20 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-[#002B5C] mb-6 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#009688]"
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
                  Seamless Integration
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {integrationFeatures.map((feature, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      className="flex items-center space-x-3 text-gray-600 group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#009688]/10 flex items-center justify-center group-hover:bg-[#009688]/20 transition-colors">
                        <svg
                          className="w-4 h-4 text-[#009688]"
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
                      </div>
                      <span className="text-sm font-medium group-hover:text-[#002B5C] transition-colors">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-4 sm:px-6">
            {/* Content Column */}
            <div className="space-y-8">
              <div>
                <span className="text-sm font-semibold text-[#009688] tracking-wider uppercase mb-4 block">
                  About PDFDevices
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#002B5C]">
                  Transforming Document Management Since 2020
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  PDFDevices was founded with a clear mission: to make PDF
                  management accessible, efficient, and secure for everyone. Our
                  platform combines powerful features with an intuitive
                  interface, serving millions of users worldwide.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-2xl font-bold text-[#009688] mb-1">
                    10M+
                  </div>
                  <div className="text-sm text-gray-600">Active Users</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="text-2xl font-bold text-[#009688] mb-1">
                    50M+
                  </div>
                  <div className="text-sm text-gray-600">PDFs Processed</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-6 bg-white rounded-xl shadow-sm sm:col-span-1 col-span-2"
                >
                  <div className="text-2xl font-bold text-[#009688] mb-1">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </motion.div>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#009688]/10 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-[#009688]"
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
                  </div>
                  <div>
                    <h4 className="font-medium text-[#002B5C] mb-1">
                      Enterprise-Ready Solutions
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Scalable infrastructure supporting businesses of all sizes
                      with enterprise-grade security.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#009688]/10 flex items-center justify-center mt-1">
                    <svg
                      className="w-4 h-4 text-[#009688]"
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
                  </div>
                  <div>
                    <h4 className="font-medium text-[#002B5C] mb-1">
                      Continuous Innovation
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Regular updates and new features to meet evolving document
                      management needs.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Image Column */}
            <div className="relative lg:h-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative h-full min-h-[400px] rounded-2xl overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C] to-[#1a4674]">
                  <div className="absolute inset-0 opacity-20 bg-grid-white/[0.1] bg-[length:16px_16px]" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white space-y-4">
                    <div className="w-20 h-20 mx-auto mb-6">
                      <svg
                        viewBox="0 0 40 40"
                        fill="none"
                        className="w-full h-full"
                      >
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
                    <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                    <p className="text-white/90 max-w-md mx-auto">
                      To provide the most comprehensive and user-friendly PDF
                      solutions, making document management effortless for
                      everyone.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#009688] tracking-wider uppercase mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002B5C]">
              Trusted by Professionals Worldwide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              See what our users have to say about their experience with
              PDFDevices.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
            {[
              {
                name: "Dalma",
                role: "CEO",
                company: "PDFDevices",
                content:
                  "PDFDevices has streamlined our document workflow significantly. The batch processing feature saves us hours every week.",
                rating: 5,
              },
              {
                name: "Hammad Ali",
                role: "Designer",
                company: "PDFDevices",
                content:
                  "The security features are top-notch. Being able to add password protection and digital signatures has made document sharing much safer.",
                rating: 5,
              },
              {
                name: "Emily Rodriguez",
                role: "Operations Manager",
                company: "Global Solutions",
                content:
                  "Converting files between different formats has never been easier. The interface is intuitive and the results are always perfect.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 relative group hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4">
                  <div className="w-8 h-8 rounded-full bg-[#009688] flex items-center justify-center shadow-lg">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#FFC107]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed italic min-h-[120px]">
                    "{testimonial.content}"
                  </p>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-[#009688]/20 rounded-full mx-auto" />

                  {/* Author */}
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#002B5C]/5 mb-3">
                      <span className="text-[#002B5C] font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-semibold text-[#002B5C] group-hover:text-[#009688] transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.role} • {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Metrics */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-[#002B5C] to-[#1a4674] rounded-2xl overflow-hidden">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 relative">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
                {[
                  { label: "Customer Satisfaction", value: "98%" },
                  { label: "Enterprise Clients", value: "500+" },
                  { label: "Countries Served", value: "150+" },
                  { label: "Industry Awards", value: "25+" },
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative text-center"
                  >
                    <div className="text-3xl font-bold text-[#FFF0A5] mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-300">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 overflow-hidden">
        <div className="container-wrapper">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[#009688] tracking-wider uppercase mb-4 block">
              Flexible Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002B5C]">
              Choose Your Perfect Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Select the plan that best suits your needs. All plans include our
              core features with different levels of capabilities.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-6">
            {/* Free Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-4">
                  Free
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#002B5C]">$0</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  Perfect for individuals who need quick PDF solutions.
                </p>
                <Link
                  href="/signup"
                  className="block text-center py-3 px-6 rounded-lg bg-gray-100 hover:bg-gray-200 text-[#002B5C] font-medium transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
              <div className="p-8 bg-gray-50 rounded-b-2xl">
                <ul className="space-y-4">
                  {[
                    "Basic PDF operations",
                    "Up to 5 files per day",
                    "File size limit: 10MB",
                    "Basic support",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-[#009688] mr-3"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Pro Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-[#009688] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-4">
                  Pro
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#002B5C]">
                    $9.99
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  For professionals who need advanced features.
                </p>
                <Link
                  href="/signup"
                  className="block text-center py-3 px-6 rounded-lg bg-[#009688] hover:bg-[#00897b] text-white font-medium transition-colors duration-300"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="p-8 bg-gray-50 rounded-b-2xl">
                <ul className="space-y-4">
                  {[
                    "All Free features",
                    "Unlimited files",
                    "File size limit: 100MB",
                    "Priority support",
                    "Advanced PDF editing",
                    "Batch processing",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-[#009688] mr-3"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-4">
                  Enterprise
                </h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold text-[#002B5C]">
                    Custom
                  </span>
                </div>
                <p className="text-gray-600 mb-6">
                  For organizations that need complete control.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-3 px-6 rounded-lg bg-[#002B5C] hover:bg-[#1a4674] text-white font-medium transition-colors duration-300"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="p-8 bg-gray-50 rounded-b-2xl">
                <ul className="space-y-4">
                  {[
                    "All Pro features",
                    "Unlimited everything",
                    "Custom integrations",
                    "24/7 premium support",
                    "SLA guarantees",
                    "Custom deployment",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-[#009688] mr-3"
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#002B5C] mb-4">
                Frequently Asked Questions
              </h3>
              <p className="text-gray-600">
                Find answers to common questions about our pricing and features.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 px-4 sm:px-6">
              {[
                {
                  q: "Can I change plans anytime?",
                  a: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, we offer a 14-day free trial on our Pro plan with full access to all features.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.",
                },
                {
                  q: "Do you offer refunds?",
                  a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm"
                >
                  <h4 className="font-semibold text-[#002B5C] mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C] via-[#1a4674] to-[#002B5C]">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002B5C] via-transparent to-transparent" />
        </div>

        <div className="container-wrapper relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 sm:px-6">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white space-y-6"
            >
              <span className="text-sm font-semibold text-[#FFF0A5] tracking-wider uppercase">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Transform Your Document Workflow with PDFDevices
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Join millions of users who trust PDFDevices for their PDF
                management needs. Experience the most comprehensive suite of PDF
                tools.
              </p>

              {/* Feature List */}
              <div className="space-y-4 py-6">
                {[
                  "No installation required",
                  "Process files securely",
                  "Free basic features",
                  "24/7 customer support",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#FFF0A5]/20 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-[#FFF0A5]"
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
                    </div>
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/signup"
                  className="inline-flex justify-center items-center px-8 py-4 bg-[#009688] hover:bg-[#00897b] text-white font-medium rounded-xl transition-all duration-300 text-center"
                >
                  Start Free Trial
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex justify-center items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl backdrop-blur-sm transition-all duration-300 text-center"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>

            {/* Stats/Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "10M+", label: "Active Users" },
                { number: "50M+", label: "PDFs Processed" },
                { number: "99.9%", label: "Uptime" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/[0.15] transition-colors duration-300"
                >
                  <div className="text-3xl font-bold text-[#FFF0A5] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 text-[#FFF0A5] mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="text-sm text-gray-300">
                Trusted by 10,000+ companies worldwide
              </span>
            </motion.div>
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
    // icon: ReorderIcon,
  },
  {
    title: "Convert Files",
    description: "Convert PDFs to and from various file formats with ease.",
    // icon: ConvertIcon,
  },
  {
    title: "Secure Documents",
    description: "Protect your PDFs with encryption and password protection.",
    // icon: ProtectPdfIcon,
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
    description: "Combine multiple PDFs",
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
        icon: MergePdfIcon,
        description: "Combine multiple PDFs into one file",
      },
      {
        name: "Rotate PDF",
        path: "rotate-pdf",
        icon: RotatePdfIcon,
        description: "Rotate pages in your PDF file",
      },
      {
        name: "Remove Pages",
        path: "remove-pages",
        icon: DeletePdfIcon,
        description: "Delete unwanted pages from PDF",
      },
      {
        name: "Organize PDF",
        path: "organize-pdf",
        icon: ReorderPdfIcon,
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
        icon: CompressPdfIcon,
        description: "Reduce PDF file size",
      },
      {
        name: "Grayscale PDF",
        path: "grayscale-pdf",
        icon: GrayscalePdfIcon,
        description: "Convert to black and white",
      },
      {
        name: "Extract Pages",
        path: "extract-pages",
        icon: ExtractPdfIcon,
        description: "Extract specific pages",
      },
      {
        name: "Repair PDF",
        path: "repair-pdf",
        icon: RepairPdfIcon,
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
      {
        name: "Word to PDF",
        path: "word-to-pdf",
        icon: WordToPdfIcon,
        description: "Convert Word documents to PDF",
      },
      {
        name: "PowerPoint to PDF",
        path: "ppt-to-pdf",
        icon: PptToPdfIcon,
        description: "Convert PowerPoint to PDF",
      },
      {
        name: "TXT to PDF",
        path: "txt-to-pdf",
        icon: TxtToPdfIcon,
        description: "Convert text files to PDF",
      },
      {
        name: "Excel to PDF",
        path: "excel-to-pdf",
        icon: ExcelToPdfIcon,
        description: "Convert Excel sheets to PDF",
      },
    ],
  },
  convertFrom: {
    title: "Convert from PDF",
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
        name: "PDF to TXT",
        path: "pdf-to-txt",
        icon: PdfToTxtIcon,
        description: "Convert PDF to text file",
      },
      {
        name: "PDF to ZIP",
        path: "pdf-to-zip",
        icon: PdfToZipIcon,
        description: "Convert PDF to ZIP file",
      },
    ],
  },
  security: {
    title: "PDF Security",
    tools: [
      {
        name: "Protect PDF",
        path: "protect-pdf",
        icon: ProtectPdfIcon,
        description: "Add password to PDF file",
      },
      {
        name: "Unlock PDF",
        path: "unlock-pdf",
        icon: UnlockPdfIcon,
        description: "Remove PDF password",
      },
    ],
  },
};
