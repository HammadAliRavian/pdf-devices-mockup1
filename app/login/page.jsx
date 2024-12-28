"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle login logic here
    console.log("Form submitted:", formData);
    setTimeout(() => setIsLoading(false), 1000); // Simulated API call
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm text-gray-300">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-[#FFF0A5] hover:text-[#FF9800] transition-colors duration-200"
                >
                  Sign up for free
                </Link>
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-4 rounded-md">
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
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="relative block w-full rounded-lg border-0 bg-white/5 p-3 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#FFF0A5] sm:text-sm sm:leading-6"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 bg-white/5 text-[#009688] focus:ring-[#FFF0A5]"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-[#FFF0A5] hover:text-[#FF9800] transition-colors duration-200"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative flex w-full justify-center rounded-lg bg-[#009688] px-3 py-3 text-sm font-semibold text-white hover:bg-[#00897b] focus:outline-none focus:ring-2 focus:ring-[#FFF0A5] transition-all duration-200 disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    "Sign in"
                  )}
                </button>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-[#29323C] px-2 text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFF0A5] transition-all duration-200"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
                  </svg>
                  Google
                </button>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white/5 px-3 py-2.5 text-sm font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFF0A5] transition-all duration-200"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
