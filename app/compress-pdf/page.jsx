"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CompressPdfIcon } from "@/public/icons/OptimizeIcons";

export default function CompressPDF() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState("recommended");

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

  const handleCompress = async () => {
    if (files.length === 0) {
      alert("Please select at least one PDF file to compress");
      return;
    }
    setIsProcessing(true);
    // Add your compression logic here
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  const compressionOptions = [
    {
      value: "light",
      label: "Light Compression",
      description: "Best quality, minimal size reduction",
      reduction: "20-30%",
    },
    {
      value: "recommended",
      label: "Recommended",
      description: "Optimal balance of quality and size",
      reduction: "50-70%",
    },
    {
      value: "extreme",
      label: "Maximum Compression",
      description: "Smallest file size possible",
      reduction: "70-90%",
    },
  ];

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
                <CompressPdfIcon className="w-10 h-10 text-[#FFF0A5] group-hover:scale-110 transition-transform duration-300" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6 px-4 sm:px-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Compress PDF Files
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                Reduce PDF file size while maintaining quality. Fast, secure,
                and free to use.
              </p>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 px-4 sm:px-6"
            >
              {[
                {
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  title: "Up to 90% Reduction",
                  description: "Significantly reduce file size",
                },
                {
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Quality Control",
                  description: "Maintain document quality",
                },
                {
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
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  ),
                  title: "Secure Process",
                  description: "Files deleted after 24h",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative p-6 rounded-xl bg-white/10 backdrop-blur-sm group hover:bg-white/[0.15] transition-all duration-300"
                >
                  <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#FFF0A5]/20 flex items-center justify-center text-[#FFF0A5] group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-wrapper">
          <div className="max-w-4xl mx-auto">
            {/* Compression Options */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-sm p-6 sm:p-8 mb-8"
            >
              <h2 className="text-xl font-semibold text-[#002B5C] mb-6">
                Choose Compression Level
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {compressionOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setCompressionLevel(option.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      compressionLevel === option.value
                        ? "border-[#009688] bg-[#009688]/5"
                        : "border-gray-200 hover:border-[#009688]/50"
                    }`}
                  >
                    <div className="font-medium text-[#002B5C] mb-1">
                      {option.label}
                    </div>
                    <div className="text-sm text-gray-500 mb-2">
                      {option.description}
                    </div>
                    <div className="text-xs font-medium text-[#009688]">
                      Reduces size by {option.reduction}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Upload Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                        <span>Maximum file size: 100MB</span>
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
                    onClick={handleCompress}
                    disabled={isProcessing || files.length === 0}
                    className={`inline-flex items-center px-6 py-3 ${
                      isProcessing || files.length === 0
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
                        <span>Compress Files</span>
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

      {/* How to Use Section */}
      <section className="py-16 bg-white">
        <div className="container-wrapper">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="text-sm font-semibold text-[#009688] tracking-wider uppercase mb-4 block">
                Simple Steps
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#002B5C] mb-4">
                How to Compress PDF Files
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-4">
                Follow these easy steps to reduce your PDF file size while
                maintaining quality.
              </p>
            </motion.div>

            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-6 relative">
              {[
                {
                  step: "1",
                  title: "Choose Compression Level",
                  description:
                    "Select your preferred compression level based on your needs - light, recommended, or maximum compression.",
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
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Upload Your Files",
                  description:
                    "Drag and drop your PDF files into the upload area or use the file browser to select them.",
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
                  step: "3",
                  title: "Download Compressed PDF",
                  description:
                    "Click the compress button and download your optimized PDF file with reduced size.",
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
                  <div className="bg-gray-50 rounded-2xl p-8 h-full group hover:bg-gray-100/80 transition-colors duration-300">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-8">
                      <div className="w-8 h-8 rounded-full bg-[#009688] text-white flex items-center justify-center font-semibold">
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pt-4">
                      <div className="mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#009688]/10 flex items-center justify-center text-[#009688] group-hover:scale-110 transition-transform duration-300">
                          {step.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#002B5C] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                      <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-gray-200" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Pro Tips */}
            <div className="mt-16 px-4 sm:px-6">
              <div className="bg-gradient-to-br from-[#002B5C] to-[#1a4674] rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:16px_16px]" />

                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-8">
                    Pro Tips for Better Compression
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                      {
                        tip: "Optimize Images First",
                        description:
                          "Compress images before adding them to your PDF for better results.",
                      },
                      {
                        tip: "Choose Right Level",
                        description:
                          "Select compression level based on your file's content type.",
                      },
                      {
                        tip: "Check Quality",
                        description:
                          "Preview the compressed PDF before replacing the original.",
                      },
                    ].map((tip, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-[#FFF0A5]"
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
                          <h4 className="text-white font-medium mb-2">
                            {tip.tip}
                          </h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
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
        </div>
      </section>

      {/* Why Choose Our PDF Compressor Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
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
                The Most Advanced PDF Compressor
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto px-4 text-lg">
                Experience enterprise-grade PDF compression with our powerful
                yet user-friendly tools.
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                  title: "Smart Compression",
                  description:
                    "Our AI-powered algorithm analyzes your PDF content to apply the optimal compression method for each element.",
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  ),
                  title: "Military-Grade Security",
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  ),
                  title: "Batch Processing",
                  description:
                    "Compress multiple PDF files simultaneously while maintaining consistent quality across all documents.",
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
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  ),
                  title: "Quality Preview",
                  description:
                    "Preview your compressed PDF before downloading to ensure it meets your quality standards.",
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  ),
                  title: "Lightning Fast",
                  description:
                    "Advanced compression technology ensures rapid processing without compromising quality.",
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                  title: "Cross-Platform",
                  description:
                    "Works seamlessly across all devices and browsers with no software installation required.",
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
                  { number: "50M+", label: "Files Compressed" },
                  { number: "90%", label: "Size Reduction" },
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
    </main>
  );
}
