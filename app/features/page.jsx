import Image from "next/image";

export default function Features() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#002B5C] to-[#29323C] text-white py-20">
        <div className="container-wrapper text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful PDF Features
          </h1>
          <p className="text-lg text-[#F0F0F0] max-w-2xl mx-auto">
            Everything you need to manage, edit, and secure your PDF documents
            in one place.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container-wrapper">
          <div className="grid md:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 text-[#009688] flex-shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={48}
                      height={48}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.capabilities.map((capability, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 text-[#009688] mr-2"
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
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#F0F0F0] py-20">
        <div className="container-wrapper text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover how PDF Devices can
            transform your document workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary bg-[#009688]">
              Start Free Trial
            </button>
            <button className="btn-primary bg-[#002B5C]">View Pricing</button>
          </div>
        </div>
      </section>
    </main>
  );
}

const featuresData = [
  {
    title: "Advanced PDF Editing",
    description:
      "Complete control over your PDF documents with our comprehensive editing tools.",
    icon: "/icons/edit.svg",
    capabilities: [
      "Edit text and images directly",
      "Add, remove, and rearrange pages",
      "Fill and sign forms",
      "Add comments and annotations",
    ],
  },
  {
    title: "Format Conversion",
    description:
      "Convert PDFs to and from various file formats while maintaining quality.",
    icon: "/icons/convert.svg",
    capabilities: [
      "Convert to Word, Excel, PowerPoint",
      "HTML and image conversion",
      "Batch processing",
      "OCR technology",
    ],
  },
  {
    title: "Document Security",
    description:
      "Protect your sensitive documents with enterprise-grade security features.",
    icon: "/icons/secure.svg",
    capabilities: [
      "Password protection",
      "Digital signatures",
      "Encryption",
      "Permission controls",
    ],
  },
  {
    title: "Cloud Integration",
    description:
      "Seamlessly integrate with your favorite cloud storage services.",
    icon: "/icons/cloud.svg",
    capabilities: [
      "Google Drive integration",
      "Dropbox sync",
      "OneDrive connection",
      "Automatic backups",
    ],
  },
];
