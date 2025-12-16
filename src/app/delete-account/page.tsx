'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';

export default function DeleteAccountPage() {
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
            Delete Account Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/90 text-lg"
          >
            Your right to control your data
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
              At Jigsaw Networks, we respect your privacy and your right to control your data.
              This Delete Account Policy explains how you can request deletion of your account
              and what happens when such a request is processed.
            </p>
          </section>

          {/* 1. How to Request Account Deletion */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. How to Request Account Deletion</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you wish to delete your account, please send an email to:
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-6 mb-4">
              <div className="flex items-center space-x-2 mb-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:help.jigsawnetworks@gmail.com?subject=Account%20Deletion%20Request"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold"
                >
                  help.jigsawnetworks@gmail.com
                </a>
              </div>
              <div className="space-y-1 text-gray-700">
                <p><span className="font-semibold">Subject:</span> Account Deletion Request</p>
                <p><span className="font-semibold">From:</span> Your registered email address</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-3">
              To help us verify your identity, please include the following details in your email:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Your full name</li>
              <li>Registered email address</li>
              <li>Associated phone number (if applicable)</li>
              <li>Reason for deletion (optional)</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We will initiate the deletion process only when the request comes from the email
              address linked to your account.
            </p>
          </section>

          {/* 2. What Happens After You Request Deletion */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Happens After You Request Deletion</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Once we receive your request:</p>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Verification:</h3>
                <p className="text-gray-600 leading-relaxed">
                  We will verify your identity to ensure the security of your data.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing Time:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Account deletion requests are typically processed within 7–14 business days.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Removal:</h3>
                <p className="text-gray-600 leading-relaxed mb-2">
                  Upon successful verification, we will permanently delete or anonymize your personal data, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>Profile information</li>
                  <li>Contact details</li>
                  <li>Stored preferences</li>
                  <li>App usage data (where applicable)</li>
                </ul>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mt-4">
              Some data may be retained for legal, regulatory, or security purposes as permitted
              by applicable laws (e.g., financial transaction logs, fraud prevention logs).
            </p>
          </section>

          {/* 3. Irreversible Action */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Irreversible Action</h2>

            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-4">
              <p className="text-red-900 font-semibold mb-2">
                ⚠️ Deleting your account is permanent and cannot be undone.
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-3">After deletion:</p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>You cannot retrieve any data or content associated with your account.</li>
              <li>You will lose access to all services linked to your profile.</li>
              <li>If you wish to use our services again, you will need to sign up with a new account.</li>
            </ul>
          </section>

          {/* 4. Data Retention Exceptions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Retention Exceptions</h2>
            <p className="text-gray-600 leading-relaxed mb-2">
              We may retain certain data as required by:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
              <li>Local or international laws</li>
              <li>Tax or accounting compliance</li>
              <li>Fraud and security monitoring</li>
              <li>Transaction-related record-keeping</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Such retained data will be stored securely and will not be used for marketing or
              product-related communication.
            </p>
          </section>

          {/* 5. Contact for Additional Support */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact for Additional Support</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              If you have questions about account deletion, data privacy, or any other concerns,
              please reach out to us:
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 rounded-xl p-6">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:help.jigsawnetworks@gmail.com"
                  className="text-blue-600 hover:text-blue-700 underline font-semibold"
                >
                  help.jigsawnetworks@gmail.com
                </a>
              </div>
              <p className="text-gray-600 mt-3">
                We are here to help and will respond promptly.
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
