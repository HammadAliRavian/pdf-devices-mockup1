"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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

    if (droppedFiles.length > 0) {
      setFiles((prev) => [...prev, ...droppedFiles]);
    }
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).filter(
      (file) => file.type === "application/pdf"
    );

    if (selectedFiles.length > 0) {
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleMerge = async () => {
    if (files.length < 2) return;

    setIsProcessing(true);
    // Handle PDF merge logic here
    console.log("Merging files:", files);
    setTimeout(() => setIsProcessing(false), 2000); // Simulated processing
  };

  return (
    <main className="min-h-screen bg-[#F0F0F0]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002B5C] to-[#29323C] text-white py-16 lg:py-24">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Merge PDF Files
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Combine multiple PDF files into a single document. Drag and drop
              your files to get started.
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
                multiple
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
                  Drop PDF files here
                </h3>
                <p className="text-gray-600 mb-4">
                  or click to select files from your computer
                </p>
                <p className="text-sm text-gray-500">Supported format: PDF</p>
              </div>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold text-[#002B5C]">
                  Selected Files ({files.length})
                </h3>
                <div className="space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
                    >
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
                        onClick={() => removeFile(index)}
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
                  ))}
                </div>
              </div>
            )}

            {/* Merge Button */}
            <button
              onClick={handleMerge}
              disabled={files.length < 2 || isProcessing}
              className="w-full py-4 bg-[#009688] text-white rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#00897b] transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  <span>Processing...</span>
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
                      d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                    />
                  </svg>
                  <span>Merge PDFs</span>
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container-wrapper">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-[#002B5C] mb-8 text-center">
              Why Use Our PDF Merger?
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

const features = [
  {
    title: "Easy to Use",
    description:
      "Simple drag and drop interface. No technical knowledge required.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Fast Processing",
    description: "Merge your PDFs in seconds with our optimized processing.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Secure Files",
    description: "Your files are processed securely and deleted after merging.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
  },
  {
    title: "High Quality",
    description: "Maintain the original quality of your PDF documents.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];
