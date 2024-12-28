"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#002B5C]/95 via-[#29323C]/95 to-[#002B5C]/95">
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:16px_16px]" />
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      <div className="container-wrapper relative">
        <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md space-y-8 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            {/* Header */}
            <div className="text-center">
              <Link
                href="/"
                className="text-2xl font-bold text-white hover:opacity-90 transition-opacity"
              >
                PDFTools
              </Link>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
                Create your account
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#FFF0A5] hover:text-[#FF9800] transition-colors duration-200"
                >
                  Sign in
                </Link>
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4 rounded-md">
                <div>
                  <label htmlFor="fullName" className="sr-only">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="relative block w-full rounded-lg border-0 bg-white/5 p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#FFF0A5] sm:text-sm sm:leading-6"
                    placeholder="Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="relative block w-full rounded-lg border-0 bg-white/5 p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#FFF0A5] sm:text-sm sm:leading-6"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="relative block w-full rounded-lg border-0 bg-white/5 p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#FFF0A5] sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="relative block w-full rounded-lg border-0 bg-white/5 p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#FFF0A5] sm:text-sm sm:leading-6"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-lg bg-[#009688] px-3 py-3 text-sm font-semibold text-white hover:bg-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#FFF0A5] transition-all duration-200"
                >
                  Create Account
                </button>
              </div>
            </form>

            {/* Terms */}
            <p className="mt-6 text-center text-sm text-gray-400">
              By signing up, you agree to our{" "}
              <Link
                href="/terms"
                className="font-medium text-[#FFF0A5] hover:text-[#FF9800] transition-colors duration-200"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="font-medium text-[#FFF0A5] hover:text-[#FF9800] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
