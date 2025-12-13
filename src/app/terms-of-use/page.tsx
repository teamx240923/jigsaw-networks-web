'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-white/90 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Terms of Use
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 text-lg"
          >
            Last Updated: 01-12-2025
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8"
        >
          {/* Introduction */}
          <section>
            <p className="text-gray-600 leading-relaxed">
              These Terms of Use (&quot;Terms&quot;) govern your access to and use of all websites,
              applications, SaaS platforms, APIs, SDKs, and tools provided by Jigsaw Networks Pvt. Ltd.
              (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;).
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              This covers: all SaaS products, mobile apps, dashboards, APIs, and any future services.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4 font-semibold">
              By using our services, you agree to these Terms.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              If you access or use our platforms or mobile app, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>These Terms</li>
              <li>Our Privacy Policy</li>
              <li>Any additional usage guidelines</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              If you do not agree, discontinue use immediately.
            </p>
          </section>

          {/* 2. Use of Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our SaaS products and app are designed to help businesses automate workflows,
              manage operations, and gain insights.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">You agree to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Use our services lawfully</li>
              <li>Not attempt unauthorized access or reverse engineering</li>
              <li>Not upload malicious or harmful content</li>
              <li>Comply with applicable data protection laws when submitting data</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You are responsible for the security of your login credentials.
            </p>
          </section>

          {/* 3. User Data */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Data</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              You retain full ownership of all data you upload or transmit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-2">
              You grant Jigsaw Networks a limited license to process such data solely for:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Providing the service</li>
              <li>Maintaining performance</li>
              <li>Improving functionality</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We claim no ownership over your intellectual property.
            </p>
          </section>

          {/* 4. Service Availability & Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Availability & Modifications</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We aim to provide uninterrupted access but do not guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Zero downtime</li>
              <li>Error-free performance</li>
              <li>Availability of all features at all times</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We may update or discontinue features as needed.
            </p>
          </section>

          {/* 5. Payments & Subscriptions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payments & Subscriptions (If Applicable)</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              If you subscribe to paid services:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Fees must be paid according to your plan</li>
              <li>Non-payment may result in suspension</li>
              <li>Fees are generally non-refundable unless legally required</li>
            </ul>
          </section>

          {/* 6. Termination */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Termination</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We may suspend or terminate access if:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>You violate these Terms</li>
              <li>There is misuse or suspicious activity</li>
              <li>Required by law</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You may terminate your account anytime by contacting support.
            </p>
          </section>

          {/* 7. Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-2">All:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Software</li>
              <li>Designs</li>
              <li>Logos</li>
              <li>Branding</li>
              <li>Documentation</li>
              <li>Content on our websites or apps</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              are owned by Jigsaw Networks.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2">
              You may not copy, duplicate, or redistribute our intellectual property.
            </p>
          </section>

          {/* 8. Beta or Experimental Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Beta or Experimental Features</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              If you access beta features:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>They are provided &quot;as-is&quot;</li>
              <li>They may change or break</li>
              <li>They are not covered under service guarantees</li>
            </ul>
          </section>

          {/* 9. Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              To the maximum extent allowed by law:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>Our total liability is limited to the fees you paid in the last 12 months</li>
            </ul>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed">
              These Terms are governed by the laws of India, unless otherwise required by your jurisdiction.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              For support or legal inquiries:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>
                📧 <a href="mailto:help.jigsawnetworks@gmail.com" className="text-blue-600 hover:text-blue-700 underline">help.jigsawnetworks@gmail.com</a>
              </p>
              <p>
                🌐 <a href="https://jigsawnetworks.com" className="text-blue-600 hover:text-blue-700 underline">jigsawnetworks.com</a>
              </p>
            </div>
          </section>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </motion.div>
      </div>

      {/* Footer decoration */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />
    </main>
  );
}
