"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MergePdfIcon } from "@/public/icons/MergeEditIcons";

export default function MergePDF() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

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

    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      alert("Please select at least 2 PDF files to merge");
      return;
    }
    setIsProcessing(true);
    // Add your merge logic here
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002B5C]/95 via-[#29323C]/95 to-[#002B5C]/95">
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:16px_16px]" />
          <div className="absolute inset-0 backdrop-blur-[1px]" />
        </div>

        <div className="container-wrapper relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center group">
                <MergePdfIcon className="w-10 h-10 text-[#FFF0A5] group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 px-4 sm:px-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Merge PDF Files
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Combine multiple PDF documents into a single file, easily and
                securely.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            {/* Upload Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8"
            >
              <div
                className={`relative border-2 border-dashed rounded-xl transition-all duration-300 ${
                  dragActive
                    ? "border-[#009688] bg-[#009688]/5 scale-[0.99]"
                    : "border-gray-300 hover:border-[#009688]/50"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className="p-6 sm:p-8">
                  <input
                    type="file"
                    multiple
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="space-y-6">
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <div className="w-16 h-16 mx-auto rounded-xl bg-[#009688]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <svg
                            className="w-8 h-8 text-[#009688]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-[#002B5C]">
                          Drop your PDF files here
                        </h3>
                        <p className="text-gray-500">
                          or click to browse from your computer
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Maximum file size: 50MB</span>
                      </div>
                      <div className="hidden sm:block text-gray-300">•</div>
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <span>Supported format: PDF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* File List */}
            {files.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-[#002B5C]">
                    Selected Files ({files.length})
                  </h2>
                  <button
                    onClick={() => setFiles([])}
                    className="text-sm text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-4">
                  {files.map((file, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-lg bg-[#002B5C]/5 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-[#002B5C]"
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
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-sm font-medium text-[#002B5C] truncate">
                              {file.name}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-end pt-6">
                  <button
                    onClick={handleMerge}
                    disabled={isProcessing || files.length < 2}
                    className={`inline-flex items-center px-6 py-3 ${
                      isProcessing || files.length < 2
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-[#009688] hover:bg-[#00897b]"
                    } text-white font-medium rounded-xl transition-colors duration-300`}
                  >
                    {isProcessing ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span>Merge Files</span>
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
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      {/* Why Use Our PDF Merger Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-100/40 bg-[length:16px_16px] opacity-40" />

        <div className="container-wrapper relative">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-semibold text-[#009688] tracking-wider uppercase mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#002B5C]">
                The Most Advanced PDF Merger
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-4 text-lg">
                Experience enterprise-grade PDF merging capabilities with our
                powerful yet user-friendly tools.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
              {[
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
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
                  title: "Lightning Fast Processing",
                  description:
                    "Advanced algorithms ensure rapid processing of your PDF files, regardless of size or complexity.",
                  color: "text-blue-600",
                  bgColor: "bg-blue-50",
                  hoverBgColor: "hover:bg-blue-100/50",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
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
                  title: "Bank-Level Security",
                  description:
                    "Your files are protected with 256-bit SSL encryption and automatically deleted after processing.",
                  color: "text-green-600",
                  bgColor: "bg-green-50",
                  hoverBgColor: "hover:bg-green-100/50",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  ),
                  title: "Perfect Quality",
                  description:
                    "Maintains original PDF quality, including text sharpness, images, and formatting.",
                  color: "text-purple-600",
                  bgColor: "bg-purple-50",
                  hoverBgColor: "hover:bg-purple-100/50",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  ),
                  title: "Smart Interface",
                  description:
                    "Intuitive drag-and-drop interface with real-time preview and reordering capabilities.",
                  color: "text-yellow-600",
                  bgColor: "bg-yellow-50",
                  hoverBgColor: "hover:bg-yellow-100/50",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                  title: "Cloud Integration",
                  description:
                    "Seamlessly integrate with popular cloud storage services for easier file management.",
                  color: "text-pink-600",
                  bgColor: "bg-pink-50",
                  hoverBgColor: "hover:bg-pink-100/50",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  title: "Always Free",
                  description:
                    "Core features are free forever, with optional premium features for power users.",
                  color: "text-teal-600",
                  bgColor: "bg-teal-50",
                  hoverBgColor: "hover:bg-teal-100/50",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div
                    className={`p-8 rounded-2xl ${feature.bgColor} ${feature.hoverBgColor} transition-all duration-300 hover:shadow-lg border border-transparent hover:border-gray-100`}
                  >
                    <div className="flex items-start space-x-5">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className={`${feature.color}`}>{feature.icon}</div>
                      </div>
                      <div>
                        <h3
                          className={`font-semibold mb-3 text-xl ${feature.color}`}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Metrics */}
            <div className="mt-20 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#002B5C] to-[#1a4674] rounded-2xl" />
              <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px] rounded-2xl" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12"
              >
                {[
                  { number: "10M+", label: "Active Users" },
                  { number: "50M+", label: "PDFs Processed" },
                  { number: "4.9/5", label: "User Rating" },
                  { number: "24/7", label: "Expert Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#FFF0A5] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      ;{/* How to Use PDF Merge Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#002B5C] mb-4">
                How to Merge PDF Files
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-4">
                Follow these simple steps to combine your PDF files quickly and
                easily.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6">
              {[
                {
                  step: "1",
                  title: "Upload Your Files",
                  description:
                    "Drag and drop your PDF files into the upload area or click to browse from your computer.",
                  icon: (
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
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Arrange Order",
                  description:
                    "Organize your PDF files in the desired order by dragging and dropping them into position.",
                  icon: (
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
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  ),
                },
                {
                  step: "3",
                  title: "Merge & Download",
                  description:
                    "Click the 'Merge Files' button and download your combined PDF document.",
                  icon: (
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
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#009688]/10 flex items-center justify-center">
                        <span className="text-lg font-semibold text-[#009688]">
                          {step.step}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-[#009688]/10 flex items-center justify-center">
                            <div className="text-[#009688]">{step.icon}</div>
                          </div>
                          <h3 className="text-lg font-semibold text-[#002B5C]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < 2 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                      <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-gray-200" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Additional Tips */}
            <div className="mt-16 px-4 sm:px-6">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#002B5C] mb-6">
                  Pro Tips for Better Results
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      tip: "Organize files before uploading",
                      description:
                        "Name your files properly to easily identify them during the merge process.",
                    },
                    {
                      tip: "Check file sizes",
                      description:
                        "Ensure each file is under 50MB for optimal processing speed.",
                    },
                    {
                      tip: "Preview before merging",
                      description:
                        "Review the order of your files to ensure the correct sequence.",
                    },
                  ].map((tip, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#009688]/10 flex items-center justify-center">
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
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-[#002B5C] mb-1">
                          {tip.tip}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {tip.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </main>
  );
}
