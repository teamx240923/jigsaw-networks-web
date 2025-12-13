'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
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
              Your privacy is important to us. This Privacy Policy explains how Jigsaw Networks Pvt. Ltd.
              (&quot;Jigsaw Networks&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects, uses, shares, and protects information
              when you use any of our websites, software-as-a-service (SaaS) products, mobile applications,
              dashboards, or developer tools.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              This policy covers: all SaaS products, web platforms, APIs, SDKs, mobile apps, and related services.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1.1 Information You Provide</h3>
                <p className="text-gray-600 leading-relaxed mb-2">We may collect:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Account information (name, email, organisation, role)</li>
                  <li>Authentication information</li>
                  <li>Billing and payment details</li>
                  <li>Configuration settings or data you input into our platforms</li>
                  <li>Support requests, emails, or messages</li>
                  <li>Any files or data you upload while using our app or SaaS products</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1.2 Information Collected Automatically</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  When you access our websites, SaaS dashboards, APIs, or app, we may automatically collect:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Device details (browser, OS, IP address)</li>
                  <li>Log data (usage events, timestamps, errors, interactions)</li>
                  <li>Application performance data</li>
                  <li>Integration or SDK-generated metadata</li>
                  <li>App usage metrics (for mobile app users)</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-2">
                  We do not automatically collect personally identifiable information about your end-users
                  unless you explicitly transmit it to us.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">1.3 Information From Third Parties</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you choose to connect third-party services, we may receive limited data depending
                  on integration settings.
                </p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-2">We use data to:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Deliver and improve our SaaS products and mobile app</li>
              <li>Authenticate users and maintain account security</li>
              <li>Provide customer support</li>
              <li>Monitor performance, reliability, and service health</li>
              <li>Customise user experience</li>
              <li>Conduct analytics (aggregated or anonymized)</li>
              <li>Communicate updates, product changes, or billing messages</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4 font-semibold">
              We never sell your data.
            </p>
          </section>

          {/* 3. Legal Basis for Processing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Legal Basis for Processing (If Applicable)</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li><span className="font-semibold">Contractual requirement</span> — to provide our services</li>
              <li><span className="font-semibold">Legitimate interests</span> — to improve security and usability</li>
              <li><span className="font-semibold">Consent</span> — for optional communications</li>
            </ul>
          </section>

          {/* 4. Sharing of Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sharing of Information</h2>
            <p className="text-gray-600 leading-relaxed mb-2">We may share data with:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Cloud hosting providers</li>
              <li>Error/analytics tools</li>
              <li>Payment processors</li>
              <li>Authentication providers</li>
              <li>Contractors or partners helping deliver our service</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Each partner follows strict confidentiality and security obligations.
            </p>
            <p className="text-gray-600 leading-relaxed mt-2 font-semibold">
              We do not share information with advertisers.
            </p>
          </section>

          {/* 5. Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We implement industry-standard protection, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Encryption (in transit & at rest)</li>
              <li>Secure cloud infrastructure</li>
              <li>Role-based access control</li>
              <li>Continuous monitoring</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              However, no system is 100% secure.
            </p>
          </section>

          {/* 6. Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We retain information as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Provide services</li>
              <li>Comply with legal or accounting requirements</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              You may request deletion anytime.
            </p>
          </section>

          {/* 7. Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              Depending on your region, you may request:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Access</li>
              <li>Correction</li>
              <li>Deletion</li>
              <li>Export</li>
              <li>Restriction of processing</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Contact: <a href="mailto:help.jigsawnetworks@gmail.com" className="text-blue-600 hover:text-blue-700 underline">help.jigsawnetworks@gmail.com</a>
            </p>
          </section>

          {/* 8. Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Children&apos;s Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our services are intended for business users and not for children under 16.
            </p>
          </section>

          {/* 9. International Data Transfers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              We may process or store data in regions where our cloud infrastructure operates.
              All transfers follow applicable data protection laws.
            </p>
          </section>

          {/* 10. Updates to This Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Updates to This Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be posted with a new
              &quot;Last Updated&quot; date.
            </p>
          </section>

          {/* 11. Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Information</h2>
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
