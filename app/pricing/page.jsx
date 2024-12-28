"use client";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleToggle = () => setIsAnnual(!isAnnual);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#002B5C] to-[#29323C] text-white py-20">
        <div className="container-wrapper text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-[#F0F0F0] max-w-2xl mx-auto">
            Choose the perfect plan for your PDF management needs
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12">
        <div className="container-wrapper">
          <div className="flex justify-center items-center space-x-4">
            <span
              className={`text-lg ${
                !isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={handleToggle}
              className="relative w-16 h-8 rounded-full bg-[#002B5C] transition-colors duration-300"
              aria-label="Toggle Pricing"
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                  isAnnual ? "left-9" : "left-1"
                }`}
              />
            </button>
            <span
              className={`text-lg ${
                isAnnual ? "text-gray-900" : "text-gray-500"
              }`}
            >
              Annual <span className="text-[#009688]">Save 20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-12">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 ${
                  plan.popular
                    ? "bg-[#002B5C] text-white shadow-xl scale-105"
                    : "bg-white text-gray-900 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <span className="bg-[#FF9800] text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mt-4">{plan.name}</h3>
                <p className="mt-2 text-sm opacity-80">{plan.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-sm opacity-80">
                    /{isAnnual ? "year" : "month"}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg
                        className={`w-5 h-5 mr-3 ${
                          plan.popular ? "text-[#FFF0A5]" : "text-[#009688]"
                        }`}
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
                <button
                  className={`w-full mt-8 py-3 px-6 rounded-lg transition-colors duration-300 ${
                    plan.popular
                      ? "bg-[#FFF0A5] text-[#002B5C] hover:bg-opacity-90"
                      : "bg-[#002B5C] text-white hover:bg-opacity-90"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F0F0F0]">
        <div className="container-wrapper">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const pricingPlans = [
  {
    name: "Basic",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 9.99,
    annualPrice: 99,
    features: [
      "Basic PDF editing",
      "Convert up to 5 files/day",
      "Cloud storage 2GB",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for professionals and small teams",
    monthlyPrice: 19.99,
    annualPrice: 199,
    features: [
      "Advanced PDF editing",
      "Unlimited conversions",
      "Cloud storage 20GB",
      "Priority support",
      "Digital signatures",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with complex needs",
    monthlyPrice: 49.99,
    annualPrice: 499,
    features: [
      "All Professional features",
      "Unlimited cloud storage",
      "24/7 support",
      "API access",
      "Custom integration",
      "Advanced security",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a 14-day free trial on all plans, allowing you to test all features before committing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
  },
  {
    question: "How secure are my documents?",
    answer:
      "We use bank-level encryption and secure cloud storage to ensure your documents are always protected.",
  },
];
