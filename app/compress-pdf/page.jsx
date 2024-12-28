"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CompressPDF() {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [compressionLevel, setCompressionLevel] = useState("recommended"); // low, recommended, high

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

    const droppedFile = Array.from(e.dataTransfer.files).find(
      (file) => file.type === "application/pdf"
    );

    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
      }
    }
  };

  const handleCompress = async () => {
    if (!file) return;

    setIsProcessing(true);
    // Handle PDF compression logic here
    console.log("Compressing file:", file, "Level:", compressionLevel);
    setTimeout(() => setIsProcessing(false), 2000); // Simulated processing
  };

  return (
    <main className="min-h-screen bg-[#F0F0F0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002B5C] to-[#29323C] text-white py-16 lg:py-24">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Compress PDF Files
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Reduce your PDF file size without losing quality. Perfect for
              sharing and uploading.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-20">
        <div className="container-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Upload Area */}
            <div
              className={`relative p-8 rounded-2xl bg-white shadow-lg mb-8 ${
                dragActive ? "ring-2 ring-[#009688]" : ""
              }`}
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
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#002B5C]/5 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-[#002B5C]"
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
                <h3 className="text-xl font-semibold text-[#002B5C] mb-2">
                  Drop PDF file here
                </h3>
                <p className="text-gray-600 mb-4">
                  or click to select file from your computer
                </p>
                <p className="text-sm text-gray-500">Supported format: PDF</p>
              </div>
            </div>

            {/* Compression Options */}
            {file && (
              <div className="space-y-6 mb-8">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
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
                      <div>
                        <p className="font-medium text-[#002B5C]">
                          {file.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setFile(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                      <svg
                        className="w-5 h-5 text-gray-500"
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

                  <div className="space-y-4">
                    <h4 className="font-medium text-[#002B5C]">
                      Compression Level
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {compressionOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setCompressionLevel(option.value)}
                          className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                            compressionLevel === option.value
                              ? "border-[#009688] bg-[#009688]/5"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <h5 className="font-medium text-[#002B5C] mb-1">
                            {option.label}
                          </h5>
                          <p className="text-xs text-gray-500">
                            {option.description}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Compress Button */}
                <button
                  onClick={handleCompress}
                  disabled={!file || isProcessing}
                  className="w-full py-4 bg-[#009688] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#00897b] transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Compressing...</span>
                    </>
                  ) : (
                    <>
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
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                      <span>Compress PDF</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-8 text-center">
              Why Use Our PDF Compressor?
            </h2>
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#002B5C]/5 flex items-center justify-center">
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
                        d={feature.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#002B5C] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const compressionOptions = [
  {
    label: "Low",
    value: "low",
    description: "Best quality, minimal size reduction",
  },
  {
    label: "Recommended",
    value: "recommended",
    description: "Balanced quality and size",
  },
  {
    label: "High",
    value: "high",
    description: "Maximum compression, smaller size",
  },
];

const features = [
  {
    title: "Smart Compression",
    description:
      "Advanced algorithms to reduce file size while maintaining quality.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Multiple Options",
    description:
      "Choose from different compression levels based on your needs.",
    icon: "M4 6h16M4 12h16M4 18h16",
  },
  {
    title: "Secure Process",
    description:
      "Your files are processed securely and deleted after compression.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "Fast Processing",
    description: "Compress your PDFs in seconds with our optimized system.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];
